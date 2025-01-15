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
│   │   ├── mongo_db
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

Puedes Añadir o modificar las siguientes variables en el archivo `.env` para apuntar a las nuevas rutas deseadas, en este caso queremos asignar una ruta que se encuentra en un disco externo:

```
WEBFILES_PATH=/mnt/disco_externo/webfiles
USERFILES_PATH=/mnt/disco_externo/userfiles
TEMPORAL_PATH=/mnt/disco_externo/temporal
ORIGINAL_PATH=/mnt/disco_externo/original
DATA_PATH=/mnt/disco_externo/data
```

### Consideraciones Importantes

- __Consistencia de las Rutas__: Asegúrate de que las rutas especificadas estén siempre disponibles y accesibles por el sistema donde se ejecuta ArchiHUB.
- __Permisos de Acceso__: Verifica que ArchiHUB tenga los permisos necesarios para leer y escribir en las nuevas rutas.
- __Evitar Cambios Frecuentes__: Cambiar las rutas y el contenido de estas carpetas de manera frecuente puede causar errores en el funcionamiento del aplicativo. Asegúrate de definir estas rutas de manera definitiva durante la configuración inicial.
- __Reinicio del Aplicativo__: Después de realizar estos cambios, es necesario reiniciar ArchiHUB para que los nuevos ajustes tengan efecto. Puedes ejecutar `docker compose up --build -d` desde la carpeta raíz como lo vimos en el capítulo para actualizar el aplicativo.

## Habilitar ElasticSearch para la Búsqueda

Por defecto, el contenedor de Elasticsearch se descarga e instala junto con ArchiHUB. Sin embargo, esta funcionalidad no se activa automáticamente porque requiere bastantes recursos de máquina a medida que vas catalogando e indexando información. Vamos a ver cómo puedes activarlo y cómo utilizarlo. Esta funcionalidad es esencial para realizar búsquedas por palabra clave tanto en los metadatos de los recursos como en los archivos que procesas.

### Activación de Elasticsearch en ArchiHUB

El primer paso es ir la la configuración del sistema y en la sección Administración del índice activar la primera opción.

Después de activar Elasticsearch en la configuración del sistema, es necesario reiniciar el contenedor del backend para aplicar los cambios. Esto se puede hacer de dos formas:

- __Desde la terminal__: Debes navegar a la carpeta `local-machine/archihub` y desde ahí puedes ejecutar el siguiente comando para reiniciar el contenidor del backend: `docker compose up -d --no-deps archihub_flask_backend`.
- __Desde el aplicativo de escritorio__: En el aplicativo de escritorio es un poco más sencillo, asegurate de estar en el submenu de los contenedores, busca el que dice `archihub_flask_backend` y simplemente lo detienes y vuelves a iniciar.

Para validar que el índice de Elasticsearch haya iniciado correctamente, sigue estos pasos:

Dirígete nuevamente a la configuración del sistema en la interfaz de ArchiHUB. Busca la sección "Administración del índice" y verifica si la primera opción está activa. Si esta opción está activa, ¡enhorabuena! Ya tienes tu archivo conectado al índice, lo que significa que Elasticsearch está funcionando correctamente y puedes aprovechar las capacidades de búsqueda avanzada de ArchiHUB.

Si la primera opción no está activa, es posible que haya ocurrido algún problema al iniciar el índice. En este caso, intenta resolver el problema consultando nuestra sección de [preguntas frecuentes](../preguntas), donde se abordan algunos de los problemas comunes y sus soluciones. Si no encuentras la respuesta allí, te recomendamos preguntar en el [foro](https://github.com/orgs/Archihub-App/discussions) del aplicativo, donde la comunidad y los desarrolladores pueden ofrecerte ayuda y orientación para resolver cualquier inconveniente.

### Iniciar la indexación

Para que Elasticsearch funcione correctamente con ArchiHUB, es necesario generar un `mapping` para el índice, lo cual define la estructura de los datos que se van a indexar. Afortunadamente, ArchiHUB se encarga de esto automáticamente usando los estándares de metadatos que has definido. A continuación, explicamos cómo realizar estos pasos:

Primero, accede a la configuración del sistema en la interfaz de ArchiHUB y busca la sección denominada __Administración del índice__. Aquí, deberás hacer clic en la opción para "Regenerar el índice". Esto generará el `mapping` necesario basándose en tus estándares de metadatos. Es importante notar que esta acción aparecerá en tus procesamientos en tu perfil, lo que te permitirá hacer seguimiento de su progreso.

Después de regenerar el índice, debes indexar los recursos para subirlos al índice y así poder empezar a buscar. Para ello, en la misma sección __Administración del índice__, selecciona la opción "Indexar los recursos". Este proceso también se puede seguir desde la sección "Mis procesamientos" en tu perfil, donde podrás ver el estado y el progreso de la indexación.

Una vez que el índice está generado y los recursos están indexados, ArchiHUB se encargará automáticamente de cargar los cambios de la base de datos a Elasticsearch en caso de que se actualice el contenido. Esto asegura que la información en el índice esté siempre actualizada y refleje los cambios realizados en el archivo.

## Configuración de Nodos de Procesamiento

Por defecto, nuestro archivo `docker-compose.yml` arranca un solo nodo de procesamiento dedicado a todas las tareas que no estén en una fila específica de procesamiento. Puedes saber más sobre las filas de procesamiento haciendo click [acá](../nodos).

Sin embargo, si queremos [instalar nuevos plugins](../install_plugin) que quizas usen procesamientos un poco más intensos, es necesario que modifiquemos ese archivo.

Para esto abre el archivo `docker-compose.yml` en un editor de texto y dirígete al apartado `CELERY QUEUE SERVICE`. Te darás cuenta que se parece mucho a `CELERY WORKER SERVICE` pero está comentado y el comando que ejecuta es distinto pues ahora tenemos las filas de procesamiento especificadas. Descomenta todo el bloque de texto, luego abre la terminal y vuelve a iniciar los contenedores con `docker compose up --build -d`.