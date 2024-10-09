# Cargas masivas usando el script de carga y la API de administración (instrucciones para el CNMH)

ArchiHUB tiene como objetivo ser lo más flexible posible tanto para la administración y organización del archivo como para su gestión. Para facilitar la carga de documentos y mantener la lógica y jerarquía que han trabajado los equipos, ArchiHUB ofrece un script simple pero muy útil para cargar carpetas.

Este script es especialmente útil en entornos donde los documentos se organizan en unidades de red basadas en una jerarquía de carpetas. En lugar de subir los documentos manualmente uno por uno, puedes usar este script para cargar toda la estructura de carpetas de una vez. El script utiliza la API de administración de ArchiHUB para realizar esta tarea de manera eficiente.

Con esta herramienta, puedes mantener la estructura de tus archivos y facilitar la migración de grandes volúmenes de documentos a ArchiHUB, asegurando que se respete la organización y jerarquía existentes.

Para esta guía, realizaremos dos ejemplos con dos estructuras de información distintas. Así que, prepara tus archivos, pon en marcha el aplicativo y ¡vamos a ello!

## Llave para la API de administración

Para ejecutar este y otros scripts que administren el aplicativo, necesitas tener una llave de administración. Esta llave es esencial para interactuar con la API de administración de ArchiHUB. Conoce más sobre como generarla [acá](/perfil/llaves.md).

## Descarga de los scripts

Si ya seguiste la [guía de instalación en un máquina local](install_local.md), ya descargaste el [repositorio](https://github.com/Archihub-App/getting-started) que necesitamos. Si no, puedes clonar el repositorio o descargarlo [acá](https://github.com/Archihub-App/getting-started/archive/refs/heads/main.zip).

```
git clone https://github.com/Archihub-App/getting-started.git
```

En la raíz de la carpeta verás una carpeta llamada `scripts`, el script en específico que nos interesa es el que se llama `folder_load.py`, pero antes de usarlo necesitamos ajustar algunas cosas.

## Configuración del script

El script de carga de carpetas para ArchiHUB tiene cuatro parámetros, de los cuales tres son obligatorios. A continuación, te explicamos cada uno de ellos y lo que necesitas para ejecutar el script:

- Parámetros Obligatorios
    - `--folder`
        - __Descripción__: Esta es la ruta de la carpeta raíz de los recursos que quieres cargar. Esta carpeta y su contenido será cargado al sistema.
        - __Ejemplo de Uso__: Si en tu estructura de archivo tienes un tipo de contenido __Fondo__ que es padre de otro tipo __Unidad Documental__, tu carpeta raíz será el __Fondo__ de tu __Unidad Documental__.
        - __Ejemplo Práctico__: Imagina que tienes una estructura donde "Proyectos" es un __Fondo__ y dentro de cada proyecto tienes varias __Unidades Documentales__. La carpeta raíz que especificarías en este parámetro sería "Proyectos" la cual contendría varias carpetas que terminarían siendo las __Unidades documentales__.
    - `--default_type`
        - __Descripción__: Este es el tipo de contenido que se usará por defecto para la carga si no se encuentra ningún archivo que especifique el tipo, como veremos en la siguiente parte.
        - __Ejemplo de Uso__: Puedes tener varios tipos de contenido configurados en tu archivo. Si el script no encuentra un archivo que especifique el tipo, usará este tipo por defecto para la carga.
    - `--main_type`
        - __Descripción__: Este es el tipo principal donde organizas la información en tu archivo. Es el tipo en el que reposan tus documentos.
        - __Ejemplo de Uso__: Por ejemplo, si __Unidad Documental__ es el tipo donde reposan tus documentos, este será tu tipo principal.
    - `--avoid`
        - __Descripción__: Este parámetro nos permite configurar Carpetas que deseamos saltar, como por ejemplo las carpetas Original. Es importante notar que en caso de encontrarse una carpeta Original, las demás carpetas serán ignoradas.
- Parámetro Opcional
    - `--publish`
        - __Descripción__: ArchiHUB permite que al crear un nuevo recurso este sea guardado o publicado. Activa este parámetro si quieres que los recursos que subas queden publicados directamente.
        - __Por Defecto__: Los recursos serán guardados como borrador.
        - __Ejemplo de Uso__: Si quieres que los documentos cargados estén disponibles inmediatamente, activa este parámetro.

## Requisitos y preparación de la carpeta

Para identificar el tipo de contenido de cada carpeta, debemos crear un archivo de texto. Dentro de este archivo, debemos escribir el nombre corto del tipo.

Si no estás seguro de cuál es el nombre corto, sigue estos pasos:

- Navega el módulo de catalogación y desde ahí escoje el tipo de contenido que quieras. <br> ![Módulo tipo](/imagenes/modulo_tipo.png)
- Cuando hayas escogido el tipo que te interesa, revisa la url que te sale en el navegador, la última parte es el nombre corto que necesitamos. En este ejemplo, el nombre corto de la __Unidad documental__ es `unidad-documental`.

Recuerda que uno de los parámetros que definimos anteriormente nos permitía definir un tipo por defecto. Si la carpeta no tiene ese archivo `.txt` con el nombre corto entonces automaticamente tomará ese tipo por defecto.

## Variables de entorno del script

Para poder ejecutar el script es necesario que tengamos una llave de administración creada. Una vez la tengamos debemos crear un archivo `.env` en la carpeta `scripts` en donde se encuentra nuestro script. Dentro de ese archivo pondremos nuestra llave de la siguiente forma:

```
ARCHIHUB_API_KEY=llave-de-administración
ARCHIHUB_API_URL=url-del-backend
```

También es importante notar la variable `ARCHIHUB_API_URL` la cual nos indica la ruta de la API. Por ejemplo, _http://localhost:5000/adminApi_.

Y ya estamos listos para subir nuestro contenido usando el script de carga!