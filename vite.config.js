import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        minify: false,  // Disable minification to avoid differences
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: './index.html'
            },
            output: {
                assetFileNames: 'assets/[name].[ext]'  // Explicitly control asset naming
            }
        }
    }
})