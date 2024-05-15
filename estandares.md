# Los estándares de metadatos y tipos de contenido

ArchiHUB ha sido diseñado para ofrecer la máxima flexibilidad en cuanto a los diferentes tipos de contenido que puede manejar. Esta versatilidad se refleja en la capacidad de crear diversos tipos de contenido y establecer relaciones entre ellos. Un ejemplo concreto es la posibilidad de organizar el contenido en series documentales, que a su vez pueden contener expedientes.

Cada tipo de contenido puede ser configurado con el estándar de metadatos que mejor se adapte a las estructuras de datos específicas y a su vez se pueden crear nuevos estándares de acuerdo a las necesidades. Siguiendo el ejemplo mencionado, las series documentales y los expedientes pueden ser organizados utilizando el estándar internacional ISAD-G.

Esta capacidad de personalización en la configuración de los metadatos permite a la herramienta de gestión documental ajustarse a los requerimientos específicos de cualquier institución, garantizando que la información sea organizada y almacenada de manera coherente y estructurada. Al utilizar diferentes estándares para distintos tipos de contenido, se asegura una gestión eficiente y precisa de la documentación recopilada.

## Los tipos de contenido

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
