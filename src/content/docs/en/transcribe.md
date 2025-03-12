---
title: 'Transcribe with WhisperX'
description: ''
---

The ArchiHub automatic transcription plugin uses the Whisper model from OpenAI to automatically transcribe audio or video files uploaded to ArchiHub. To make this work correctly, you need to follow these steps:

## Installation

1. **Installation of the application**: to install the application you must follow the steps mentioned in the [installation section](../install_local).

2. **Installation of the plugin**: to install the automatic transcription plugin, you must clone the [plugin repository](https://github.com/Archihub-App/transcribeWhisperX.git) in the `plugins` folder of the application following the steps indicated in the [plugin installation section](../install_plugin).

3. **Hugging Face token configuration**: the plugin offers the option to generate the "flat" transcription of the voice or to separate the speakers identified in the audio. To use the second option, it is important to have an account on [Hugging Face](https://huggingface.co/) and create a token to use the speaker separation model:

    - Once the account is created, you must go to your profile settings and then to Access Tokens. You can also access [settings](https://huggingface.co/settings/tokens) (you must have logged into the account).
    - On the access tokens page, click the "Create new token" button.
    - Assign a name to the token in the "Token name" text field and select the following permissions:
        - `Repositories: Read access to contents of all repos under your personal namespace`
        - `Repositories: Read access to contents of all public gated repos you can access`
        - `Inference: Make calls to Inference Endpoints`
    - Save the configuration and copy the access key assigned at the end of the process.

4. **Access the diarization repository**: access the [model repository](https://huggingface.co/pyannote/speaker-diarization-3.1) and request access. Complete the form with the requested information.

5. **Environment variables configuration**: once the Hugging Face access token is generated, you must paste the token into the Archihub environment variables. To do this, open the .env file in any text editor and look for the `HF_TOKEN` variable. If it does not exist, create it and assign the generated key.

6. **Restart the backend**: restart the application backend with the following commands:

```bash
docker compose stop archihub_flask_backend
docker compose up --no-deps -d archihub_flask_backend
```

## Using the plugin

### Using from the processing view

Once restarted, access the ArchiHub interface and go to the processing tab. If the transcription plugin is not enabled, you must enable it from the settings tab and then restart the application with the commands indicated in the previous step.

It is important that the [processing row](../nodos/#the-process-queues) required to execute plugin tasks has been started.

Once in the plugin, select the files you want to transcribe and configure the plugin options:

- **Overwrite existing processes**: if this option is enabled, the plugin will overwrite existing transcription files.
- **Separate speakers**: the option to separate speakers enabled uses the token configured in the previous steps of this guide. Its use requires having configured the token.
- **Model size**: select the model size to use. The model size affects the quality of the transcription and the processing time.
- **Transcription language**: select the language of the audio to transcribe. By default, the language is set to automatic, so the model will try to identify the language of the audio.

### Using from the file view in the cataloging module

The plugin can also be used from the file view in the cataloging module. To do this, select the audio or video files to transcribe and in the `Actions` option select `Transcribe with Whisper`. A popup window will appear with the plugin configuration options. Configure the options and click the `OK` button to start the transcription process:

![Transcription of files with WhisperX](/archihub.github.io/imagenes/transcribe_cat.gif)

## Viewing the transcription results

Once the transcription process is complete, you can view the results in the file view in the cataloging module. The transcription files will be displayed in the file list with the transcription icon. Click on the transcription icon to view the transcription text. You can also download the transcription file by clicking on the download icon. The transcription files can be downloaded in formats such as `.pdf`, `.doc`, or `.srt`.

![Viewing transcription results in ArchiHub](/archihub.github.io/imagenes/download_transcription.gif)
