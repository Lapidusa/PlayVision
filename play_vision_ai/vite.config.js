import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000, // Укажите порт, если нужно
    },
    resolve: {
        alias: {
            '@': '/src',
            '@public': '/public'
        },
    },
});