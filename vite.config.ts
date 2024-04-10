/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc'
import {defineConfig} from 'vite'
// @ts-expect-error: type exports may need to be updated in the library package.json
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    server: {
        cors: false
    },
    test: {
        globals: true,
        css: true,
        environment: 'jsdom',
        setupFiles: ['./src/setup.ts'],
        pool: 'forks'
    }
})
