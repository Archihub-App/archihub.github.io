---
title: 'El campo Listado (Selección)'
description: 'Documentación sobre el campo de selección (Listado) en ArchiHUB'
---

El campo Listado (internamente `select`) permite al usuario elegir una única opción desde un conjunto predefinido de valores. Es fundamental para asegurar la consistencia y normalización de los datos (por ejemplo, tipos de documento, estados, categorías).

### Estructura del campo

Este campo se apoya en los listados (vocabularios controlados) configurados en el sistema:

**Nombre**:  
- **Descripción**: La etiqueta que identifica el campo.  
- **Ejemplo**: `"Departamento"`, `"Tipo de recurso"`.

**Destino**:  
- **Descripción**: La clave en los metadatos donde se guardará el identificador o valor de la opción seleccionada.  
- **Ejemplo**: `metadata.firstLevel.tipo_documento`.

**Opciones / Listado fuente**:  
- **Descripción**: El identificador de la lista del sistema de donde se obtendrán las opciones desplegables. Las opciones se cargan de forma dinámica.

**Instrucciones**:  
- **Descripción**: Guía opcional para el usuario.  
- **Ejemplo**: *"Seleccione la categoría principal que aplique al recurso."*

**Requerido**:  
- **Descripción**: Indica si es obligatorio seleccionar una opción para continuar.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Reglas para mostrar/ocultar el campo o restringir qué roles pueden modificarlo.

![Configuración del campo listado](/archihub.github.io/imagenes/campos/select.png)

---

### Comportamiento en la interfaz

- Se presenta como un menú desplegable (Select / Autocomplete).
- Por defecto suele incluir una opción vacía como `"Seleccione una opción"`.
- Soporta búsqueda integrada (autocompletado) si la lista de opciones es extensa, facilitando al usuario encontrar rápidamente el valor deseado.

![Campo listado en el formulario](/archihub.github.io/imagenes/campos/select_form.png)