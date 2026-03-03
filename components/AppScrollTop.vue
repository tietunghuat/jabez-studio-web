<script setup lang="ts">
const showBtn = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    showBtn.value = window.scrollY > 400;
  });
});
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
<template>
  <Transition name="fade">
    <button
      v-if="showBtn"
      @click="scrollTop"
      class="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Back to top">
      ↑
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
