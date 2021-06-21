import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

import MonacoEditorNlsPlugin, {
  esbuildPluginMonacoEditorNls,
  Languages
} from 'vite-plugin-monaco-editor-nls'

const MonacoEditorPrefix = `monaco-editor/esm/vs`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    }),
    MonacoEditorNlsPlugin({ locale: Languages.zh_hans })
  ],
  server: {
    host: '0.0.0.0'
  },
  define: {
    'process.env': process.env
  },
  base: './', // 设置打包路径
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      less: path.resolve(__dirname, './src/less'),
      assets: path.resolve(__dirname, './src/assets'),
      com: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      mixins: path.resolve(__dirname, './src/mixins')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          jsonWorker: [`${MonacoEditorPrefix}/language/json/json.worker`],
          cssWorker: [`${MonacoEditorPrefix}/language/css/css.worker`],
          htmlWorker: [`${MonacoEditorPrefix}/language/html/html.worker`],
          tsWorker: [`${MonacoEditorPrefix}/language/typescript/ts.worker`],
          editorWorker: [`${MonacoEditorPrefix}/editor/editor.worker`]
        }
      }
    }
  },
  optimizeDeps: {
    /** vite >= 2.3.0 */
    esbuildOptions: {
      plugins: [
        esbuildPluginMonacoEditorNls({
          locale: Languages.zh_hans
        })
      ]
    }
  }
})
