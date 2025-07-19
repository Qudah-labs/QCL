import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Update the base path to your repo name if different
export default defineConfig({
  base: '/QCL/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'new-logo.png', 'slider1.png', 'slider2.png', 'slider3.png', 'slider4.png', 'slider5.png', 'slider6.png'],
      manifest: {
        name: 'Qudah Labs',
        short_name: 'QCL',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d3053',
        theme_color: '#0d3053',
        icons: [
          {
            src: '/QCL/favicon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/QCL/favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
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
