<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";
const stores = useCounterStore();
const { count, doubleCount } = storeToRefs(stores);
const { addCount } = stores;
</script>

<template>
  <h1 class="text-2xl font-bold underline">{{ count }} {{ doubleCount }}</h1>
  <button
    class="bg-red-500 hover:bg-green-700 text-red-50 font-bold py-2 px-4 rounded-full"
    @click="addCount"
  >
    Click
  </button>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <SvgIcon class="h-12 w-12" name="icon-documentation" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
