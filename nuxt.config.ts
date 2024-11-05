// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/"),
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  router: {
    base: '/joeroth74.github.io/'
  },

  mode: 'static',
  target: 'static',

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
});