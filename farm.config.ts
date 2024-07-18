import { defineConfig } from '@farmfe/core';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': '/api'
        }
      }
    }
  }
});
