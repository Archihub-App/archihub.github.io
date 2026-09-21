---
title: 'Actualizar el aplicativo'
description: 'Cómo actualizar una instalación local de ArchiHUB, incluida la actualización de la versión 1.x a la 2.0.'
---

ArchiHUB está en constante actualización y mejora. A veces, pueden surgir errores imprevistos. Por eso, es importante estar preparado para actualizar el aplicativo. Aquí te mostramos cómo hacerlo.

Antes de cualquier actualización, haz una copia de seguridad de:

- el archivo `local-machine/archihub/.env`;
- las carpetas de los plugins que instalaste en `local-machine/archihub/backend/archihub/plugins/`, **incluido el archivo `.env` de cada uno**. Ese archivo tiene la configuración y las credenciales del plugin, no está en ningún repositorio y se pierde si se reemplaza o se borra la carpeta `backend`;
- las carpetas de datos (`original`, `webfiles`, `userfiles` y `data`). Para copiar `data` de forma consistente, detén antes el aplicativo con `docker compose down`.

> **No vuelvas a ejecutar `install.sh` para actualizar.** El instalador borra la carpeta `archihub/backend` y la descarga de nuevo, con lo que se pierden los plugins instalados y sus archivos `.env`.

## Actualizar dentro de la misma versión principal

Si instalaste con `git`, actualiza el instalador y el backend, y reconstruye las imágenes:

```bash
cd getting-started
git pull
cd local-machine/archihub/backend
git pull
cd ..
docker compose up -d --build
```

Si no usas `git`, descarga de nuevo el [instalador](https://github.com/Archihub-App/getting-started/archive/refs/heads/main.zip) y el [backend](https://github.com/Archihub-App/archihub-backend/archive/refs/heads/master.zip) y reemplaza las carpetas marcadas:

 ```
├── local-machine
│   ├── install.sh (REEMPLAZAR)
│   ├── archihub
│   │   ├── .env (CONSERVAR)
│   │   ├── docker-compose.yml (REEMPLAZAR)
│   │   ├── frontend (REEMPLAZAR)
│   │   ├── backend (REEMPLAZAR CON LA CARPETA DEL BACKEND)
│   ├── webfiles
│   ├── userfiles
│   ├── temporal
│   ├── original
│   ├── data
│   │   ├── mongodb
│   │   ├── elastic
 ```

Reemplazar la carpeta `backend` borra los plugins que instalaste en ella. Después de reemplazarla, vuelve a copiar las carpetas de tus plugins desde la copia de seguridad en `archihub/backend/archihub/plugins/`, verificando que cada una conserve su archivo `.env`, y luego inicia el aplicativo con `docker compose up -d --build`. Con `git pull` no pasa esto: los plugins que no vienen con el backend y sus `.env` no están bajo control de versiones, así que `git pull` no los modifica.

Si cambiaste `URL_API` en `archihub/frontend/build/public/config.json`, vuelve a ajustarlo después de reemplazar la carpeta `frontend`.

Después de actualizar, conviene regenerar el índice desde la configuración del sistema.

## Actualizar de la versión 1.x a la 2.0

La versión 2.0 cambia la configuración de la instalación, así que además de los pasos anteriores hay que revisar lo siguiente. Tus datos (la base de datos, el índice y los archivos) se conservan.

### 1. Desactiva los plugins que no tengan versión 2.0

Los plugins escritos para la versión 1.x no funcionan en la 2.0. Si la base de datos tiene activo un plugin que no está instalado en su versión 2.0, el backend no arranca y su registro indica qué plugins lo impiden.

Antes de actualizar, desactiva en __Administración del sistema__ → __Plugins__ los plugins de los que no tengas una versión 2.0. Los plugins que vienen con el backend (inventarios, ediciones masivas, procesamiento de archivos, texto líquido y tareas del sistema) ya están incluidos y no hace falta desactivarlos.

Si ya actualizaste y el backend no arranca por este motivo, puedes desactivar un plugin directamente en MongoDB, reemplazando `<plugin>` por el nombre que indica el registro:

```bash
docker compose exec archihub_mongodb_server_01 mongosh -u '<MONGO_INITDB_ROOT_USERNAME>' -p '<MONGO_INITDB_ROOT_PASSWORD>' \
  --authenticationDatabase admin archihub-<ENVIRONMENT_NAME> \
  --eval "db.system.updateOne({name: 'active_plugins'}, {\$pull: {data: '<plugin>'}})"
```

### 2. Crea el nuevo `.env` conservando tus credenciales

Varias variables cambiaron de nombre y otras ya no se usan, así que conviene partir de la nueva plantilla en lugar de editar el archivo anterior:

1. Guarda el archivo anterior, por ejemplo como `.env.1x`.
2. Copia la nueva plantilla: `cp .env.bak .env`.
3. Copia desde `.env.1x` los valores de estas variables. Es imprescindible conservarlos: con otra contraseña el backend no puede entrar a la base de datos existente, y con otra `FERNET_KEY` no puede leer los datos cifrados.
   - `ENVIRONMENT_NAME`
   - `MONGO_INITDB_ROOT_USERNAME` y `MONGO_INITDB_ROOT_PASSWORD`
   - `ELASTIC_PASSWORD`
   - `JWT_SECRET_KEY`, `FERNET_KEY` y `NODE_TOKEN`
   - `REDIRECT_URL`
   - `USERFILES_PATH`, `WEBFILE_PATH`, `UPLOAD_PATH`, `TEMPORAL_PATH` y `DATA_PATH`
4. Copia el valor de `BACKEND_PORT_FLASK` en `BACKEND_PORT`.

Los demás valores del archivo anterior ya están en `docker-compose.yml` o no se usan. Estos son los cambios de nombre:

| Versión 1.x | Versión 2.0 |
| --- | --- |
| `BACKEND_PORT_FLASK` | `BACKEND_PORT` |
| `FLASK_ENV` | `FASTAPI_ENV` |
| `GUNICORN_WORKERS` | `UVICORN_WORKERS` |
| `FLASK_DEBUG`, `SECRET_KEY` | ya no se usan |

### 3. Mueve la configuración de los plugins a su propio `.env`

Cada plugin lee ahora su configuración de un archivo `.env` dentro de su propia carpeta (`archihub/backend/archihub/plugins/<plugin>/.env`), no del `.env` de la instalación. Cada plugin trae un `.env.example` con las variables que necesita. Por ejemplo, el `HF_TOKEN` de la [transcripción automática](/archihub.github.io/es/transcribe) va en el `.env` de `transcribeWhisperX`. Los valores que usabas en la versión 1.x están en el `.env.1x` que guardaste en el paso anterior.

No agregues variables de plugins al `docker-compose.yml`: una variable definida allí, aunque esté vacía, tiene prioridad sobre el `.env` del plugin.

### 4. Reemplaza los archivos e inicia

Reemplaza las carpetas como se indica en la sección anterior. La carpeta `archihub/mongo_db` de la versión 1.x ya no se usa y puedes borrarla. Luego inicia el aplicativo:

```bash
docker compose up -d --build
```

El servicio del backend ahora se llama `archihub_backend`. Si tienes comandos o scripts que usan el nombre anterior, `archihub_flask_backend`, actualízalos.

### 5. Regenera el índice

En la configuración del sistema, en la sección __Administración de la búsqueda__, haz clic en __Regenerar índice__ y luego en __Volver a indexar__.
