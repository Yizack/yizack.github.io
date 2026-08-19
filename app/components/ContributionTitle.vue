<script setup lang="ts">
const props = defineProps<{ text: string }>();

const parts = computed(() => {
  const s = props.text ?? "";
  return s
    .split(/`([^`]+)`/g)
    .map((value, i) => ({ type: i % 2 ? "code" : "text", value }))
    .filter(p => p.value.length > 0);
});
</script>

<template>
  <span>
    <template v-for="(p, i) in parts" :key="i">
      <ProseCode v-if="p.type === 'code'" color="primary" class="inline text-xs">{{ p.value }}</ProseCode>
      <template v-else>{{ p.value }}</template>
    </template>
  </span>
</template>
