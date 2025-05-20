---
title: 'Actualizar el aplicativo'
description: 'Lorem ipsum dolor sit amet - 2'
---

ArchiHUB está en constante actualización y mejora. A veces, pueden surgir errores imprevistos. Por eso, es importante estar preparado para actualizar el aplicativo. Aquí te mostramos cómo hacerlo de dos maneras: reemplazando los archivos manualmente o actualizando vía git.

## Reemplazando los archivos

Si seguiste la guía de instalación y no estás familiarizado con las herramientas de desarrollo, es probable que debas actualizar las carpetas manualmente. Aunque pueda parecer laborioso, es un proceso relativamente sencillo. Acá están los pasos:

1. Descargar los repositorios:

    - Vuelve a descargar los repositorios tanto del [instalador](https://github.com/ArchiHUB-App/getting-started/archive/refs/heads/main.zip) como del [backend](https://github.com/ArchiHUB-App/archihub-backend/archive/refs/heads/master.zip) desde los repositorios oficiales.

2. Realizar una copia de seguridad:

    - Antes de reemplazar cualquier archivo, realiza una copia de seguridad del archivo `.env` en la carpeta `archihub`.

3. Reemplazar las carpetas:

    - Descomprime las carpetas descargadas si es necesario.
    - Localiza la carpeta archihub en tu instalación actual.
    - Reemplaza la carpeta archihub con la nueva carpeta archihub descargada.
    - Vuelve a copiar el archivo `.env` que guardaste en el paso __2__ en la carpeta `archihub`.
    - Dentro de la carpeta `backend` de tu instalación, reemplaza el contenido actual con el contenido del __backend__ descargado.

 ```
├── local-machine
│   ├── archihub (REEMPLAZAR guardando el archivo .env)
│   │   ├── frontend (REEMPLAZAR)
│   │   ├── backend (REEMPLAZAR CON LA CARPETA DEL BACKEND)
│   │   ├── mongo_db (REEMPLAZAR)
│   ├── webfiles
│   ├── userfiles
│   ├── temporal
│   ├── original
│   ├── data
│   │   ├── mongodb
│   │   ├── elastic
 ```

Con esto listo, podemos volver a iniciar el aplicativo con `docker compose up --build -d` desde la terminal.

## Usando GIT

Si utilizaste Git durante la instalación, el proceso de actualización es aún más sencillo. Solo debes hacer `git pull` tanto en la carpeta raiz como en la carpeta `backend`. De la misma forma, cuando hayas terminado debes vovler a iniciar el aplicativo con `docker compose up --build -d`.