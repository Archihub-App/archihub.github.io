---
title: 'El campo Listado'
description: ''
---

El campo Listado permite seleccionar una opción de un conjunto predefinido, asegurando consistencia en los datos.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Departamento"`, `"Tipo de documento"`.

**Tipo de campo**: Selección simple  
- **Descripción**: Permite seleccionar una sola opción de una lista predefinida.  
- **Ejemplo**: Campo para seleccionar un departamento, tipo, categoría, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.departamento`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Seleccione una opción de la lista desplegable."*

**Fuente de datos**:  
- **Descripción**: Lista predefinida de opciones disponibles.  
- **Ejemplo**: `Lista de departamentos de Colombia`.

**Presentación**:  
- **Descripción**: Forma en que se muestra la lista al usuario.  
- **Ejemplo**: *"Menú desplegable"*.

**Búsqueda**:  
- **Descripción**: Permite buscar entre las opciones disponibles.  
- **Ejemplo**: *"El usuario puede escribir para filtrar las opciones."*

**Añadir al final**:  
- **Descripción**: Texto que se mostrará al final del campo (opcional).  
- **Ejemplo**: *"Seleccione solo uno"*.

**Añadir al inicio**:  
- **Descripción**: Texto que se mostrará al inicio del campo (opcional).  
- **Ejemplo**: *"Opción: "*.

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe seleccionarse una opción).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `País = Colombia`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![listados](/archihub.github.io/imagenes/listados.png)

### Ejemplo práctico
**Escenario**: Crear un campo para el tipo de documento:

1. **Etiqueta**: "Tipo de documento"
2. **Tipo**: Listado
3. **Opciones**: Artículo, Libro, Tesis, Informe
4. **Requerido**: Sí 