export default defineNuxtConfig({
  compatibilityDate: "2025-03-03",
  devtools: { enabled: true },
  ssr: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],

  i18n: {
    locales: [
      {
        code: "zh",
        iso: "zh-TW",
        name: "繁體中文",
        file: "zh-TW.json",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "zh",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    // seo: true,
  },

  devServer: {
    port: 3088,
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["~/assets/css/main.css"],
  // runtimeConfig: {
  //   public: {
  //     siteUrl: process.env.SITE_URL || "https://jabezstudio.com",
  //   },
  // },

  nitro: {
    preset: "node-server",
  },
});
