import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-project/', // Set to your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
