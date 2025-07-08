---
title: 'Campo Ubicación'
description: ''
---

El campo Ubicación permite georreferenciar recursos mediante la asociación con lugares físicos o divisiones administrativas, soportando múltiples ubicaciones con diferentes niveles de precisión.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Ubicación"`, `"Lugar de origen"`.

**Tipo de campo**: Ubicación  
- **Descripción**: Permite asociar el recurso a uno o varios lugares físicos o divisiones administrativas.  
- **Ejemplo**: Campo para registrar la ubicación de un evento, documento, objeto, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.ubicacion`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Seleccione o busque la ubicación correspondiente."*

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `No` (puede dejarse vacío).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `Tipo de recurso = Evento`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![ubicacion](/archihub.github.io/imagenes/ubicacion.png)

### Ejemplo práctico
**Escenario**: Documentar las ubicaciones relevantes para un proyecto de investigación:

1. **Ubicación principal**:
   - Nombre: Universidad del Valle
   - Ciudad: Cali
   - Departamento: Valle del Cauca
   - País: Colombia

2. **Área de estudio**:
   - Nombre: Parque Nacional Natural Farallones
   - Coordenadas: 3.3547° N, 76.7890° W

### Visualización
Las ubicaciones se muestran con su información completa y en un mapa interactivo cuando se dispone de coordenadas.

![Interfaz del campo Ubicación](/archihub.github.io/imagenes/ubicacion.png)

![Agregar ubicación](/archihub.github.io/imagenes/agregar_ubicacion.png)

![Ubicación](/archihub.github.io/imagenes/ejemplo-ubicaciones.png) 