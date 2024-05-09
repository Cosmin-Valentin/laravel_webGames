import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/css/chicken-runner.css",
                "resources/js/chicken-runner.js",
                "resources/css/runner.css",
                "resources/js/runner.js",
            ],
            refresh: true,
        }),
    ],
    css: {
        postcss: "./postcss.config.js",
    },
});
