import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 设置文件路径别名
function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      '_c': resolve('src/components'),
      'utils': resolve('src/utils'),
      "views": resolve('src/views'),
      'router': resolve('src/router'),
      'assets': resolve('src/assets')
    }
  },
  define: {
    'process.env': {}
  }
})
