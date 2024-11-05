---
title: 'CHANGELOG'
description: ''
---

## [0.7.2] _beta_

### HOTFIX
- Se soluciona la validación de los campos número para que soporten decimales.

### Added
- Se agrega la posibilidad a los plugins de definir sus responsabilidades. Es decir, un plugin puede tener como responsabilidad la indexación de los procesamientos que ejecuta. Se implementa el flujo de procesamiento en la herramienta para lanzar estas responsabilidades automaticamente al momento de carga o actualización de un recurso.
- Se habilita la posibilidad de campiar el tipo de contenido de un recurso siempre y cuando comparta formulario con el tipo de destino.
- Opciones avanzadas en el árbol de recursos.
- Se agrega soporte para base de datos vectorial Qdrant.
- Se agrega la descargar de los documentos asociados a un recurso en un .zip

### Fixed
- Se agrega un timeout de 30s para la conexión de mongodb.
- Se ajusta el query a elasticsearch para mostrar el total de resultados cuando estos superan los 10.000
- El aplicativo solo limpia el cache al iniciar si el entorno es de desarrollo y no producción.
- Al guardar un `record`, el sistema se asegura que los padres de ese documentos
 no esten repetidos en el campo `parent`.
- Se arregla la paginas de los archivos para cada recurso, cambiando la paginación en función de si tiene o no agrupación por galería de imágenes.
 
### Security
- Se ajustan los niveles de acceso para las galerías de imágenes.


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