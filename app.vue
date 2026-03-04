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
