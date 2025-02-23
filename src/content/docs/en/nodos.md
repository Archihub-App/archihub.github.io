---
title: 'Process rows and processing nodes'
description: ''
---

As you may have noticed, ArchiHub handles certain tasks in what we call processing rows. Each user has its own processing and in turn the system can also add automatic processing.

This is very useful not only to balance the load between several machines but also to define process queues.

## The process queues

Initially, all tasks that are added to the process queue in ArchiHub have the same processing load. However, ArchiHub allows the implementation of more complex processing that might require a different configuration, such as a machine with access to a GPU for more intensive processing.

In these cases, it is possible to deploy a processing node on that machine, dedicated exclusively to the most intensive tasks. An example of this is the plugin for [automatic transcription](https://github.com/Archihub-App/transcribeWhisperX), which uses OpenAI's Whisper model.

This processing is executed only on machines that are running a processing node for the `high` queue. If at the time you run the task there is no node in charge of these tasks, the task will be paused until there is one online that allows it to continue.

### Starting a processing node

The processing nodes in ArchiHub are configured in a similar way to the application backend and must have access to the same folders, environment variables and services. In order to function correctly, it is necessary to ensure that all environment variables defined for the backend are also present in the processing nodes. In addition, an additional environment variable called `CELERY_WORKER` must be defined and assigned any value. This variable allows to identify these instances as Celery `workers` and avoids duplication of automatic tasks.

The terminal command to start a processing node is:

```
celery --app app.celery_app worker --loglevel INFO
```

This will start a processing node for all tasks that do not have a specific task queue specified. This includes all system tasks, such as inventory generation or indexing. You can have multiple nodes running on the same machine or configure the number of parallel tasks each is capable of running. By default, each node runs only one task at a time, but this can be configured depending on the capacity of the machine.

If you want to start a node focused on high, medium and low intensity tasks, you do so with:

```
celery --app app.celery_app worker -Q high,medium,low --loglevel INFO
```

### Processing nodes for tasks that require GPU

For tasks that require the use of a GPU such as automatic transcription, it is necessary to add two additional parameters to the start command of the processing node:

```
CUDA_VISIBLE_DEVICES=0 celery --app app.celery_app worker -Q high,medium,low --loglevel INFO -P solo
```

If you prefer to use the machine's environment variables, you can define the `CUDA_VISIBLE_DEVICES` variable in the machine's `.env` file and assign it the value `0`. This will allow the processing node to use the machine's GPU 0.

If the machine has more than one GPU, you can define the `CUDA_VISIBLE_DEVICES` variable with the indexes of the GPUs you want to use. For example, if you want to use GPUs 0 and 1, you must define the `CUDA_VISIBLE_DEVICES` variable with the value `0,1`.

### Configure the number of tasks executed by each node

Each node is capable of running multiple tasks concurrently. By default, ArchiHub configures the system so that each node only runs one task at a time. This setting can be changed through the environment variables of each node.

```
CELERYD_CONCURRENCY=1
```
It is recommended to test and validate the machine's capacity for the specific tasks to be executed. For example, a node in charge of system tasks can handle between 10 and 20 tasks simultaneously, depending on the machine being used. However, for nodes in charge of more intensive tasks, it is recommended not to run more than one task at a time.