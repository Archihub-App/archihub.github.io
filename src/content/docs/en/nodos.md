---
title: 'Process rows and processing nodes'
description: ''
---

As you may have noticed, ArchiHUB handles certain tasks in what we call processing rows. Each user has its own processing and in turn the system can also add automatic processing.

This is very useful not only to balance the load between several machines but also to define process queues.

## The process queues

Initially, all tasks that are added to the process queue in ArchiHUB have the same processing load. However, ArchiHUB allows the implementation of more complex processing that might require a different configuration, such as a machine with access to a GPU for more intensive processing.

In these cases, it is possible to deploy a processing node on that machine, dedicated exclusively to the most intensive tasks. An example of this is the plugin for [automatic transcription](/archihub.github.io/en/transcribe), which uses OpenAI's Whisper model.

This processing is executed only on machines that are running a processing node for the `high` queue. If at the time you run the task there is no node in charge of these tasks, the task will be paused until there is one online that allows it to continue.

### Starting a processing node

The processing nodes in ArchiHUB are configured in a similar way to the application backend and must have access to the same folders, environment variables and services. In order to function correctly, it is necessary to ensure that all environment variables defined for the backend are also present in the processing nodes. In addition, an additional environment variable must be defined, `CELERY_WORKER=true`. This variable allows to identify these instances as Celery `workers` and avoids duplication of automatic tasks.

In the Docker installation, the `celery_worker` service in `docker-compose.yml` is already a processing node with this configuration. Outside Docker, the command to start a processing node from the backend folder is:

```
celery --app archihub.worker.celery_app worker --loglevel INFO
```

This will start a processing node for all tasks that do not have a specific task queue specified. This includes all system tasks, such as inventory generation or indexing. You can have multiple nodes running on the same machine or configure the number of parallel tasks each is capable of running. By default, each node runs only one task at a time, but this can be configured depending on the capacity of the machine.

If you want to start a node focused on high, medium and low intensity tasks, use the command below. In Docker, this is what the `celery_worker_queues` service, commented out in `docker-compose.yml`, does through the `CELERY_QUEUES=high,medium,low` variable:

```
celery --app archihub.worker.celery_app worker -Q high,medium,low --loglevel INFO
```

### Scheduled Tasks Planner (Celery Beat)

ArchiHUB uses **Celery Beat** to execute scheduled and periodic system tasks (such as automated maintenance, synchronizations, or temporary file cleanups). This component acts as a scheduler, dispatching tasks to their corresponding queues based on predefined intervals.

> ⚠️ **CRITICAL:** Unlike workers, **only one instance of Celery Beat must be running globally** across the entire environment to prevent periodic tasks from being triggered multiple times.

In Docker, the scheduler is the `celery_beat` service, commented out in `docker-compose.yml` (it sets `CELERY_RUN_MODE=beat`). Outside Docker, run the following command:

```bash
celery --app archihub.worker.celery_app beat --loglevel INFO

```

*Note: For development environments or simplified single-container deployments, you can combine the worker and the beat into a single process using the `-B` flag (e.g., `celery --app archihub.worker.celery_app worker -B --loglevel INFO`). However, for production environments, it is highly recommended to keep them in separate processes.*

### Processing nodes for tasks that require GPU

For tasks that require the use of a GPU such as automatic transcription, it is necessary to add two additional parameters to the start command of the processing node:

```
CUDA_VISIBLE_DEVICES=0 celery --app archihub.worker.celery_app worker -Q high,medium,low --loglevel INFO -P solo
```

In Docker, the GPU version of the `celery_worker_queues` service in `docker-compose.yml` already sets `CUDA_VISIBLE_DEVICES: 0` and the `-P solo` option. Change the variable in that file, not in `.env`: `docker-compose.yml` only passes to the containers the variables it names.

If the machine has more than one GPU, you can define the `CUDA_VISIBLE_DEVICES` variable with the indexes of the GPUs you want to use. For example, if you want to use GPUs 0 and 1, you must define the `CUDA_VISIBLE_DEVICES` variable with the value `0,1`.

### Configure the number of tasks executed by each node

Each node is capable of running multiple tasks concurrently. By default, ArchiHUB configures the system so that each node only runs one task at a time. This setting can be changed through the environment variables of each node.

```
CELERYD_CONCURRENCY=1
```
It is recommended to test and validate the machine's capacity for the specific tasks to be executed. For example, a node in charge of system tasks can handle between 10 and 20 tasks simultaneously, depending on the machine being used. However, for nodes in charge of more intensive tasks, it is recommended not to run more than one task at a time.

### In Case of Issues

If the processing node stops and needs to be restarted, this may happen when running the transcription module or intensive processing that does not use the GPU:

```
docker compose ps
# List the services to find the node's name, for example celery_worker

docker compose restart <service name>
```