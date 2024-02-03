// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    }
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/preline.client.ts"],
  modules: ["nuxt-tiptap-editor", "@morev/vue-transitions/nuxt"],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
})
