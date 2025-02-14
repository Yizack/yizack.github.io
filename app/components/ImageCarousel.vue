<script setup lang="ts">
const props = defineProps<{
  images: { src: string, alt?: string }[];
}>();

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const goTo = (index: number) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="group">
    <div class="relative w-full mx-auto">
      <div class="relative">
        <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
            <img :src="image.src" class="w-full h-full object-cover" :alt="image.alt" :title="image.alt">
            <div v-if="image.alt" class="absolute bottom-0 w-full text-center py-1 bg-slate-200 dark:bg-slate-700 transition-opacity duration-500 opacity-0 group-hover:opacity-75">
              <span>{{ image.alt }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="images.length > 1" class="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <button class="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 bg-opacity-50" @click="prev">
          <Icon name="tabler:chevron-left" />
        </button>
        <button class="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 bg-opacity-50" @click="next">
          <Icon name="tabler:chevron-right" />
        </button>
      </div>
    </div>
    <div v-if="images.length > 1" class="flex justify-center py-2 bg-slate-200 dark:bg-slate-700 relative z-10">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="h-2 w-2 rounded-full mx-1 cursor-pointer"
        :class="currentIndex === index ? 'dark:bg-slate-100 bg-slate-800' : 'dark:bg-gray-500 bg-gray-400'"
        :title="image.alt"
        @click="goTo(index)"
      />
    </div>
  </div>
</template>
