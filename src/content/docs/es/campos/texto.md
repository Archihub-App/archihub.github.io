---
title: 'El campo Texto'
description: ''
---

El campo de texto permite el ingreso de texto en una sola línea, siendo uno de los tipos de campo más versátiles en el sistema.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Título"`, `"Nombre del autor"`.

**Tipo de campo**: Texto de una línea  
- **Descripción**: Permite ingresar texto en una sola línea.  
- **Ejemplo**: Campo para el título de un documento.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.titulo`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Ingrese el título completo del documento."*

**Longitud máxima**:  
- **Descripción**: Número máximo de caracteres permitidos.  
- **Ejemplo**: `255 caracteres`.

**Validaciones**:  
- **Descripción**: Reglas opcionales para el formato del texto (email, URL, etc.).  
- **Ejemplo**: *"Debe ser una dirección de correo válida."*

**Añadir al final**:  
- **Descripción**: Texto que se mostrará al final del campo (opcional).  
- **Ejemplo**: *"Ejemplo: Informe final 2023"*

**Añadir al inicio**:  
- **Descripción**: Texto que se mostrará al inicio del campo (opcional).  
- **Ejemplo**: *"Título: "*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe completarse el campo).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Tipo de documento = Informe`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![campoTexto](/archihub.github.io/imagenes/campoTexto.png)

### Ejemplo práctico
**Escenario**: Crear un campo para el título de un documento:

1. **Etiqueta**: "Título del documento"
2. **Tipo**: Texto
3. **Requerido**: Sí
4. **Longitud máxima**: 255 caracteres

![campoTextoForm](/archihub.github.io/imagenes/campo-edit-texto.png) 