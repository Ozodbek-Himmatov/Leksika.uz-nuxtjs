// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Leksika.uz",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        // {rel: "icon", href: "@/public/favicon.svg"},
      ],
      meta: [
        {
          name: "description",
          content: "Dictionary App in Nuxt 3",
        },
        {
          name: "author",
          content: "Ozodbek",
        },
      ],
    },
  },
});
