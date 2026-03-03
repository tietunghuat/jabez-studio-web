export function useScrollAnimation() {
  const observedElements = ref<Element[]>([]);

  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("opacity-0-init");
            observer.value?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observedElements.value.forEach((el) => observer.value?.observe(el));
  });

  onUnmounted(() => {
    observer.value?.disconnect();
  });

  function observeElement(el: Element | null) {
    if (el) {
      el.classList.add("opacity-0-init");
      observedElements.value.push(el);
      if (observer.value) observer.value.observe(el);
    }
  }

  return { observeElement };
}
