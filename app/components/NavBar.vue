<script setup lang="ts">
const isOpen = ref(false);
const routeHash = ref("");

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const pages = [
  { name: "About", path: "#about" },
  { name: "Work Experience", path: "#work" },
  { name: "Projects", path: "#projects" }
];

onMounted(() => {
  routeHash.value = useRoute().hash;
});

watch(() => useRoute().hash, (hash) => {
  routeHash.value = hash;
});
</script>

<template>
  <div class="bg-gray-900 text-white px-6 py-5 sticky top-0 w-full z-50 shadow-xl">
    <div class="flex justify-between items-center w-full max-w-6xl mx-auto">
      <h1 class="text-xl font-semibold">{{ SITE.name }}</h1>
      <nav class="hidden lg:flex space-x-6">
        <NuxtLink v-for="(page, i) of pages" :key="i" :to="page.path" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700" :class="{ 'bg-gray-800': routeHash === page.path }">{{ page.name }}</NuxtLink>
        <a href="/Eliezer_Rangel_Resume_EN.pdf" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">Resume</a>
      </nav>
      <button v-if="!isOpen" class="lg:hidden text-white" @click="toggleMenu">
        <Icon name="tabler:menu-2" size="1.5rem" />
      </button>
    </div>
  </div>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden" @click="toggleMenu" />
  <Transition name="slide-left" mode="out-in">
    <div v-if="isOpen" class="w-80 bg-gray-900 shadow-xl fixed inset-y-0 left-0 z-50 transform transition-transform lg:hidden" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="flex items-center justify-between border-b border-gray-700 p-4">
        <h2 class="text-lg font-semibold text-white">{{ SITE.name }}</h2>
        <button class="text-white focus:outline-none hover:bg-red-400 hover:text-gray-900 rounded-md p-1" @click="toggleMenu">
          <Icon name="tabler:x" class="w-6 h-6" />
        </button>
      </div>
      <nav class="flex flex-col space-y-2 p-4">
        <NuxtLink v-for="(page, i) of pages" :key="i" :href="page.path" class="rounded-md px-3 py-3 text-sm font-medium text-white hover:bg-gray-700" :class="{ 'bg-gray-800': routeHash === page.path }" @click="toggleMenu">{{ page.name }}</NuxtLink>
        <a href="/Eliezer_Rangel_Resume_EN.pdf" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">Resume</a>
      </nav>
    </div>
  </Transition>
</template>
