---
title: 'CHANGELOG'
description: ''
---

## [0.8.5] _beta_

### Added
- Se habilita la posibilidad de campiar el tipo de contenido de un recurso siempre y cuando comparta formulario con el tipo de destino.
- Nuevo servicio que devuelve los ajustes generales del aplicativo de cara a mostrar opciones en la interfaz.
- La posibilidad de ordenar los resultados usando más campos de los formularios.
- Soporte para APIs de LLMs
- Los plugins ahora pueden definir acciones que son botones que aparecen en ciertos lugares del aplicativo para ejecutar acciones específicas
- Se agrega la posibilidad de editar las transcripciones para videos o para audios. Las transcripciones permiten editar el texto transcrito asi como el nombre del parlante si existe el procesamiento

### Fixed
- Se soluciona problema de pagina en la vista de los recursos para los archivos.
- Se soluciona lectura de los chunks del stream para convertir a un blob en la vista de video y audio
- Se agregan valores por defecto a los ajustes del sistema
- Se soluciona la vista horizontal/vertical para los videos
- Se soluciona el pagina de las tareas de catalogación
- Se valida que un usuario siempre tenga uno de los tres roles del sistema: `editor`, `admin` o `user`

### Security
- Se ajustan los niveles de acceso para las galerías de imágenes.

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