import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Важно для Docker. Позволяет Vite слушать на всех сетевых интерфейсах
        hmr: {
            host: 'localhost', // Укажите хост для HMR
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
});
