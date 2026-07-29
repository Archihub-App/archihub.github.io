---
title: 'El campo Selección Múltiple'
description: 'Documentación sobre el campo de selección múltiple en ArchiHUB'
---

El campo Selección Múltiple (internamente `select-multiple2`) es similar al campo Listado, pero permite al usuario elegir simultáneamente **varias** opciones de un conjunto predefinido. Es ideal para asignar múltiples etiquetas, temas o estados a un solo recurso.

### Estructura del campo

**Nombre**:  
- **Descripción**: La etiqueta del campo.  
- **Ejemplo**: `"Temas relacionados"`, `"Etiquetas"`.

**Destino**:  
- **Descripción**: La clave donde se guardará el arreglo (array) de valores seleccionados.  
- **Ejemplo**: `metadata.firstLevel.temas`.

**Opciones / Listado fuente**:  
- **Descripción**: La lista del sistema que provee los valores disponibles.

**Instrucciones**:  
- **Descripción**: Orientación adicional para el usuario.  
- **Ejemplo**: *"Seleccione todos los temas que se traten en este documento."*

**Requerido**:  
- **Descripción**: Si está activo, exige que se seleccione al menos una opción del listado.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Permiten establecer lógica condicional y controlar qué perfiles de usuario interactúan con el campo.

![Configuración del campo de selección múltiple](/archihub.github.io/imagenes/campos/selectMulti.png)

---

### Comportamiento en la interfaz

- Habitualmente se renderiza como un campo de texto con autocompletado donde cada opción seleccionada se convierte en una "píldora" o *chip*.
- El usuario puede buscar, añadir y eliminar opciones de forma rápida mediante la interfaz de *chips*.
- A nivel de datos, se almacena como una lista o arreglo de valores en el esquema de metadatos.

![Campo de selección múltiple en el formulario](/archihub.github.io/imagenes/campos/selectMulti_form.png)