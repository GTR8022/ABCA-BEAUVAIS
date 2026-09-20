import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Note : le site n'utilise aucune API Gemini. Les anciennes variables
// process.env.API_KEY / GEMINI_API_KEY (heritees du template AI Studio) ont ete
// retirees : elles auraient ete injectees en clair dans le JS public du site.
export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
