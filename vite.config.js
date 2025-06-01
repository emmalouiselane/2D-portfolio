import { defineConfig } from "vite";

export default defineConfig({
    base: '/2D-portfolio/',
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