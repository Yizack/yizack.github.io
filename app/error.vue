<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="flex items-center justify-center h-screen dark:bg-gray-900 dark:text-white bg-white text-gray-900">
    <div class="rounded-md dark:bg-slate-800 bg-slate-200 p-10 shadow-lg">
      <h1 class="text-3xl font-bold">Error {{ error.statusCode }}</h1>
      <h5 class="dark:text-gray-300 text-gray-700">Sorry, an error has occurred. {{ error.message || error.statusMessage || "error" }}</h5>
      <span>Go back: <NuxtLink to="/" class="underline">{{ SITE.domain }}</NuxtLink></span>
    </div>
  </div>
</template>
