import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: 'public/dist'
    },

    server: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
});
