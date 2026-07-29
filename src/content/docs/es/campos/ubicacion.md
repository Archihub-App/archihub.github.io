---
title: 'El campo Ubicación'
description: 'Documentación sobre el campo de ubicación geográfica en ArchiHUB'
---

El campo Ubicación (internamente `location`) proporciona una herramienta nativa para capturar coordenadas geoespaciales y datos de ubicación en los recursos.

### Estructura del campo

Este campo interactúa con servicios de mapas integrados:

**Nombre**:  
- **Descripción**: La etiqueta visual del campo.  
- **Ejemplo**: `"Lugar de origen"`, `"Coordenadas del hallazgo"`.

**Destino**:  
- **Descripción**: La clave en los metadatos donde se guardará el objeto geoespacial (latitud y longitud, y opcionalmente el texto de la ubicación).  
- **Ejemplo**: `metadata.firstLevel.lugar_hallazgo`.

**Instrucciones**:  
- **Descripción**: Ayuda en pantalla para guiar al usuario.

**Requerido**:  
- **Descripción**: Obliga al usuario a establecer una ubicación antes de poder guardar el registro.

**Condición** y **Niveles de acceso**:  
- **Descripción**: Manejan lógicas condicionales y restricciones de seguridad a nivel visual.

![Configuración del campo ubicación](/archihub.github.io/imagenes/campos/location.png)

---

### Comportamiento en la interfaz

- En la interfaz, se suele presentar como un buscador geográfico (a menudo conectado a servicios de geolocalización) o un componente visual de mapa.
- El usuario puede escribir el nombre de un lugar o interactuar con el mapa (colocando un pin) para fijar las coordenadas exactas.
- El almacenamiento en la base de datos se realiza en un formato estructurado apto para posteriores búsquedas geoespaciales (GeoJSON o similar).

![Campo ubicación en el formulario](/archihub.github.io/imagenes/campos/location_form.png)

### Ejemplos de uso

Las ubicaciones se muestran con su información completa y en un mapa interactivo cuando hay coordenadas disponibles. El usuario puede agregar una nueva ubicación desde el propio formulario, y un mismo campo puede llegar a alojar varias ubicaciones asociadas al recurso:

![Agregar ubicación](/archihub.github.io/imagenes/agregar_ubicacion.png)

![Ejemplo de múltiples ubicaciones](/archihub.github.io/imagenes/ejemplo-ubicaciones.png)
