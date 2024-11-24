import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicitly define the output directory
  },
  server: {
    open: true, // Automatically open the browser when starting the dev server
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for cleaner imports
    },
  },
  base: '/', // Base path for assets
});
