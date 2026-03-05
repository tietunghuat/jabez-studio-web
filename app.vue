<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";

const { initTheme } = useTheme();
const { t, locale } = useI18n();
const config = useRuntimeConfig();

// Init theme on client
onMounted(() => initTheme());

// SEO
useHead({
  htmlAttrs: { lang: locale.value === "zh" ? "zh-TW" : "en" },
  meta: [{ name: "theme-color", content: "#dc7d1e" }],
});
// GA 初始化
if (config.public.gaId) {
  useHead({
    script: [
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.public.gaId}');
        `,
        type: "text/javascript",
      },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`,
        async: true,
      },
    ],
  });
}
</script>

<template>
  <div class="min-h-screen">
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
    <AppScrollTop />
  </div>
</template>
