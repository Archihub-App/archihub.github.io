---
title: 'Campo Autor'
description: ''
---

El campo Autor es un campo especializado para capturar información sobre los creadores o contribuyentes de un recurso. Soporta múltiples autores y diferentes tipos de contribución, permitiendo diferenciar entre personas físicas y organizaciones.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Autor"`, `"Autores"`.

**Tipo de campo**: Autor  
- **Descripción**: Permite ingresar información de personas u organizaciones responsables del recurso.  
- **Ejemplo**: Campo para registrar autores de un libro, artículo, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.autores`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Agregue uno o más autores, indicando si es persona u organización."*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `No` (puede dejarse vacío).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Tipo de recurso = Publicación`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![Campo de autor](/archihub.github.io/imagenes/campoAuthor.png)

![Formulario de autor](/archihub.github.io/imagenes/autor-form.png)

### Ejemplo práctico
**Escenario**: Registrar un libro con dos autores y una organización colaboradora:

1. **Primer autor**:
   - Tipo: Persona
   - Nombre: María
   - Apellido: González

2. **Segundo autor**:
   - Tipo: Persona
   - Nombre: Juan
   - Apellido: Pérez

3. **Organización**:
   - Tipo: Organización
   - Nombre: Centro de Investigaciones Científicas
   - Siglas: CIC

### Visualización en metadatos
Los autores aparecen listados en la sección de metadatos del recurso, agrupados por tipo y mostrando toda la información proporcionada:

![Autor en metadatos](/archihub.github.io/imagenes/autor-metadatos.png) 