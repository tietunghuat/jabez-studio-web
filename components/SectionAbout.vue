<script setup lang="ts">
import dayjs from "dayjs";

const { t } = useI18n();
const { observeElement } = useScrollAnimation();

const experienceYears = dayjs().diff(dayjs("2022-01-01"), "year");

const labelEl = ref<HTMLElement | null>(null);
const titleEl = ref<HTMLElement | null>(null);
const body1El = ref<HTMLElement | null>(null);
const body2El = ref<HTMLElement | null>(null);
const statsEl = ref<HTMLElement | null>(null);

const stats = [
  { key: "h1", valueKey: "highlight1_value", labelKey: "highlight1_label" },
  { key: "h2", valueKey: "highlight2_value", labelKey: "highlight2_label" },
  { key: "h3", valueKey: "highlight3_value", labelKey: "highlight3_label" },
];

onMounted(() => {
  [labelEl, titleEl, body1El, body2El, statsEl].forEach((el) =>
    observeElement(el.value),
  );
});
</script>
<template>
  <section id="about" class="section-padding bg-white dark:bg-neutral-900/50">
    <div class="section-container">
      <div class="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Text -->
        <div>
          <p ref="labelEl" class="opacity-0-init section-label">
            <span class="w-8 h-px bg-brand-500 inline-block" />
            {{ t("about.label") }}
          </p>
          <h2
            ref="titleEl"
            class="opacity-0-init font-serif text-4xl md:text-5xl font-bold leading-[1.15] mb-8 whitespace-pre-line">
            {{ t("about.title") }}
          </h2>
          <p
            ref="body1El"
            class="opacity-0-init text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 text-lg">
            {{ t("about.body1") }}
          </p>
          <p
            ref="body2El"
            class="opacity-0-init text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            {{ t("about.body2") }}
          </p>
        </div>

        <!-- Stats -->
        <div ref="statsEl" class="opacity-0-init grid grid-cols-3 gap-6">
          <div
            v-for="[key, stat] in Object.entries(stats)"
            :key="stat.key"
            class="group glass-card p-6 text-center card-hover cursor-default">
            <div
              v-if="stat.valueKey === 'highlight1_value'"
              class="font-serif text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
              {{ experienceYears }}+
            </div>
            <div
              v-else
              class="font-serif text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
              {{ t(`about.${stat.valueKey}`) }}
            </div>
            <div
              class="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              {{ t(`about.${stat.labelKey}`) }}
            </div>
          </div>

          <!-- Avatar placeholder / decorative block -->
          <div class="col-span-3 glass-card p-8 flex items-center gap-6">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-amber-500 flex items-center justify-center text-white text-2xl font-bold font-serif shadow-lg shadow-brand-500/30 flex-shrink-0">
              J
            </div>
            <div>
              <div
                class="font-semibold text-neutral-900 dark:text-neutral-50 mb-0.5">
                Jabez
              </div>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">
                Software Engineer · System Builder
              </div>
              <div class="flex gap-2 mt-3">
                <span class="tag">Global</span>
                <span class="tag">Remote Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
