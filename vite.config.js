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
      includeAssets: ['favicon.png', 'new-logo.png', 'images/slider1.png', 'images/slider2.png', 'images/slider3.png', 'images/slider4.png', 'images/slider5.png', 'images/slider6.png', 'videos/hero-video.mp4', 'icons/**/*.png'],
      manifest: {
        name: 'مختبرات القضـــاة التخصصية',
        short_name: 'QCL',
        description: 'Qudah Consulting laboratories - Medical Laboratory Services',
        start_url: '/QCL/',
        scope: '/QCL/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#0d3053',
        theme_color: '#0d3053',
        categories: ['medical', 'health', 'business'],
        icons: [
          {
            src: '/QCL/favicon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/QCL/favicon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/QCL/new-logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp4}']
      }
    })
  ],
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
});