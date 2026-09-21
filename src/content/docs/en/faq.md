---
title: "Frequently Asked Questions - ArchiHUB"
description: "Answers to the most common questions about installation, usage, deployment, and features of ArchiHUB."
---

# Frequently Asked Questions about ArchiHUB

## 🖥️ Requirements and Compatibility

### What are the minimum requirements to use ArchiHUB?
ArchiHUB requires:
- Docker and Docker Compose installed
- Stable internet connection
- Minimum recommended: 4 GB RAM and 2 CPU cores

It works perfectly on modest servers. As a reference, **ArchiHUB runs smoothly on a Raspberry Pi 4**.

### Does ArchiHUB work on Windows, macOS, and Linux?
Yes. Being based on Docker, it is completely cross-platform (Windows, macOS, Linux, including ARM64 architectures like Raspberry Pi).

## ❗ Common Errors

### I saved a resource but I can’t see it in the cataloging module

ArchiHUB allows you to **save** or **publish** resources.
If you just saved a resource and don’t see it in the cataloging module, it’s likely saved as a **draft**.
In the left sidebar, enable **“View drafts”**. There you will find all your drafts.

Keep in mind that a resource **will only be visible to other users once you publish it**.
Drafts can only be seen by you and users with the **super-editor** role.

### Files appear with the “Unprocessed” label

When you upload a file to ArchiHUB, it is **not processed automatically by default**.
To enable automatic processing, review the **Getting Started** section of the documentation.

If you uploaded files **before** enabling automatic processing, you must process them **manually**.
In the resource detail view, and if your user has the required permissions, you will see an option in the sidebar to **process the files**.

### I processed the files but they are still marked as “Unprocessed”

ArchiHUB uses **independent processing nodes** separate from the main application to handle file processing.
If you triggered processing and the file remains marked as **“Unprocessed”**, you should contact the **system administrator** to verify that these nodes are **online and functioning correctly**.

### My user does not exist or I cannot log in

You should contact the **system administrator** to verify that your user exists in the database.
If your installation uses **LDAP**, ensure that your user is included in the **correct group**.

### My resource doesn’t appear in the search

If you made changes that are not showing up in the search results, there may be an issue with **indexing**.

* Verify that the index is correctly configured (see the section at the end of this document).
* If you modified the form, you need to **regenerate the index** so the search engine recognizes the updated data structure.

### I can't see a resource created by another user

If another user created a resource and you cannot see it, it may be due to one of the following reasons:

* The resource was saved as a draft. If you do not have the `super-editor` role, you won’t be able to view it.
* You do not have the required access levels. Check whether the resource has an access level compatible with your user, or whether it has been published as a public resource.

## 🎮 GPU Usage for Advanced Tasks

### Does ArchiHUB support GPU usage?
Yes, ArchiHUB allows the use of GPU (NVIDIA compatible with CUDA) for intensive processing tasks, such as automatic audio transcription with models like Whisper. This significantly accelerates processes that would otherwise depend only on the CPU.

### What are the requirements to use GPU in ArchiHUB?
- An NVIDIA GPU with CUDA support installed and accessible.
- Configure dedicated processing nodes (Celery workers) on machines with GPU.
- Environment variable `CELERY_WORKER=true` to identify the node as a worker.
- Recommended concurrency: `CELERYD_CONCURRENCY=1` to avoid overload.

Note: If no GPU node is available for a task, it will pause until one becomes available.

### How do I configure a node for GPU tasks?
1. On the machine with GPU, define `CUDA_VISIBLE_DEVICES=0` (or `0,1` for multiple GPUs) in your `docker-compose.yml` file (available at [this link](https://github.com/Archihub-App/getting-started/blob/main/local-machine/archihub/docker-compose.yml)), in the `celery_worker_queues` service of the `CELERY WORKER FOR NAMED QUEUES, WITH GPU` section, and uncomment that service. See [processing nodes](/archihub.github.io/en/nodos).

## 🤖 Running Local AI Models with Ollama and GPU

### What is Ollama and how does it integrate with ArchiHUB?
Ollama is an open-source tool that allows running large language models (LLMs) locally, ensuring privacy and reducing dependence on cloud services. In ArchiHUB, it integrates to power AI assistants with local models, such as document analysis, summary generation, or image/transcription processing.

### What are the requirements to use Ollama with GPU?
- NVIDIA GPU compatible with CUDA (for acceleration; without GPU, it works on CPU but slower).
- Docker and the Ollama container enabled in `docker-compose.yml`.
- Disk space for models (can be several GB per model).

### How do I configure Ollama with GPU support?
1. In `docker-compose.yml`, uncomment the `archihub_ollama` service. It already contains the GPU configuration (`CUDA_VISIBLE_DEVICES` and the `deploy` section); remove both if the machine has no NVIDIA GPU.
2. Start services: `docker compose up -d`.
3. Install a model: `docker compose exec archihub_ollama ollama pull <model>` (e.g., `llama2` or `llava` for vision).

Note: Ollama automatically detects the GPU if configured. For multiple GPUs, adjust `CUDA_VISIBLE_DEVICES=0,1`.

### How do I use Ollama in ArchiHUB?
1. Once configured, go to the __AI Assistants__ menu in ArchiHUB and create an assistant.
2. Select the `ollama` protocol and use the base URL `http://archihub_ollama:11434`.
3. Give the assistant a name and choose one of the installed models as the default model.
4. The assistant will be able to use local resources such as documents, images, or transcriptions for tasks like text generation or analysis.

Examples: Analysis of video transcriptions or identification of elements in images (with models like Llava).

### Are there any issues using Ollama with GPU?
- Verify that the container is running (`docker compose ps`).
- If GPU is not detected, confirm NVIDIA drivers and restart the container.
- Large models take time to download; use `ollama list` to verify.

For complete details, see the [Ollama documentation in ArchiHUB](https://archihub-app.github.io/archihub.github.io/en/local_ollama/).

## 🚀 Installation and Deployment

### Can ArchiHUB be deployed in the cloud?
Yes. You can use any provider (AWS, Google Cloud, Azure, DigitalOcean, Hetzner, etc.).  
You also have available a public demo instance:  
➜ [https://archihub.bit-sol.com.co](https://archihub.bit-sol.com.co)

### How do I update ArchiHUB to the latest version?
1. Backup your database and configurations
2. Stop the containers (`docker compose down`)
3. Update the code: `git pull` in the [installer](https://github.com/Archihub-App/getting-started) folder and in the [backend](https://github.com/Archihub-App/archihub-backend) folder (`local-machine/archihub/backend`). If you are coming from version 1.x, follow the [update guide](/archihub.github.io/en/actualizar_local).
4. Rebuild and start: `docker compose up -d --build`
5. Verify that everything works correctly

## 🔒 Privacy and Security

### Where is my data stored?
All your data (projects, BIM files, documents) is stored **locally on your server**. ArchiHUB does not send information to external servers. You have complete control.

### Can I use ArchiHUB in production environments?
Yes, it is designed and tested for production. For critical environments, we recommend ArchiHUB Pro with priority support and updates tailored to your needs.

## 🧑‍💻 Open Source and Contribution

### Is ArchiHUB open source?
Yes, the backend is 100% open-source under the [GNU AGPL v3](/archihub.github.io/en/licencia) license.  
Official repository: [https://github.com/ArchiHUB-App](https://github.com/ArchiHUB-App)

The frontend is free to use under the [Creative Commons Attribution – NonCommercial – NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/) license. For more details regarding the frontend license, [go here](https://github.com/Archihub-App/getting-started/blob/main/local-machine/archihub/frontend/LICENSE.md).

### How can I contribute?
- Reporting bugs or suggestions on GitHub Issues
- Improving documentation
- Developing new features or plugins
- Helping other users in the community
- Giving ★ to the repository and sharing it

## 📚 Documentation and Support

### Where can I find official help?
- Main documentation → [archihub-app.github.io](https://archihub-app.github.io/archihub.github.io/)
- Technical documentation generated with DeepWiki → [deepwiki.com/Archihub-App/archihub-backend](https://deepwiki.com/Archihub-App/archihub-backend)
- Issues and community support → [GitHub](https://github.com/Archihub-App/archihub-backend/issues/new)
- Premium support (response < 24h) → ArchiHUB Pro users only

## 🔧 Customization and Integrations

### Can I customize the interface or add functionalities?
Yes. You can:
- Modify the frontend (it's a separate and completely customizable project) ***You must comply with the [frontend license agreements](https://github.com/Archihub-App/getting-started/blob/main/local-machine/archihub/frontend/LICENSE.md)***
- Create your own interface using the complete API
- Develop your own plugins
- Request custom development (contact at [bit-sol.com.co](https://bit-sol.com.co))

### Does ArchiHUB support integration with AI tools?
Yes. It currently allows connecting external AI services through plugins and APIs. We are working on more powerful native integrations (automatic memory generation, advanced pattern detection, etc.).

## 🔍 Search and Index (Elasticsearch)

### How do I activate advanced search with indexing?
1. Check that the `archihub_elasticsearch` service is running (`docker compose ps`). The local installation includes it by default.
2. In the system configuration, in the __Administración de la búsqueda__ (search management) section, turn on __Activar el índice para las búsquedas__ and save.
3. Restart from the __Reinicio del sistema__ (system restart) section with the __Reiniciar backend__ button.

### Why does the index option turn off by itself?
This happens when Elasticsearch is not running or cannot connect. Verify:
- That the container is active (`docker ps`)
- That there are no errors in the Elasticsearch logs

### How do I reindex all my content?
Go to **Settings → Regenerate the index for resource search** → Click the button.  
The process may take time depending on the amount of files. It is only necessary to do this after activating it for the first time or after major content changes.

## 📂 ArchiHUB Data Folders

### What permissions should ArchiHUB data folders have?
Data folders must have read and write permissions for the user running the Docker containers.  
For example, if you're using Linux and running Docker as user `archihub`, make sure the folders have appropriate permissions:
```bash
chown -R archihub:archihub /path/to/original
chmod -R 755 /path/to/original
```

Similarly for the other ArchiHUB data folders:
```
temporal
userfiles
webfiles
```

### What folders should be backed up?
It is recommended to back up the following folders to secure your data and configurations:
- `original`: Contains the original uploaded files.
- `userfiles`: Contains user-generated files, such as configurations and customized data.
- `webfiles`: Contains files related to the web interface and static resources.

Additionally, it is important to back up the database used by ArchiHUB to store critical information about projects, users, and configurations:
- `path/to/data/mongodb`: Contains the MongoDB database data used by ArchiHUB.

If you have the Elasticsearch service enabled, it is also recommended to back up its data folder:
- `path/to/data/elastic`: Contains the search index data used by ArchiHUB.

## 💼 Plans and Pro Version

### What are the advantages of ArchiHUB Pro?
- Priority technical support (response < 24h)
- Guaranteed updates and security patches
- Advanced features (in development)
- Custom feature development (optional)

More information: [https://bit-sol.com.co/project/archihub/](https://bit-sol.com.co/project/archihub/)

---

Do you have a question that doesn't appear here?  
Write it on [GitHub Discussions](https://github.com/orgs/Archihub-App/discussions/new/choose) or [contact us directly!](https://bit-sol.com.co/)
