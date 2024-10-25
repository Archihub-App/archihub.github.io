// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ArchiHUB Docs',
			logo: {
				src: './src/assets/logo.png',
			},
			social: {
				github: 'https://github.com/Archihub-App/archihub.github.io',
				instagram: 'https://www.instagram.com/archihub_app/',
			},
			sidebar: [
				{
					label: 'Instalación',
					items: [
						{ label: 'Instalación en una máquina local', slug: 'install_local' },
						{ label: 'Primeros pasos después de la instalación', slug: 'pasos' },
						{ label: 'Configuración avanzada de la instalación local', slug: 'config_local' },
						{ label: 'Instalar un plugin', slug: 'install_plugin' },
						{ label: 'Actualizar el aplicativo', slug: 'actualizar_local' },
					],
				},
				{
					label: 'Configuración de la herramienta',
					items: [
						{ label: 'Los estándares de metadatos y tipos de contenido', slug: 'estandares' },
						{ label: 'Campos para los estándares de metadatos', slug: 'campos' },
						{ label: 'Las vistas de consulta', slug: 'consulta' },
						{ label: 'Los roles de usuario', slug: 'roles' },
						{ label: 'Los niveles de acceso a la información', slug: 'acceso' },
						{ label: 'Los ajustes del sistema', slug: 'ajustes' },
					],
				},
				{
					label: 'Mi perfil',
					items: [
						{ label: 'Configuración de mi perfil', slug: 'perfil/config' },
						{ label: 'Mis favoritos', slug: 'perfil/favoritos' },
						{ label: 'Mis recortes', slug: 'perfil/recortes' },
						{ label: 'Las llaves de acceso', slug: 'perfil/llaves' },
						{ label: 'Mis procesamientos', slug: 'perfil/procesamientos' },
						{ label: 'Procesamientos automáticos', slug: 'perfil/procesamientos_auto' },
					],
				},
				{
					label: 'Carga de la información',
					items: [
						{ label: 'El módulo de catalogación', slug: 'catalogacion' },
						{ label: 'Cargas masivas usando el script de carga y la API de administración', slug: 'masivas' },
						{ label: 'Actualizar / exportar los tipos de contenido, listados y estándares de metadatos', slug: 'inventarios' },
						{ label: 'Cargar polígonos geográficos para la visualización y catalogación de la información', slug: 'geosystem' },
					],
				},
				// {
				// 	label: 'Los Plugins',
				// 	items: [
				// 		// { label: 'Generar inventarios y edición masiva de la información', slug: 'plugins/generar-inventarios' },
				// 		{ label: 'Descarga videos de YouTube', slug: 'plugins/descarga-videos' },
				// 		{ label: 'Descarga artículos web', slug: 'plugins/descarga-articulos' },
				// 		{ label: 'Transcripción y traducción automática de audios y videos', slug: 'plugins/transcripcion' },
				// 	],
				// },
				{
					label: 'Documentación técnica',
					items: [
						{ label: 'Stack tecnológico y requerimientos', slug: 'stack' },
						{ label: 'Las filas de procesos y los nodos de procesamiento', slug: 'nodos' },
						// { label: 'Compatibilidad con el Protocolo de la Iniciativa de Archivos Abiertos para la recolección de metadatos (OAI-PMH)', slug: 'compatibilidad-oai-pmh' },
					],
				},
				// {
				// 	label: 'Preguntas frecuentes',
				// 	items: [{ label: 'Errores frecuentes', slug: 'preguntas' }],
				// },
				{
					label: 'Licencia y código de conducta',
					items: [
						{ label: 'Agradecimientos', slug: 'agradecimientos' },
						{ label: 'Licencia', slug: 'licencia' },
						{ label: 'Código de conducta', slug: 'conducta' },
					],
				}
			]
		}),
	],
});
