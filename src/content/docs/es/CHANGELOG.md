---
title: 'CHANGELOG'
description: ''
---

## [0.9.3] _beta_

### Added
- Se habilita la posibilidad de campiar el tipo de contenido de un recurso siempre y cuando comparta formulario con el tipo de destino.
- La posibilidad de ordenar los resultados usando más campos de los formularios.
- Se agregan atajos del teclado para las vistas de reproducción de audios y videos: reproducir y pausar.
- Se implementa un estandar de franja horaria para la visualización en el front
- Se agrega Buscar/reemplazar en el editor del texto líquido
- Se implementa búsqueda semántica para los metadatos de los recursos
- Se agrega un campo de búsqueda por nombre al formulario de la ubicación
- Se agrega la posibilidad de conocer desde la interfaz la versión del backend y frontend del aplicativo

### Fixed
- Se soluciona y simplifica el código al crear una instancia de un Plugin ya iniciado
- Se agrega el procesamiento automatico de los archivos cuando se actualiza un recurso y no solo cuando se crea
- Se optimiza la carga de polígonos geograficos desde el back del aplicativo simplificando figuras y omitiendo por tamaño
- Se soluciona error al visualizar las ubicaciones en la que algunos polígonos se desaparecían de la visualización
- Se agrega la posibilidad de buscar un lugar geografico para las ubicaciones y automaticamente se asigna el polygono si existe en la base de datos
- Se soluciona problema con el campo fecha al guardar para que no resetee la hora, minutos y segundos a 0
- Se pule el estilo de los campos de los formularios tanto en la interfaz normal como la oscura

### Security
- Se ajustan los niveles de acceso para las galerías de imágenes.

## [0.9.2] _6 May 2025_

### Added
- La posibilidad de ordenar los resultados usando más campos de los formularios.
- Se agrega soporte de `lat,lon` y mapa para el campo Ubicación
- Botón de editar recurso en las acciones de los recursos
- Soporte para varias ubicaciones para el campo ubicación
- Se agrega los procesamientos necesarios para la indexacion geografica conjugada con el `geosystem`
- Se agrega la indexación de los polygonos en `geosystem`
- Se agrega la ventana de tareas de catalogación en la vista de documentos
- Se agrega filtro por ubicación geográfica en la búsqueda
- Todos los procesamientos se pueden extraer a un nuevo formato 'Texto líquido' para editar en un editor de texto sencillo, el texto puede ser guardado y exportado a PDF, DOCX o TXT
- Se agrega un botón para reiniciar el back del aplicativo si se despliega en un contenedor
- Se agrega historial de cambios para los recursos. Al visitar un recurso un usuario puede consultar el historial de cambios. En función de su rol y nivel de acceso puede ver al detalle o no los cambios realizados.
- Se agrega la posibilidad a la clase responsable de los LLMs de calcular el número aproximado de tokens para el procesamiento y de avisar para partir la consulta en caso de exceder los límites.
- Se agregan atajos del teclado para las vistas de reproducción de audios y videos: reproducir y pausar.

### Fixed
- Se soluciona problema con la carga de los filtros al momento de iniciar una galeria
- Los logs que tengan como usuario `None` automáticamente se registran como `system`
- Se simplifica la actualización de un `record` en una única función para centralizar las acciones del Hookhandler
- Se simplifica la creación de una nuevo índice centralizando la tarea en la clase `IndexHandler`
- Se mejora la implementación del `mapping` al momento de generar un nuevo índice

### Security
- Validación jerárquica de los niveles de acceso al cargar un `record`

## [0.9.1] _15 April 2025_

### Added
- Mensaje de error cuando el plugin para descargar los inventarios no está activo.
- Se agrega la posibilidad de editar el texto de la transcripción directamente sobre el texto, al hacer click el texto se vuelve editable y ya no maneja la reproducción del video.
- Se agrega soporte MARKDOWN para las transcripciones y los chats con IA
- Se agrega Google como uno de los proveedores de API LLMs
- Las conversaciones con IA ahora pueden cambiar de modelo en medio de la conversación para usar los mensajes de una conversación como contexto para modelos más potentes

### Fixed
- El rol `transcriber` puede enviar tareas a revisión
- El árbol de recursos muestra correctamente los recursos asociados en borradores

## [0.9] _10 April 2025_

### Added
- Soporte para APIs de LLMs
- Opción de activar/desactivar la descarga de documentos en el aplicativo
- Se agrega la posibilidad de implementar una unidad para los campos número
- Se agregan nuevos filtros de saturación e invertir el color
- Se agrega la posibilidad de girar las imágenes
- Se agrega la caja de filtros a la vista de documentos
- Se agrega la información de los usuarios que envían las tareas
- Se agregan los parametros de las funciones de las tareas para obtener detalles de los recursos sobre los cuales se ejecuta
- Se agrega asistentes de IA a la transcripción de audio/video
- Nuevo rol `llm` para los usuarios que puedan tener conversaciones con la IA

### Fixed
- Se soluciona error al exportar los formularios para los campos sin `instrucciones`
- Se soluciona error con el servicio de las acciones
- Las ventanas sobre los archivos ahora pueden ser varias al tiempo
- Un usuario `transcriber` no puede guardar cambios de una transcripción si no tiene una tarea asignada en esa transcripción

## [0.8.8] _1 April 2025_

### Fixed
- Se soluciona error con los ajustes del sistema en la parte de indexación. El botón regenerar llevaba a un enlace roto en el backend. Para solucionar, borrar la entrada con id `index_management` en la colección `system` de la base de datos y reiniciar el backend.
- Se actualiza la versión de python en el Dockerfile
- Se actualiza la tarea de indexación para que omita el campo `createdAt` si este no existe en el registro. Esto para brindar compatibilidad con versiones viejas de la base de datos de Archihub.
- Se soluciona problema al generar los tokens para los usuarios que no son `beta`

### Added
- Se agrega un mensaje de resultado para los procesamientos de indexación

## [0.8.7] _31 March 2025_

### Fixed
- Nuevo rol del sistema `transcriber` para editar las transcripciones sin necesidad del rol `editor`
- Se agregan mensajes de progreso a la vista de tareas del sistema para cualquier procesamiento
- Se ajusta la vista de ventanas arrastrables para que cada vez que se haga click, la ventana seleccionada suba encima del resto

### Added
- Se agrega mensaje y barra de progreso a los procesamientos de archivo
- Nuevas opciones para los ajustes de reproduccion de videos y audios

## [0.8.6] _26 March 2025_

### Added
- Nuevos ajustes para el reproductor (velocidad y avance rápido) para audio y video
- Borrar tareas que se quedaron pendientes
- Se agregan acciones a la vista de los recursos
- Se agrega la acción de `FileProcessing` en la vista de un recurso
- Se implementan las tareas de catalogación a nivel de archivo

### Fixed
- La variable de entorno para el ELASTIC_DOMAIN ahora debe tener `http` o `https`

## [0.8.5] _17 March 2025_

### Added
- Nuevo servicio que devuelve los ajustes generales del aplicativo de cara a mostrar opciones en la interfaz.
- Los plugins ahora pueden definir acciones que son botones que aparecen en ciertos lugares del aplicativo para ejecutar acciones específicas
- Se agrega la posibilidad de editar las transcripciones para videos o para audios. Las transcripciones permiten editar el texto transcrito asi como el nombre del parlante si existe el procesamiento

### Fixed
- Se soluciona problema de pagina en la vista de los recursos para los archivos.
- Se soluciona lectura de los chunks del stream para convertir a un blob en la vista de video y audio
- Se agregan valores por defecto a los ajustes del sistema
- Se soluciona la vista horizontal/vertical para los videos
- Se soluciona el pagina de las tareas de catalogación
- Se valida que un usuario siempre tenga uno de los tres roles del sistema: `editor`, `admin` o `user`
- Se ajusta la vista del listado de oradores con los botones de acciones

## [0.8.4] _19 February 2025_

### Fixed
- El archivo `config.json` del frontend ahora permite configurar la URL de la API
- Se ajustan detalles para la versión oscura de la interfaz en las opciones de mi perfil y al formulario de catalogación
- El árbol de recursos ahora muestra los borradores si el usuario tiene los permisos

### Added
- Soporte de español e inglés para el aplicativo
- Se agrega la posibilidad de eliminar los inventarios generados para que se generen nuevos
- Desde el procesamiento masivo para los complementos se puede ejecutar para todos los tipos de contenido
- Nueva vista `Panel de control` para los complementos
- Arreglos varios a la vista oscura de la interfaz
- Se agrega la posibilidad de reordenar los listados

## [0.8.3] _6 February 2024_

### Added
- Se agrega la posibilidad de eliminar los zips generados desde el panel de administracion.
- Modo oscuro en la interfaz.
- Se habilita la descarga de inventarios desde la interfaz pública del aplicativo.
- Documentacion en Swagger

### Fixed
- Se agrega la posibilidad de eliminar los usuarios por un administrador.
- Cuando no hay contenido ya no se queda la animación de cargando.

## [0.8.2] _21 January 2025_

### Added
- Se agrega la descargar de los documentos asociados a un recurso en un .zip, en este caso solo se habilita la descarga para los archivos asociados directamente a un recurso.
- Se agrega la posibilidad de descarga los documentos originales o procesados para cada archivo individual.
- Se agrega el registro de usuario público.
- Se agrega la opción de recuperar contraseña.
- Ahora el aplicativo se encarga de crear los campos de configuración por defecto si estos no existen en la base de datos.

### Fixed
- Se agregan campos Verdaderos/Falsos al campo múltiple.
- Se agregan campos Area de texto al campo múltiple.
- Se arreglan el ordenar por fecha y titulo en la vista pública de consulta.
- Se arregla el orden cuando se usa elastic para las búsquedas por palabras clave.
- Se arregla el acceso a los records desde un perfil publico si y solo si el archivo tiene los permisos publicos.
- Se arregla la carga inicial para la busqueda publica cuando no esta `page` en el body de la request.


## [0.8.1] _20 December 2024_

### HOTFIX

### Added
- Al devolver los recursos se agrega el campo `createdAt`
- Se agrega la posibilidad de ordenar los resultados por `Fecha del registro` o por el `Titulo` de cada registro en la vista de resultados.

### Fixed
 
### Security

## [0.8] _17 December 2024_

### HOTFIX

### Added
- Los `requirements.txt` de las librerias ahora no tienen versionamiento, siempre busca y descarga la última versión
- Se agrega la posibilidad de login con LDAP
- Se implementa un nuevo campo múltiple para los estándares. Este campo permite generar listas de campos perzonalizados en los formularios
- Se implementa los campos condicionales para los de tipo texto (igual a, contiene a, distinto a) y los campos verdaderos falsos
- Se agregan instrucciones a los campos de los estándares de metadatos

### Fixed
- Se soluciona el cache al momento de obtener un listado de todos los plugins
- Se soluciona el procesamiento bulk cuando un tipo de recurso no tiene un padre seleccionado
- Se agregan opciones de exportación en la nueva interfaz
- Se arregla el titulo del label en los metadatos al devolver un select
- Se agregan las tareas finalizadas al perfil del usuario además de un sistema de color para identificar el estado de manera más simple.
- Cuando se guarda un formulario (estándar de metadatos) el campo de Título siempre debe ser un campo de tipo texto
- Se ajusta la visibilidad de las tareas cuando el usuario no es `team_lead`.
 
### Security
- Se ajustan los niveles de acceso para las galerías de imágenes.

## [0.7.2] _11 November 2024_

### HOTFIX
- Se soluciona la validación de los campos número para que soporten decimales.
- Se soluciona None en el momento de cargar ajustes de plugins y que estos no existan. Si es el caso devuelve un {}.

### Added
- Se agrega soporte para base de datos vectorial Qdrant.
- Los usuarios con rol `editor` ahora puede crear y editar listados.
- Se agrega flujo de validación y aprobación de las tareas de catalogación.
- Soporte para la versión 2.0 de la interfaz de administración.

### Fixed
- Se agrega un timeout de 30s para la conexión de mongodb.
- Se ajusta el query a elasticsearch para mostrar el total de resultados cuando estos superan los 10.000
- El aplicativo solo limpia el cache al iniciar si el entorno es de desarrollo y no producción.
- Al guardar un `record`, el sistema se asegura que los padres de ese documentos
 no esten repetidos en el campo `parent`.
- Se arregla la paginas de los archivos para cada recurso, cambiando la paginación en función de si tiene o no agrupación por galería de imágenes.
- Se quita la petición a la base de datos que ralentizaba las peticiones del arbol de recursos.
 
### Security


## [0.7.1] _20 October 2024_

### Added
- Se agregan las búsquedas avanzadas para poder seleccionar el campo en el que se quiere buscar bien sea un campo de texto o de fecha.
- Nuevas columnas para los resultados [Documentos, identificador]
- Se agrega la posibilidad de filtrar los recursos que tengan archivos asociados.
- Se agrega visualización de agregados para los documentos
- Se agregan nuevos servicios para el analisis de las imagenes 'img_analyze'. Estos servicios proveen la posibilidad de devolver la metadata de los procesamientos y los bloques de segmentación en una imagen.
- Se agrega un nuevo gestor de tareas para asignarle correcciones a recursos a ciertos usuarios. Para esto se genera un nuevo servicio y un nuevo rol de usuario `team_lead`
- Se agrega un nuevo rol de usuario `user` para los usuarios logeados pero sin acceso a nada mas de la consulta y lo publico.
- Se agregan nuevas rutas publicas para consulta sin auth de los recursos publicos catalogados.
- Se agregan nuevas rutas para la API pública del aplicativo.
- Se agrega compatibilidad con la V2 de la interfaz de administración.
- Se agrega la posibililidad de ordenar los archivos dentro de cada uno de los recursos con la opción `order` de `fileObj` para cada recurso.

### Changed

- Actualizar el cache al crear o actualizar recursos ahora tiene la opción de deshabilitarse al momento de realizar cargas masivas.
- Al cargar las imagenes a un recurso ahora es posible ajustar el orden en el que se verán las imágenes en la galería.

### Deprecated

### Removed

### Fixed
- Manejo de errores al procesar los archivos
- Se agrega shapely al archivo requirements.txt
- Se ajusta el procesamiento de video para videos .MOV
- Se ajusta el click en los listados sin anidados del árbol de navegación
- Visualización de los bloques en las imagenes y documentos
- Se agregan los tipos de archivo .oga .ogv
- Se soluciona la búsqueda de sinonimos en el buscador y el mapeo del índice.
- Se implementa la paginación al momento de procesar los archivos
- Se ajusta los bloques sobre las imagenes verticales y horizontales
- Al borar un recurso este y sus hijos se borran recursivamente del indice de búsqueda.

### Security

## [0.7] _7 August 2024_

### Added
- Se implementa una nueva vista "Ver Información" para el módulo de catalogación para visualizaciones generales de cada tipo.
- Aviso GUARDANDO al momento de crear o actualizar un recurso.
- Identificador en los metadatos del recurso.
- Se implementa un nuevo servicio geográfico para la gestión de información.

### Changed

### Deprecated

### Removed

### Fixed
- lastRequest error al actualizar un usuario.
- formato de fecha en los metadatos.
- checkbox select en el formulario de recurso y de vistas.
- se arregla un loop infinito al guardar un solo recurso al momento de indexar automaticamente.

### Security