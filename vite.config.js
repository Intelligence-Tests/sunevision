import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicitly define the output directory
    rollupOptions: {
      input: '/index.html', // Specify entry point for the build
    },
  },
});

