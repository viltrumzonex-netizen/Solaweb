import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url'; // <-- IMPORTACIONES NECESARIAS

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  
  // ===============================================
  // SOLUCIÓN AL ERROR DEL ALIAS @/
  // ===============================================
  resolve: {
    alias: {
      // Define que el alias '@' apunta al directorio 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // ===============================================
});