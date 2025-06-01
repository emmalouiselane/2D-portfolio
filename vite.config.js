import { defineConfig } from "vite";

export default defineConfig({
    base: '/',
    build: {
        minify: false,
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: './index.html'
            },
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})