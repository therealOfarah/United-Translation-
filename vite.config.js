import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure React Router SPA routes work
    historyApiFallback: true,
  },
});
