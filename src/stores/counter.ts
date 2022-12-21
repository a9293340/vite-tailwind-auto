import { defineStore } from "pinia";

export const useCounterStore = defineStore("count", () => {
  const count = ref(0);

  const addCount = () => count.value++;
  const doubleCount = computed(() => count.value * 2);

  return {
    count,
    addCount,
    doubleCount,
  };
});
