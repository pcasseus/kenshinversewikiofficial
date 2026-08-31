import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 🔓 auto-opens in browser
    port: 5173, // 🎯 optional: explicitly set your dev port
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 💡 use "@/components/..." for cleaner imports
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
