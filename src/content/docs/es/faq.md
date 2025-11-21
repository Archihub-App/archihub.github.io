---
title: "Preguntas Frecuentes"
description: "Respuestas a las preguntas más comunes sobre ArchiHUB."
---

# Preguntas Frecuentes

## ¿Cuáles son los requisitos mínimos para usar ArchiHUB?
Para utilizar ArchiHUB, necesitas un dispositivo con Dokcer instalado y una conexión a internet estable. Recomendamos al menos 4 GB de RAM y 2 CPU para un rendimiento óptimo. Sin embargo, los requisitos pueden variar según el tamaño de los proyectos que manejes.

Como referencia, ArchiHUB se ha estado ejecutando en un Raspberry Pi 4.

## ¿Cómo puedo contribuir al proyecto ArchiHUB?
Puedes contribuir al proyecto ArchiHUB de varias maneras:
- Reportando errores o sugiriendo mejoras en nuestro [repositorio de GitHub](https://github.com/Archihub-App/archihub-backend).
- Participando en discusiones y ayudando a otros usuarios en nuestra comunidad.
- Desarrollando nuevas características o mejorando la documentación.
- Compartiendo ArchiHUB con tus colegas y amigos.

## ¿Dónde puedo encontrar soporte si tengo problemas con ArchiHUB?
Si tienes problemas con ArchiHUB, puedes buscar ayuda en los siguientes lugares:
- Nuestra [documentación oficial](https://archihub-app.github.io/archihub.github.io/).
- El [repositorio de GitHub](https://github.com/Archihub-App/archihub-backend/issues/new).
- Si cuentas con soporte premium o ArchiHUB Pro, puedes contactar directamente a nuestro equipo de soporte a través del correo electrónico proporcionado en tu plan.

## ¿Archihub es de código abierto?
Sí, ArchiHUB es un proyecto de código abierto. Puedes encontrar el código fuente en nuestro [repositorio de GitHub](https://github.com/Archihub-App/archihub-backend).

## ¿Puedo usar ArchiHUB en un entorno de producción?
Sí, ArchiHUB está diseñado para ser utilizado en entornos de producción. Asegúrate de seguir las mejores prácticas de seguridad y mantenimiento para garantizar un rendimiento óptimo y la seguridad de tus datos. Si necesitas soporte adicional, considera optar por ArchiHUB Pro. Encuentra los detalles en nuestra [página web](https://bit-sol.com.co/es/).

## ¿Cómo se maneja la privacidad de mis datos en ArchiHUB?
La privacidad de tus datos es una prioridad para nosotros. ArchiHUB almacena tus datos localmente en tu servidor, lo que significa que tienes control total sobre ellos.

## ¿Archihub se puede desplegar en la nube?
Sí, ArchiHUB se puede desplegar en servicios de nube. Como ejemplo de ello, tienes a disposición un [despliegue público en la nube](https://archihub.bit-sol.com.co/). Puedes optar por proveedores como AWS, Google Cloud, o Azure (entre otros).

## ¿Dónde puedo encontrar la documentación oficial de ArchiHUB?
La documentación oficial de ArchiHUB está disponible en nuestro sitio web: [https://archihub-app.github.io/archihub.github.io/](https://archihub-app.github.io/archihub.github.io/). Aquí encontrarás guías de instalación, tutoriales y referencias para ayudarte a sacar el máximo provecho de ArchiHUB. Adicionalmente, puedes visitar la documentación generada con [DeepWiki](https://deepwiki.com/) en [https://deepwiki.com/Archihub-App/archihub-backend](https://deepwiki.com/Archihub-App/archihub-backend).

## ¿Cómo puedo actualizar ArchiHUB a la última versión?
Para actualizar ArchiHUB a la última versión, sigue estos pasos:
1. Realiza una copia de seguridad de tus datos y configuraciones actuales.
2. Detén el contenedor de ArchiHUB si está en ejecución.
3. Actualiza el repositorio local de ArchiHUB con los últimos cambios desde GitHub.
4. Reconstruye y reinicia el contenedor de ArchiHUB.
5. Verifica que la actualización se haya realizado correctamente y que todos tus datos estén intactos.

Si necesitas ayuda adicional, consulta nuestra [documentación oficial](https://archihub-app.github.io/archihub.github.io/) o contacta a nuestro equipo de soporte.

## ¿Puedo personalizar ArchiHUB según mis necesidades?
Sí, ArchiHUB es altamente personalizable. Puedes modificar la configuración, agregar plugins y adaptar la plataforma para satisfacer tus necesidades específicas.

En caso de requerir un frontend personalizado, puedes desarrollar tu propia interfaz usando la API de ArchiHUB. También puedes contactarnos para servicios de personalización y desarrollo a medida.

## ¿ArchiHUB permite la integración con herramientas de IA?
Sí, ArchiHUB permite la integración con diversas herramientas de inteligencia artificial (IA). Puedes utilizar plugins y APIs para conectar ArchiHUB con servicios de IA que mejoren tu flujo de trabajo. Estamos trabajando continuamente para ampliar las capacidades de integración con IA en futuras versiones.

## Manejo del índice en ArchiHUB

### ¿Qué se necesita para usar el índice para las búsquedas en ArchiHUB?
Para utilizar el índice en ArchiHUB, es necesario tener activado y en ejecución el servicio de Elasticsearch. El contenedor debe estar habilitado en el archivo `docker-compose.yml`. Además, desde los ajustes de ArchiHUB, debes activar la opción de "Usar índice para búsquedas":

![activar indice](/archihub.github.io/imagenes/check_indice.png)

Si es la primera vez que activas el índice, debes guardar la configuración y luego reiniciar el sistema para que los cambios surtan efecto. Una vez reiniciado, en la configuración de ArchiHUB se mostrará el estado del índice como activo.

En caso de que el checkbox del índice se desactive, puede deberse a que el servicio de Elasticsearch no está en ejecución o no se ha configurado correctamente. Verifica que el contenedor esté activo y que la configuración sea la adecuada.

### ¿Cómo puedo reindexar mi contenido en ArchiHUB?
En caso de que sea la primera vez que activas el índice o si has realizado cambios significativos en tu contenido, es recomendable reindexar tus archivos para asegurar que el índice esté actualizado. Para reindexar, sigue estos pasos:
1. Ve a la sección de configuración de ArchiHUB.
2. Busca la opción de "Regenerar el índice para la búsqueda de los recursos" y haz clic en el botón correspondiente.
3. Confirma la acción y espera a que el proceso de reindexación se complete. Este proceso puede tardar dependiendo de la cantidad de archivos que tengas en tu sistema.
4. Busca la opción de "Volver a indexar los recursos" y haz clic en el botón correspondiente.
5. Confirma la acción y espera a que el proceso de reindexación se complete.

Este proceso puede tardar dependiendo de la cantidad de archivos que tengas en tu sistema. Una vez finalizado, el índice estará actualizado y listo para su uso en las búsquedas.