<script setup lang="ts">
const { t } = useI18n();
const el1 = ref<HTMLElement | null>(null);
const el2 = ref<HTMLElement | null>(null);
const el3 = ref<HTMLElement | null>(null);
const el4 = ref<HTMLElement | null>(null);
const el5 = ref<HTMLElement | null>(null);

onMounted(() => {
  const elements = [el1.value, el2.value, el3.value, el4.value, el5.value];
  elements.forEach((el, i) => {
    if (el) {
      setTimeout(() => {
        el.classList.remove("opacity-0-init");
        el.classList.add("animate-in");
      }, i * 150);
    }
  });
});
</script>
<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-brand-50/30 dark:from-neutral-950 dark:via-neutral-950 dark:to-brand-950/20" />
      <!-- Mesh blobs -->
      <div
        class="absolute top-1/4 -left-32 w-96 h-96 bg-brand-300/20 dark:bg-brand-700/10 rounded-full blur-3xl animate-float" />
      <div
        class="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-300/20 dark:bg-amber-700/10 rounded-full blur-3xl animate-float"
        style="animation-delay: -3s" />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-100/10 dark:bg-brand-900/10 rounded-full blur-3xl" />
      <!-- Grid pattern -->
      <div
        class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.015] dark:opacity-[0.03]" />
    </div>

    <div class="section-container w-full pt-24 pb-16">
      <div class="max-w-4xl">
        <!-- Greeting -->
        <div ref="el1" class="opacity-0-init flex items-center gap-3 mb-6">
          <span class="section-label">{{ t("hero.greeting") }}</span>
          <span class="text-2xl animate-float inline-block">👋</span>
        </div>

        <!-- Main Headline -->
        <h1
          ref="el2"
          class="opacity-0-init font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
          <span class="block text-neutral-900 dark:text-neutral-50">{{
            t("hero.name")
          }}</span>
          <span
            class="block gradient-text mt-2 whitespace-pre-line text-4xl sm:text-5xl md:text-6xl leading-[1.1]"
            >{{ t("hero.headline") }}</span
          >
        </h1>

        <!-- Tagline chip -->
        <div ref="el3" class="opacity-0-init mb-6">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-sm font-medium">
            <span
              class="w-2 h-2 rounded-full bg-brand-500 animate-pulse-slow" />
            {{ t("hero.tagline") }}
          </span>
        </div>

        <!-- Subheadline -->
        <p
          ref="el4"
          class="opacity-0-init text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-10">
          {{ t("hero.subheadline") }}
        </p>

        <!-- CTAs -->
        <div ref="el5" class="opacity-0-init flex flex-wrap gap-4">
          <a href="#projects" class="btn-primary text-base px-8 py-4">
            {{ t("hero.cta_primary") }}
            <span>→</span>
          </a>
          <a href="#contact" class="btn-outline text-base px-8 py-4">
            {{ t("hero.cta_secondary") }}
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600">
        <span class="text-xs uppercase tracking-widest">{{
          t("hero.scroll")
        }}</span>
        <div
          class="w-px h-12 bg-gradient-to-b from-neutral-400 to-transparent dark:from-neutral-600 animate-pulse-slow" />
      </div>
    </div>
  </section>
</template>
