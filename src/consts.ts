export const SITE = {
  title: 'ArchiHub',
  description: 'Your website description.',
  githubUrl: "https://github.com/Archihub-App",
  defaultLanguage: "es",
  logo: "/logo.png",
  projectName: "ArchiHub",
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'logo.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Spanish: 'es',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = ``

export const COMMUNITY_INVITE_URL = ``

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>

export const SIDEBAR: Sidebar = {
  es: {
    "Instalación": [
      { text: 'Instalación en una máquina local', link: '/install_local' },
      { text: 'Primeros pasos después de la instalación', link: '/pasos' },
      { text: 'Configuración avanzada de la instalación local', link: '/config_local' },
      { text: 'Instalar un plugin', link: '/install_plugin' },
      { text: 'Actualizar el aplicativo', link: '/actualizar_local' },
    ],
    "Configuración de la herramienta": [
      { text: 'Los estándares de metadatos y tipos de contenido', link: '/estandares' },
      { text: 'Campos para los estándares de metadatos', link: '/campos' },
      { text: 'Las vistas de consulta', link: '/consulta' },
      { text: 'Los roles de usuario', link: '/roles' },
      { text: 'Los niveles de acceso a la información', link: '/acceso' },
      { text: 'Los ajustes del sistema', link: '/ajustes' },
    ],
    "Mi perfil": [
      { text: 'Configuración de mi perfil', link: '/perfil/config' },
      { text: 'Mis favoritos', link: '/perfil/favoritos' },
      { text: 'Mis recortes', link: '/perfil/recortes' },
      { text: 'Las llaves de acceso', link: '/perfil/llaves' },
      { text: 'Mis procesamientos', link: '/perfil/procesamientos' },
      { text: 'Procesamientos automáticos', link: '/perfil/procesamientos_auto' },
    ],
    "Carga de la información": [
      { text: 'El módulo de catalogación', link: '/catalogacion' },
      { text: 'Cargas masivas usando el script de carga y la API de administración', link: '/masivas' },
      { text: 'Actualizar / exportar los tipos de contenido, listados y estándares de metadatos', link: '/inventarios' },
      { text: 'Cargar polígonos geográficos para la visualización y catalogación de la información', link: '/geosystem' },
    ],
    "Los Plugins": [
      { text: 'Generar inventarios y edición masiva de la información', link: '/plugins/generar-inventarios' },
      { text: 'Descarga videos de YouTube', link: '/plugins/descarga-videos' },
      { text: 'Descarga artículos web', link: '/plugins/descarga-articulos' },
      { text: 'Transcripción y traducción automática de audios y videos', link: '/plugins/transcripcion' },
    ],
    "Documentación técnica": [
      { text: 'Stack tecnológico y requerimientos', link: '/stack' },
      { text: 'Los Plugins', link: '/plugins' },
      { text: 'Las filas de procesos y los nodos de procesamiento', link: '/nodos' },
      { text: 'Compatibilidad con el Protocolo de la Iniciativa de Archivos Abiertos para la recolección de metadatos (OAI-PMH)', link: '/compatibilidad-oai-pmh' },
    ],
    "Preguntas frecuentes": [
      { text: 'Errores frecuentes', link: '/preguntas' },
    ],
    "Licencia y código de conducta": [
      { text: 'Agradecimientos', link: '/agradecimientos' },
      { text: 'Licencia', link: '/licencia' },
      { text: 'Código de conducta', link: '/conducta' },
    ],
  }
}
