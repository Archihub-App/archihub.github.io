---
title: 'Instalar un plugin'
description: 'Cómo instalar y activar un plugin en una instalación local de ArchiHUB.'
---

Aprendamos a instalar un plugin en ArchiHUB para ampliar las capacidades de nuestra aplicación.

## Los plugins que vienen con el aplicativo

Los plugins que están instalados en tu archivo desde el inicio acompañan al backend y cumplen con las funcionalidades básicas, como la creación de inventarios, las ediciones masivas y el procesamiento de archivos.

![Plugins por defecto](/archihub.github.io/imagenes/plugins_defecto.png)

Los demás plugins se encuentran comúnmente en un repositorio separado.

> **Importante:** ArchiHUB 2.0 solo carga plugins escritos para la versión 2.0. Un plugin de la versión 1.x no funciona: antes de instalarlo, verifica en su repositorio que sea compatible con la versión 2.0.

## Instalación

1. **Copia el plugin**: descarga el plugin y copia su carpeta en `getting-started/local-machine/archihub/backend/archihub/plugins/`. El nombre de la carpeta debe ser el del plugin, por ejemplo `archihub/plugins/transcribeWhisperX`.

2. **Configura el plugin**: si el plugin trae un archivo `.env.example`, cópialo como `.env` en la misma carpeta y completa sus valores. La configuración de cada plugin va en su propio `.env`, no en el `.env` de la instalación.

3. **Reconstruye las imágenes**: desde la carpeta `local-machine/archihub` ejecuta:

   ```
   docker compose up -d --build
   ```

   Durante la construcción se instalan las dependencias que el plugin declara: las de Python (`requirements.txt`) y los programas del sistema que necesite (`packages.txt`). No tienes que instalar nada a mano.

4. **Activa el plugin**: ve al submenú de __Plugins__ en la __Administración del sistema__ y actívalo.

   ![Activar plugins](/archihub.github.io/imagenes/plugin_activate.png)

   Al activar o desactivar un plugin, el aplicativo reinicia el backend y los nodos de procesamiento para aplicar el cambio. No hace falta reiniciar los contenedores.

Ahora podemos volver a nuestro menú de procesamientos y debería aparecer el nuevo plugin activo.

## Después de instalar

- **Cambios en la configuración**: el `.env` de cada plugin se lee al iniciar. Después de modificarlo, reinicia desde la configuración del sistema (__Reinicio del sistema__ → __Reiniciar backend__) o con `docker compose restart`.
- **Cambios en el código**: los contenedores ejecutan el código del plugin que se copió en la imagen al construirla. Si actualizas un plugin, vuelve a ejecutar `docker compose up -d --build`.
- **Filas de procesamiento**: algunos plugins envían sus tareas a una fila específica (`high`, `medium` o `low`) que el nodo por defecto no atiende. Si el plugin lo indica, habilita el servicio `celery_worker_queues` como se explica en la [configuración avanzada](/archihub.github.io/es/config_local).

Eso es todo por ahora, puedes explorar la guía general de los plugins para saber más, o aprender a [crear tu propio plugin](/archihub.github.io/es/crear_plugin).
