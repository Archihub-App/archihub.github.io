---
title: 'Transcripción automática con WhisperX'
description: ''
---

El plugin de transcripción automática de ArchiHub utiliza el modelo Whisper de OpenAI para transcribir automáticamente los archivos de audio o video que se carguen a ArchiHub. Para que este funcione correctamente, es necesario tener en cuenta los siguientes pasos:


## Instalación

1. **Instalación del aplicativo**: para instalar el aplicativo debes seguir los pasos en la mencionados en la sección de [instalación](../install_local).

2. **Instalación del plugin**: para instalar el plugin de transcripción automática, debes clonar el [repositorio del plugin](https://github.com/Archihub-App/transcribeWhisperX.git) en la carpeta `plugins` del aplicativo siguiendo los pasoos indicados en la sección de [instalación de plugins](../install_plugin).

3. **Configuración del token de Hugging Face**: el plugin ofrece la opción de generar la transcripción “plana” de la voz o de separar los parlantes identificados en el audio. Para usar la segunda opción es importante tener una cuenta en [Hugging Face](https://huggingface.co/) y crear un token para hacer uso del modelo de separación de parlantes:

    - Una vez creada la cuenta, debes ir a los ajustes de tu perfil y luego a Access Tokens. También puedes acceder a [ajustes](https://huggingface.co/settings/tokens) (debes haber iniciado sesión en la cuenta).
    - En la página de tokens de acceso haz clic en el botón “Create new token”.
    - Asigna un nombre al token en el campo de texto “Token name” y selecciona los siguientes permisos:
        - `Repositories: Read access to contents of all repos under your personal namespace`
        - `Repositories: Read access to contents of all public gated repos you can access`
        - `Inference: Make calls to Inference Endpoints`
    - Guarda la configuración y copia la llave de acceso asignada al final del proceso.

4. **Accede al repositorio de diarización**: accede al [repositorio del modelo](https://huggingface.co/pyannote/speaker-diarization-3.1) y solicita acceso. Completa el formulario con la información solicitada.

5. **Configuración de las variables de entorno**: una vez generado el token de acceso de Hugging Face, debes pegar el token en las variables de entorno de Archihub. Para ello, abre el archivo .env en cualquier editor de texto y busca la variable `HF_TOKEN`. Si no existe, créala y asigna la llave generada.

6. **Reinicio del backend**: reinicia el backend del aplicativo con los siguientes comandos:

```bash
docker compose stop archihub_flask_backend
docker compose up --no-deps -d archihub_flask_backend
```

## Uso del plugin

### Uso desde la vista de procesamientos

Una vez reiniciado, accede a la interfaz de Archihub y ve a la pestaña de procesamientos. Si el plugin de transcripción no está habilitado, debes habilitarlo desde la pestaña de ajustes y luego reiniciar el aplicativo con los comandos indicaos en el paso anterior.

Es importante que la [fila de procesamiento](../nodos/#las-filas-de-procesos) requerida para ejecutar tareas del plugin se haya iniciado.

Una vez en el plugin, selecciona los archivos que quieres transcribir y configura las opciones del plugin:

- **Sobreescribir procesamientos existentes**: si esta opción está habilitada, el plugin sobreescribirá los archivos de transcripción existentes.

- **Separar parlantes**: la opción de separar parlantes habilitada hace uso del token configurado en los pasos anteriores de esta guía. Su uso requiere haber configurado el token.

- **Tamaño del modelo**: selecciona el tamaño del modelo a utilizar. El tamaño del modelo afecta la calidad de la transcripción y el tiempo de procesamiento.

- **Idioma de la transcripción**: selecciona el idioma del audio a transcribir. Por defecto, el idioma está en automático, por lo que el modelo intentará identificar el idioma del audio.

### Uso desde la vista de archivos en el módulo de catalogación

El plugin también puede ser utilizado desde la vista de archivos en el módulo de catalogación. Para ello, selecciona los archivos de audio o video a transcribir y en la opción de `Acciones` selecciona selecciona `Transcribir con Whisper`. Se mostrará una ventana emergente con las opciones de configuración del plugin. Configura las opciones y haz clic en el botón `OK` para iniciar el proceso de transcripción:

![Transcripción de archivos con WhisperX](/archihub.github.io/imagenes/transcribe_cat.gif)

## Visualización de los resultados de la transcripción

Una vez finalizado el proceso de transcripción, puedes visualizar los resultados desde el módulo de catalogación. Para ello, selecciona el archivo y selecciona `Transcripción automática` en el listado de procesamientos. Además, si se quiere descargar el archivo de transcripción, se puede hacer desde la opción de `Acciones` en la vista de archivos seleccionando la opción `Descargar transcripción`. Archihub permite descargar las transcripciones en formato `.pdf`, `.doc` o `.srt`:

![Visualización de transcripciones en Archihub](/archihub.github.io/imagenes/download_transcription.gif)



## Edición de transcripciones

Luego de generada una transcripción, es posible editarla desde la vista de archivos en el módulo de catalogación. Hay dos opciones de edición:

- **Edición de oradores**: si la transcripción fue generada con la opción de separar parlantes, es posible editar los nombres de los oradores seleccionando la opción `Editar oradores` en la opción de editar la transcripción:

![Edición de oradores en Archihub](/archihub.github.io/imagenes/edit_speakers.gif)

- **Edición de transcripción**: es posible editar el contenido de la transcripción seleccionando la opción `Editar transcripción`. Para esto, selecciona el segmento de texto que quieres editar y modifica el contenido y el orador en caso de ser necesario. Una vez finalizada la edición, haz clic en el botón `Guardar` para guardar los cambios:

![Edición de transcripción en Archihub](/archihub.github.io/imagenes/edit_transcription.gif)
