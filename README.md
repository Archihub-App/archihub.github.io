# Documentación ArchiHUB 1.0

## Descripción del Proyecto

ArchiHUB es una plataforma de documentación y recursos para arquitectos y profesionales del diseño. Este repositorio contiene el código fuente del sitio web de documentación de ArchiHUB.

## Prerrequisitos

- Node.js - v18.17.1 o superior (excepto v19)
- Editor de código - Recomendamos VS Code con la extensión oficial de Astro
- Terminal - Astro se utiliza a través de la interfaz de línea de comandos (CLI)

## 🏃‍♂️ Cómo Ejecutarlo Localmente

1. Clona el repositorio:
   ```sh
   git clone https://github.com/ArchiHUB-App/archihub.github.io
   ```
2. Navega a la carpeta del proyecto:
   ```sh
   cd archihub-docs
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

   

## 📂 Estructura del Proyecto
```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── en/
│   │   │   ├── es/
│   │   │   └── index.mdx
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```



## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza la versión de producción localmente |

## 📝 Contribuir al Contenido

Para agregar o modificar contenido de la documentación:

1. Crea o edita archivos Markdown (.md) en la carpeta `src/content/docs/[es/en]`. Por el momento la documentación está en español e inglés, por lo que se deben editar los archivos Markdown correspondientes en cada idioma.
2. Utiliza la sintaxis de Markdown para formatear el contenido.
3. Agrega imágenes en la carpeta `public/images/` y refiérete a ellas usando rutas relativas.

## 🚀 Despliegue

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama principal. Para desplegar manualmente:

1. Construye el sitio:
   ```sh
   npm run build
   ```
2. El resultado estará en la carpeta `./dist/`, listo para ser subido a un servicio de hosting estático.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerir cambios o mejoras.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
