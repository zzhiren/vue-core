import { defineConfig, Plugin } from 'vite'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from 'flexsearch'
import _fs from 'fs'
// import TypeDocPlugin from './vite-typedoc-plugin'

// const fs = _fs.promises
export default defineConfig({
  clearScreen: false,
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
  
  // plugins: [
  //   SearchPlugin({
  //     ...flexSearchIndexOptions,
  //     previewLength: 100, //搜索结果预览长度
  //     buttonLabel: "搜索",
  //     placeholder: "情输入关键词",
  //   })
  // ]
})

