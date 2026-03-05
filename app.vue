<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";

const { initTheme } = useTheme();
const { t, locale } = useI18n();

// Init theme on client
onMounted(() => initTheme());

// SEO
useHead({
  htmlAttrs: { lang: locale.value === "zh" ? "zh-TW" : "en" },
  meta: [{ name: "theme-color", content: "#dc7d1e" }],
  script: [
    {
      innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-74FK093SMG');
        `,
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen">
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
    <AppScrollTop />
  </div>
</template>
