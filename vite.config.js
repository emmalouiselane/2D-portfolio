import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        minify: "terser",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                main: './index.html'
            }
        }
    }
})