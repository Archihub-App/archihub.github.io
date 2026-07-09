---
title: 'El campo Fecha'
description: 'Documentación sobre el campo de fecha en ArchiHUB'
---

El campo Fecha (`simple-date`) proporciona una interfaz optimizada para la selección de fechas exactas, garantizando un formato de almacenamiento consistente (ISO) en la base de datos.

### Estructura del campo

Las propiedades disponibles para el campo de fecha son:

**Nombre**:  
- **Descripción**: La etiqueta del campo.  
- **Ejemplo**: `"Fecha de creación"`, `"Fecha de ingreso"`.

**Destino**:  
- **Descripción**: Ubicación de almacenamiento en los metadatos.  
- **Ejemplo**: `metadata.firstLevel.fecha_creacion`.

**Instrucciones**:  
- **Descripción**: Mensaje de ayuda opcional sobre qué fecha específica se está solicitando.

**Requerido**:  
- **Descripción**: Indica si la fecha debe seleccionarse obligatoriamente.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Permiten controlar la visibilidad del campo condicionalmente y restringirlo según el rol del usuario.

![Configuración del campo fecha](/archihub.github.io/imagenes/campos/date.png)

---

### Comportamiento en la interfaz

- Previene los errores de formato típicos de la entrada manual de fechas (como el uso confuso de DD/MM/AAAA vs MM/DD/AAAA).
- En caso de requerir un rango de fechas, habitualmente se configuran dos campos `simple-date` separados (ej. "Fecha de inicio" y "Fecha de fin").

![Campo fecha en el formulario](/archihub.github.io/imagenes/campos/date_form.png)