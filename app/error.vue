<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: { type: Object as () => NuxtError, required: true }
});
</script>

<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div>
      <h1>Error {{ error.statusCode }}</h1>
      <h5 class="text-body">Sorry, an error has occured. {{ error.statusMessage || error.message || "error" }}</h5>
    </div>
  </div>
</template>
