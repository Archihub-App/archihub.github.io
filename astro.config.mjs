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
          sidebar: [
            {
              label: 'Conoce el proyecto',
              link: '/es/archihub',
            },
            {
              label: 'CHANGELOG',
              link: '/es/changelog',
            },
            {
              label: 'Instalación',
              items: [
                { label: 'Instalación en una máquina local', link: '/es/install_local' },
                { label: 'Primeros pasos después de la instalación', link: '/es/pasos' },
                { label: 'Configuración avanzada de la instalación local', link: '/es/config_local' },
                { label: 'Instalar un plugin', link: '/es/install_plugin' },
                { label: 'Actualizar el aplicativo', link: '/es/actualizar_local' },
              ],
            },
            {
              label: 'Licencia y código de conducta',
              items: [
                { label: 'Agradecimientos', link: '/es/agradecimientos' },
                { label: 'Licencia', link: '/es/licencia' },
                { label: 'Código de conducta', link: '/es/conducta' },
              ],
            },
          ],
        },
        en: {
          label: 'English',
          sidebar: [
            {
              label: 'About the Project',
              link: '/archihub',
            },
            {
              label: 'CHANGELOG',
              link: '/changelog',
            },
            {
              label: 'Installation',
              items: [
                { label: 'Install on a Local Machine', link: '/install_local' },
                { label: 'First Steps After Installation', link: '/pasos' },
                { label: 'Advanced Local Installation Configuration', link: '/config_local' },
                { label: 'Install a Plugin', link: '/install_plugin' },
                { label: 'Update the Application', link: '/actualizar_local' },
              ],
            },
            {
              label: 'License and Code of Conduct',
              items: [
                { label: 'Acknowledgments', link: '/agradecimientos' },
                { label: 'License', link: '/licencia' },
                { label: 'Code of Conduct', link: '/conducta' },
              ],
            },
          ],
        },
      },
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