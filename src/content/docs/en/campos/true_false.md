---
title: 'El campo Verdadero / Falso'
description: ''
---

El campo Verdadero/Falso es un campo booleano que solo acepta dos valores: verdadero o falso. Es ideal para metadatos que requieren una respuesta binaria.


### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Aprobado"`, `"Activo"`.

**Tipo de campo**: Booleano (verdadero/falso)  
- **Descripción**: Admite solo los valores `Verdadero` o `Falso`.  
- **Ejemplo**: Opciones de radio o checkbox en la interfaz.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.first_level.relationField`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Seleccione 'Verdadero' si el documento está completo."*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe marcarse una opción).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Estado = Pendiente`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).
  
![trueFalse](/archihub.github.io/imagenes/truefalse.png)

### Ejemplo práctico
**Escenario**: Configurar un campo para indicar si un documento está publicado:

1. **Campo**: "Publicado"
2. **Tipo**: Verdadero/Falso
3. **Uso**: Marcar cuando el documento esté listo para ser visible públicamente

![trueFalseForm](/archihub.github.io/imagenes/campo-edit-verdadero-falso.png)