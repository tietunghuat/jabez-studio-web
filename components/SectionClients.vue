<script setup lang="ts">
import { clients } from "~/data/clients";

const { t } = useI18n();
const { observeElement } = useScrollAnimation();

const labelEl = ref<HTMLElement | null>(null);
const titleEl = ref<HTMLElement | null>(null);
const subEl = ref<HTMLElement | null>(null);
const gridEl = ref<HTMLElement | null>(null);

function getAbbr(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

onMounted(() => {
  [labelEl, titleEl, subEl, gridEl].forEach((el) => observeElement(el.value));
});
</script>
<template>
  <section id="clients" class="section-padding">
    <div class="section-container">
      <!-- Header -->
      <div class="text-center max-w-xl mx-auto mb-14">
        <p ref="labelEl" class="opacity-0-init section-label justify-center">
          <span class="w-8 h-px bg-brand-500 inline-block" />
          {{ t("clients.label") }}
          <span class="w-8 h-px bg-brand-500 inline-block" />
        </p>
        <h2
          ref="titleEl"
          class="opacity-0-init font-serif text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line mb-4">
          {{ t("clients.title") }}
        </h2>
        <p
          ref="subEl"
          class="opacity-0-init text-neutral-500 dark:text-neutral-400 text-lg">
          {{ t("clients.subtitle") }}
        </p>
      </div>

      <!-- Grid -->
      <div
        ref="gridEl"
        class="opacity-0-init flex flex-wrap justify-center gap-4">
        <div
          v-for="client in clients"
          :key="client.id"
          class="bubble group relative flex flex-col items-center justify-center cursor-pointer"
          :style="{
            '--dur': client.dur,
            '--delay': client.delay,
            '--lift': client.lift,
          }">
          <!-- Logo / Abbr -->
          <div class="w-14 h-14 flex items-center justify-center">
            <img
              v-if="client.logo"
              :src="client.logo"
              :alt="client.name"
              class="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              draggable="false" />
            <span
              v-else
              class="text-xl font-bold tracking-tight text-neutral-500 dark:text-neutral-400 group-hover:text-brand-500 transition-colors duration-300 select-none">
              {{ getAbbr(client.name) }}
            </span>
          </div>

          <!-- Tooltip -->
          <div
            class="tooltip pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-10">
            <span
              class="block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 whitespace-nowrap">
              {{ client.name }}
            </span>
            <span
              class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900 dark:border-t-white" />
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="flex justify-center mt-14">
        <div
          class="w-14 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bubble {
  width: 120px;
  height: 120px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(228, 228, 231, 0.9);
  transition:
    background 0.3s,
    border-color 0.3s,
    transform 0.25s,
    box-shadow 0.3s;
  animation: floatUp var(--dur) ease-in-out infinite;
  animation-delay: var(--delay);
}

:global(.dark) .bubble {
  background: rgba(39, 39, 42, 0.7);
  border-color: rgba(63, 63, 70, 0.8);
}

.bubble:hover {
  background: rgba(220, 125, 30, 0.07);
  border-color: rgba(220, 125, 30, 0.45);
  box-shadow: 0 8px 28px rgba(220, 125, 30, 0.15);
  animation-play-state: paused;
  transform: translateY(-6px) scale(1.06);
  z-index: 2;
}

@keyframes floatUp {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(var(--lift));
  }
}
</style>
