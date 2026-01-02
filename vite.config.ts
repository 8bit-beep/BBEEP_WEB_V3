import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('@ant-design')) return 'vendor-ant';
            if (id.includes('react-query')) return 'vendor-react-query';
            if (id.includes('axios')) return 'vendor-axios';
          }
        }
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: '삑', // 설치 배너에 표시되는 이름
        short_name: '삑', // 아이콘 아래에 표시될 이름
        description: '출석체크하기 좋은 방법',
        theme_color: '#ffffff',
        lang: 'ko',
        display: 'standalone',
        prefer_related_applications: true,
        icons: [
          {
            src: '/assets/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/assets/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
  ],
  server: {
    host: '0.0.0.0',
  }
})
