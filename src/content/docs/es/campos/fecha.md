---
title: 'El campo Fecha'
description: ''
---

El campo Fecha permite la selección estructurada de fechas a través de un selector visual, asegurando consistencia en el formato.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Fecha de publicación"`, `"Fecha de nacimiento"`.

**Tipo de campo**: Fecha/Hora  
- **Descripción**: Permite seleccionar una fecha, una fecha y hora, o un rango de fechas.  
- **Ejemplo**: Campo para la fecha de publicación, fecha de evento, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.fecha_publicacion`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Seleccione la fecha en el formato DD/MM/AAAA."*

**Formatos soportados**:  
- **Descripción**: Tipos de formato permitidos para la fecha.  
- **Ejemplo**: `Fecha (DD/MM/AAAA)`, `Fecha y hora`, `Rango de fechas`.

**Validaciones**:  
- **Descripción**: Reglas para restringir las fechas válidas.  
- **Ejemplo**: *"Solo fechas posteriores a hoy."*, *"No se permiten fines de semana."*

**Fechas mínima/máxima**:  
- **Descripción**: Límite inferior y superior para la selección de fechas.  
- **Ejemplo**: `01/01/2000` (mínima), `31/12/2030` (máxima).

**Días de la semana permitidos**:  
- **Descripción**: Restringe la selección a ciertos días.  
- **Ejemplo**: *"Solo días hábiles (lunes a viernes)."*

**Validación personalizada**:  
- **Descripción**: Permite reglas adicionales según necesidades específicas.  
- **Ejemplo**: *"La fecha de inicio debe ser anterior a la fecha de fin."*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe completarse el campo).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Tipo de documento = Informe`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![campoFecha](/archihub.github.io/imagenes/campoFecha.png)

### Ejemplo práctico
**Escenario**: Configurar un campo para la fecha de publicación:

1. **Etiqueta**: "Fecha de publicación"
2. **Tipo**: Fecha
3. **Formato**: DD/MM/AAAA
4. **Rango permitido**: Fecha actual en adelante

![campoFechaForm](/archihub.github.io/imagenes/campo-edit-fecha.png) 