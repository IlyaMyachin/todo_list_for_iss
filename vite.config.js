import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    watch: {
      usePolling: true
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("/src", import.meta.url)),
      "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        additionalData:
            '@import "@/css";'
      }
    }
  },
})
