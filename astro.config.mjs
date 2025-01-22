import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://archihub-app.github.io',
  base: '/archihub.github.io',
  integrations: [
    starlight({
      title: 'ArchiHub',
      defaultLocale: 'es',
      locales: {
        es: {
          label: 'Español',
          lang: 'es'
        },
        en: {
          label: 'English',
          lang: 'en'
        },
      },
      sidebar: [
        { 
          label: 'Conoce el proyecto',
          translations: {
            en: 'About the project'
          },
          link: '/archihub'
        },
        {
          label: 'CHANGELOG',
          link: '/changelog'
        },
        {
          label: 'Instalación',
          translations: {
            en: 'Installation'
          },
          items: [
            {
              label: 'Instalación en una máquina local',
              translations: {
                en: 'Install on a local machine'
              },
              link: '/install_local'
            },
            {
              label: 'Primeros pasos después de la instalación',
              translations: {
                en: 'First steps after installation'
              },
              link: '/pasos'
            },
            {
              label: 'Configuración avanzada de la instalación local',
              translations: {
                en: 'Advanced Configuration of Local Installation'
              },
              link: '/config_local'
            },
            {
              label: 'Instalar un plugin',
              translations: {
                en: 'Install a plugin'
              },
              link: '/install_plugin'
            },
            {
              label: 'Actualizar el aplicativo',
              translations: {
                en: 'Update the application'
              },
              link: '/actualizar_local'
            }
          ]
        },
        {
          label: 'Configuración de la herramienta',
          translations: {
            en: 'Tool configuration'
          },
          items: [
            {
              label: 'Los estándares de metadatos y tipos de contenido',
              translations: {
                en: 'Metadata standards and content types'
              },
              link: '/estandares'
            },
            {
              label: 'Campos para los estándares de metadatos',
              translations: {
                en: 'Fields for metadata standards'
              },
              link: '/campos'
            },
            {
              label: 'Las vistas de consulta',
              translations: {
                en: 'Query views'
              },
              link: '/consulta'
            },
            {
              label: 'Los roles de usuario',
              translations: {
                en: 'User roles'
              },
              link: '/roles'
            },
            {
              label: 'Los niveles de acceso a la información',
              translations: {
                en: 'Levels of access to information'
              },
              link: '/acceso'
            },
            {
              label: 'Los ajustes del sistema',
              translations: {
                en: 'System settings'
              },
              link: '/ajustes'
            }
          ]
        },
        {
          label: 'Mi perfil',
          translations: {
            en: 'My profile'
          },
          items: [
            {
              label: 'Configuración de mi perfil',
              translations: {
                en: 'My profile settings'
              },
              link: '/perfil/config'
            },
            {
              label: 'Mis favoritos',
              translations: {
                en: 'My bookmarks'
              },
              link: '/perfil/favoritos'
            },
            {
              label: 'Mis recortes',
              translations: {
                en: 'My snippets'
              },
              link: '/perfil/recortes'
            },
            {
              label: 'Las llaves de acceso',
              translations: {
                en: 'Access keys'
              },
              link: '/perfil/llaves'
            },
            {
              label: 'Mis procesamientos',
              translations: {
                en: 'My processings'
              },
              link: '/perfil/procesamientos'
            },
            {
              label: 'Procesamientos automáticos',
              translations: {
                en: 'Automatic processings'
              },
              link: '/perfil/procesamientos_auto'
            }
          ]
        },
        {
          label: 'Carga de la información',
          translations: {
            en: 'Information loading'
          },
          items: [
            {
              label: 'El módulo de catalogación',
              translations: {
                en: 'The cataloging module'
              },
              link: '/catalogacion'
            },
            {
              label: 'Cargas masivas usando el script de carga y la API de administración',
              translations: {
                en: 'Bulk uploads using the upload script and the administration API'
              },
              link: '/masivas'
            },
            {
              label: 'Actualizar / exportar los tipos de contenido, listados y estándares de metadatos',
              translations: {
                en: 'Update / export content types, listings and metadata standards'
              },
              link: '/inventarios'
            },
            {
              label: 'Cargar polígonos geográficos para la visualización y catalogación de la información',
              translations: {
                en: 'Load geographic polygons for viewing and cataloging information'
              },
              link: '/geosystem'
            }
          ]
        },
        {
          label: 'Documentación técnica',
          translations: {
            en: 'Technical documentation'
          },
          items: [
            {
              label: 'Stack tecnológico y requerimientos',
              translations: {
                en: 'Technological stack and requirements'
              },
              link: '/stack'
            },
            {
              label: 'Las filas de procesos y los nodos de procesamiento',
              translations: {
                en: 'Process rows and processing nodes'
              },
              link: '/nodos'
            }
          ]
        },
        {
          label: 'Licencia y código de conducta',
          translations: {
            en: 'License and code of conduct'
          },
          items: [
            {
              label: 'Agradecimientos',
              translations: {
                en: 'Acknowledgements'
              },
              link: '/agradecimientos'
            },
            {
              label: 'Licencia',
              translations: {
                en: 'License'
              },
              link: '/licencia'
            },
            {
              label: 'Código de conducta',
              translations: {
                en: 'Code of conduct'
              },
              link: '/conducta'
            }
          ]
        }
      ],
      logo: {
        src: './src/assets/logo_docu_archihub.png',
      },
      favicon: '/favicon.ico',
      social: {
        github: 'https://github.com/Archihub-App',
        instagram: 'https://www.instagram.com/archihub_app/',
      },
    }),
  ],
});