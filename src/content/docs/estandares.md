---
title: 'Los estándares de metadatos y tipos de contenido '
description: ''
---

ArchiHUB ha sido diseñado para ofrecer la máxima flexibilidad en cuanto a los diferentes tipos de contenido que puede manejar. Esta versatilidad se refleja en la capacidad de crear diversos tipos de contenido y establecer relaciones entre ellos. Un ejemplo concreto es la posibilidad de organizar el contenido en series documentales, que a su vez pueden contener expedientes.

Cada tipo de contenido puede ser configurado con el estándar de metadatos que mejor se adapte a las estructuras de datos específicas y a su vez se pueden crear nuevos estándares de acuerdo a las necesidades. Siguiendo el ejemplo mencionado, las series documentales y los expedientes pueden ser organizados utilizando el estándar internacional ISAD-G.

Esta capacidad de personalización en la configuración de los metadatos permite a la herramienta de gestión documental ajustarse a los requerimientos específicos de cualquier institución, garantizando que la información sea organizada y almacenada de manera coherente y estructurada. Al utilizar diferentes estándares para distintos tipos de contenido, se asegura una gestión eficiente y precisa de la documentación recopilada.

## Los estándares de metadatos

![menu](/archihub.github.io/imagenes/estandares.gif)

Cuando definimos un nuevo tipo de contenido, es fundamental tener una comprensión clara de los metadatos que deseamos implementar para ese tipo específico. En nuestra aplicación, los estándares de metadatos son independientes del tipo, lo que significa que un estándar de metadatos puede estar vinculado a uno o varios tipos al mismo tiempo.

Para el correcto uso de ArchiHUB, es fundamental comprender y seguir los estándares de metadatos. Aunque nuestra plataforma te permite editar estos estándares incluso después de haber subido contenido, es importante que los campos existentes no cambien de tipo. Por ejemplo, no debes cambiar un campo de tipo fecha a uno de tipo número, ya que esto requeriría borrar y volver a catalogar el contenido. Idealmente, deberías utilizar la funcionalidad de edición de estándares de metadatos solo para agregar nuevos campos. Esto asegura que el sistema funcione correctamente y que tu contenido esté siempre bien organizado.

![pantallazo campo metadatos](/archihub.github.io/imagenes/field.png)

Un campo tiene mínimo 4 opciones configurables:

- __Nombre__: este es el nombre del campo en el formulario y el que verán los usuarios para identificarlo del resto.
- __Tipo__: el tipo de campo define el tipo de contenido que se guardará en ese campo.
- __Destino__: esta es la ruta al interior del esquema de metadatos. Por defecto todos los destinos deben empezar con _metadata_, por ejemplo, la ruta por defecto para el título es _metadata.firstLevel.title_. De esta manera yo puedo tener el mismo campo, con el mismo tipo y destino en dos o más estándares distintos. Si intentas guardar un campo que ya ha sido configurado con cierto tipo no podrás guardarlo con uno distinto. Si quieres consultar el esquema completo de tus metadatos en la herramienta, puedes ir a la configuración del sistema.
- __Requerido__: si el campo es requerido o no.

Un estándar de metadatos ofrece una lista de metadatos que se pueden personalizar según las necesidades específicas del tipo de contenido. Los tipos de campos disponibles son diversos y se adaptan a una amplia gama de posibilidades. Mira la documentación detallada [acá](./campos).

## Los tipos de contenido

![menu](/archihub.github.io/imagenes/tipos.gif)

Los tipos de contenido tienen la función de establecer las categorías de recursos que la herramienta de gestión documental va a organizar, así como la jerarquía en la que estos recursos serán estructurados. Para ilustrar esto, consideremos un archivo de ejemplo en el que queremos tener una estructura de la siguiente forma:

 ```
├── Fondo
│   ├── Serie documental
│   │   ├── Expediente
 ```

En este caso la jerarquía de la información funciona de la siguiente manera: los expedientes están contenidos en series documentales que a su vez están contenidas en fondos. La definición de estos tipos de contenido y su jerarquía permite una estructura lógica y ordenada del archivo. Esto facilita la búsqueda, navegación y recuperación de información, además de proporcionar una vista coherente y organizada de los documentos. Ahora veámos como implementar la estructura de nuestro archivo.

### Haciendo un nuevo tipo de contenido

Cuando definimos un nuevo tipo de contenido, podemos configurar varios parámetros según nuestras necesidades.

En situaciones donde el tipo de contenido se encuentra dentro de otro, como es el caso de los expedientes, es necesario especificar el tipo padre. En este contexto, al crear un nuevo expediente, siempre debemos asociarlo con una serie documental como su tipo padre. Sin embargo, dado que los expedientes no pueden estar contenidos dentro de otros expedientes, la opción jerárquica no se habilita en este caso. Por otro lado, las series documentales pueden tener subseries documentales, y en este escenario, la opción jerárquica si aplica.