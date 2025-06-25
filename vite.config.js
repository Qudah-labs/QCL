import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base path to your repo name if different
export default defineConfig({
  base: '/QCL/',
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
