<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$router.options.scrollBehavior = (to) => {
  if (to.hash === "") {
    return { left: 0, top: 0 };
  }
  else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ el: to.hash, top: 55, left: 0, behavior: "smooth" });
      });
    });
  }
};
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" />
  <NuxtPage />
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      loading: true
    };
  },
  beforeMount () {
    this.$nuxt.hook("page:finish", () => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.nuxt-loading-indicator {
  background: repeating-linear-gradient(to right,#deff69 0%,#3e61c5 50%,#bfd0ff 100%)!important;
}
</style>
