---
title: "Preguntas Frecuentes - ArchiHUB"
description: "Respuestas a las dudas más comunes sobre instalación, uso, despliegue y características de ArchiHUB."
---

# Preguntas Frecuentes sobre ArchiHUB

## 🖥️ Requisitos y Compatibilidad

### ¿Cuáles son los requisitos mínimos para usar ArchiHUB?
ArchiHUB requiere:
- Docker y Docker Compose instalados
- Conexión estable a internet
- Mínimo recomendado: 4 GB de RAM y 2 núcleos de CPU

Funciona perfectamente en servidores modestos. Como referencia, **ArchiHUB se ejecuta sin problemas en un Raspberry Pi 4**.

### ¿ArchiHUB funciona en Windows, macOS y Linux?
Sí. Al estar basado en Docker, es completamente multiplataforma (Windows, macOS, Linux, incluyendo arquitecturas ARM64 como Raspberry Pi).

## ❗ Errores frecuentes

### Guardé un recurso pero no lo veo en el módulo de catalogación

ArchiHUB permite **guardar** o **publicar** los recursos.
Si acabas de guardar un recurso y no lo ves en el módulo de catalogación, es probable que esté como **borrador**.
En la barra lateral izquierda activa la opción **“Ver borradores”**. Allí podrás ver todos tus borradores.

Ten en cuenta que un recurso **solo será visible para otros usuarios cuando lo publiques**.
Los borradores únicamente los pueden ver tú y los usuarios con rol **super-editor**.

### Los archivos aparecen con la etiqueta "Sin procesar"

Cuando cargas un archivo a ArchiHUB, este **no se procesa automáticamente por defecto**.
Para activar el procesamiento automático, revisa los **primeros pasos de la documentación**.

Si cargaste archivos **antes** de habilitar este procesamiento, deberás procesarlos **manualmente**.
En la vista de detalle del recurso, y si tu usuario tiene permisos, verás en la barra lateral la opción para **procesar los archivos**.

### Procesé los archivos pero siguen con la etiqueta "Sin procesar"
ArchiHUB utiliza **nodos de procesamiento independientes** del aplicativo para manejar los archivos.
Si lanzaste el procesamiento y el archivo continúa marcado como **“Sin procesar”**, es necesario contactar al **administrador del sistema** para verificar que dichos nodos estén **en línea y funcionando correctamente**.

### Mi usuario no existe o no puedo ingresar

En este caso debes consultar con el **administrador del sistema** para verificar que tu usuario exista en la base de datos.
Si tu instalación utiliza **LDAP**, asegúrate de que tu usuario esté incluido en el **grupo correspondiente**.

### No aparece mi recurso en la búsqueda

Si realizaste cambios y no se ven reflejados en la búsqueda, puede existir un problema con la **indexación**.

* Verifica que el índice esté configurado correctamente (ver sección inferior de esta documentación).
* Si realizaste cambios en el formulario, es necesario **regenerar el índice** para que la búsqueda reconozca la nueva estructura de datos.

### No puedo ver el recurso que hizo otro usuario
Si otro usuario creó un recurso y tú no puedes verlo, puede deberse a lo siguiente:
- El recurso fue guardado como borrador. Si no tienes el rol de `super-editor`, no podrás visualizarlo.
- No cuentas con los niveles de acceso necesarios. En ese caso, verifica que el recurso tenga un nivel de acceso compatible con tu usuario o que haya sido publicado como recurso público.


## 🎮 Uso de GPU para Tareas Avanzadas

### ¿ArchiHUB soporta el uso de GPU?
Sí, ArchiHUB permite el uso de GPU (NVIDIA compatibles con CUDA) para tareas de procesamiento intensivo, como la transcripción automática de audio con modelos como Whisper. Esto acelera significativamente procesos que de otro modo dependerían solo del CPU.

### ¿Cuáles son los requisitos para usar GPU en ArchiHUB?
- Una GPU NVIDIA con soporte CUDA instalada y accesible.
- Configura nodos de procesamiento dedicados (workers de Celery) en máquinas con GPU.
- Variable de entorno `CELERY_WORKER` (cualquier valor) para identificar el nodo como worker.
- Concurrencia recomendada: `CELERYD_CONCURRENCY=1` para evitar sobrecarga.

Nota: Si no hay un nodo GPU disponible para una tarea, se pausará hasta que lo esté.

### ¿Cómo configuro un nodo para tareas con GPU?
1. En la máquina con GPU, define `CUDA_VISIBLE_DEVICES=0` (o `0,1` para múltiples GPUs) en tu archivo `docker-compose.yml`(disponible en [este enlace](https://github.com/Archihub-App/getting-started/blob/main/local-machine/archihub/docker-compose.yml) en la sección `CELERY QUEUE SERVICE USING GPU`)

## 🤖 Ejecución de Modelos de IA Locales con Ollama y GPU

### ¿Qué es Ollama y cómo se integra con ArchiHUB?
Ollama es una herramienta open-source que permite ejecutar modelos de lenguaje grandes (LLMs) localmente, garantizando privacidad y reduciendo la dependencia de servicios en la nube. En ArchiHUB, se integra para potenciar asistentes de IA con modelos locales, como análisis de documentos, generación de resúmenes o procesamiento de imágenes/transcripciones.

### ¿Cuáles son los requisitos para usar Ollama con GPU?
- GPU NVIDIA compatible con CUDA (para aceleración; sin GPU, funciona en CPU pero más lento).
- Docker y el contenedor de Ollama habilitado en `docker-compose.yml`.
- Variables de entorno en `.env`: `OLLAMA_HOST=archihub_ollama`, `OLLAMA_PORT=11434`, `OLLAMA_PATH=/ruta/a/datos/ollama`.
- Espacio en disco para modelos (pueden ser varios GB por modelo).

### ¿Cómo configuro Ollama con soporte GPU?
1. En el `docker-compose.yml`, habilita el servicio `archihub_ollama` con imagen `ollama/ollama:latest`:
- Expone puerto: `${OLLAMA_PORT}:${OLLAMA_PORT}`.
- Volúmenes: `${OLLAMA_PATH}:/root/.ollama` para almacenar modelos.
- Para GPU: Agrega en `environment`: `CUDA_VISIBLE_DEVICES: 0`, y en `deploy.resources.reservations.devices`:

```
driver: nvidia
count: 1
capabilities: [gpu]
```

2. Inicia los servicios: `docker compose up -d`.
3. Instala un modelo: `docker exec -it <nombre_contenedor_ollama> ollama pull <modelo>` (ej. `llama2` o `llava` para visión).

Nota: Ollama detecta automáticamente la GPU si está configurada. Para múltiples GPUs, ajusta `CUDA_VISIBLE_DEVICES=0,1`.

### ¿Cómo uso Ollama en ArchiHUB?
1. Una vez configurado, ve a la sección de Asistentes en ArchiHUB.
2. Selecciona "Ollama" como proveedor de IA.
3. Asigna un nombre al asistente y elige el modelo instalado.
4. El asistente podrá usar recursos locales como documentos, imágenes o transcripciones para tareas como generación de texto o análisis.

Ejemplos: Análisis de transcripciones de video o identificación de elementos en imágenes (con modelos como Llava).

### ¿Hay problemas en el uso de Ollama con GPU?
- Verifica que el contenedor esté corriendo (`docker ps`) y el puerto accesible.
- Si la GPU no se detecta, confirma drivers NVIDIA y reinicia el contenedor.
- Modelos grandes tardan en descargarse; usa `ollama list` para verificar.

Para detalles completos, consulta la [documentación de Ollama en ArchiHUB](https://archihub-app.github.io/archihub.github.io/es/local_ollama/).

## 🚀 Instalación y Despliegue

### ¿Se puede desplegar ArchiHUB en la nube?
Sí. Puedes usar cualquier proveedor (AWS, Google Cloud, Azure, DigitalOcean, Hetzner, etc.).  
También tienes disponible una instancia pública de demostración:  
➜ [https://archihub.bit-sol.com.co](https://archihub.bit-sol.com.co)

### ¿Cómo actualizo ArchiHUB a la última versión?
1. Haz backup de tu base de datos y configuraciones
2. Detén los contenedores (`docker compose down`)
3. Actualiza el código: `git pull` en tu carpeta local ([front](https://github.com/Archihub-App/getting-started) y [back](https://github.com/Archihub-App/archihub-backend))
4. Reconstruye e inicia: `docker compose up -d --build`
5. Verifica que todo funcione correctamente

## 🔒 Privacidad y Seguridad

### ¿Dónde se almacenan mis datos?
Todos tus datos (proyectos, archivos BIM, documentos) se guardan **localmente en tu servidor**. ArchiHUB no envía información a servidores externos. Tú tienes el control total.

### ¿Puedo usar ArchiHUB en entornos de producción?
Sí, está diseñado y probado para producción. Para entornos críticos recomendamos ArchiHUB Pro con soporte prioritario y actualizaciones a la medida de sus necesidades.

## 🧑‍💻 Código Abierto y Contribución

### ¿ArchiHUB es de código abierto?
Sí, el backend es 100% open-source bajo licencia MIT.  
Repositorio oficial: [https://github.com/ArchiHUB-App](https://github.com/ArchiHUB-App)

El frontend es de uso libre bajo licencia [Creative Commons Atribución – No Comercial – Sin Derivadas 4.0 Internacional (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es). Para más detalles respecto a la licencia del frontend, [dirigirse aquí](https://github.com/Archihub-App/getting-started/blob/main/local-machine/archihub/frontend/LICENSE.md).

### ¿Cómo puedo contribuir?
- Reportando bugs o sugerencias en GitHub Issues
- Mejorando la documentación
- Desarrollando nuevas funcionalidades o plugins
- Ayudando a otros usuarios en la comunidad
- Dando ★ al repositorio y compartiéndolo

## 📚 Documentación y Soporte

### ¿Dónde encuentro ayuda oficial?
- Documentación principal → [archihub-app.github.io](https://archihub-app.github.io/archihub.github.io/)
- Documentación técnica generada con DeepWiki → [deepwiki.com/Archihub-App/archihub-backend](https://deepwiki.com/Archihub-App/archihub-backend)
- Issues y soporte comunitario → [GitHub](https://github.com/Archihub-App/archihub-backend/issues/new)
- Soporte premium (respuesta < 24h) → Solo usuarios ArchiHUB Pro

## 🔧 Personalización e Integraciones

### ¿Puedo personalizar la interfaz o agregar funcionalidades?
Sí. Puedes:
- Modificar el frontend (es un proyecto separado y completamente personalizable) ***Debes tener en cuenta los [acuerdos de licencia del front](https://github.com/Archihub-App/getting-started/blob/main/local-machine/archihub/frontend/LICENSE.md)***
- Crear tu propia interfaz usando la API completa
- Desarrollar plugins propios
- Solicitar desarrollo a medida (contacto en [bit-sol.com.co](https://bit-sol.com.co))

### ¿ArchiHUB soporta integración con herramientas de IA?
Sí. Actualmente permite conectar servicios externos de IA mediante plugins y APIs. Estamos trabajando en integraciones nativas más potentes (generación automática de memorias, detección de patrones avanzada, etc.).

## 🔍 Búsqueda e Índice (Elasticsearch)

### ¿Cómo activo la búsqueda avanzada con índice?
1. Asegúrate de que el servicio `elasticsearch` esté habilitado en tu `docker-compose.yml`
2. En Ajustes → activa “Usar índice para búsquedas”
3. Guarda y reinicia ArchiHUB

### ¿Por qué se desactiva sola la opción del índice?
Sucede cuando Elasticsearch no está corriendo o no puede conectarse. Verifica:
- Que el contenedor esté activo (`docker ps`)
- Que no haya errores en los logs de Elasticsearch

### ¿Cómo reindexar todo mi contenido?
Ve a **Ajustes → Regenerar el índice para la búsqueda de los recursos** → Haz clic en el botón.  
El proceso puede tardar según la cantidad de archivos. Solo es necesario hacerlo tras activar por primera vez o tras grandes cambios de contenido.

## 📂 Carpetas de datos de ArchiHUB

### ¿Qué permisos deben tener las carpetas de datos de ArchiHUB?
Las carpetas de datos deben tener permisos de lectura y escritura para el usuario que ejecuta los contenedores Docker.  
Por ejemplo, si usas Linux y ejecutas Docker como usuario `archihub`, asegúrate de que las carpetas tengan permisos adecuados:
```bash
chown -R archihub:archihub /ruta/a/original
chmod -R 755 /ruta/a/original
```

De misma forma para las otras carpetas de datos de ArchiHUB:
```
temporal
userfiles
webfiles
```

### ¿Qué carpetas se recomienda respaldar?
Se recomienda respaldar las siguientes carpetas para asegurar tus datos y configuraciones:
- `original`: Contiene los archivos originales subidos.
- `userfiles`: Contiene archivos generados por el usuario, como configuraciones y datos personalizados.
- `webfiles`: Contiene archivos relacionados con la interfaz web y recursos estáticos.

Además, es importante respaldar la base de datos utilizada por ArchiHUB para almacenar información crítica sobre proyectos, usuarios y configuraciones:
- `ruta/a/data/mongodb`: Contiene los datos de la base de datos MongoDB utilizada por ArchiHUB.

Si tienes el servicio de Elasticsearch habilitado, también es recomendable respaldar su carpeta de datos:
- `ruta/a/data/elasticsearch`: Contiene los datos del índice de búsqueda utilizado por ArchiHUB.

## 💼 Planes y Versión Pro

### ¿Qué ventajas tiene ArchiHUB Pro?
- Soporte técnico prioritario (respuesta < 24h)
- Actualizaciones y parches de seguridad garantizados
- Funcionalidades avanzadas (en desarrollo)
- Desarrollo de características a medida (opcional)

Más información: [https://bit-sol.com.co/project/archihub/](https://bit-sol.com.co/project/archihub/)

---

¿Tienes alguna pregunta que no aparece aquí?  
¡Escríbela en [GitHub Discussions](https://github.com/orgs/Archihub-App/discussions/new/choose) o [contáctanos directamente!](https://bit-sol.com.co/)