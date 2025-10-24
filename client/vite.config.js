import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    allowedHosts: [
      '8080-i2tjuhakitp78qowuvhlv-2e1b9533.sandbox.novita.ai',
      '.sandbox.novita.ai',
      'localhost'
    ]
  }
})
