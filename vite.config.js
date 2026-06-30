import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@syncfusion/ej2-react-charts') || id.includes('@syncfusion/ej2-charts')) {
              return 'vendor-syncfusion-charts';
            }
            if (id.includes('@syncfusion/ej2-react-grids') || id.includes('@syncfusion/ej2-grids')) {
              return 'vendor-syncfusion-grids';
            }
            if (id.includes('@syncfusion/ej2-react-schedule') || id.includes('@syncfusion/ej2-schedule')) {
              return 'vendor-syncfusion-schedule';
            }
            if (id.includes('@syncfusion/ej2-react-kanban') || id.includes('@syncfusion/ej2-kanban')) {
              return 'vendor-syncfusion-misc';
            }
            if (id.includes('@syncfusion/ej2-react-richtexteditor') || id.includes('@syncfusion/ej2-richtexteditor')) {
              return 'vendor-syncfusion-misc';
            }
            if (id.includes('@syncfusion')) {
              return 'vendor-syncfusion-base';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
})