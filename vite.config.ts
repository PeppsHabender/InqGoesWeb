import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

const dynamicImport = require('./dynamic-import.ts').default;

export default defineConfig({
    plugins: [
        react(),
        dynamicImport({
            folder: 'public/media',
            destination: 'media',
            moduleName: 'media',
            extensions: ['.jpg']
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
})
