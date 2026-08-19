---
title: 'Generador de inventarios'
description: 'Plugin para generar inventarios en ArchiHUB'
---

El plugin permite exportar inventarios en ArchiHUB. Este plugin está por defecto en la aplicación, por lo que no necesita ser instalado, pero sí necesita ser **activado** antes de que aparezca en el menú de procesamientos. El plugin permite exportar un inventario de los recursos de ArchiHUB en Excel. A continuación, se describen los pasos para activar el plugin y generar un inventario:

## Activar el plugin

Aunque el plugin viene incluido con la aplicación, empieza desactivado. Para habilitarlo, ve al submenú **Plugins** de **Administración del sistema**, busca el plugin generador de inventarios y actívalo. Una vez activado, aparecerá en el menú de procesamientos.

![Activar el plugin generador de inventarios](/archihub.github.io/imagenes/enable_inventory_maker.gif)

## Generar inventario

1. **Acceder al plugin**: para acceder al plugin de generación de inventarios, ve a la pestaña de procesamientos en la interfaz de ArchiHUB y selecciona el botón `PROCESAMIENTO MASIVO` del plugin de exportar inventarios.
2. **Seleccionar el recurso**: selecciona el tipo de contenido del cual deseas generar el inventario.
3. **Exportar inventario**: una vez que hayas seleccionado el tipo de contenido, haz clic en el botón `PROCESAR`. El plugin creará una tarea de procesamiento y el inventario estará disponible en la pestaña de tareas una vez que la tarea haya finalizado.
4. **Descargar inventario**: ve a **Mi perfil** > **Mis procesamientos** ("Tareas del sistema") y, una vez que la tarea aparezca como finalizada, haz clic en el botón `DESCARGAR` para descargar el inventario en formato Excel.

![Generar y descargar un inventario](/archihub.github.io/imagenes/generate_inventory.gif)

Para el uso del plugin es importante que haya al menos una fila de procesamiento disponible, ya que de esto depende que se puedan ejecutar las tareas relacionadas con el procesamiento de archivos. Para crear una fila de procesamiento o validar que exista, revisa la documentación de [filas de procesamiento](/archihub.github.io/es/nodos).

El archivo Excel descargado desde este plugin también puede editarse y volver a subirse a través del plugin de [actualización masiva de recursos](/archihub.github.io/es/massive_updater) para actualizar o crear recursos de forma masiva.
