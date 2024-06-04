# Los ajustes del sistema

![Menu ajustes generales](/imagenes/menu_ajustes.gif)

En esta sección de la documentación, exploraremos en profundidad las diversas opciones disponibles para configurar ArchiHUB. Aquí aprenderás cómo personalizar y ajustar la herramienta para satisfacer tus necesidades específicas, asegurándote de aprovechar al máximo todas sus funcionalidades.

## Esquema metadatos

![Estándares de metadatos](/imagenes/estandares.png)

La primera opción que encontramos no es algo que puedas modificar directamente, pero es crucial para entender la estructura de metadatos que maneja tu instalación de ArchiHUB. Desde esta sección, puedes consultar rápidamente el esquema agregado de todos los esquemas de metadatos que has creado.

Esta es una configuración avanzada del aplicativo. Aunque ArchiHUB viene preconfigurado con un estándar de metadatos, tienes la flexibilidad de crear tus propios esquemas. Todos los campos de estos estándares se integran en una estructura unificada, que puedes revisar aquí.

Si deseas crear un nuevo estándar y necesitas verificar los campos existentes en otros estándares, puedes hacerlo desde esta sección. Esto te asegura que no haya duplicaciones o inconsistencias en los campos de metadatos que defines.

## Ajustes tipos de contenido

La siguiente opción de configuración se refiere a los tipos de contenido. Como ya vimos, puedes crear todos los tipos de contenido que desees. En la instalación por defecto de ArchiHUB, la jerarquía es la siguiente:

 ```
├── Fondo
│   ├── Unidad Documental
│   ├── Sección
│   │   ├── Unidad Documental
│   ├── Serie
│   │   ├── Unidad Documental
 ```

De este diagrama, podemos deducir que el tipo de contenido que contiene la información o los documentos es la Unidad Documental. Los demás tipos de contenido están ahí para proporcionar orden y estructura a la organización de estos recursos.

Cuando queramos explorar los recursos en este archivo, nos enfocaremos principalmente en las Unidades Documentales. Por eso, este es el tipo de contenido predeterminado en el módulo de catalogación. Al abrir el módulo o cargar el buscador en la herramienta, se abrirá automáticamente en la Unidad Documental, ya que es aquí donde se encuentra la información. Esto facilita la navegación y gestión de los documentos dentro de tu archivo.