<script setup lang="ts">
import { techStack } from "~/data/stack";
const { t, locale } = useI18n();
const { observeElement } = useScrollAnimation();

const cardEls = ref<HTMLElement[]>([]);

function levelValue(level: string) {
  return level === "expert" ? 3 : level === "proficient" ? 2 : 1;
}

onMounted(() => {
  cardEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 100}ms`;
      observeElement(el);
    }
  });
});
</script>

<template>
  <section id="stack" class="section-padding bg-white dark:bg-neutral-900/50">
    <div class="section-container">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="section-label justify-center">
          <span class="w-8 h-px bg-brand-500 inline-block" />
          {{ t("stack.label") }}
          <span class="w-8 h-px bg-brand-500 inline-block" />
        </p>
        <h2
          class="font-serif text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line mb-4">
          {{ t("stack.title") }}
        </h2>
        <p class="text-neutral-500 dark:text-neutral-400 text-lg">
          {{ t("stack.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(category, i) in techStack"
          :key="category.id"
          :ref="(el) => (cardEls[i] = el as HTMLElement)"
          class="opacity-0-init glass-card p-7">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">{{ category.icon }}</span>
            <h3 class="font-serif text-xl font-semibold">
              {{ locale === "zh" ? category.nameZh : category.nameEn }}
            </h3>
          </div>
          <div class="space-y-3">
            <div
              v-for="tech in category.items"
              :key="tech.name"
              class="flex items-center justify-between group">
              <div class="flex items-center gap-2.5">
                <span class="text-base">{{ tech.icon }}</span>
                <span
                  class="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >{{ tech.name }}</span
                >
              </div>
              <div class="flex gap-1">
                <span
                  v-for="n in 3"
                  :key="n"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="[
                    n <= levelValue(tech.level)
                      ? 'bg-brand-500'
                      : 'bg-neutral-200 dark:bg-neutral-700',
                  ]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
