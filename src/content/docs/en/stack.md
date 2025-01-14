---
title: 'Technology stack and requirements'
description: ''
---

ArchiHUB is a versatile web platform that uses a varied technological stack to offer you a wide range of actions on your documents.

## Technology stack

![stack tech](/archihub.github.io/imagenes/infra.png)

- __Database:__ We rely on MongoDB, a highly flexible non-relational database. This choice allows us to adapt to your changing needs in terms of metadata schemas.

- __Index:__ The index allows us to retrieve information quickly and efficiently. ArchiHUB takes care of all the organization and adaptation of elasticsearch mappings.

- __In-memory database:__ We leverage Redis to implement a caching system that helps alleviate the load on our main database. In addition, we use Redis to manage a queue of processes with Celery, which allows us to handle tasks in an efficient and scalable manner.

- __Backend:__ The backend of our application benefits from several open source projects. We use:
<br> &nbsp;&nbsp; - __FFmpeg__: for file processing
<br> &nbsp;&nbsp; - __Celery__: for the management of the processing queue, allowing a distributed and asynchronous execution of tasks.
<br> &nbsp;&nbsp; - __Flask y Gunicorn__: to run the backend in parallel, ensuring optimal scalability and performance at all time.

- __Frontend:__ Our application has a frontend developed using React.js.

## Requirements

| Type | Requirements | Comments |
| ----------- | ----------- | ----------- |
| Local machine | - 8GB RAM <br> - Disk size according to the content. It is important to note that ArchiHUB generates multiple versions of the files in addition to the original. This means that the disk space required may vary according to the versions generated and the size of the originals.| It is important to note that in this installation, some plugins, such as the automatic transcription plugin, may require additional resources to run correctly. However, you can rest easy knowing that for the cataloging, retrieval and file organization functionalities, you will have no problems thanks to the optimization efforts we have made. |
| Installation in a multi-machine infrastructure | - __Two (2)__ machines for the MongoDB cluster <br> &nbsp;&nbsp; - Minimum 16GB of RAM for each and 8 CPU cores <br><br> - __Two (2)__ machines for the Elasticsearch cluster <br> &nbsp;&nbsp; - Minimum 32GB RAM for each and 16 CPU cores. Ideally 64GB of RAM. <br><br> - __One (1)__ machine for the application <br> &nbsp;&nbsp; - 64GB of RAM and 32 CPU cores. This machine is not only responsible for running the application itself, but also for handling the cache and managing the process queue. Since we run multiple instances of the backend in parallel, it is crucial to have enough RAM and CPU power to handle all requests efficiently. <br><br> - __Two (2)__ machines for processing <br> &nbsp;&nbsp; - ArchiHUB provides the possibility to separate rows of tasks depending on the intensity of the tasks to be executed. | This configuration provides the minimum necessary for rapid deployment that can easily adjust to changing application query requirements. If necessary, we can easily add new machines to each of the clusters to improve performance. This flexibility allows us to scale on demand and ensure that you always have the resources you need to maintain optimal performance. |