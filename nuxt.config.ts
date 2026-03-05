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

  devServer: {
    port: 3088,
  },

  i18n: {
    locales: [
      { code: "zh", iso: "zh-TW", name: "繁體中文", file: "zh-TW.json" },
      { code: "en", iso: "en-US", name: "English", file: "en-US.json" },
    ],
    lazy: false, // ← 關掉 lazy，直接 bundle
    langDir: "locales/",
    defaultLocale: "zh",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
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
          rel: "icon",
          type: "image/x-icon",
          href: "/images/jabez-studio-logo.png",
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

  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || "https://jabezstudio.com",
      gaId: process.env.NUXT_PUBLIC_GA_ID,
    },
  },

  nitro: {
    preset: "static",
    prerender: {
      routes: ["/", "/en"],
      crawlLinks: true,
    },
  },
});
