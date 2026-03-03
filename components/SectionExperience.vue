<script setup lang="ts">
import { industries } from "~/data/experience";
const { t, locale } = useI18n();
const { observeElement } = useScrollAnimation();

const labelEl = ref<HTMLElement | null>(null);
const titleEl = ref<HTMLElement | null>(null);
const subEl = ref<HTMLElement | null>(null);
const cardEls = ref<HTMLElement[]>([]);

onMounted(() => {
  [labelEl, titleEl, subEl].forEach((el) => observeElement(el.value));
  cardEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 80}ms`;
      observeElement(el);
    }
  });
});
</script>
<template>
  <section id="experience" class="section-padding">
    <div class="section-container">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p ref="labelEl" class="opacity-0-init section-label justify-center">
          <span class="w-8 h-px bg-brand-500 inline-block" />
          {{ t("experience.label") }}
          <span class="w-8 h-px bg-brand-500 inline-block" />
        </p>
        <h2
          ref="titleEl"
          class="opacity-0-init font-serif text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line mb-4">
          {{ t("experience.title") }}
        </h2>
        <p
          ref="subEl"
          class="opacity-0-init text-neutral-500 dark:text-neutral-400 text-lg">
          {{ t("experience.subtitle") }}
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(industry, i) in industries"
          :key="industry.id"
          :ref="(el) => (cardEls[i] = el as HTMLElement)"
          class="opacity-0-init glass-card p-7 card-hover group cursor-default">
          <div
            class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
            {{ industry.icon }}
          </div>
          <div class="flex items-start justify-between mb-3">
            <h3
              class="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              {{ locale === "zh" ? industry.nameZh : industry.nameEn }}
            </h3>
            <span class="tag ml-2 flex-shrink-0">{{ industry.years }}</span>
          </div>
          <p
            class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5">
            {{
              locale === "zh" ? industry.descriptionZh : industry.descriptionEn
            }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in industry.highlights"
              :key="tag"
              class="tag text-xs"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
