import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  // GitHub Pages needs the repo subpath, while backend-capable hosts should serve from root.
  base: process.env.DEPLOY_TARGET === 'github-pages' ? '/Leena-Power-Tech-Engineer/' : '/',
  plugins: [react()],
}));
