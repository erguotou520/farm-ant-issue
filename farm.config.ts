import { defineConfig } from '@farmfe/core';
import farmJsPluginPostcss from '@farmfe/js-plugin-postcss'

export default defineConfig({
  plugins: ['@farmfe/plugin-react', farmJsPluginPostcss({ /* options */ })],
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
