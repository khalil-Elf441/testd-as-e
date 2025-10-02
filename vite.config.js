import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// remplacer 'testd-as-e' par le nom exact de ton repo
export default defineConfig({
  plugins: [react()],
  base: '/testd-as-e/'
})
