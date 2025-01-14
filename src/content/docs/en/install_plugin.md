---
title: 'Install a plugin'
description: ''
---

We are ready to get started. Let's learn how to install a plugin in ArchiHUB to extend the capabilities of our application. As an example, we will use the plugin to download YouTube videos. This is a simple example, as there are many more options for plugins that we will see later when we explore the more advanced options of the system. For now, let's download videos!

## Downloading the plugin

Application plugins are commonly found in a separate repository. The plugins that are currently installed in your archive are the default add-ons that accompany the application and fulfill basic functionality, such as inventory creation and bulk edits.

![Default plugins](/archihub.github.io/imagenes/plugins_defecto.png)

Download the new plug-in by going to [repository](https://github.com/Archihub-App/videoDownloader) or by clicking [here](https://github.com/Archihub-App/videoDownloader/archive/refs/heads/main.zip) to download the zip file.

When you have downloaded it you must unzip the file and copy the folder to `/gettin-started/local-machine/archihub/backend/app/plugins` as follows:

![Plugin folders](/archihub.github.io/imagenes/plugins_folders.png)

Once that is done we must restart the backend with the command:

```
docker compose up --build -d
```

With ArchiHUB, you don't have to worry about installing new dependencies or preparing the system for the new plug-in to run smoothly. The container will detect the changes in the folder and rebuild the backend container to ensure that the new plugin is ready to use. You just need to be patient and let ArchiHUB do its job automatically.

Once it has finished we go to the __Plugins__ submenu in the __System Administration__.

![Activate plugins](/archihub.github.io/imagenes/plugin_activate.png)

After activating the plugin, it is essential to restart the backend. This restart will prevent the download of dependencies, which should speed up the process.

```
docker compose stop archihub_flask_backend
docker compose up --no-deps -d archihub_flask_backend
```

Now we can go back to our processing menu and our new active plugin should appear:

![Video download](/archihub.github.io/imagenes/plugin_videos.png)

That's all for now, you can explore the general guide to plugins to learn more!