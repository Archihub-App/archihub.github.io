# Changelog

## [0.7.1] _beta_

### Added
- Se habilita la posibilidad de campiar el tipo de contenido de un recurso siempre y cuando comparta formulario con el tipo de destino.
- Opciones avanzadas en el árbol de recursos.
- Se agregan las búsquedas avanzadas para poder seleccionar el campo en el que se quiere buscar.
- Nuevas columnas para los resultados [Documentos, identificador]
- Se agrega la posibilidad de filtrar los recursos que tengan archivos asociados.
- Se agrega visualización de agregados para los documentos
- Se agregan nuevos servicios para el analisis de las imagenes 'img_analyze'. Estos servicios proveen la posibilidad de devolver la metadata de los procesamientos y los bloques de segmentación en una imagen.
- Se agrega un nuevo gestor de tareas para asignarle correcciones a recursos a ciertos usuarios. Para esto se genera un nuevo servicio y un nuevo rol de usuario `team_lead`
- Se agrega la posibilidad a los plugins de definir sus responsabilidades. Es decir, un plugin puede tener como responsabilidad la indexación de los procesamientos que ejecuta. Se implementa el flujo de procesamiento en la herramienta para lanzar estas responsabilidades automaticamente al momento de carga o actualización de un recurso.

### Changed

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

### Security
- Se ajustan los niveles de acceso para las galerías de imágenes.

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