---
title: 'Primeros pasos ¡Bienvenido!'
description: ''
---

![homepage](/imagenes/home.png)

¡Bienvenido al inicio de la aplicación! Actualmente, tienes un usuario con todos los permisos, lo que te da acceso completo al menú. Aprovechemos esta oportunidad para explorar todas las funcionalidades y familiarizarnos con la plataforma. ¡Vamos a echar un vistazo!

### Catalogación

![modulo de catalogación](/imagenes/catalogacion.gif)
![home del modulo de catalogación](/imagenes/home_catalogacion.png)

Esta es nuestra pantalla principal, donde pasarás la mayor parte del tiempo navegando por los archivos. Es importante que te familiarices con su funcionamiento para aprovechar al máximo todas las funcionalidades. Vamos a explorar juntos cómo funciona y cómo puedes utilizarlo de manera eficiente.

![menu tipos de contenido](/imagenes/menu_tipos.png)

En la esquina superior izquierda, encontrarás una lista desplegable con los tipos de contenido que vienen predefinidos con la instalación de ArchiHUB. Si quieres saber más sobre estos tipos de contenido, haz clic [aquí](/estandares).

Es importante saber que los tipos de contenido tienen una jerarquía. Actualmente estamos viendo __Unidad Documental__ y su jerarquía asociada es la siguiente:

 ```
├── Fondo
│   ├── Unidad Documental
│   ├── Sección
│   │   ├── Unidad Documental
│   ├── Serie
│   │   ├── Unidad Documental
 ```

 Como puedes ver, la __Unidad Documental__ puede estar contenida en un __Fondo__, una __Sección__ o una __Serie__. Estos tipos, que llamaremos los padres de la __Unidad Documental__, aparecerán a la izquierda. Aunque ahora no hay nada, pronto comenzaremos a construir nuestro archivo. Las __unidades documentales__ se mostrarán en la parte derecha de la pantalla.

 Esta estructura te ayudará a organizar y navegar por tus archivos de manera efectiva. ¡Vamos a comenzar a construir tu archivo!

![Nuevo fondo](/imagenes/new_fondo.gif)

Para crear una nueva __Unidad Documental__, primero debemos crear un __Fondo__ que la contenga. Sigue estos pasos:

- Abrir el formulario de creación: Cuando abras por primera vez el formulario de creación, verás el formulario por defecto del ISAD-G. Puedes saber más sobre los estándares de metadatos [acá](estandares.md).
- Rellenar el formulario: No te preocupes por todos los campos en este momento. Solo necesitas introducir un _Título_ para tu nuevo recurso de tipo __Fondo__.
- Guardar el __Fondo__: Una vez que hayas introducido el _Título_, puedes guardar tu nuevo recurso de tipo __Fondo__.

Ahora estás listo para crear __Unidades Documentales__ dentro de este __Fondo__. ¡Vamos a empezar!

![Nueva Unidad Documental](/imagenes/new_unidad.png)

Al crear una Unidad Documental, notarás algunas diferencias clave en el formulario de creación:

- Estructura de árbol a la izquierda: A la izquierda del formulario, verás una estructura de árbol. Esta te permite seleccionar el padre al que quieres asignar la nueva __Unidad Documental__, ya sea un __Fondo__, una __Sección__ o una __Serie__.

- Formulario a la derecha: A la derecha, encontrarás el formulario con los mismos campos que usaste para crear un __Fondo__, ya que la __Unidad Documental__ utiliza el mismo estándar de metadatos, ISAD-G.

Para crear una __Unidad Documental__, sigue estos pasos:

- Seleccionar el padre: En la estructura de árbol a la izquierda, selecciona el padre adecuado (__Fondo__, __Sección__ o __Serie__) para la nueva __Unidad Documental__.
- Rellenar el formulario: Introduce la información necesaria en el formulario a la derecha. Los campos serán los mismos que ya conoces del estándar ISAD-G. No tienes que ponerlos todos, podemos por ahora completar el título y subir un nuevo documento, ¡intenta arrastrar y soltar unos cuantos archivos!
- Guardar la __Unidad Documental__: Una vez completado el formulario, guarda tu nueva __Unidad Documental__. Si haces click en __Guardar__ esta se guardará como borrador y no será visible para los usuarios que no sean editores. En cambio, el botón __Publicar__ te permite hacer público tu recurso para todos los usuarios.

![Home Unidad Documental](/imagenes/home_unidad.png)

Una vez que hayas guardado tu nueva __Unidad Documental__, serás redireccionado automáticamente al Módulo de Catalogación. Aquí podrás ver la __Unidad Documental__ que acabas de crear.

Para mostrarte un ejemplo, yo he subido un archivo de audio a una nueva __Unidad Documental__ llamada "Audio". En la lista de __Unidades Documentales__, encuentra y haz clic en el nombre de tu recurso recién creado.

![Vista detalle del recurso](/imagenes/detail.png)

Esta es la vista detalle de tu recurso, donde puedes encontrar la información general de tu __Unidad Documental__. Aquí tienes una guía rápida sobre lo que puedes hacer desde esta vista:

- ![Miga de pan](/imagenes/miga.png)<br>__Miga de pan (breadcrumbs):__ En la esquina superior izquierda, verás la miga de pan que muestra la jerarquía de la información. Como puedes ver, tu recurso es hijo del __Fondo__ que creamos al inicio. Esto te ayuda a entender la estructura y ubicación de tu recurso dentro del archivo.

- ![Menu detail](/imagenes/menu_detail.png)<br>__Botones de navegación:__ En la parte izquierda de la pantalla, encontrarás los botones para:
    - Volver al Módulo de Catalogación
    - Editar el recurso actual

- ![Vista principal detalle](/imagenes/main_detail.png)<br>__Información del recurso:__ La parte principal de la pantalla muestra toda la información asociada a tu recurso, incluyendo:
    - Metadatos: Detalles específicos sobre tu recurso siguiendo el estándar ISAD-G.
    - Archivos contenidos: Los archivos que has subido a esta __Unidad Documental__.
    - Recursos hijos: En el caso que estes viendo un recurso de un tipo de contenido que es padre de otros recursos, estos se mostrarán aquí, listando todos los recursos asociados y organizados en árbol.

### Procesamientos

Para poder interactuar con el audio que has subido (o con tu propio archivo), primero necesitamos procesarlo utilizando un plugin. Actualmente, los archivos subidos tienen un estado de "Sin procesar" y no son clicables. Sigue estos pasos para procesar tus archivos:

- Ir a la página principal: Desde la vista detalle de tu recurso, regresa a la página principal de ArchiHUB.
- Navegar a la sección de Procesamientos: En la página principal, dirígete a la sección de "Procesamientos".
- Seleccionar el plugin de Procesamiento de archivos: Una vez en la sección de Procesamientos, busca el plugin llamado "Procesamiento de archivos".

Este plugin se encargará de procesar tus archivos, cambiando su estado de "Sin procesar" a un formato en el que puedas interactuar con ellos.

![Plugin procesamiento archivos](/imagenes/plugin_file.png)

Tenemos dos opciones disponibles, por ahora vamos a __Procesamiento masivo__ y ya volvemos para mirar los __Ajustes Generales__. La vista de Procesamiento Masivo es similar al Módulo de Catalogación, pero con algunas diferencias clave. Aquí, además de seleccionar los padres, también puedes seleccionar recursos específicos.
- __Seleccionar un padre:__ Si seleccionas solo un padre, el procesamiento se ejecutará en todas las Unidades Documentales que estén dentro de ese recurso.
- __Seleccionar recursos específicos:__ Si seleccionas uno o más recursos específicos, el procesamiento se ejecutará solo en esos recursos seleccionados.
- __Opciones del procesamiento:__ A la derecha se ven las opciones que están disponibles para el procesamiento. En nuestro caso, el plugin de Procesamiento de Archivos permite sobreescribir versiones antiguas de las versiones web de los documentos.

Podemos seleccionar el recurso que acabamos de crear e iniciar el procesamiento. Una vez haces click e inicias el procesamiento puedes dirigirte a tu perfil en el apartado __Mis procesamientos__:

![Menu procesamientos](/imagenes/menu_procesamientos.png)

Esta vista te permite monitorizar el progreso y resultados de tus procesamientos:

![procesamientos](/imagenes/procesamientos.png)

Y cuando haya terminado:

![fin procesamiento](/imagenes/fin_procesamiento.png)

### Procesamientos automaticos

Para evitar repetir manualmente los pasos de procesamiento cada vez que subes un nuevo recurso con archivos, puedes configurar procesamientos automáticos. Esto se logra mediante la funcionalidad de "filas de ejecución" en algunos plugins. Aquí te mostramos cómo hacerlo:

- __Ir a la vista de los plugins__: Desde la página principal, regresa a la sección de Procesamientos.
- __Seleccionar Ajustes Generales__: Busca el plugin "Procesamiento de archivos" y selecciona la opción de Ajustes Generales.
- __Configurar procesamiento automático__: En los Ajustes Generales, tienes la opción de agregar un nuevo procesamiento autómatico. Debes seleccionar un tipo de contenido, para nuestro caso seleccionamos __Unidad Documental__ y en el segundo campo podemos dejar el número 0. Cuando hablemos de filas avanzadas de procesamiento aprenderemos a usar ese campo para configurar el orden de ejecución. <br>![Fila de procesamientos](/imagenes/fila_procesamiento.png)<br>De esta forma configuramos el procesamiento automático del plugin para los archivos cada vez que se crea o actualiza una __Unidad Documental__.

De esta manera, cada vez que subas o actualices un recurso de tipo __Unidad Documental__, el procesamiento de archivos se ejecutará automáticamente sin necesidad de intervención manual.

¡Eso es todo por ahora! Con los pasos que hemos cubierto, ya puedes empezar a configurar y gestionar tu archivo en ArchiHUB. Recuerda que hay muchas más funcionalidades y opciones disponibles en la herramienta.

- __Explora más__: Te animamos a seguir explorando el resto de la documentación para descubrir todas las posibilidades que ArchiHUB ofrece.
- __Experimenta__: No dudes en seguir "cacharreando" con tu archivo. La mejor manera de aprender y familiarizarse con la herramienta es experimentando con sus diferentes funcionalidades.

¡Buena suerte con tu archivo y diviértete explorando ArchiHUB ❤️!