<script setup lang="ts">
const { options } = useRouter();
options.scrollBehavior = (to) => {
  if (!to.hash) return { left: 0, top: 0 };
  return { el: to.hash, top: 80, left: 0, behavior: "smooth" };
};
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.nuxt-loading-indicator {
  background: repeating-linear-gradient(to right,#deff69 0%,#3e61c5 50%,#bfd0ff 100%)!important;
}
</style>
