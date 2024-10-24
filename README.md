# Documentación ArchiHUB 1.0

## Prerrequisitos

- Node.js - v18.17.1, v20.3.0 o superior. ( v19 no es soportada.)
- Editor de código - Recomendamos VS Code con la extensión oficial de Astro.
- Terminal - Astro es usado a través de la interfaz de línea de comandos (CLI).

## 🏃‍♂️ Cómo Ejecutarlo en tu Computadora

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Archihub-App/archihub.github.io
   ```
2. Navega a la carpeta del proyecto:
   ```sh
   cd archihub.github.io
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
   Tu sitio estará disponible en `http://localhost:4321`.

## 📂 Estructura de Carpetas

Dentro de este proyecto, verás las siguientes carpetas y archivos:

```
└── 📁 archihub.github.io
    └── 📁 public
        └── 📁 imagenes
    └── 📁 src
        └── 📁 components
            └── 📁 ui
                └── Button.tsx
            └── HeadCommon.astro
            └── HeadSEO.astro
        └── 📁 content
            └── 📁 docs
                └── 📁 example-files
                    └── style-guide.md
                └── CHANGELOG.md
            └── config.ts
        └── 📁 layouts
        └── 📁 lib
        └── 📁 pages
        └── 📁 styles
        └── consts.ts
```

### Descripción de Carpetas

- **`public`**: Contiene todos los recursos estáticos, como imágenes, que se utilizan dentro de la aplicación.
- **`src`**: Contiene el código fuente de la aplicación.
  - **`components`**: Incluye los componentes reutilizables del proyecto. Dentro de esta carpeta se encuentra **`ui`**, que almacena componentes de interfaz reutilizables como botones, menús desplegables, etc.
  - **`layouts`**: Almacena los templates de vistas que se reutilizan para mantener la consistencia de las páginas.
  - **`lib`**: Contiene funciones y scripts comunes que se reutilizan en diferentes partes de la aplicación.
  - **`pages`**: Gestiona las páginas de la aplicación. Para crear una nueva vista, simplemente se debe crear un archivo `.astro` o una carpeta con el mismo nombre.
  - **`styles`**: Contiene el único archivo de estilos del proyecto y la configuración de Tailwind CSS.
  - **`content`**: Administra el contenido de la documentación y configuración del mismo
  - **`consts.ts`**: Contiene constantes comunes del proyecto, así como rutas y configuraciones de navegación y del sidebar.

## 🧟‍♂️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, utilizando una terminal:

| Comando                   | Acción                                                    |
| :------------------------ | :-------------------------------------------------------- |
| `npm install`             | Instala las dependencias.                                 |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/`.            |
| `npm run preview`         | Previsualiza la versión construida localmente antes del despliegue. |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`, etc. |
| `npm run astro -- --help` | Obtén ayuda para usar el CLI de Astro.                     |

## 📜 Cómo Agregar y Administrar Contenido

Agrega nuevas páginas creando archivos `.astro` o `.md` dentro del directorio `src/pages/`

Los componentes pueden agregarse dentro de `src/components/` para reutilizarlos en varias páginas y garantizar la consistencia.

Para agregar más contenido a la documentación, crea un archivo .md dentro de la carpeta docs que está dentro de content.

Puedes consultar la guía de estilos para los componentes en Markdown accediendo a `http://localhost:4321/example-files/style-guide`

<!-- ## 🗒️ Guía de Estilo de Markdown

Este proyecto utiliza Tailwind CSS Typography para estilizar el contenido en Markdown. Sigue estas pautas para mantener la consistencia:

### Imágenes

Para agregar imágenes dentro de archivos Markdown, colócalas en el directorio `public/` y haz referencia a ellas de la siguiente manera:

```markdown
![Texto alternativo](/ruta-de-imagen.jpg)
``` -->

>[!NOTE]
>Asegúrate de que las imágenes estén optimizadas para la web para reducir los tiempos de carga.

## 🚀 Despliegue

Para desplegar tu sitio, ejecuta el comando de construcción:

```sh
npm run build
```

El resultado estará disponible en la carpeta `./dist/`, la cual se puede subir a cualquier servicio de hosting estático.

>[!NOTE]
>Para instrucciones específicas de despliegue, consulta la [Guía de Despliegue de Astro](https://docs.astro.build/en/guides/deploy/).

## 🌐 Metadata Open Graph

Incluye metadatos de Open Graph en el `<head>` de tus páginas para mejorar la compartición de enlaces en redes sociales. Puedes agregar lo siguiente al archivo `src/consts.ts`:

```ts
export const OPEN_GRAPH = {
  image: {
    src: 'logo.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}
```



>[!NOTE]
>Mantente atento a las actualizaciones sobre el soporte multilingüe.

