---
title: 'El campo Relación'
description: ''
---

El campo Relación permite establecer conexiones entre diferentes tipos de contenido dentro de la plataforma, facilitando la organización y recuperación de información relacionada.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Campo relación"`, `"Documento relacionado"`.

**Tipo de campo**: Relación  
- **Descripción**: Permite seleccionar y vincular uno o varios recursos de otro tipo de contenido.  
- **Ejemplo**: Relacionar un documento con un fondo, colección, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.firstLevel.relationField`.

**Tipo de contenido**:  
- **Descripción**: Define el tipo de recurso o entidad con la que se puede establecer la relación.  
- **Ejemplo**: `Fondo`, `Tesauro`, `Colección`.

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `No` (puede dejarse vacío).

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![formulario relación](/archihub.github.io/imagenes/formulario_relacion.png)

### Ejemplo práctico
**Escenario**: Relacionar un documento con términos de un tesauro:

1. **Etiqueta**: "Términos controlados"
2. **Tipo**: Relación
3. **Contenido relacionado**: Tesauro
4. **Cardinalidad**: Muchos a muchos
5. **Búsqueda**: Por título y descripción 