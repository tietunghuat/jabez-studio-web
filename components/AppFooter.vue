<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <footer class="border-t border-neutral-200 dark:border-neutral-800 py-10">
    <div
      class="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span
          class="font-serif text-lg font-bold text-neutral-900 dark:text-neutral-50"
          >Jabez<span class="text-brand-500">.</span></span
        >
        <span class="text-xs text-neutral-400 uppercase tracking-widest"
          >Studio</span
        >
      </div>
      <p class="text-sm text-neutral-500 dark:text-neutral-400 text-center">
        {{ t("footer.tagline") }}
      </p>
      <p class="text-xs text-neutral-400 dark:text-neutral-600">
        {{ t("footer.rights") }}
      </p>
    </div>
  </footer>
</template>
