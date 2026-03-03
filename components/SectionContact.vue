<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <section id="contact" class="section-padding bg-white dark:bg-neutral-900/50">
    <div class="section-container">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <p class="section-label justify-center">
            <span class="w-8 h-px bg-brand-500 inline-block" />
            {{ t("contact.label") }}
            <span class="w-8 h-px bg-brand-500 inline-block" />
          </p>
          <h2
            class="font-serif text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line mb-4">
            {{ t("contact.title") }}
          </h2>
          <p class="text-neutral-500 dark:text-neutral-400 text-lg">
            {{ t("contact.subtitle") }}
          </p>
        </div>

        <!-- Availability badge -->
        <div class="flex justify-center mb-12">
          <div class="glass-card px-6 py-4 flex items-center gap-3">
            <span
              class="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow flex-shrink-0" />
            <div>
              <p
                class="font-medium text-neutral-900 dark:text-neutral-50 text-sm">
                {{ t("contact.availability") }}
              </p>
              <p class="text-xs text-neutral-500 dark:text-neutral-400">
                {{ t("contact.availability_note") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact links -->
        <div class="grid sm:grid-cols-3 gap-6">
          <a
            href="mailto:jabez@jabezstudio.com"
            class="glass-card p-7 card-hover group text-center block">
            <div
              class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
              📧
            </div>
            <p
              class="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">
              {{ t("contact.email_label") }}
            </p>
            <p
              class="font-medium text-neutral-800 dark:text-neutral-200 text-sm break-all">
              jabez@jabezstudio.com
            </p>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            class="glass-card p-7 card-hover group text-center block">
            <div
              class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
              🐙
            </div>
            <p
              class="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">
              {{ t("contact.github_label") }}
            </p>
            <p
              class="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
              @jabez-studio
            </p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            class="glass-card p-7 card-hover group text-center block">
            <div
              class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
              💼
            </div>
            <p
              class="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">
              {{ t("contact.linkedin_label") }}
            </p>
            <p
              class="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
              Jabez Studio
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
