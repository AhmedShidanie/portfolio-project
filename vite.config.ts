import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set to your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
