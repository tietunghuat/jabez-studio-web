<script setup lang="ts">
import { projects } from "~/data/projects";
const { t, locale } = useI18n();
const { observeElement } = useScrollAnimation();

const featuredEl = ref<HTMLElement | null>(null);
const cardEls = ref<HTMLElement[]>([]);

const featuredProject = computed(() => projects.find((p) => p.featured));
const otherProjects = computed(() =>
  projects.filter((p) => p !== featuredProject.value),
);

const icons: Record<string, string> = {
  finpay: "💳",
  cloudops: "📊",
  medsync: "🏥",
  logistrack: "🚚",
};
function projectIcon(id: string) {
  return icons[id] || "🔨";
}

onMounted(() => {
  if (featuredEl.value) observeElement(featuredEl.value);
  cardEls.value.forEach((el, i) => {
    if (el) {
      el.style.transitionDelay = `${i * 100}ms`;
      observeElement(el);
    }
  });
});
</script>
<template>
  <section id="projects" class="section-padding">
    <div class="section-container">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="section-label justify-center">
          <span class="w-8 h-px bg-brand-500 inline-block" />
          {{ t("projects.label") }}
          <span class="w-8 h-px bg-brand-500 inline-block" />
        </p>
        <h2
          class="font-serif text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line mb-4">
          {{ t("projects.title") }}
        </h2>
        <p class="text-neutral-500 dark:text-neutral-400 text-lg">
          {{ t("projects.subtitle") }}
        </p>
      </div>

      <!-- Featured project (large) -->
      <div
        v-if="featuredProject"
        ref="featuredEl"
        class="opacity-0-init glass-card p-0 overflow-hidden card-hover mb-8">
        <div class="grid md:grid-cols-2">
          <!-- Project image placeholder -->
          <div
            class="relative h-64 md:h-auto bg-gradient-to-br from-brand-100 to-amber-100 dark:from-brand-950 dark:to-neutral-900 flex items-center justify-center overflow-hidden">
            <div class="text-8xl opacity-30">🔨</div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-5xl">{{
                featuredProject.id === "finpay"
                  ? "💳"
                  : featuredProject.id === "cloudops"
                    ? "📊"
                    : "🏥"
              }}</span>
            </div>
            <span
              class="absolute top-4 left-4 tag bg-brand-500 text-white border-brand-500"
              >Featured</span
            >
            <span class="absolute top-4 right-4 tag">{{
              featuredProject.year
            }}</span>
          </div>
          <!-- Content -->
          <div class="p-8 md:p-10">
            <h3 class="font-serif text-2xl md:text-3xl font-bold mb-4">
              {{
                locale === "zh"
                  ? featuredProject.titleZh
                  : featuredProject.titleEn
              }}
            </h3>
            <p
              class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              {{
                locale === "zh"
                  ? featuredProject.descriptionZh
                  : featuredProject.descriptionEn
              }}
            </p>
            <div class="mb-6">
              <p
                class="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
                {{ t("projects.tech_used") }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in featuredProject.tags"
                  :key="tag"
                  class="tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
            <div class="flex gap-3">
              <a
                v-if="featuredProject.link"
                :href="featuredProject.link"
                target="_blank"
                class="btn-primary text-sm py-2.5">
                {{ t("projects.view_project") }} ↗
              </a>
              <a
                v-if="featuredProject.github"
                :href="featuredProject.github"
                target="_blank"
                class="btn-outline text-sm py-2.5">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Other projects grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in otherProjects"
          :key="project.id"
          :ref="(el) => (cardEls[i] = el as HTMLElement)"
          class="opacity-0-init glass-card p-7 card-hover group">
          <div class="flex items-start justify-between mb-4">
            <div class="text-3xl">{{ projectIcon(project.id) }}</div>
            <span class="tag">{{ project.year }}</span>
          </div>
          <h3 class="font-serif text-xl font-semibold mb-3">
            {{ locale === "zh" ? project.titleZh : project.titleEn }}
          </h3>
          <p
            class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5">
            {{
              locale === "zh" ? project.descriptionZh : project.descriptionEn
            }}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span
              v-for="tag in project.tags.slice(0, 4)"
              :key="tag"
              class="tag text-xs"
              >{{ tag }}</span
            >
            <span v-if="project.tags.length > 4" class="tag text-xs"
              >+{{ project.tags.length - 4 }}</span
            >
          </div>
          <div class="flex gap-2">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-sm font-medium text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              {{ t("projects.view_project") }} →
            </a>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
