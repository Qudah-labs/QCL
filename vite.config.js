import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base path to your repo name if different
export default defineConfig({
  base: '/QCL/',
  plugins: [
    react()
  ],
  publicDir: 'public',
  server: {
    fs: {
      strict: false,
    },
    // Ensure static assets are served correctly in development
    middlewareMode: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    // PWA optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    // Ensure proper caching headers
    assetsInlineLimit: 0,
  },
  // PWA specific configurations
  define: {
    __PWA_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
  },
});