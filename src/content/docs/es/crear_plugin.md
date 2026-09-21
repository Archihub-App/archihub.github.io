---
title: 'Guía para desarrollo de plugins'
description: 'Guía para desarrollo de plugins en ArchiHUB'
---

# Guía para desarrollo de plugins

Nuestro compromiso con el desarrollo de ArchiHUB como proyecto de código abierto va más allá de la creación de la herramienta con licencia de uso libre. También queremos fomentar las contribuciones de los usuarios de ArchiHUB, permitiendo que cualquier persona pueda campliar sus funcionalidades con el desarrollo de plugins. En esta sección, te guiaremos a través del proceso de creación de un plugin para ArchiHUB.

## ¿Qué es un plugin?

Un plugin es un módulo adicional que se puede integrar en ArchiHUB para ampliar sus funcionalidades. Los plugins pueden ser utilizados para agregar nuevas características o incluso integrar ArchiHUB con otras herramientas y servicios.

Como ejemplo, tenemos el plugin para [transcripción de audio y video](/archihub.github.io/es/transcribe) que permite a los usuarios transcribir automáticamente el contenido de sus archivos multimedia usando el modelo Whisper de OpenAI.

![Visualización de transcripciones en ArchiHUB](/archihub.github.io/imagenes/download_transcription.gif)

En esta guía vamos a desarrollar un plugin que permite la integración de ArchiHUB con la API de OpenAI. Este plugin permitirá a los usuarios de ArchiHUB modificar títulos de recursos usando inteligencia artificial.

## Estructura de un plugin

Un plugin es un paquete de Python dentro de la carpeta `archihub/plugins/` del [repositorio del `backend`](https://github.com/ArchiHUB-App/archihub-backend). Como punto de partida puedes tomar los plugins que vienen con el backend: `liquidText` e `inventoryMaker` son buenos ejemplos de tareas masivas y de descarga de archivos.

Los plugins en ArchiHUB siempre contienen las siguientes partes:
- **Información estructurada del plugin**: un diccionario `plugin_info` con la información básica del plugin y los campos que el frontend muestra para configurarlo.
- **La clase del plugin**: una subclase de `ArchiPlugin` que define sus endpoints en el método `add_routes`.
- **Tareas**: funciones de Celery (`@shared_task`) que se ejecutan en segundo plano en los nodos de procesamiento.
- **La función `build()`**: devuelve una instancia del plugin. ArchiHUB solo carga los plugins que definen `plugin_info` y `build()` en su archivo `__init__.py`.

## Creación de un plugin

Como primer paso, debemos definir una funcionalidad y un nombre para el plugin. En este caso, vamos a crear un plugin que permite modificar títulos de recursos usando la API de OpenAI. El nombre del plugin será `titleModifier`. A continuación, se describen los pasos para crear el plugin:

1. **Crea la carpeta del plugin**: crea una carpeta con el nombre del plugin en la carpeta `archihub/plugins` del backend. En este caso, la carpeta se llamará `titleModifier`.
2. **Crea el archivo del plugin**: dentro de la carpeta de los plugins siempre se debe crear un archivo `__init__.py`. En este caso, crea el archivo `__init__.py` dentro de la carpeta `titleModifier`.
3. **Define el logo del plugin**: el logo del plugin se debe guardar en la carpeta `static` dentro de la carpeta del plugin con el nombre `image.png`. En este caso, guarda el logo del plugin en la carpeta `titleModifier/static/image.png`.
4. **Define las dependencias del plugin**: si el plugin requiere de dependencias adicionales, estas se deben definir en el archivo `requirements.txt` dentro de la carpeta del plugin. En este caso, el plugin requiere de la librería `openai`, por lo que se debe crear el archivo `requirements.txt` dentro de la carpeta `titleModifier` con el siguiente contenido:

```
openai

```

Ya no es necesario dejar un salto de línea al final del archivo: el instalador lee el archivo línea por línea y admite comentarios (`#`).

Si una dependencia se instala desde un repositorio git, añade `#egg=<nombre-de-la-distribución>` al final de la URL. Sin ese dato el nombre del paquete no se puede deducir de la URL, y la declaración no se puede verificar contra lo que el código importa:

```
git+https://github.com/openai/whisper.git#egg=openai-whisper
```

4.1. **Define los paquetes del sistema**: si el plugin necesita un programa del sistema (por ejemplo `ffmpeg` o `tesseract-ocr`), decláralo en un archivo `packages.txt` dentro de la carpeta del plugin, un nombre de paquete apt por línea. Estos paquetes se instalan al construir la imagen.

```
# Convierte audio y video antes de transcribir.
ffmpeg
```

**Esto no es opcional ni decorativo.** Antes no existía este archivo y los autores escribían el requisito como comentario dentro de `requirements.txt`, donde el proceso de construcción lo borraba. El resultado era un plugin que se instalaba sin errores y fallaba en su primera tarea con un `FileNotFoundError` de un binario que nadie había instalado.

Cada línea debe ser un nombre de paquete (`^[a-z0-9][a-z0-9+.-]*$`). Cualquier otra cosa se rechaza al construir la imagen, porque el contenido de esta carpeta es de terceros y se entrega a un comando que se ejecuta como root.

5. **Define las variables de entorno del plugin**: si el plugin requiere de variables de entorno adicionales, estas se deben definir en un archivo `.env` en la carpeta del plugin. En este caso, el plugin requiere de la variable `OPENAI_API_KEY` con la llave generada en la [cuenta de OpenAI](https://platform.openai.com/settings/organization/api-keys):

```
OPENAI_API_KEY=tu-llave
```

El archivo `.env` contiene credenciales, así que no se sube al repositorio ni se incluye en la imagen. Sube en su lugar un archivo `.env.example` con las mismas variables sin valores: es lo que lee quien instala el plugin.

El plugin lee sus variables con el módulo `config` del framework, nunca con `load_dotenv()`, que modificaría el entorno de todo el proceso y afectaría a los demás plugins:

```python
from archihub.plugins.framework import config

api_key = config.get('titleModifier', 'OPENAI_API_KEY', required=True)
```

Con `required=True`, si la variable falta se produce un error que nombra el plugin y la variable, en lugar de una cadena vacía que fallaría más adelante.

6. **Escribe la información del plugin**: en el archivo `__init__.py` se escribe el código del plugin. Para iniciar, se define la información del plugin en el diccionario `plugin_info`:

```python
plugin_info = {
    'name': 'Plugin para modificar títulos de recursos usando la API de OpenAI',
    'description': 'Plugin para modificar títulos de recursos usando la API de OpenAI',
    'version': '0.1',
    'author': 'BITSOL SAS',
    'type': ['bulk'],
    'settings': {
        'settings_bulk': [
            {
                'type':  'instructions',
                'title': 'Instrucciones',
                'text': 'Este plugin permite modificar títulos de recursos usando la API de OpenAI. Para usarlo, selecciona los archivos que quieres modificar y configura las opciones del plugin.',
            },
            {
                'type': 'select',
                'label': 'Modelo',
                'id': 'model',
                'default': 'gpt-3.5-turbo',
                'options': [
                    {'value': 'gpt-3.5-turbo', 'label': 'GPT 3.5 Turbo'},
                    {'value': 'gpt-4o', 'label': 'GPT 4o'},
                    {'value': 'gpt-4o-mini', 'label': 'GPT 4o Mini'},
                    {'value': 'gpt-4o-turbo', 'label': 'GPT 4o Turbo'}
                ],
                'required': False,
            },
            {
                'type': 'text',
                'label': 'Instrucciones',
                'id': 'instructions',
                'default': 'Tengo una herramienta de gestión documental con varios recursos y quiero que me ayudes a reescribir el título de esos recursos para que sean más atractivos y llamen la atención de los usuarios usando pocas palabras. Además, debe estar en español.',
                'required': True
            },
            {
                'type': 'text',
                'label': 'Comando para GPT',
                'id': 'input',
                'default': 'Por favor, reescribe el siguiente título de un recurso:',
                'required': True
            }
        ]
    }
}
```

7. **Escribe la clase del plugin y sus endpoints**: los endpoints se declaran en el método `add_routes`, sobre `self.router`. Todas las rutas quedan bajo el nombre del plugin, así que la ruta `/bulk` se publica como `/titleModifier/bulk`, que es la que llama la pantalla de procesamientos del frontend:

```python
import logging

from celery import shared_task
from fastapi import Body, Depends

from archihub.core.responses import json_response
from archihub.core.security.jwt import CurrentUser
from archihub.plugins.framework import config
from archihub.plugins.framework import data as plugin_data
from archihub.plugins.framework.base import (
    ArchiPlugin,
    BrokerUnavailable,
    object_ids,
    queue,
    require_roles,
)

logger = logging.getLogger(__name__)

SLUG = 'titleModifier'
TASK_BULK = 'titleModifier.bulk'


class TitleModifier(ArchiPlugin):
    def add_routes(self):
        plugin = self

        @self.router.post('/bulk', status_code=201)
        def bulk(
            body: dict = Body(...),
            current_user: CurrentUser = Depends(require_roles('admin', 'processing')),
        ):
            if not body.get('post_type'):
                return json_response({'msg': 'No se especificó el tipo de contenido'}, 400)

            error = plugin.validate_settings_fields(body, 'bulk')
            if error:
                return json_response({'msg': error}, 400)

            try:
                queue(bulk_task, TASK_BULK, current_user.username, 'msg', body, current_user.username)
            except BrokerUnavailable:
                return json_response({'msg': 'La fila de procesamientos no está disponible'}, 503)

            return json_response({'msg': 'Se agregó la tarea a la fila de procesamientos'}, 201)
```

Nótese cómo se validan los permisos: `Depends(require_roles('admin', 'processing'))` se resuelve antes de ejecutar el endpoint, así que solo los usuarios con rol `admin` o `processing` llegan a él; los demás reciben un error 403 sin que el endpoint se ejecute. Esto es importante ya que el plugin va a modificar títulos de recursos y no todos los usuarios deben tener acceso a esta funcionalidad. Los permisos de un plugin se declaran siempre así, nunca con una comprobación dentro del endpoint.

`validate_settings_fields` comprueba que la petición traiga los campos marcados como obligatorios en `settings_bulk`. La función `queue` envía la tarea a la fila de procesamientos y la registra en el perfil del usuario; su segundo parámetro es el nombre de la tarea, que la identifica en la base de datos. Si la fila no está disponible, `queue` lanza `BrokerUnavailable` y el endpoint responde 503 en lugar de confirmar una tarea que nunca se ejecutará.

8. **Escribe las tareas**: las tareas son funciones de Celery definidas a nivel de módulo:

```python
@shared_task(ignore_result=False, name=TASK_BULK, queue='low')
def bulk_task(body, user):
    from openai import OpenAI

    from archihub.infra.mongo import get_mongo

    client = OpenAI(api_key=config.get(SLUG, 'OPENAI_API_KEY', required=True))

    filters = {'post_type': body['post_type']}
    if body.get('resources'):
        filters['_id'] = {'$in': object_ids(body['resources'], 'resources')}
    elif body.get('parent'):
        parent = object_ids([body['parent']], 'parent')[0]
        filters['$or'] = [{'parents.id': body['parent']}, {'_id': parent}]

    resources = list(get_mongo().get_all_records(
        'resources', filters, fields={'metadata': 1, 'post_type': 1}
    ))
    if not resources:
        return 'No se encontraron recursos para procesar'

    updated = failed = 0
    for resource in resources:
        metadata = resource.get('metadata') or {}
        title = (metadata.get('firstLevel') or {}).get('title')
        if not title:
            continue
        try:
            response = client.responses.create(
                model=body['model'],
                instructions=body['instructions'],
                input=f"{body['input']} {title}",
            )
            metadata['firstLevel']['title'] = response.output_text.strip()
            _, status = plugin_data.update_resource(
                str(resource['_id']),
                {'post_type': resource['post_type'], 'metadata': metadata},
            )
        except Exception:
            logger.exception('No se pudo modificar el título de %s', resource['_id'])
            failed += 1
            continue
        if status == 200:
            updated += 1
        else:
            failed += 1

    return f'{updated} títulos modificados, {failed} con errores'
```

Dentro de la tarea se obtiene el título original de cada recurso, se envía a la API de OpenAI para que lo modifique y se guarda el resultado. Algunas pautas que sigue este ejemplo:

- **Las importaciones pesadas van dentro de la tarea** (`openai` en este caso). El archivo `__init__.py` también se importa en el proceso del backend, que no ejecuta tareas, y no debe cargar allí bibliotecas que no usa.
- **`update_resource`** guarda los cambios validándolos contra el formulario del tipo de contenido, igual que una edición hecha por un usuario, y actualiza el índice de búsqueda. Como la actualización reemplaza el campo `metadata` completo, se envían todos los metadatos del recurso, no solo el título.
- **Un recurso con error no detiene la tarea**: se registra, se cuenta y se sigue con el siguiente. El resultado indica cuántos se modificaron y cuántos fallaron.
- **`object_ids`** convierte los identificadores recibidos y rechaza los que no son válidos con un mensaje claro.
- **No es necesario limpiar la caché**: toda escritura en la base de datos invalida automáticamente las consultas en caché que dependen de ella.

9. **Define la función `build()`**: al final del archivo, después de `plugin_info`, define la función que ArchiHUB usa para cargar el plugin:

```python
def build():
    return TitleModifier(SLUG, plugin_info, module_file=__file__)
```

### Fila de procesamiento

El plugin se ejecuta en una fila de procesamiento. Esto significa que cuando se envía una tarea al plugin, esta se agrega a una fila y se procesa en segundo plano. Esto es útil para distribuir las tareas a diferentes workers y evitar problemas de rendimiento si se ejecuta todo en la misma máquina y fila de procesamiento. En este caso, el plugin usa la fila `low` para procesar las tareas. El nodo de procesamiento por defecto no atiende las filas `high`, `medium` y `low`: para que la tarea se ejecute debe estar activo un nodo para esas filas, como el servicio `celery_worker_queues` de la [configuración avanzada](/archihub.github.io/es/config_local). Si la tarea es liviana, puedes omitir el parámetro `queue` y se ejecutará en la fila por defecto. Para más información de las filas de procesamiento, revisa la [documentación de ArchiHUB](/archihub.github.io/es/nodos).

### Campos de interacción con el frontend

Para las interacciones desde el frontend, se definen los campos desde la variable `plugin_info`. Esta variable contiene la información del plugin y se utiliza para mostrar la información en la interfaz de ArchiHUB. En este caso, se están usando diferentes tipos de campo:
- **instructions**: se utiliza para mostrar un texto de instrucciones al usuario. Este campo no es editable y solo se muestra como información.
- **select**: se utiliza para mostrar un campo de selección al usuario. En este caso, se está usando para seleccionar el modelo de OpenAI que se va a usar para modificar el título.
- **text**: se utiliza para mostrar un campo de texto al usuario. En este caso, se está usando para mostrar el campo de instrucciones y el campo de comando para GPT.

***Nota: en caso de requerir otros tipos de campos, no dudes en abrir un issue en el repositorio donde se encuentra el frontend de ArchiHUB. Con gusto te ayudaremos a implementarlo. Recuerda que ArchiHUB es un proyecto de código abierto y estamos abiertos a recibir contribuciones de la comunidad.***

## Repositorio del plugin de ejemplo

Para facilitar el entendimiento de la guía, hemos creado un repositorio donde podrás encontrar el [plugin desarrollado](https://github.com/ArchiHUB-App/titleModifier). Ten en cuenta que ese repositorio contiene la versión del plugin para ArchiHUB 1.x; el código de esta guía es el de la versión 2.0. Para instalar un plugin, sigue las instrucciones de [instalación de plugins](/archihub.github.io/es/install_plugin).
