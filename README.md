# Pastelería Jenny - Sitio Web

Este es un sitio web para Pastelería Jenny, creado con Next.js y Tailwind CSS.

## Personalización

### Cambiar imágenes

Para cambiar las imágenes, simplemente reemplaza los archivos en la carpeta `/public/assets/` manteniendo los mismos nombres:

- `hero.jpg` - Imagen principal de la página
- `pastel1.jpg` a `pastel6.jpg` - Imágenes de la galería

Si deseas usar nombres diferentes, deberás actualizar las referencias en el archivo `components/gallery.tsx`.

### Cambiar colores

Los colores principales están definidos como variables CSS en el archivo `app/globals.css`:

\`\`\`css
:root {
  --primary: #A569BD;
  --primary-dark: #8E44AD;
  --secondary: #48C9B0;
  --accent: #FF85A2;
  --background: #FFFFFF;
  --text: #333333;
}
\`\`\`

Para cambiar los colores, simplemente actualiza estos valores. Por ejemplo, para una promoción de Halloween, podrías usar:

\`\`\`css
:root {
  --primary: #FF5722;
  --primary-dark: #E64A19;
  --secondary: #4CAF50;
  --accent: #FFC107;
  --background: #FFFFFF;
  --text: #333333;
}
\`\`\`

También deberás actualizar los colores en `tailwind.config.ts` para mantener la consistencia.

## Desarrollo

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm start
