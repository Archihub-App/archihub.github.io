---
title: 'Transcribe with WhisperX'
description: ''
---

The ArchiHUB automatic transcription plugin uses the Whisper model from OpenAI to automatically transcribe audio or video files uploaded to ArchiHUB. To make this work correctly, you need to follow these steps:

## Installation

1. **Installation of the application**: to install the application you must follow the steps mentioned in the [installation section](/archihub.github.io/en/install_local).

2. **Installation of the plugin**: to install the automatic transcription plugin, you must clone the [plugin repository](https://github.com/ArchiHUB-App/transcribeWhisperX.git) into the backend's `archihub/plugins` folder following the steps indicated in the [plugin installation section](/archihub.github.io/en/install_plugin).

3. **Hugging Face token configuration**: the plugin offers the option to generate the "flat" transcription of the voice or to separate the speakers identified in the audio. To use the second option, it is important to have an account on [Hugging Face](https://huggingface.co/) and create a token to use the speaker separation model:

    - Once the account is created, you must go to your profile settings and then to Access Tokens. You can also access [settings](https://huggingface.co/settings/tokens) (you must have logged into the account).
    - On the access tokens page, click the "Create new token" button.
    - Assign a name to the token in the "Token name" text field and select the following permissions:
        - `Repositories: Read access to contents of all repos under your personal namespace`
        - `Repositories: Read access to contents of all public gated repos you can access`
        - `Inference: Make calls to Inference Endpoints`
    - Save the configuration and copy the access key assigned at the end of the process.

4. **Access the diarization repository**: access the [model repository](https://huggingface.co/pyannote/speaker-diarization-3.1) and request access. Complete the form with the requested information.

5. **Environment variables configuration**: once the Hugging Face access token is generated, paste it into the plugin's settings. Copy the `.env.example` file in the plugin folder (`archihub/plugins/transcribeWhisperX/`) as `.env` in the same folder and set the token as the value of `HF_TOKEN`. This file belongs to the plugin; do not add the variable to the installation's `.env` or to `docker-compose.yml`.

6. **Enable the node for the `high` queue**: transcriptions run on the `high` queue, which the default processing node does not consume. In `docker-compose.yml`, uncomment the `celery_worker_queues` service (in its GPU or non-GPU version), as explained in the [advanced configuration](/archihub.github.io/en/config_local).

7. **Rebuild the images**: from the `local-machine/archihub` folder, run `docker compose up -d --build`. If you change the plugin's `.env` later, restarting from the system configuration (__Reinicio del sistema__ → __Reiniciar backend__) is enough.

## Using the plugin

### Using from the processing view

Once restarted, access the ArchiHUB interface and go to the processing tab. If the transcription plugin is not enabled, enable it from the __Plugins__ submenu in __System administration__; the application restarts by itself to apply the change.

It is important that the [processing row](/archihub.github.io/en/nodos#the-process-queues) required to execute plugin tasks has been started.

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

![Viewing transcription results in ArchiHUB](/archihub.github.io/imagenes/download_transcription.gif)

## Editing transcripts

After a transcript is generated, it is possible to edit it from the file view in the cataloging module. There are two editing options:

- **Speakers edition**: if the transcript was generated with the option to separate speakers, it is possible to edit the names of the speakers by selecting the `Edit speakers` option in the edit transcript option:
  
![Edit speakers in ArchiHUB](/archihub.github.io/imagenes/edit_speakers.gif)

- **Transcript edition**: it is possible to edit the content of the transcript by selecting the `Edit transcript` option. To do this, select the text segment you want to edit and modify the content and the speaker if necessary. Once you have finished editing, click the `Save` button to save the changes:

![Edit transcript in ArchiHUB](/archihub.github.io/imagenes/edit_transcription.gif)
