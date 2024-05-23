# Listado de funccionalidades

## Catalogación
[x] Tipos de contenido flexibles para crear relaciones y jerarquías de la información
[x] Estándares de metadatos o formularios para cada tipo. Estos formularios son personalizables de acuerdo a las necesidades
[x] Múltiples campos para esos formularios entre los cuales tenemos listados cerrados y relación entre recursos
[x] Indexación y mapeo automático de la información catalogada para su recuperación en la búsqueda
[x] Actualización masiva de los tipos de contenido, las listas cerradas, los formaularios de metadatos y los recursos catalogados
[x] Exportación de los recursos, tipos de contenido, metadatos y listas cerradas de la herramienta a formato excel
[x] Roles de _editor_ y _publisher_ para guardar cambios a los recursos o publicar un recurso
[x] Favoritos para guardar recursos y la habilidad de _recortar_ pedazos de documentos o fragmentos de audio/video
[ ] Gestión de tareas de catalogación
[ ] Habilitar la posibilidad de crear colecciones narradas con los favoritos y los recortes

## Procesamientos
[x] Procesamiento de multiples formatos de origen a formatos estándar para su visualización web
[x] Sistema integrado de plugins con 4 vistas disponibles que permiten bien sea configurar el plugin, seleccionar recursos para procesar o lanzar un procesamiento general
[x] Sistema de filas de procesamiento que permite desplegar varias máquinas y paralelizar tareas de procesamiento aliviando la carga de la máquina principal
[x] Sistema de _ganchos_ en el aplicativo, lo que permite que cualquier plugin pueda _engancharse_ a distintas partes del código: antes de guardar un recurso, al actualizar un recurso, etc...
[x] Sistema de cache que permite la administración de la memoria central desde distintas máquinas
[x] Paquete de funciones para los plugins que les permiten acceder a los recursos o archivos asi como la posibilidad de guardar y leer archivos temporales
[x] Habilidad de los plugins de usar el contenido del archivo como material de entrenamiento para ajustar modelos

## Interfaz
[ ] Interfaz de búsqueda avanzada
[ ] Interfaz para los favoritos y las colecciones
[x] Módulo avanzado de visualización de documentos en el cual, desde la interfaz de administración, es posible editar la segmentación y OCR hecho por los procesamientos
[x] Módulo avanzado de visualización de la transcripción automática que permite editar la transcripción y agregar etiquetado
