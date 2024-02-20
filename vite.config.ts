import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import ElementPlus from "unplugin-element-plus/dist/vite";
import  AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/variables.module" as *;`,
                prependData: `@use "~/styles/default.module" as *;`,
                // 正常显示页面
                // prependData: `@use "~/styles/index.module" as *;`,
                // additionalData: `@use "~/styles/default.module" as *;`,
                javascriptEnabled: true
                // additionalData: `@import "src/styles/index.module";`,
            },
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver({ importStyle: "sass" })]
        })
    ],
})
