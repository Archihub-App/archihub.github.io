---
title: 'El campo Relación'
description: 'Documentación sobre el campo de relación en ArchiHUB'
---

El campo Relación (internamente `relation`) permite establecer conexiones entre el recurso actual y uno o varios recursos de otro tipo de contenido dentro de la plataforma, facilitando la organización y recuperación de información relacionada.

### Estructura del campo

**Nombre**:  
- **Descripción**: La etiqueta que identifica el campo.  
- **Ejemplo**: `"Documento relacionado"`, `"Términos controlados"`.

**Destino**:  
- **Descripción**: La ubicación en los metadatos donde se almacenará la referencia al recurso relacionado.  
- **Ejemplo**: `metadata.firstLevel.relationField`.

**Tipo de contenido**:  
- **Descripción**: Define el tipo de recurso o entidad con la que se puede establecer la relación.  
- **Ejemplo**: `Fondo`, `Tesauro`, `Colección`.

**Requerido**:  
- **Descripción**: Indica si es obligatorio establecer al menos una relación para poder guardar el recurso.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Controlan la visibilidad del campo y qué roles pueden modificarlo.

![Campo relación en el formulario](/archihub.github.io/imagenes/formulario_relacion.png)

---

### Comportamiento en la interfaz

- Se presenta como un buscador que permite encontrar y vincular recursos existentes del tipo de contenido configurado, generalmente por título o descripción.
- Según la cardinalidad configurada, el campo puede aceptar una única relación o múltiples relaciones simultáneas (muchos a muchos).
- Las relaciones establecidas quedan disponibles tanto desde el recurso de origen como, en muchos casos, desde el recurso relacionado, facilitando la navegación cruzada entre contenidos.
