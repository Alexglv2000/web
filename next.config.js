/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Esto desactiva la optimización de imágenes de Next.js, ya que GitHub Pages no lo soporta.
  },
  basePath: 'https://github.com/Alexglv2000/web.git',  // Reemplaza con el nombre de tu repositorio en GitHub.
  assetPrefix: 'https://github.com/Alexglv2000/web.git',  // Reemplaza con el nombre de tu repositorio.
};

module.exports = nextConfig;
