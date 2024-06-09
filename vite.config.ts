// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
