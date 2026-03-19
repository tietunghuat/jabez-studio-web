<template>
  <main>
    <SectionHero />
    <SectionAbout />
    <SectionExperience />
    <SectionStack />
    <SectionProjects />
    <SectionClients />
    <SectionContact />
  </main>
</template>

<script setup lang="ts">
import SectionClients from "~/components/SectionClients.vue";

const { t } = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();

useSeoMeta({
  title: t("meta.homeTitle"),
  description: t("meta.homeDescription"),
  ogTitle: t("meta.ogTitle"),
  ogDescription: t("meta.ogDescription"),
  ogUrl: config.public.siteUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>
