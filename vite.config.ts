import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/weather-dashboard/',
  server: {
    proxy: {
      '/weather-dashboard/api': {
        target: 'https://api.openweathermap.org',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/weather-dashboard\/api/, ''),
      },
    },
  },
})
