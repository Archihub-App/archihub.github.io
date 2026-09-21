---
title: 'Configuración avanzada de la instalación local'
description: ''
---

Una vez que tenemos el aplicativo instalado y funcionando en nuestra máquina, podemos empezar a configurar nuestra instalación para adaptarla a nuestras necesidades específicas. Aquí te mostramos cómo realizar algunas configuraciones importantes:

## Cambiar la Ruta de los Archivos y la Base de Datos

Por defecto, como ya lo vimos nuestra instalación local tiene configurada la estructura de la siguiente forma:

 ```
├── local-machine
│   ├── archihub
│   │   ├── frontend
│   │   ├── backend
│   ├── webfiles
│   ├── userfiles
│   ├── temporal
│   ├── original
│   ├── data
│   │   ├── mongodb
│   │   ├── elastic
 ```
En ArchiHUB, las carpetas __webfiles__, __userfiles__, __temporal__, __original__, y __data__ son esenciales para el funcionamiento del sistema ya que contienen todos los documentos y datos generados por la aplicación. Sin embargo, es posible configurar estas carpetas para que se ubiquen en rutas diferentes, ya sea en una unidad de disco externo o en una unidad de red, permitiendo una mayor flexibilidad en la organización de tus archivos. Veamos como hacerlo.

En nuestro archivo `.env` que configuramos al inicio de la guía vamos a modificar las rutas. Estas se encuentran configuradas en las variables de entorno:

```
USERFILES_PATH='../userfiles'
WEBFILE_PATH='../webfiles'
UPLOAD_PATH='../original'
TEMPORAL_PATH='../temporal'
DATA_PATH='../data'
```

Desde aquí, puedes cambiar las rutas de las carpetas esenciales. En el ejemplo, las rutas son relativas, pero puedes usar rutas absolutas que lleven directamente a tu contenido. Es importante recordar que para el correcto funcionamiento del aplicativo, estas carpetas no deben estar cambiando ni su contenido de manera frecuente.

Por ejemplo, para ubicar todas las carpetas en un disco externo, modifica esas mismas variables en el archivo `.env`:

```
USERFILES_PATH='/mnt/disco_externo/userfiles'
WEBFILE_PATH='/mnt/disco_externo/webfiles'
UPLOAD_PATH='/mnt/disco_externo/original'
TEMPORAL_PATH='/mnt/disco_externo/temporal'
DATA_PATH='/mnt/disco_externo/data'
```

Si ya tienes información cargada, detén el aplicativo con `docker compose down` y mueve el contenido de las carpetas actuales a las nuevas rutas antes de volver a iniciarlo.

### Consideraciones Importantes

- __Consistencia de las Rutas__: Asegúrate de que las rutas especificadas estén siempre disponibles y accesibles por el sistema donde se ejecuta ArchiHUB.
- __Permisos de Acceso__: Verifica que ArchiHUB tenga los permisos necesarios para leer y escribir en las nuevas rutas.
- __Evitar Cambios Frecuentes__: Cambiar las rutas y el contenido de estas carpetas de manera frecuente puede causar errores en el funcionamiento del aplicativo. Asegúrate de definir estas rutas de manera definitiva durante la configuración inicial.
- __Reinicio del Aplicativo__: Después de realizar estos cambios, es necesario reiniciar ArchiHUB para que los nuevos ajustes tengan efecto. Ejecuta `docker compose up -d` desde la carpeta `local-machine/archihub`: los contenedores se vuelven a crear con las nuevas rutas.

## Habilitar ElasticSearch para la Búsqueda

Por defecto, el contenedor de Elasticsearch se descarga e instala junto con ArchiHUB. Sin embargo, esta funcionalidad no se activa automáticamente porque requiere bastantes recursos de máquina a medida que vas catalogando e indexando información. Vamos a ver cómo puedes activarlo y cómo utilizarlo. Esta funcionalidad es esencial para realizar búsquedas por palabra clave tanto en los metadatos de los recursos como en los archivos que procesas.

### Activación de Elasticsearch en ArchiHUB

El primer paso es ir a la configuración del sistema y, en la sección __Administración de la búsqueda__, activar la opción __Activar el índice para las búsquedas__ y guardar.

El cambio se aplica al reiniciar el backend. En la misma configuración del sistema, en la sección __Reinicio del sistema__, haz clic en __Reiniciar backend__: se reinician el backend y los nodos de procesamiento, sin detener los contenedores. También puedes hacerlo desde la terminal, en la carpeta `local-machine/archihub`, con `docker compose restart archihub_backend celery_worker`.

Para validar que el índice de Elasticsearch haya iniciado correctamente, dirígete nuevamente a la configuración del sistema en la interfaz de ArchiHUB y verifica, en la sección __Administración de la búsqueda__, que la opción siga activa. Si esta opción está activa, ¡enhorabuena! Ya tienes tu archivo conectado al índice, lo que significa que Elasticsearch está funcionando correctamente y puedes aprovechar las capacidades de búsqueda avanzada de ArchiHUB.

Si la opción no está activa, es posible que haya ocurrido algún problema al iniciar el índice. En este caso, intenta resolver el problema consultando nuestra sección de [preguntas frecuentes](/archihub.github.io/es/faq), donde se abordan algunos de los problemas comunes y sus soluciones. Si no encuentras la respuesta allí, te recomendamos preguntar en el [foro](https://github.com/orgs/ArchiHUB-App/discussions) del aplicativo, donde la comunidad y los desarrolladores pueden ofrecerte ayuda y orientación para resolver cualquier inconveniente.

### Iniciar la indexación

Para que Elasticsearch funcione correctamente con ArchiHUB, es necesario generar un `mapping` para el índice, lo cual define la estructura de los datos que se van a indexar. Afortunadamente, ArchiHUB se encarga de esto automáticamente usando los estándares de metadatos que has definido. A continuación, explicamos cómo realizar estos pasos:

Primero, accede a la configuración del sistema en la interfaz de ArchiHUB y busca la sección denominada __Administración de la búsqueda__. Aquí, deberás hacer clic en __Regenerar índice__. Esto generará el `mapping` necesario basándose en tus estándares de metadatos. Es importante notar que esta acción aparecerá en tus procesamientos en tu perfil, lo que te permitirá hacer seguimiento de su progreso.

Después de regenerar el índice, debes indexar los recursos para subirlos al índice y así poder empezar a buscar. Para ello, en la misma sección __Administración de la búsqueda__, haz clic en __Volver a indexar__. Este proceso también se puede seguir desde la sección "Mis procesamientos" en tu perfil, donde podrás ver el estado y el progreso de la indexación.

Una vez que el índice está generado y los recursos están indexados, ArchiHUB se encargará automáticamente de cargar los cambios de la base de datos a Elasticsearch en caso de que se actualice el contenido. Esto asegura que la información en el índice esté siempre actualizada y refleje los cambios realizados en el archivo.

## Configuración de Nodos de Procesamiento

Por defecto, nuestro archivo `docker-compose.yml` arranca un solo nodo de procesamiento dedicado a todas las tareas que no estén en una fila específica de procesamiento. Puedes saber más sobre las filas de procesamiento haciendo click [acá](/archihub.github.io/es/nodos).

Sin embargo, si queremos [instalar nuevos plugins](/archihub.github.io/es/install_plugin) que quizas usen procesamientos un poco más intensos, es necesario que modifiquemos ese archivo.

Para esto abre el archivo `docker-compose.yml` en un editor de texto y dirígete al apartado `CELERY WORKER FOR NAMED QUEUES`. Allí está el servicio `celery_worker_queues`, que se parece mucho a `celery_worker` pero está comentado y consume las filas `high`, `medium` y `low`. Justo debajo está la misma definición para una máquina con GPU NVIDIA (`CELERY WORKER FOR NAMED QUEUES, WITH GPU`); descomenta solo una de las dos. Luego abre la terminal y vuelve a iniciar los contenedores con `docker compose up -d --build`.

Si configuraste tareas programadas (por ejemplo con el plugin de tareas del sistema), descomenta también el servicio `celery_beat`. Debe haber uno solo en toda la instalación: con dos, cada tarea programada se ejecuta dos veces.