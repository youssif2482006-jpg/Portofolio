import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the build works on GitHub Pages regardless of repo name
// (project page at /repo-name/ or user page at /).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
