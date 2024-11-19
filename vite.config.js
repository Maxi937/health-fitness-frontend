import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'


export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      plugins: [vue(),
      vueJsx(),
      vueDevTools(),],
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:10000",
            changeOrigin: true,
            secure: false,
          },
        },
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  } else {
    return {
      plugins: [vue(),
      vueJsx(),
      vueDevTools(),],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
      },
    };
  }
});
