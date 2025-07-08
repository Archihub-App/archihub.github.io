---
title: 'El campo Área de texto'
description: ''
---

El campo Área de texto permite el ingreso de texto en múltiples líneas, ideal para contenido extenso que requiere formato y saltos de línea.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Descripción"`, `"Observaciones"`.

**Tipo de campo**: Área de texto  
- **Descripción**: Permite ingresar texto en varias líneas, ideal para descripciones largas o comentarios.  
- **Ejemplo**: Campo para la descripción detallada de un proyecto.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.descripcion`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Ingrese una descripción detallada del recurso."*

**Límite de caracteres**:  
- **Descripción**: Número máximo de caracteres permitidos.  
- **Ejemplo**: `2000 caracteres`.

**Editor**:  
- **Descripción**: Indica si el campo incluye barra de herramientas básica para formato de texto.  
- **Ejemplo**: *"Permite negrita, cursiva y listas."*

**Formato**:  
- **Descripción**: Soporta saltos de línea y párrafos.  
- **Ejemplo**: *"Puede escribir texto en varios párrafos."*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `No` (puede dejarse vacío).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Tipo de documento = Informe`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![areaDeTexto](/archihub.github.io/imagenes/areaDeTexto.png)

### Ejemplo práctico
**Escenario**: Crear un campo para la descripción detallada de un proyecto:

1. **Etiqueta**: "Descripción detallada"
2. **Tipo**: Área de texto
3. **Requerido**: Opcional
4. **Límite**: 2000 caracteres

![areaDeTextoForm](/archihub.github.io/imagenes/campo-edit-area-de-texto.png) 