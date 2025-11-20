---
title: 'CHANGELOG'
description: ''
---

## [1.0.3] _beta_

### Added
- Se habilita la posibilidad de campiar el tipo de contenido de un recurso siempre y cuando comparta formulario con el tipo de destino.
- Se implementa un estandar de franja horaria para la visualización en el front
- Se agrega `hot-reloading` para activar/desactivar plugins sin necesidad de reiniciar el aplicativo
- Se reimplementa el árbol en la vista de edición de los recursos para un soporte más claro de los múltiples padres
- Se agregan iconos y colores que permiten identificar el tipo de campo en el editor de formularios
- Se agregan vistas por defecto para las vistas de consulta, el usuario puede iniciar la navegación bien sea en modo listado o galería
- Se agrega la posibilidad de modificar la información devuelta por la búsqueda del sistema usando plugins
- Se agrega un nuevo campo para las vistas de consulta en la cual se puede subir directamente la imagen que usará el sistema para esa vista
- se implementa un campo de calendario que reemplaza el campo de fecha

### Fixed
- Se soluciona temas de navegación en la UI en Firefox
- Se soluciona problema en el editor de formularios. Al crear una condición y luego mover, agregar o quitar campos arriba del campo de la condición, esta se descuadra y deja de servir la condición. Se agrega un proceso automático que ajusta las condiciones cuando se modifican los campos.
- Se soluciona error al generar el mapeo de los campos al indice cuando el campo es agregado a traves de un plugin
- Se soluciona y mejora el árbol en el formulario del editor de contenido, mejorando el manejo de los padres directos o no del recurso

### Security
- Se ajustan los niveles de acceso para las galerías de imágenes.

## [1.0.2] _16 October 2025_

### Added
- Se agrega la posibilidad a un plugin de mostrar una imagen generada en la vista de panel de control. Esto se puede usar para generar códigos QR para la autenticación de los usuarios
- Cuando no hay vistas de consultas disponible, el sistema coje la imagen `front_img` si está definida en el `config.json` y la muestra en la página inicial

### Fixed
- Al momento de la carga o actualización masiva usando el archivo de excel, los campos de ubicación pueden o bien encontrar la coordenada usando servicios externos o bien leer el código postal y asignar los polígonos geográficos correspondientes.
- Se soluciona problema al filtrar recursos en las vistas de consulta cuando los recursos tiene uno o más padres
- Se actualiza el `AIHandler` para soportar los nuevos modelos de Gemini y OpenAI
- Se soluciona la actualizacion masiva cuando el campo es `simple-date`
- Se soluciona error al descargar el inventario desde el editor de contenido

## [1.0.1] _7 October 2025_

### Added
- Al editar un formulario ahora hay una columna a la iquierda que da cuenta en modo compacto de los campos del formulario con la posibilidad de arrastrar para reordenar

### Fixed
- Se soluciona error en la conversión a ogg de un audio
- Se soluciona error al momento de la actualización masiva usando un excel
- Se soluciona error al exportar un inventario desde el procesamiento masivo del plugin para generar inventarios

## [1.0.0] _24 September 2025_

### Added
- Asistente de instalación para cargar datos básicos en los formularios y listas al momento de la instalación

### Fixed
- Se soluciona error de indexación al indexar un recurso con una selección múltiple
- Al momento de descargar un archivo de un recurso si solo hay un documento el sistema no genera un archivo .zip y solo envía el documento asociado
- Se soluciona un error en el formulario de creación de estándares en el que al seleccionar una condición que depende de un listado, por defecto el aplicativo no define un valor `equal` y la condición no sirve si no se escoje uno manualmente

## [0.9.14] _11 September 2025_

### Added
- Se agrega la visualización de archivos públicos sin necesidad de estar logeado
- Se agrega la opción de implementar `actions` que sean publicas para todos los usuarios
- Se agregan las etiquetas de los padres a los metadatos de los recursos
- Se agrega la vista pública para los documentos de tipo `video` y `audio` validando primero los niveles de acceso de documento y recursos que lo contienen
- Se agrega un botón para ir a la última página en el formulario de catalogación
- Se agregan niveles para los padres de los recursos
- Se agrega una condición en los campos de listados para los formularios

### Fixed
- Se soluciona problema con los campos listados cuando se editaba un formulario. Por defecto, asi se hubiera seleccionado un listado, el sistema mostraba como seleccionado el primero. Esto no afectaba la base de datos que seguía guardando el listado seleccionado pero el front no lo mostraba correctamente.

## [0.9.13] _4 September 2025_

### Added
- Soporte de etiquetas para transcripción
- Soporte de grupos para las etiquetas de la transcripción
- Los archivos multimedia pueden ser servidos desde un proveedor de nube si un plugin lo ha configurado asi
- Se agrega la posibilidad de ajustar el ancho de la columna de izquierda

### Fixed
- El campo `parent` de los recursos ya soporta varios padres al tiempo. Esto reemplaza el campo relación y las relaciones de los recursos entre si se maneja con la jerarquía de información definida por los tipos de contenido
- El árbol de recursos permite dos o más raíces simultaneas para el árbol
- Mensaje de error cuando se hacia `unmount` de un video o audio
- Se mejoran los tiempos y la responsividad de los campos de los formularios en las acciones de los plugins
- Se automatiza la descarga de la última versión de Exiftool en el Dockerfile para el despliegue del back
- En las galerías se deshabilita la navegación cuando hay solo una imagen
- Se ajusta el menu de las vistas de consulta al no haber vistas de consulta y al haber varias
- Se optimiza la consulta de agregación para las vistas de consulta

## [0.9.12] _11 August 2025_

### Added
- Nuevo plugin del sistema para autocompletar metadatos usando los documentos y los asistentes LLMs
- Se agrega soporte de OpenCV.js en el visor de documentos e imagenes
- Se agrega la opción de restaurar los ajustes que se han hecho a la imagen, bien sea sobre la imagen original como sobre la imagen procesada con OpenCV.js
- Se agrega soporte para ejecución de LLMs locales con Ollama

### Fixed
- Se soluciona petición 401 al momento de carga el menú lateral cuando el usuario no está registrado

## [0.9.11] _31 July 2025_

### Added
- Se agrega un nuevo rol `super-editor`. Este rol hereda todos los permisos de `editor` y ahora `editor` puede ver los recursos a los que tenga acceso pero solo puede editar sus propios recursos.
- Se implementa el arbol de recursos en la vista `Control panel` de los plugins para integración con servicios como SharePoint o Google Drive

### Fixed
- Se optimiza la carga de los polígonos en el recuadro del mapa
- Se reestructura el servicio para los LLMs agrupándolos en un `AIHandler`
- Se arregla la interfaz para la edición de los bloques y transcripciones del procesamiento de segmentación de documentos
- Se soluciona `Ctrl Z` y `Ctrl Y` en el editor del texto líquido

### Security
- El sistema se encarga de eliminar todos los ejecutables y códigos JS en los archivos PDF y sobreescribe el original con la nueva versión

## [0.9.10] _22 July 2025_

### Added
- Columna con la fecha de la última actualización para los recursos
- Se agrega la posibilidad de configurar nuevos campos usando `canvas` en los plugins de la herramienta
- Se agrega al sistema la posibilidad de programar tareas
- Se implementa un límite de intentos de ingreso en un rango de 10 minutos

### Fixed
- Se agrega la búsqueda en las vistas de consulta públicas del menu para los usuarios que no están logeados

### Improved
- Se mejoran las traducciones en el backend

## [0.9.9] _17 July 2025_

### Added
- Se implementa la posibilidad de asociar recursos `parent` al momento de la carga usando un inventario de excel
- Se agrega la previsualización de videos y audios en el formularios del editor de contenido
- Se agregan nuevos iconos para los tipos de contenido

### Fixed
- Se soluciona problema con el filtro `parent` al exportar un inventario
- Al generar un inventario, los campos `select` y `select-multiple` muestran el contenido en texto y no en ID
- Se soluciona error de visualización de los iconos en el formulario de tipo de contenido
- Se soluciona los metadatos que no salían en las consulta públicas

## [0.9.8] _14 July 2025_

### Added
- Se agrega una vista de galeria a las vistas de consulta para navegar contenido en imágenes usando filtros
- Se muestran los metadatos del primer recurso asociado en la vista de archivos
- Se agregan chips de filtros a la vista de recursos para saber que filtros están activos
- Todos los campos de tipo `select` ahora tienen la opción de búsqueda para seleccionar rapidamente el item deseado
- El procesamiento de archivos ahora extrae los metadatos de los archivos `TIF` y los expone en la consulta del documento. Se implementa el sistema para soporte de cualquier otro formato y sus metadatos y se iran agregan nuevos formatos
- Se cambia la versión de MongoDB a 7.0.21. Si se tiene una instalación previa de ArchiHUB, se debe actualizar la base de datos a la nueva versión siguiendo las instrucciones en la [documentación](https://archihub-app.github.io/archihub.github.io/es/upg_mongo/)
- Manejo de certificado para el ingreso con directorio activo ldap

### Fixed
- Se pule la implementación del árbol y de la navegación de las vistas de consulta cuando el tipo de contenido a mostrar es solo uno
- Se solucionan errores de visualizacion en el mapa al hacer zoom con los marcadores bien ubicados en las coordenadas asignadas
- Se soluciona error al regenerar índice con el listado múltiple, el campo usuarios y el campo autor
- Se soluciona el error de visualización de las páginas de los documentos que se mostraban en desorden
- Se soluciona error en la edición de transcripción para parlante único
- Se soluciona error de inicio del backend cuando se tiene el índice de búsqueda habilitado
- Se soluciona error en la visualización en bloques de los documentos y las imágenes por carga de archivos en desorden
- Se soluciona error relacionado con el orden de las opciones en el `index_management`
- Se soluciona error con el `HookHandler` para que registre varias tareas con la misma función sin repetir argumentos
- Se soluciona error en el editor de contenido cuando un usuario se logea por primera vez

## [0.9.7] _2 July 2025_

### Added
- Se implementa zoom en el mapa del campo ubicación

### Fixed
- Se arregla el orden de las ventanas al hacer click en la vista galeria
- Se soluciona problema con hooks recursivos
- Se quita el botón de descarga en la vista galería si la descarga está deshabilitada en el sistema
- Soporte de funciones sincronas para el `Hookhandler`
- Se limpian los filtros `parent` cada vez que se cambia el tipo de contenido
- Se soluciona error con `files` al guardar
- Se soluciona `offset` al ir hacia atrás en la galería

## [0.9.6] _26 June 2025_

### Added

- Se implementa el chat con el asistente de IA en la vista de imágenes y galerías
- Se agrega la posibilidad de buscar desde el menu lateral desde cualquier vista del aplicativo
- Soporte de Azure como servicio para los asistentes de IA
- Soporte de Grok como servicio para los asistentes de IA
- Se mejora la interfaz de conversation con la IA para mostrar las imágenes que se están cargando

### Fixed
- Se agrega la posibilidad de editar un asistente de IA una vez creado. Para todos los proveedores se puede editar el nombre y para Azure se pueden editar las url de conexión
- Se optimiza el Dockerfile del backend para un despliegue más rápido del aplicativo

## [0.9.5] _19 June 2025_

### Added
- Se agrega un nuevo campo de los formularios en el cual es posible seleccionar uno de los usuarios registrados en el sistema
- Se agrega soporte de imágenes para el handler de servicios LLM
- Se agrega un slider para el nivel de zoom tanto en la vista de documentos como en la vista de imágenes
- Se agrega enlace al recurso en los botones del contenido relacionado en la vista de documentos

### Fixed
- Se implementa doble click en el árbol de recursos para abrir una carpeta
- Se arregla el componente de filtro geográfico
- Se agrega la opción `Limpiar filtros` cuando la búsqueda no devuelve resultados
- Se agrega click del medio para abrir en una nueva tab a los enlaces de los resultados y del menu
- Se soluciona error al borrar archivos comprimidos cuando no existe la carpeta
- Se soluciona borrar los inventarios generados
- Se limpia el cache automaticamente cuando se creo o actualiza un formulario
- Se soluciona error en la lista de selección del formulario de creación para que el primer valor que se cargue quede como valor por defecto
- Cuando el sistema no puede guardar el `resource-schema` crea otro
- Se mejora la UX al crear un `campo múltiple` en la creación de formularios

### Removed
- Se elimina temporalmente el campo `relation` para ser reimplementado teniendo en cuenta los cambios funcionales que se han implementado

## [0.9.4] _6 June 2025_

### Added
- Se implementa el chat con el asistente de IA en la vista de documentos
- Se agregan los campos texto a los resultados de los recursos
- Se agregan los campos condicionales para la visualización de los formularios de las acciones de los plugins
- Se agrega la posibilidad de seleccionar directamente el OCR sobre el documento cuando se usa la vista `scroll`
- Se habilita la vista de documentos en las vistas de consulta públicas
- Soporte `Ctrl + Z` en el editor de texto líquido
- `HookHandler` ahora para los `records`

### Fixed
- Se arregla la visualización de los nombres de las ubicaciones en la vista de consulta de metadatos
- Se pule la visualización de los bloques y OCR permitiendo la edición
- Se mejora el UX para el dibujo de bloques en los documentos e imágenes tanto en la vista 3D como en la vista scroll
- El visor de galería de imágenes y de documentos ahora permite agregar en la URL un parámetro para la página que se quiera explorar
- Si al explorar los recursos se estan visualizando campos `text` en los resultados, estos campos no son necesarios para los resultados. Es decir, un recurso puede o no tener contenido en estos campos
- Se agregan los filtros necesarios para que se puedan ordenar los resultados usando un campo `text`

### Security
- Se implementa sistema de validación de llaves para las funcionalidades PRO del aplicativo

## [0.9.3] _23 May 2025_

### Added
- Se agregan atajos del teclado para las vistas de reproducción de audios y videos: reproducir y pausar.
- La posibilidad de ordenar los resultados usando más campos de los formularios
- Cuando se usa la búsqueda de texto los resultados se pueden organizar bien sea por relevancia o por alguna de las columnas activas
- Se agrega Buscar/reemplazar en el editor del texto líquido
- Se agrega un campo de búsqueda por nombre al formulario de la ubicación
- Se agrega la posibilidad de conocer desde la interfaz la versión del backend y frontend del aplicativo
- Se agrega el campo `updatedAt` para guardar la fecha de edición tanto en los recursos como los records
- Se agrega el campo `updatedBy` para guardar el usuario que hizo la última edición en los recursos y records
- Se agrega la posibilidad de buscar un lugar geografico para las ubicaciones y automaticamente se asigna el polygono si existe en la base de datos

### Fixed
- Se soluciona y simplifica el código al crear una instancia de un Plugin ya iniciado
- Se agrega el procesamiento automatico de los archivos cuando se actualiza un recurso y no solo cuando se crea
- Se optimiza la carga de polígonos geograficos desde el back del aplicativo simplificando figuras y omitiendo por tamaño
- Se soluciona error al visualizar las ubicaciones en la que algunos polígonos se desaparecían de la visualización
- Se soluciona problema con el campo fecha al guardar para que no resetee la hora, minutos y segundos a 0
- Se pule el estilo de los campos de los formularios tanto en la interfaz normal como la oscura

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
- Se actualiza la tarea de indexación para que omita el campo `createdAt` si este no existe en el registro. Esto para brindar compatibilidad con versiones viejas de la base de datos de ArchiHUB.
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