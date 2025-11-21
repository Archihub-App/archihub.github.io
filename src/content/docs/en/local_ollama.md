---
title: "Running AI Models Locally with Ollama"
description: "Guide to running artificial intelligence models locally using Ollama in ArchiHUB."
---

# Running AI Models Locally with Ollama

Ollama is a tool that allows you to run large language models (LLMs) locally on your machine. This is especially useful for those who want to maintain data privacy or reduce dependence on cloud services. Below is detailed how to integrate Ollama with ArchiHUB to leverage AI models locally.

## Prerequisites

Before starting, make sure you have the Ollama container enabled in ArchiHUB's `docker-compose.yml`. You should have a configuration similar to the following:

```yaml
  archihub_ollama:
    image: ollama/ollama:latest
    ports:
      - "${OLLAMA_PORT}:${OLLAMA_PORT}"
    volumes:
      - ${OLLAMA_PATH}:/root/.ollama
    environment:
      <<: *backend_env_variables
      CUDA_VISIBLE_DEVICES: 0
    networks:
      - archihub_mongo_network
      - archihub_elastic_network
    command: serve
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
    restart: unless-stopped
```

## Configuring Ollama-related environment variables (in the `.env` file)

For Ollama to work properly with ArchiHUB, you need to configure the following environment variables in the `.env` file:

```env
# Ollama settings
OLLAMA_HOST=archihub_ollama # Name of the Ollama container service
OLLAMA_PORT=11434
OLLAMA_PATH=/path/to/ollama/data
```

## Installing models in Ollama

Once Ollama is running, you can install AI models using the `ollama pull` command. For example, to install the `llama2` model, run the following command in the terminal:

```bash
docker exec -it archihub_ollama ollama pull llama2 # Replace "llama2" with the name of the model you want to install. Validate the container name.
```

## Creating the assistant in ArchiHUB

After installing the models in Ollama, ArchiHUB will be able to use them for various artificial intelligence tasks. To do this, from the AI assistants menu in ArchiHUB, select Ollama as the AI provider and assign a name to the assistant:

![Creating the assistant in ArchiHUB](/archihub.github.io/imagenes/ollama_assistant.png)

![Configuring the assistant in ArchiHUB](/archihub.github.io/imagenes/ollama_assistant2.png)

With these steps, you will have successfully configured Ollama to run AI models locally in ArchiHUB. You can now leverage artificial intelligence capabilities without relying on external services.

## Using models in ArchiHUB

Once the Ollama assistant is configured in ArchiHUB, you can use the installed models for various tasks, such as text generation, document analysis, among others. Below is a list of resources that the assistant can use:

- Documents uploaded to ArchiHUB.
- Images uploaded to ArchiHUB (if the model supports it).
- Audio to text transcriptions.
- Additional information provided by the user.

For example, if you have a video that was transcribed using the transcription plugin, the assistant will be able to analyze the resulting text to answer questions or generate summaries based on the video content:

![Analyzing transcriptions with Ollama](/archihub.github.io/imagenes/ollama_transcription.png)

Or if you want to identify a bird from an image uploaded to ArchiHUB, the assistant can help you identify it using an Ollama model that supports image analysis:

![Identifying images with Ollama](/archihub.github.io/imagenes/ollama_image.png)