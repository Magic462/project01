import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/@view/',
  plugins: [
    ElementPlus({ useSource: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //配置elementPlus采用sass样式配色系统
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       //自动导入定制化样式文件进行样式覆盖
  //       additionalData:`
  //       @use"style/element/index.scss" as *;
  //       `
  //     }
  //   }
  // }
})