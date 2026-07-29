---
title: 'El campo Autor'
description: 'Documentación sobre el campo de autor en ArchiHUB'
---

El campo Autor (internamente `author`) es un campo especializado diseñado para relacionar formalmente el recurso actual con usuarios del sistema que tienen atribución de autoría.

### Estructura del campo

**Nombre**:  
- **Descripción**: Etiqueta para identificar el campo.  
- **Ejemplo**: `"Autores principales"`, `"Investigadores responsables"`.

**Destino**:  
- **Descripción**: La ubicación en el modelo de datos donde se referenciarán las ID o datos de los autores.

**Instrucciones**:  
- **Descripción**: Mensaje de ayuda contextual.

**Requerido**:  
- **Descripción**: Impide guardar si no se asigna al menos un autor.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Controlan la visibilidad y permisos del campo.

![Configuración del campo autor](/archihub.github.io/imagenes/campos/author.png)

---

### Comportamiento en la interfaz

- Utiliza un componente que permite buscar y autocompletar nombres de usuarios registrados en el sistema.
- Está diseñado como un arreglo (FormArrayAuthor), lo que significa que el usuario puede añadir múltiples autores iterativamente haciendo clic en "+ Añadir".
- Proporciona validación interna para asegurar que la referencia al usuario del sistema sea válida y se persista correctamente en las relaciones estructurales.

![Campo autor en el formulario](/archihub.github.io/imagenes/campos/author_form.png)

### Visualización en los metadatos

Los autores aparecen listados en la sección de metadatos del recurso, agrupados por tipo y mostrando toda la información proporcionada:

![Autor en los metadatos](/archihub.github.io/imagenes/autor-metadatos.png)
