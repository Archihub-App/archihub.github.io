---
title: 'El campo Número'
description: 'Documentación sobre el campo de número en ArchiHUB'
---

El campo Número restringe la entrada de datos exclusivamente a valores numéricos, asegurando que la información capturada pueda ser procesada o validada matemáticamente.

### Estructura del campo

La configuración del campo número incluye propiedades de validación nativas:

**Nombre**:  
- **Descripción**: La etiqueta visible para el usuario.  
- **Ejemplo**: `"Cantidad"`, `"Año de publicación"`.

**Destino**:  
- **Descripción**: La clave en los metadatos donde se guardará el valor numérico.  
- **Ejemplo**: `metadata.firstLevel.cantidad_paginas`.

**Instrucciones**:  
- **Descripción**: Texto de ayuda para aclarar qué formato numérico se espera.  

**Requerido**:  
- **Descripción**: Define si es obligatorio introducir un número.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Propiedades estándar para controlar la visibilidad dinámica y los permisos del campo.

![Configuración del campo número](/archihub.github.io/imagenes/campos/number.png)

---

### Comportamiento en la interfaz

- El campo en el frontend suele mostrar controles de incremento/decremento (flechas) y previene la escritura de caracteres alfabéticos.
- El valor guardado será estrictamente de tipo numérico (`Number`) en la base de datos, lo que facilita operaciones de búsqueda, ordenamiento y agregación en el sistema.

![Campo número en el formulario](/archihub.github.io/imagenes/campos/number_form.png)