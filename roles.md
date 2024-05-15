# Los roles de usuario

Los roles de usuario definen la capacidad de los usuarios para manejar información. Por defecto, ArchiHUB soporta tres roles: admin, editor y processing.

- __admin__: Los usuarios con este rol tienen acceso completo a todas las funciones de la plataforma. Pueden realizar cambios en la configuración del sistema, crear usuarios, catalogar y procesar información.
- __editor__: Los usuarios con este rol pueden crear y editar recursos para distintos tipos de contenido. Aunque puede haber excepciones, en general, los editores pueden catalogar cualquier tipo de contenido, a menos que se configure lo contrario al crear los tipos de contenido.
- __processing__: Los usuarios con este rol pueden ejecutar procesamientos y configurar plugins para que se ejecuten automáticamente en diversos momentos dentro de la aplicación, como al guardar un recurso. En algunos casos, puede requerirse un rol especial para ciertos procesamientos, lo cual se abordará en la configuración avanzada de plugins. Sin embargo, para acceder a las configuraciones, es necesario que el usuario tenga asignado este rol.

## Roles personalizados

Además de los roles por defecto, ArchiHUB permite configurar roles personalizados según las necesidades específicas. Esta funcionalidad se ajusta desde la configuración del sistema y requiere reiniciar la aplicación para que los cambios surtan efecto.

Para crear roles personalizados, sigue estos pasos: Ve a Catalogación > Listas y crea una nueva lista. En esta lista, agrega todos los roles nuevos que desees para tu archivo y tipos de contenido. Por ejemplo, podrías crear roles como *editor_fondos* o *visualizador_expedientes*.

Una vez tengamos la lista hecha volvemos a los ajustes del sistema y en la sección *Roles y acceso a la información* seleccionamos nuestro listado recién creado en la asignación de roles. __Nota__: es necesario reiniciar el aplicativo para que los cambios surtan efecto.