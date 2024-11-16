import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx', // Add this for SSR support
            refresh: true,
        }),
        react(),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'], // Ensures required dependencies are bundled for SSR
    },
    build: {
        rollupOptions: {
            input: {
                app: 'resources/js/app.jsx',
                ssr: 'resources/js/ssr.jsx', // Define SSR entry point
            },
            output: {
                dir: 'bootstrap/ssr', // Output directory for SSR bundle
            },
        },
    },
});
