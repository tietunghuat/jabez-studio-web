<script setup lang="ts">
const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { isDark, toggleTheme } = useTheme();
const router = useRouter();

const scrolled = ref(false);
const mobileOpen = ref(false);

const navItems = [
  { key: "about" },
  { key: "experience" },
  { key: "stack" },
  { key: "projects" },
  { key: "contact" },
];

const availableLocales = computed(() =>
  (locales.value as any[]).filter((l) => l.code !== locale.value),
);
// Show both for switcher:
const allLocales = [{ code: "zh" }, { code: "en" }];

function switchLocale(code: string) {
  const path = switchLocalePath(code as "zh" | "en");
  router.push(path);
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 20;
  });
});
</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-sm border-b border-neutral-200/50 dark:border-neutral-800/50'
        : 'bg-transparent',
    ]">
    <nav
      class="section-container flex items-center justify-between h-16 md:h-18">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="group flex items-center gap-2">
        <span
          class="font-serif text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:gradient-text transition-all duration-300">
          Jabez<span class="text-brand-500">.</span>
        </span>
        <span
          class="hidden sm:block text-xs text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-widest mt-1">
          Studio
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="`#${item.key}`"
          class="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-200">
          {{ t(`nav.${item.key}`) }}
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Lang Switcher -->
        <div
          class="flex items-center gap-1 p-1 rounded-lg bg-neutral-100 dark:bg-neutral-800">
          <button
            v-for="lang in availableLocales"
            :key="lang.code"
            @click="switchLocale(lang.code)"
            class="px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-200"
            :class="
              locale === lang.code
                ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
            ">
            {{ lang.code === "zh" ? "繁中" : "EN" }}
          </button>
        </div>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          :aria-label="isDark ? t('nav.toggleLight') : t('nav.toggleDark')"
          class="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-brand-500 dark:hover:text-brand-400 transition-all duration-200">
          <span v-if="isDark" class="text-base">☀️</span>
          <span v-else class="text-base">🌙</span>
        </button>

        <!-- Mobile Menu -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
          <div class="w-5 h-4 flex flex-col justify-between">
            <span
              class="block w-full h-0.5 bg-current transition-all"
              :class="mobileOpen ? 'rotate-45 translate-y-1.5' : ''" />
            <span
              class="block w-full h-0.5 bg-current transition-all"
              :class="mobileOpen ? 'opacity-0' : ''" />
            <span
              class="block w-full h-0.5 bg-current transition-all"
              :class="mobileOpen ? '-rotate-45 -translate-y-1.5' : ''" />
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800">
        <div class="section-container py-4 flex flex-col gap-3">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="`#${item.key}`"
            @click="mobileOpen = false"
            class="py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-500">
            {{ t(`nav.${item.key}`) }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
