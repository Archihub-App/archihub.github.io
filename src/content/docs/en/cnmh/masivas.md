---
title: 'Bulk uploads using the loading script and administration API (instructions for CNMH)'
description: ''
---

ArchiHUB aims to be as flexible as possible for both archive administration and organization, as well as its management. To facilitate document uploading and maintain the logic and hierarchy that teams have worked with, ArchiHUB offers a simple but very useful script for uploading folders.

This script is especially useful in environments where documents are organized in network drives based on a folder hierarchy. Instead of uploading documents manually one by one, you can use this script to upload the entire folder structure at once. The script uses ArchiHUB's administration API to perform this task efficiently.

With this tool, you can maintain your file structure and facilitate the migration of large volumes of documents to ArchiHUB, ensuring that existing organization and hierarchy are respected.

For this guide, we will perform two examples with two different information structures. So, prepare your files, start up the application, and let's get to it!

## Administration API Key

To run this and other scripts that manage the application, you need to have an administration key. This key is essential for interacting with ArchiHUB's administration API. Learn more about how to generate it [here](../../perfil/llaves).

## Downloading the Scripts

If you have already followed the [local machine installation guide](../../install_local), you have already downloaded the [repository](https://github.com/Archihub-App/getting-started) that we need. If not, you can clone the repository or download it [here](https://github.com/Archihub-App/getting-started/archive/refs/heads/main.zip).

```
git clone https://github.com/Archihub-App/getting-started.git
```

In the root folder, you will see a folder called `scripts`. The specific script we're interested in is called `folder_load.py`, but before using it, we need to adjust a few things.

## Script Configuration

The folder loading script for ArchiHUB has four parameters, three of which are mandatory. Below, we explain each of them and what you need to execute the script:

- Mandatory Parameters
    - `--folder`
        - __Description__: This is the path to the root folder of the resources you want to load. This folder and its contents will be uploaded to the system.
        - __Example of use__: If in your file structure you have a __Fond__ content type that is a parent of another __Document Unit__ type, your root folder will be the __Fond__ of your __Document Unit__.
        - __Practical example__: Imagine you have a structure where “Projects” is a __Fond__ and within each project you have several __Document Units__. The root folder that you would specify in this parameter would be “Projects” which would contain several folders that would end up being the __Document Units__.
    - `--default_type`
        - __Description__: This is the default content type that will be used for uploading if no file specifying the type is found, as we will see in the next part.
        - __Example of use__: You can have several content types configured in your file. If the script does not find a file that specifies the type, it will use this type by default for the upload.
    - `--main_type`
        - __Description__: This is the main type where you organize the information in your file. It is the type in which your documents are stored.
        - __Example of use__: For example, if __Document Unit__ is the type where your documents are stored, this will be your main type.
    - `--avoid`
        - __Description__: This parameter allows us to configure Folders that we want to skip, such as the Original folders. It is important to note that if an Original folder is found, the other folders will be ignored.
- Optional Parameter
    - `--publish`
        - __Description__: ArchiHub allows you to save or publish a new resource when you create it. Activate this parameter if you want the resources you upload to be published directly.
        - __By default__: The resources will be saved as a draft.
        - __Example of use__: If you want the uploaded documents to be available immediately, activate this parameter.

## Folder requirements and preparation

To identify the content type of each folder, we need to create a text file. Inside this file, we need to write the short name of the type.

If you are not sure what the short name is, follow these steps:

- Navigate to the cataloging module and from there choose the content type you want. <br> ![Type module](/archihub.github.io/imagenes/modulo_tipo.png)
- Once you have chosen the type you are interested in, check the url that appears in the browser, the last part is the short name we need. In this example, the short name of the __Document unit__ is `document-unit`.

Remember that one of the parameters we defined earlier allowed us to define a default type. If the folder does not have that `.txt` file with the short name then it will automatically take that type by default.

## Script environment variables

In order to be able to execute the script it is necessary that we have an administration key created. Once we have it we must create an `.env` file in the `scripts` folder where our script is located. Inside that file we will put our key in the following way:

```
ARCHIHUB_API_KEY=administration-key
ARCHIHUB_API_URL=url-backend-key
```

It is also important to note the `ARCHIHUB_API_URL` variable which indicates the API path. For example, _http://localhost:5000/adminApi_.

And now we are ready to upload our content using the upload script!