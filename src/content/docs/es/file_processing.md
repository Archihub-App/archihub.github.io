---
title: 'Procesamiento de archivos'
description: 'Plugin para procesar archivos en ArchiHUB'
---

El plugin permite procesar archivos en ArchiHUB. Este plugin está por defecto en la aplicación y no necesita ser instalado. El plugin permite procesar y crear archivos en diferentes formatos, dependiendo del tipo de archivo original. Además, permite configurar procesamiento automático para los tipos de contenido que se configuren. A continuación, se describen los pasos para procesar archivos de forma manual y automática:

## Procesamiento manual
    
1. **Acceder al plugin**: para acceder al plugin de procesamiento de archivos, ve a la pestaña de procesamientos en la interfaz de ArchiHUB y selecciona el botón `PROCESAMIENTO MASIVO` del plugin de procesamiento de archivos.
2. **Seleccionar archivos**: selecciona el tipo de contenido que deseas procesar y selecciona los archivos que deseas procesar.
3. **Configurar opciones**: el plugin ofrece la opción de sobreescribir los procesamientos existentes en caso de que los archivos ya hayan sido procesados. Si deseas sobreescribir los procesamientos existentes, selecciona la casilla correspondiente.
4. **Procesar archivos**: una vez que hayas seleccionado los archivos y configurado las opciones, haz clic en el botón `PROCESAR`. Los archivos procesados estarán disponibles en el recurso padre seleccionado.

## Procesamiento automático

Para configurar el procesamiento automático de archivos, sigue los siguientes pasos:

1. **Acceder al plugin**: para acceder al plugin de procesamiento de archivos, ve a la pestaña de procesamientos en la interfaz de ArchiHUB y selecciona el botón `CONFIGURACIÓN DEL PROCESAMIENTO` del plugin de procesamiento de archivos.
2. **Configurar tipos de contenido**: selecciona los tipos de contenido que deseas procesar automáticamente y selecciona la fila de procesamiento que se va a usar para cada tipo de contenido. En caso de que se configure más de un tipo de contenido para una misma fila de procesamiento, se procesarán los archivos en orden alfabético por nombre del tipo de contenido.

Para el uso del plugin es importante que haya al menos una fila de procesamiento disponible, ya que de esto depende que s epuedan ejecutar las tareas relacionadas con el procesamiento de archivos. Para crear una fila de procesamiento o validar que exista, revisa la documentación de [filas de procesamiento](../nodos).