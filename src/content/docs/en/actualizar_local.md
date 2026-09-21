---
title: 'Updating the application'
description: 'How to update a local ArchiHUB installation, including the upgrade from version 1.x to 2.0.'
---

ArchiHUB is constantly being updated and improved. Sometimes unexpected bugs appear, so it is important to be ready to update the application. Here is how to do it.

Before any update, back up:

- the `local-machine/archihub/.env` file;
- the folders of the plugins you installed in `local-machine/archihub/backend/archihub/plugins/`, **including each one's `.env` file**. That file holds the plugin's settings and credentials, is not in any repository, and is lost if the `backend` folder is replaced or deleted;
- the data folders (`original`, `webfiles`, `userfiles` and `data`). To copy `data` consistently, stop the application first with `docker compose down`.

> **Do not run `install.sh` again to update.** The installer deletes the `archihub/backend` folder and downloads it again, which loses the installed plugins and their `.env` files.

## Updating within the same major version

If you installed with `git`, update the installer and the backend, and rebuild the images:

```bash
cd getting-started
git pull
cd local-machine/archihub/backend
git pull
cd ..
docker compose up -d --build
```

If you do not use `git`, download the [installer](https://github.com/Archihub-App/getting-started/archive/refs/heads/main.zip) and the [backend](https://github.com/Archihub-App/archihub-backend/archive/refs/heads/master.zip) again and replace the marked folders:

 ```
├── local-machine
│   ├── install.sh (REPLACE)
│   ├── archihub
│   │   ├── .env (KEEP)
│   │   ├── docker-compose.yml (REPLACE)
│   │   ├── frontend (REPLACE)
│   │   ├── backend (REPLACE WITH THE BACKEND FOLDER)
│   ├── webfiles
│   ├── userfiles
│   ├── temporal
│   ├── original
│   ├── data
│   │   ├── mongodb
│   │   ├── elastic
 ```

Replacing the `backend` folder deletes the plugins you installed in it. After replacing it, copy your plugin folders back from the backup into `archihub/backend/archihub/plugins/`, checking that each one still has its `.env` file, then start the application with `docker compose up -d --build`. `git pull` does not do this: plugins that do not ship with the backend, and their `.env` files, are not under version control, so `git pull` leaves them alone.

If you changed `URL_API` in `archihub/frontend/build/public/config.json`, set it again after replacing the `frontend` folder.

After updating, it is a good idea to regenerate the index from the system configuration.

## Upgrading from version 1.x to 2.0

Version 2.0 changes the installation's configuration, so on top of the steps above you need to go through the following. Your data (the database, the index and the files) is kept.

### 1. Deactivate the plugins that have no 2.0 version

Plugins written for version 1.x do not work on 2.0. If the database has a plugin active that is not installed in its 2.0 version, the backend does not start, and its log names the plugins preventing it.

Before upgrading, go to __System administration__ → __Plugins__ and deactivate every plugin you do not have a 2.0 version of. The plugins that ship with the backend (inventories, bulk edits, file processing, liquid text and system tasks) are already included and do not need to be deactivated.

If you have already upgraded and the backend does not start for this reason, you can deactivate a plugin directly in MongoDB, replacing `<plugin>` with the name shown in the log:

```bash
docker compose exec archihub_mongodb_server_01 mongosh -u '<MONGO_INITDB_ROOT_USERNAME>' -p '<MONGO_INITDB_ROOT_PASSWORD>' \
  --authenticationDatabase admin archihub-<ENVIRONMENT_NAME> \
  --eval "db.system.updateOne({name: 'active_plugins'}, {\$pull: {data: '<plugin>'}})"
```

### 2. Create the new `.env`, keeping your credentials

Several variables were renamed and others are no longer used, so it is better to start from the new template than to edit the old file:

1. Save the old file, for example as `.env.1x`.
2. Copy the new template: `cp .env.bak .env`.
3. Copy the values of these variables from `.env.1x`. Keeping them is essential: with a different password the backend cannot log in to the existing database, and with a different `FERNET_KEY` it cannot read the encrypted data.
   - `ENVIRONMENT_NAME`
   - `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD`
   - `ELASTIC_PASSWORD`
   - `JWT_SECRET_KEY`, `FERNET_KEY` and `NODE_TOKEN`
   - `REDIRECT_URL`
   - `USERFILES_PATH`, `WEBFILE_PATH`, `UPLOAD_PATH`, `TEMPORAL_PATH` and `DATA_PATH`
4. Copy the value of `BACKEND_PORT_FLASK` into `BACKEND_PORT`.

The other values in the old file are now written in `docker-compose.yml` or are no longer used. These are the renames:

| Version 1.x | Version 2.0 |
| --- | --- |
| `BACKEND_PORT_FLASK` | `BACKEND_PORT` |
| `FLASK_ENV` | `FASTAPI_ENV` |
| `GUNICORN_WORKERS` | `UVICORN_WORKERS` |
| `FLASK_DEBUG`, `SECRET_KEY` | no longer used |

### 3. Move each plugin's settings to its own `.env`

Each plugin now reads its settings from a `.env` file inside its own folder (`archihub/backend/archihub/plugins/<plugin>/.env`), not from the installation's `.env`. Every plugin ships a `.env.example` listing the variables it needs. For example, the `HF_TOKEN` of [automatic transcription](/archihub.github.io/en/transcribe) goes in the `.env` of `transcribeWhisperX`. The values you used in version 1.x are in the `.env.1x` you saved in the previous step.

Do not add plugin variables to `docker-compose.yml`: a variable set there, even to an empty value, takes precedence over the plugin's `.env`.

### 4. Replace the files and start

Replace the folders as described in the previous section. The `archihub/mongo_db` folder from version 1.x is no longer used and can be deleted. Then start the application:

```bash
docker compose up -d --build
```

The backend service is now called `archihub_backend`. If you have commands or scripts that use the old name, `archihub_flask_backend`, update them.

### 5. Regenerate the index

In the system configuration, in the __Administración de la búsqueda__ (search management) section, click __Regenerar índice__ (regenerate index) and then __Volver a indexar__ (reindex).
