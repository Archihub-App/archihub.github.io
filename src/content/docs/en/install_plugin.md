---
title: 'Install a plugin'
description: 'How to install and activate a plugin on a local ArchiHUB installation.'
---

Let's learn how to install a plugin in ArchiHUB to extend the capabilities of our application.

## The plugins that ship with the application

The plugins installed in your archive from the start come with the backend and cover the basic functionality, such as inventory creation, bulk edits and file processing.

![Default plugins](/archihub.github.io/imagenes/plugins_defecto.png)

Other plugins are commonly found in a separate repository.

> **Important:** ArchiHUB 2.0 only loads plugins written for version 2.0. A plugin for version 1.x does not work: before installing one, check in its repository that it supports version 2.0.

## Installation

1. **Copy the plugin**: download the plugin and copy its folder into `getting-started/local-machine/archihub/backend/archihub/plugins/`. The folder name must be the plugin's name, for example `archihub/plugins/transcribeWhisperX`.

2. **Configure the plugin**: if the plugin ships a `.env.example` file, copy it as `.env` in the same folder and fill in its values. Each plugin's settings go in its own `.env`, not in the installation's `.env`.

3. **Rebuild the images**: from the `local-machine/archihub` folder, run:

   ```
   docker compose up -d --build
   ```

   The build installs the dependencies the plugin declares: its Python packages (`requirements.txt`) and any system programs it needs (`packages.txt`). You do not have to install anything by hand.

4. **Activate the plugin**: go to the __Plugins__ submenu in __System administration__ and activate it.

   ![Activate plugins](/archihub.github.io/imagenes/plugin_activate.png)

   When a plugin is activated or deactivated, the application restarts the backend and the processing nodes to apply the change. There is no need to restart the containers.

We can now go back to the processing menu, where the new plugin should appear as active.

## After installing

- **Settings changes**: each plugin's `.env` is read at startup. After changing it, restart from the system configuration (__Reinicio del sistema__ → __Reiniciar backend__) or with `docker compose restart`.
- **Code changes**: the containers run the plugin code that was copied into the image when it was built. If you update a plugin, run `docker compose up -d --build` again.
- **Processing queues**: some plugins send their tasks to a specific queue (`high`, `medium` or `low`) that the default node does not consume. If the plugin says so, enable the `celery_worker_queues` service as explained in the [advanced configuration](/archihub.github.io/en/config_local).

That's all for now. You can explore the general plugin guide to learn more, or learn how to [create your own plugin](/archihub.github.io/en/crear_plugin).
