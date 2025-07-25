---
title: 'Los ajustes del sistema'
description: ''
---

![Menu ajustes generales](/archihub.github.io/imagenes/menu_ajustes.gif)

En esta sección de la documentación, exploraremos en profundidad las diversas opciones disponibles para configurar ArchiHUB. Aquí aprenderás cómo personalizar y ajustar la herramienta para satisfacer tus necesidades específicas, asegurándote de aprovechar al máximo todas sus funcionalidades.

## Esquema metadatos

![Estándares de metadatos](/archihub.github.io/imagenes/estandares.png)

La primera opción que encontramos no es algo que puedas modificar directamente, pero es crucial para entender la estructura de metadatos que maneja tu instalación de ArchiHUB. Desde esta sección, puedes consultar rápidamente el esquema agregado de todos los esquemas de metadatos que has creado.

Esta es una configuración avanzada del aplicativo. Aunque ArchiHUB viene preconfigurado con un estándar de metadatos, tienes la flexibilidad de crear tus propios esquemas. Todos los campos de estos estándares se integran en una estructura unificada, que puedes revisar aquí.

Si deseas crear un nuevo estándar y necesitas verificar los campos existentes en otros estándares, puedes hacerlo desde esta sección. Esto te asegura que no haya duplicaciones o inconsistencias en los campos de metadatos que defines.

## Ajustes tipos de contenido

![Ajustes tipos de contenido](/archihub.github.io/imagenes/ajustes_tipos.png)

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


## API

![Ajustes API](/archihub.github.io/imagenes/settings_api.png)

En este apartado puedes controlar el acceso a las APIs del sistema:

- **Activar la API de administración**  
  Permite habilitar los endpoints de administración. La llave de administrador tiene una duración limitada (máximo dos días). Es importante desactivar la API una vez realizados los cambios necesarios.

- **Activar la API pública**  
  Habilita los endpoints públicos para consultar información. Estos endpoints tienen un límite de uso semanal por usuario.

---

## Administración del cache

![Ajustes cache](/archihub.github.io/imagenes/settings-cache.png)

- **Regenerar el cache**  
  Si notas que la información no está actualizada, puedes regenerar la caché para refrescar los datos mostrados en la aplicación.

---

## Administración de la geolocalización

![Ajustes geolocalización](/archihub.github.io/imagenes/settings-geo.png)

- **Cargar polígonos geográficos**  
  Permite cargar los polígonos geográficos necesarios para la visualización de mapas.

---

## Ajustes de usuario

![Ajustes usuario](/archihub.github.io/imagenes/settings-user.png)

- **Activar el registro de usuarios**  
  Permite que los usuarios se registren y accedan a la información de la aplicación.

- **Activar la recuperación de contraseña**  
  Habilita la opción para que los usuarios recuperen su contraseña en caso de olvido.

- **Idioma por defecto de los usuarios**  
  Selecciona el idioma predeterminado para los usuarios de la aplicación.

---

## Ajustes de los archivos

![Ajustes archivos](/archihub.github.io/imagenes/setting-archivos.png)

- **Activar la descarga de archivos**  
  Permite a los usuarios descargar archivos desde la aplicación.

- **Borrar archivos zipeados**  
  Elimina los archivos comprimidos generados en la aplicación.

- **Borrar inventarios públicos**  
  Elimina los inventarios públicos generados en la aplicación.

---

## Reinicio del sistema

![Reinicio sistema](/archihub.github.io/imagenes/settings-reinicio.png)

- **Reiniciar el sistema**  
  Permite reiniciar el backend para aplicar cambios de configuración.

---

> **Tip:** Después de realizar cambios importantes en la configuración, recuerda pulsar el botón "Reiniciar backend" para que los ajustes se apliquen correctamente.

Cuando queramos explorar los recursos en este archivo, nos enfocaremos principalmente en las __Unidades Documentales__. Por eso, este es el tipo de contenido predeterminado en el módulo de catalogación. Al abrir el módulo o cargar el buscador en la herramienta, se abrirá automáticamente en la __Unidad Documental__, ya que es aquí donde se encuentra la información. Esto facilita la navegación y gestión de los documentos dentro de tu archivo.

La siguiente opción de configuración se refiere a los tipos de contenido que se muestran en la vista individual de los recursos. Vamos a usar un ejemplo para aclarar esto. Supongamos que tienes un fondo llamado "Noticias".

Cuando visitas el recurso "Noticias":

![Vista individual](/archihub.github.io/imagenes/vista_individual.png)

- __Sección "Conoce"__: En la parte izquierda de la pantalla, verás los metadatos de ese recurso.
- __Sección "Explora"__: Aquí encontrarás, en este caso, las __Unidades Documentales__ que están dentro de "Noticias".

Esta configuración define qué tipos de contenido se muestran en esa vista. Como mencionamos antes, el tipo que contiene la información son las __Unidades Documentales__. No queremos que se muestren las series o las secciones en esta vista, ya que estas se usan para organizar la información. En cambio, preferimos que estas aparezcan en forma de árbol, sirviendo como un filtro adicional.

Este enfoque te ayuda a centrarte en los recursos más relevantes, que en este caso son las __Unidades Documentales__, facilitando la navegación y la gestión de la información.

## Roles y acceso a la información

![Ajustes roles](/archihub.github.io/imagenes/ajustes_roles.png)

En este apartado de la configuración, debes seleccionar los listados creados para los [roles](../roles) y [niveles de acceso](../acceso). Esta configuración es vital para el correcto funcionamiento de ArchiHUB. Aunque es posible agregar nuevos roles o niveles de acceso a lo largo del uso de la herramienta, es importante no eliminar ni modificar los listados existentes en la configuración. Hacerlo podría generar errores en la instalación y afectar el funcionamiento de la herramienta.

Mantén estos listados actualizados y revisa periódicamente para asegurarte de que reflejan correctamente las necesidades y estructuras de acceso de tu organización, sin comprometer la integridad del sistema.

## Administración del índice

![Ajustes indice](/archihub.github.io/imagenes/ajustes_indice.png)

Uno de los pilares de ArchiHUB es la búsqueda avanzada, facilitada por la implementación de ElasticSearch para indexar y recuperar información. Esta indexación depende de la configuración y la sincronización entre la base de datos, la catalogación y el índice. Afortunadamente, ArchiHUB se encarga de todo esto automáticamente, permitiendo que te enfoques en usar la herramienta sin complicaciones.

Desde las opciones de configuración, puedes:

- __Activar o desactivar la búsqueda__: Esto es útil en máquinas con pocos recursos, ya que la búsqueda avanzada puede requerir una cantidad significativa de recursos. Si esta opción está desactivada la búsqueda por palabra clave no sirve pero puedes filtrar por listas cerradas.
- __Regenerar el índice__: Es necesario si has realizado cambios en los estándares de metadatos o en los tipos de contenido.
- __Reindexar los recursos__: Aunque no es un paso necesario en la mayoría de los casos, puedes usar esta opción si la búsqueda no está actualizada. ArchiHUB se encarga automáticamente de indexar tus recursos cuando los creas, actualizas o procesas.

Con estas opciones, puedes gestionar la búsqueda avanzada de manera eficiente, adaptándola a las necesidades y capacidades de tu sistema.