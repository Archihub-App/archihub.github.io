---
title: 'El campo Número'
description: ''
---

El campo Número está diseñado específicamente para capturar valores numéricos con validación automática.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Año de publicación"`, `"Cantidad de páginas"`.

**Tipo de campo**: Numérico  
- **Descripción**: Permite ingresar valores numéricos, ya sean enteros o decimales.  
- **Ejemplo**: Campo para el año, cantidad, precio, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.anio_publicacion`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Ingrese el año en formato numérico (ejemplo: 2023)."*

**Valor mínimo/máximo**:  
- **Descripción**: Define los límites inferior y superior permitidos para el valor.  
- **Ejemplo**: `1900` (mínimo), `2025` (máximo).

**Incrementos permitidos**:  
- **Descripción**: Define el paso o incremento entre valores válidos.  
- **Ejemplo**: `1` para enteros, `0.01` para decimales.

**Formato de visualización**:  
- **Descripción**: Permite definir cómo se muestra el número (separadores, decimales, etc.).  
- **Ejemplo**: *"Mostrar con separador de miles."*

**Añadir al final**:  
- **Descripción**: Texto que se mostrará al final del campo (opcional).  
- **Ejemplo**: *"Años", "kg", "USD"*

**Añadir al inicio**:  
- **Descripción**: Texto que se mostrará al inicio del campo (opcional).  
- **Ejemplo**: *"$", "N°"*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe completarse el campo).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Tipo de documento = Informe`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![campoNumerico](/archihub.github.io/imagenes/campoNumerico.png)

### Ejemplo práctico
**Escenario**: Configurar un campo para el año de publicación:

1. **Etiqueta**: "z"
2. **Tipo**: Número
3. **Rango**: 1900-2025
4. **Formato**: Número entero

![campoNumericoForm](/archihub.github.io/imagenes/campo-edit-numero.png) 