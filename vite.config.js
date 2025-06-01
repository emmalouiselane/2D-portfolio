import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    build: {
        minify: false,  // Disable minification to avoid differences
        assetsDir: "assets",
    }
})