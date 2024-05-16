# Los roles de usuario

Los roles de usuario definen la capacidad de los usuarios para manejar información. Por defecto, ArchiHUB soporta tres roles: admin, editor y processing.

- __admin__: Los usuarios con este rol tienen acceso completo a todas las funciones de la plataforma. Pueden realizar cambios en la configuración del sistema, crear usuarios, catalogar y procesar información.
- __editor__: Los usuarios con este rol pueden crear y editar recursos para distintos tipos de contenido. Aunque puede haber excepciones, en general, los editores pueden catalogar cualquier tipo de contenido, a menos que se configure lo contrario al crear los tipos de contenido.
- __processing__: Los usuarios con este rol pueden ejecutar procesamientos y configurar plugins para que se ejecuten automáticamente en diversos momentos dentro de la aplicación, como al guardar un recurso. En algunos casos, puede requerirse un rol especial para ciertos procesamientos, lo cual se abordará en la configuración avanzada de plugins. Sin embargo, para acceder a las configuraciones, es necesario que el usuario tenga asignado este rol.

## Roles personalizados

Además de los roles por defecto, ArchiHUB permite configurar roles personalizados según las necesidades específicas. Esta funcionalidad se ajusta desde la configuración del sistema.

Para crear roles personalizados, sigue estos pasos: Ve a _Catalogación_ > _Listas_ y crea una nueva lista. En esta lista, agrega todos los roles nuevos que desees para tu archivo y tipos de contenido. Por ejemplo, podrías crear roles como *editor_fondos* o *visualizador_expedientes*.

Una vez tengamos la lista hecha volvemos a los ajustes del sistema y en la sección *Roles y acceso a la información* seleccionamos nuestro listado recién creado en la asignación de roles.

## Asignando roles de edición y visualización a los tipos de contenido


Los roles pueden asignarse a los tipos de contenido en dos apartados específicos: el de _edición_ y el de _visualización_. Aquí se explica cómo funciona cada uno:

- __Roles de edición:__

Si dejas el campo _Roles de edición_ vacío, solo los usuarios con roles __admin__ y __editor__ podrán editar ese tipo de contenido.
Si especificas un rol en el campo _Roles de edición_, por ejemplo, __editor_fondos__, solo los usuarios con los roles __admin__ o __editor__ y __editor_fondos__ podrán editar los fondos.

- __Roles de visualización:__

Este campo determina quién puede ver los recursos de un tipo de contenido. Si, por ejemplo, asignas el rol __visualizador_expedientes__ al tipo de contenido "Expedientes", solo los usuarios con ese rol podrán ver y consultar los recursos asociados a este tipo en particular.

De esta manera, puedes controlar quién puede editar y quién puede visualizar cada tipo de contenido, asegurando que solo los usuarios apropiados tengan acceso a las funciones y recursos necesarios.