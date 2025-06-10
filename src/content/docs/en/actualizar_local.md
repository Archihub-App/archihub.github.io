---
title: 'Update the application'
description: 'Lorem ipsum dolor sit amet - 2'
---

ArchiHUB is constantly being updated and improved. Sometimes, unforeseen errors may occur. Therefore, it is important to be prepared to update the application. Here we show you how to do it in two ways: replacing the files manually or updating via git.

## Replacing the files

If you followed the installation guide and you are not familiar with the development tools, it is likely that you will have to update the folders manually. Although it may seem laborious, it is a relatively simple process. Here are the steps:

1. Download the repositories:

    - Re-download the repositories for both [installer](https://github.com/ArchiHUB-App/getting-started/archive/refs/heads/main.zip) and [backend](https://github.com/ArchiHUB-App/archihub-backend/archive/refs/heads/master.zip) from the official repositories.

2. Perform a backup:

    - Before replacing any files, make a backup copy of the `.env` file in the `archihub` folder.

3. Replace folders:

    - Unzip the downloaded folders if necessary.
    - Locate the archihub folder in your current installation.
    - Replace the archihub folder with the new downloaded archihub folder.
    - Copy the `.env` file you saved in step __2__ back into the `archihub` folder.
    - Inside the `backend` folder of your installation, replace the current contents with the contents of the downloaded __backend__.

 ```
├── local-machine
│   ├── archihub (REPLACE by saving the file .env)
│   │   ├── frontend (REPLACE)
│   │   ├── backend (REPLACE WITH BACKEND FOLDER)
│   │   ├── mongo_db (REPLACE)
│   ├── webfiles
│   ├── userfiles
│   ├── temporal
│   ├── original
│   ├── data
│   │   ├── mongodb
│   │   ├── elastic
 ```

With this ready, we can restart the application with `docker compose up --build -d` from the terminal.

## Using GIT

If you used Git during installation, the update process is even easier. Just do a `git pull` on both the root folder and the `backend` folder. In the same way, when you are done you should restart the application with `docker compose up --build -d`.