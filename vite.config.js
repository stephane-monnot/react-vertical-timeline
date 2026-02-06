import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    open: '/demo/index.html',
  },
  resolve: {
    alias: {
      'react-vertical-timeline-component': path.resolve(__dirname, './src'),
    },
  },
  // 👇 FIX: This regex now matches BOTH src files and demo files
  esbuild: {
    loader: "jsx",
    include: /.*\.(js|jsx)$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});