---
title: "Actualizador masivo de recursos"
description: "Plugin para actualizar recursos en ArchiHUB"
---

El plugin permite actualizar recursos en ArchiHUB. Este plugin está por defecto en la aplicación y no necesita ser instalado, aunque, como los demás plugins incluidos por defecto, debe activarse desde el submenú **Plugins** de **Administración del sistema** antes de que aparezca en el menú de procesamientos. El plugin permite crear o actualizar tantos recursos como desees en una sola ejecución, a partir de un archivo de Excel en el mismo formato que el generado por el plugin [generador de inventarios](/archihub.github.io/es/inventory_maker). A continuación, se describen los pasos para actualizar recursos:

## Actualizar recursos

1. **Acceder al plugin**: para acceder al plugin de actualización de recursos, ve a la pestaña de procesamientos en la interfaz de ArchiHUB y selecciona el botón `PROCESAMIENTO MASIVO` del plugin de actualizar recursos.
2. **Preparar el archivo de Excel**: genera un inventario con el plugin [generador de inventarios](/archihub.github.io/es/inventory_maker) y edítalo — editar filas existentes actualiza esos recursos, y agregar filas nuevas crea recursos nuevos. Ambos tipos de cambios pueden incluirse en el mismo archivo.
3. **Seleccionar el archivo**: selecciona el archivo de Excel editado con los recursos que deseas crear o actualizar.
4. **Configurar actualización**: el plugin permite borrar campos de los recursos cuando el archivo de Excel tenga campos en blanco. Selecciona la opción `Espacio en blanco como borrado de contenido` si deseas que los campos en blanco borren el contenido existente en lugar de dejarlo sin cambios.
5. **Actualizar recursos**: una vez que hayas seleccionado el archivo de Excel, haz clic en el botón `PROCESAR`. El plugin creará una tarea de procesamiento y los recursos se crearán o actualizarán una vez que la tarea haya finalizado.

![Subir y procesar el archivo de Excel](/archihub.github.io/imagenes/massiveUpdater.gif)

Para el uso del plugin es importante que haya al menos una fila de procesamiento disponible, ya que de esto depende que se puedan ejecutar las tareas relacionadas con el procesamiento de archivos. Para crear una fila de procesamiento o validar que exista, revisa la documentación de [filas de procesamiento](/archihub.github.io/es/nodos).

Una vez finalizado el procesamiento, los recursos se crearán o actualizarán en ArchiHUB. Puedes verificar el resultado desde el módulo de catalogación, o desde **Mi perfil** > **Mis procesamientos** ("Tareas del sistema") si deseas revisar el reporte del procesamiento.
