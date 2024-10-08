/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Exporta el sitio como estático
    images: {
      unoptimized: true,  // Necesario para soportar imágenes en sitios estáticos
      domains: ['https://github.com/Alexglv2000/web.git'],  // Dominios permitidos para cargar imágenes
    },
    basePath: '/https://github.com/Alexglv2000/web.git',  // Ruta base de tu repositorio
    assetPrefix: 'https://github.com/Alexglv2000/web.git',  // Prefijo para los activos estáticos (CSS, JS, imágenes)
  };
// Usa exportaciones ESM

export default nextConfig;