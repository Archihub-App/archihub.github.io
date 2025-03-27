---
title: 'Guía para desarrollo de plugins'
description: 'Guía para desarrollo de plugins en ArchiHub'
---

# Guía para desarrollo de plugins

Nuestro compromiso con el desarrollo de ArchiHub como proyecto de código abierto va más allá de la creación de la herramienta con licencia de uso libre. También queremos fomentar las contribuciones de los usuarios de ArchiHub, permitiendo que cualquier persona pueda campliar sus funcionalidades con el desarrollo de plugins. En esta sección, te guiaremos a través del proceso de creación de un plugin para ArchiHub.

## ¿Qué es un plugin?

Un plugin es un módulo adicional que se puede integrar en ArchiHub para ampliar sus funcionalidades. Los plugins pueden ser utilizados para agregar nuevas características o incluso integrar ArchiHub con otras herramientas y servicios.

Como ejemplo, tenemos el plugin para [transcripción de audio y video](../transcribe) que permite a los usuarios transcribir automáticamente el contenido de sus archivos multimedia usando el modelo Whisper de OpenAI.

![Visualización de transcripciones en Archihub](/archihub.github.io/imagenes/download_transcription.gif)

En esta guía vamos a desarrollar un plugin que permite la integración de ArchiHub con la API de OpenAI. Este plugin permitirá a los usuarios de ArchiHub modificar títulos de recursos usando inteligencia artificial.

## Estructura de un plugin

Como punto de partida, usaremos la plantilla de plugin que se encuentra en el repositorio de ArchiHub. Esta plantilla contiene la estructura básica de un plugin y algunos ejemplos de cómo se pueden implementar diferentes funcionalidades. Para acceder a la plantilla, puedes clonar el [repositorio del `backend`](https://github.com/Archihub-App/archihub-backend) y buscar el archivo `Plugin.py` en la carpeta `app/utils/templates/`.

Los plugins en ArchiHub siempre contienen las siguientes partes:
- **Información estructurada del plugin**: contiene la información básica del plugin. Esta se define en formato JSON y se encuentra al final de la plantilla del plugin.
- **Endpoints**: contiene los endpoints que se exponen para interactuar con el plugin o la herramienta en general. Estos se definen en la función `add_routes` disponible en la pl antilla del plugin.
- **Tareas**: contiene las tareas que se ejecutan al procesar archivos. Estas tareas se definen en la función `bulk` disponible en la plantilla del plugin.

## Creación de un plugin

Como primer paso, debemos definir una funcionalidad y un nombre para el plugin. En este caso, vamos a crear un plugin que permite modificar títulos de recursos usando la API de OpenAI. El nombre del plugin será `titleModifier`. A continuación, se describen los pasos para crear el plugin:

1. **Crea la carpeta del plugin**: crea una carpeta con el nombre del plugin en la carpeta `plugins` del aplicativo. En este caso, la carpeta se llamará `titleModifier`.
2. **Crea el archivo del plugin**: dentro de la carpeta de los plugins siempre se debe crear un archivo `__init__.py`. En este caso, crea el archivo `__init__.py` dentro de la carpeta `titleModifier` como copia de la plantilla del plugin.
3. **Define el logo del plugin**: el logo del plugin se debe guardar en la carpeta `static` dentro de la carpeta del plugin con el nombre `image.png`. En este caso, guarda el logo del plugin en la carpeta `titleModifier/static/image.png`.
4. **Define las dependencias del plugin**: si el plugin requiere de dependencias adicionales, estas se deben definir en el archivo `requirements.txt` dentro de la carpeta del plugin. En este caso, el plugin requiere de la librería `openai`, por lo que se debe crear el archivo `requirements.txt` dentro de la carpeta `titleModifier` con el siguiente contenido:

```
openai

```

Es importante que siempre se deje un salto de línea al final del archivo `requirements.txt` para evitar errores en la instalación de las dependencias con docker.

5. **Define las variables de entorno del plugin**: si el plugin requiere de variables de entorno adicionales, estas se deben definir en un archivo `.env` en la carpeta del plugin. En este caso, el plugin requiere de la variable `OPENAI_API_KEY` con la llave generada en la [cuenta de OpenAI](https://platform.openai.com/settings/organization/api-keys). Para ello, abre el archivo `.env` en cualquier editor de texto y asigna la llave generada.

6. **Modifica el archivo `__init__.py`**: en el archivo `__init__.py` se debe escribir el código del plugin. Para iniciar, se modifica la información del plugin. Esta información se encuentra al final del archivo `__init__.py` y se debe modificar con la siguiente información:

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

Luego deberás definir los endpoints y las tareas del plugin. Para ello, se debe modificar la función `add_routes` y la función `bulk` respectivamente. En la función `add_routes`, se deben definir los endpoints que el plugin expondrá para su uso. Por defecto, ya se encuentra configurado el endpoint `bulk` para el llamado de la función `bulk`. En este caso, se debe modificar la función `add_routes` para que quede de la siguiente manera:

```python
def add_routes(self):
    @self.route('/bulk', methods=['POST'])
    @jwt_required()
    def process_files():
        current_user = get_jwt_identity()
        body = request.get_json()

        if 'post_type' not in body:
            return {'msg': 'No se especificó el tipo de contenido'}, 400
        
        if not self.has_role('admin', current_user) and not self.has_role('processing', current_user):
            return {'msg': 'No tiene permisos suficientes'}, 401

        task = self.bulk.delay(body, current_user)
        self.add_task_to_user(task.id, 'titleModifier.bulk', current_user, 'msg')
        
        return {'msg': 'Se agregó la tarea a la fila de procesamientos'}, 201
```

Nótese que en este caso se está validando que el usuario tenga permisos para ejecutar el plugin. Esto es importante ya que el plugin va a modificar títulos de recursos y no todos los usuarios deben tener acceso a esta funcionalidad. En este caso, solo los usuarios con rol `admin` o `processing` podrán ejecutar el plugin.

Además, el segundo parámetro de la función `self.add_task_to_user` es el nombre del plugin y la función que se va a ejecutar. Esto es simplemente para identificar la tarea en la base de datos y no afecta el funcionamiento del plugin. Con esto, la función `bulk` queda de la siguiente manera:

```python
@shared_task(ignore_result=False, name='titleModifier.bulk', queue='low')
    def bulk(body, user):
        from openai import OpenAI
        openai_client = OpenAI(api_key=OPENAI_API_KEY)

        def modify_title(client, original_title, model, instructions, input):
            response = client.responses.create(
            model = model,
            instructions = instructions,
            input = input + original_title
            )
            return response.output_text
        
        filters = {
            'post_type': body['post_type']
        }

        if 'parent' in body:
            if body['parent'] and len(body['resources']) == 0:
                filters = {'$or': [{'parents.id': body['parent'], 'post_type': body['post_type']}, {'_id': ObjectId(body['parent'])}], **filters}
        
        if 'resources' in body:
            if body['resources']:
                if len(body['resources']) > 0:
                    filters = {'_id': {'$in': [ObjectId(resource) for resource in body['resources']]}, **filters}
            
        # obtenemos los recursos
        resources = list(mongodb.get_all_records('resources', filters, fields={'_id': 1, 'metadata': 1}))
        if len(resources) == 0:
            return 'No se encontraron recursos para procesar'
        
        for resource in resources:
            original_title = resource['metadata']['firstLevel']['title']
            new_title = modify_title(openai_client, original_title, body['model'], body['instructions'], body['input'])
            update = {
                'metadata': {
                    'firstLevel': {
                        'title': new_title
                    }
                }
            }
            update_data = RecordUpdate(**update)
            mongodb.update_record('resources', {'_id': resource['_id']}, update_data)

        instance = ExtendedPluginClass('titleModifier','', **plugin_info)
        instance.clear_cache()

        return 'ok'
```

Dentro de la función `bulk` se define el código que se va a ejecutar al procesar los registros. En este caso, se obtiene el título original del recurso y se envía a la API de OpenAI para que lo modifique. Luego, se actualiza el título del recurso en la base de datos.

Como funciones propias de ArchiHub, se encuentran las funciones `mongodb.get_all_records` y `mongodb.update_record`. La primera función obtiene los registros de la base de datos y la segunda actualiza el registro en la base de datos. Además, al final de la función `bulk` se llama a la función `clear_cache` del plugin para que se actualicen los cambios en la interfaz de ArchiHub. Esto es importante ya que si no se llama a esta función, los cambios no se verán reflejados en la interfaz de ArchiHub a menos de que se regenere la cache desde los ajustes del aplicativo.

### Fila de procesamiento

El plugin se ejecuta en una fila de procesamiento. Esto significa que cuando se envía una tarea al plugin, esta se agrega a una fila y se procesa en segundo plano. Esto es útil para distribuir las tareas a diferentes workers y evitar problemas de rendimiento si se ejecuta todo en la misma máquina y fila de procesamiento. En este caso, el plugin usa la fila `low` para procesar las tareas. Para más información de las filas de procesamiento, revisa la [documentación de ArchiHub](https://archihub-app.github.io/archihub.github.io/es/nodos/).

### Campos de interacción con el frontend

Para las interacciones desde el frontend, se definen los campos desde la variable `plugin_info`. Esta variable contiene la información del plugin y se utiliza para mostrar la información en la interfaz de ArchiHub. En este caso, se están usando diferentes tipos de campo:
- **instructions**: se utiliza para mostrar un texto de instrucciones al usuario. Este campo no es editable y solo se muestra como información.
- **select**: se utiliza para mostrar un campo de selección al usuario. En este caso, se está usando para seleccionar el modelo de OpenAI que se va a usar para modificar el título.
- **text**: se utiliza para mostrar un campo de texto al usuario. En este caso, se está usando para mostrar el campo de instrucciones y el campo de comando para GPT.

***Nota: en caso de requerir otros tipos de campos, no dudes en abrir un issue en el repositorio donde se encuentra el frontend de ArchiHub. Con gusto te ayudaremos a implementarlo. Recuerda que ArchiHub es un proyecto de código abierto y estamos abiertos a recibir contribuciones de la comunidad.***

## Repositorio del plugin de ejemplo

Para facilitar el entendimiento de la guía, hemos creado un repositorio donde podrás encontrar el [plugin desarrollado](https://github.com/Archihub-App/titleModifier). Para instalarlo, sigue las instrucciones en la [documentación oficial de ArchiHub](https://archihub-app.github.io/archihub.github.io/es/install_plugin/).
