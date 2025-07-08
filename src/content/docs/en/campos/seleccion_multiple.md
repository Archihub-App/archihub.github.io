---
title: 'El campo Lista de selección múltiple'
description: ''
---

El campo Lista de selección múltiple permite elegir varias opciones de una lista predefinida, ideal para metadatos que pueden tener múltiples valores.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Estados"`, `"Palabras clave"`.

**Tipo de campo**: Selección múltiple  
- **Descripción**: Permite seleccionar varias opciones de una lista predefinida.  
- **Ejemplo**: Campo para seleccionar varios estados, temas, etiquetas, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.firstLevel.listamultiple`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Seleccione una o más opciones de la lista."*

**Listado**:  
- **Descripción**: Lista predefinida de opciones disponibles.  
- **Ejemplo**: `Lista de estados`.

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe seleccionarse al menos una opción).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `País = México`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![listaDeSeleccionMultiple](/archihub.github.io/imagenes/listaDeSeleccionMultiple.png)

### Ejemplo práctico
**Escenario**: Configurar un campo para las palabras clave de un documento:

1. **Etiqueta**: "Palabras clave"
2. **Tipo**: Selección múltiple
3. **Listado**: Lista de términos controlados 