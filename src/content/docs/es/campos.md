---
title: 'Campos para los estándares de metadatos'
description: ''
---

En esta parte de la documentación detallaremos cada uno de los campos que se pueden configurar en el formulario:

- [Verdadero / Falso](#el-campo-verdadero--falso)
- [Texto](#el-campo-texto)
- [Área de texto](#el-campo-área-de-texto)
- [Número](#el-campo-número)
- [Fecha](#el-campo-fecha)
- [Listado](#el-campo-listado)
- [Lista de selección múltiple](#el-campo-lista-de-selección-múltiple)
- [Autor](#el-campo-autor)
- [Relación](#el-campo-relación)
- [Ubicación](#el-campo-ubicación)
- [Campo múltiple](#el-campo-múltiple)
- [Archivo](#el-campo-archivo)
- [Separador](#el-campo-separador)

## El campo Verdadero / Falso

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

## El campo Texto

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

## El campo Área de texto

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

## El campo Número

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

## El campo Fecha

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

## El campo Listado

El campo Listado permite seleccionar una opción de un conjunto predefinido, asegurando consistencia en los datos.

### Estructura del campo

![listados](/archihub.github.io/imagenes/listados.png)

### Ejemplo práctico
**Escenario**: Crear un campo para el tipo de documento:

1. **Etiqueta**: "Tipo de documento"
2. **Tipo**: Listado
3. **Opciones**: Artículo, Libro, Tesis, Informe
4. **Requerido**: Sí

## El campo Lista de selección múltiple

El campo Lista de selección múltiple permite elegir varias opciones de una lista predefinida, ideal para metadatos que pueden tener múltiples valores.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Estados"`, `"Palabras clave"`.

**Tipo de campo**: Selección múltiple  
- **Descripción**: Permite seleccionar varias opciones de una lista predefinida.  
- **Ejemplo**: Campo para seleccionar varios estados, temas, etiquetas, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.firstLevel.listamultiple`.

**Instrucciones**:  
- **Descripción**: Guía para el usuario sobre cómo usar el campo.  
- **Ejemplo**: *"Seleccione una o más opciones de la lista."*

**Listado**:  
- **Descripción**: Lista predefinida de opciones disponibles.  
- **Ejemplo**: `Lista de estados`.

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `Sí` (debe seleccionarse al menos una opción).

**Condición**:  
- **Descripción**: Reglas para mostrar/editar el campo (ej. dependiendo de otro campo).  
- **Ejemplo**: *"Visible solo si `País = México`."*

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![listaDeSeleccionMultiple](/archihub.github.io/imagenes/listaDeSeleccionMultiple.png)

### Ejemplo práctico
**Escenario**: Configurar un campo para las palabras clave de un documento:

1. **Etiqueta**: "Palabras clave"
2. **Tipo**: Selección múltiple
3. **Listado**: Lista de términos controlados

## Campo Autor

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

En la siguiente imagen se muestra el formulario de autor, el checkbox permite seleccionar si es una persona o una organización, si es una persona se mostrará el campo de nombre y apellido, si es una organización se mostrará el campo de organización y siglas.

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


## El campo Relación

El campo Relación permite establecer conexiones entre diferentes tipos de contenido dentro de la plataforma, facilitando la organización y recuperación de información relacionada.

### Estructura del campo
**Nombre**: Nombre del campo  
- **Descripción**: Identificador único y descriptivo del campo.  
- **Ejemplo**: `"Campo relación"`, `"Documento relacionado"`.

**Tipo de campo**: Relación  
- **Descripción**: Permite seleccionar y vincular uno o varios recursos de otro tipo de contenido.  
- **Ejemplo**: Relacionar un documento con un fondo, colección, etc.

**Destino**:  
- **Descripción**: Ubicación o relación donde se almacena el valor (ej. metadatos, base de datos).  
- **Ejemplo**: `metadata.firstLevel.relationField`.

**Tipo de contenido**:  
- **Descripción**: Define el tipo de recurso o entidad con la que se puede establecer la relación.  
- **Ejemplo**: `Fondo`, `Tesauro`, `Colección`.

**Requerido**:  
- **Descripción**: Indica si el campo es obligatorio (`Sí`) u opcional (`No`).  
- **Ejemplo**: `No` (puede dejarse vacío).

**Niveles de acceso**:  
- **Descripción**: Permisos necesarios para interactuar con el campo.  
- **Ejemplo**: `Administrador, Editor` (solo estos roles pueden modificarlo).

![formulario relación](/archihub.github.io/imagenes/formulario_relacion.png)

### Ejemplo práctico
**Escenario**: Relacionar un documento con términos de un tesauro:

1. **Etiqueta**: "Términos controlados"
2. **Tipo**: Relación
3. **Contenido relacionado**: Tesauro
4. **Cardinalidad**: Muchos a muchos
5. **Búsqueda**: Por título y descripción

## Campo Ubicación

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

## El campo Múltiple

El campo Múltiple permite crear grupos de campos relacionados que pueden repetirse según sea necesario, ideal para capturar información estructurada en múltiples instancias.

### Estructura del campo
- **Tipo de campo**: Grupo repetible
- **Subcampos**: Configurables individualmente
- **Cardinalidad**: 
  - Mínimo de instancias
  - Máximo de instancias
  - Sin límite

### Características
- Arrastrar y soltar para reordenar
- Plantillas de campos predefinidas
- Validación por instancia
- Colapso/expansión de grupos

### Ejemplo práctico
**Escenario**: Crear un formulario para información de contacto:

1. **Grupo**: "Información de contacto"
2. **Subcampos**:
   - Tipo (email, teléfono, dirección)
   - Valor
   - Notas
3. **Configuración**:
   - Mínimo: 1 instancia
   - Máximo: Sin límite
   - Ordenable: Sí

![módulo](/archihub.github.io/imagenes/multiple.png)


## El campo Archivo

El campo Archivo permite la carga y gestión de archivos adjuntos, con múltiples opciones de configuración para adaptarse a diferentes necesidades de almacenamiento y visualización.

### Estructura del campo
- **Tipo de campo**: Carga de archivos
- **Múltiples archivos**: Configurable
- **Formatos permitidos**: Personalizables
- **Tamaño máximo**: Definible por campo

### Configuración
- **Tipos de archivo**: Restricción por extensiones
- **Etiquetas**: Identificación única para cada campo de archivo
- **Previsualización**: Vista previa de imágenes y documentos
- **Versiones**: Generación automática de miniaturas

### Asociación con recursos
A diferencia de otros campos, los archivos:
- Se asocian mediante etiquetas únicas
- No se almacenan en los metadatos
- Pueden tener múltiples versiones
- Mantienen metadatos propios

### Ejemplo práctico
**Escenario**: Configurar un campo para documentos de respaldo:

1. **Etiqueta**: "documentos_anexos"
2. **Tipo**: Archivo
3. **Formatos permitidos**: PDF, DOCX, XLSX
4. **Tamaño máximo**: 10MB por archivo
5. **Múltiples archivos**: Sí (hasta 5)

![formulario archivos](/archihub.github.io/imagenes/campo-archivo.png)

![Etiqueta archivo](/archihub.github.io/imagenes/campo-archivo-preview.png)

A cada archivo asociado a un recurso, puedes ver el campo asociado en su etiqueta identificada, cada uno con un color distinto. Es posible verlo desde la vista del detalle de cada recurso o desde el formulario de edición una vez se haya subido y guardado el recurso.

![Etiqueta formulario](/archihub.github.io/imagenes/campo-archivo-form.png)

## El campo Separador

El campo Separador es un campo especial que permite dividir un formulario en múltiples páginas, mejorando la experiencia de usuario al organizar la información en secciones más manejables. Es particularmente útil para formularios extensos que contienen muchos campos.

Cada separador define una nueva página en el formulario y requiere:
- **Nombre**: Identificador único del separador (obligatorio)

![Campo de separador en el formulario](/archihub.github.io/imagenes/formulario_separador.png)

### Configuración del separador

En la siguiente imagen se muestra el formulario de configuración del separador, donde se puede definir el nombre, título y descripción que se mostrará en la navegación del formulario.

![Formulario de configuración del separador](/archihub.github.io/imagenes/separador-form.png)

### Ejemplo de uso

**Escenario**: Crear un formulario de registro de proyecto con tres secciones:

1. **Información básica**
   - Campos: Título, descripción, fecha de inicio
   - Sin separador (aparece en la primera página por defecto)

2. **Detalles del proyecto**
   - Separador: "Detalles"
   - Campos: Objetivos, alcance, presupuesto

3. **Equipo y colaboradores**
   - Separador: "Equipo"
   - Campos: Miembros del equipo, roles, contactos

### Visualización en el formulario

Los separadores aparecen como pasos en la navegación superior del formulario, permitiendo a los usuarios moverse fácilmente entre las diferentes secciones:

![Navegación por separadores](/archihub.github.io/imagenes/campo-separador.png)
