<script setup lang="ts">
const data = ref<Contributions | null>();
onMounted(async () => {
  data.value = await $fetch<Contributions>("https://prs.yizack.com/api/contributions").catch(() => null);
});
</script>

<template>
  <div v-if="data && data.prs.length > 0">
    <div class="rounded-md flex flex-col gap-2">
      <div v-for="(pr, i) of data.prs" :key="i" class="dark:bg-gray-800 bg-slate-100 flex items-center gap-2 sm:gap-4 p-4 rounded-md">
        <NuxtLink :to="`https://github.com/${pr.repo}`" target="_blank" relative :class="['size-10 sm:size-12 shrink-0 border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm', pr.type === 'Organization' ? 'rounded-lg' : 'rounded-full']">
          <img :src="`https://github.com/${pr.repo.split('/')[0]}.png`" :alt="pr.repo" class="size-full">
        </NuxtLink>
        <div class="flex-1 flex justify-between gap-2 lg:gap-4 min-w-0">
          <div class="flex flex-col min-w-0 gap-0.5 sm:gap-1">
            <a :href="pr.url" target="_blank" class="text-sm sm:text-base flex items-center gap-0.5 sm:gap-1 hover:underline text-gray-900 dark:text-white">
              <Icon
                :name="mapPrIcons(pr.state)"
                class="shrink-0"
                :class="{
                  'text-green-500 dark:text-green-400': pr.state === 'open',
                  'text-gray-500 dark:text-gray-400': pr.state === 'draft',
                  'text-purple-500 dark:text-purple-400': pr.state === 'merged',
                  'text-red-500 dark:text-red-400': pr.state === 'closed',
                }"
                size="1.2em"
              />
              <span class="truncate">{{ pr.title }}</span>
            </a>
            <div class="flex gap-2 items-bottom">
              <a :href="`https://github.com/${pr.repo}`" target="_blank" class="text-sm sm:text-base inline-flex gap-1 hover:text-black dark:hover:text-white truncate">
                <span class="opacity-75">{{ pr.repo.split('/')[0] }}</span>
                <span class="opacity-50">/</span>
                <span class="truncate">{{ pr.repo.split('/')[1] }}</span>
              </a>
              <a :href="`https://github.com/${pr.repo}`" target="_blank" class="items-center hidden sm:inline-flex gap-0.5 hover:text-black dark:hover:text-white truncate">
                <Icon name="octicon:star" />
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ formatStars(pr.stars) }}</span>
              </a>
            </div>
          </div>
          <div class="flex flex-col justify-between shrink-0 text-right">
            <a :href="pr.url" target="_blank" class="hover:underline text-xs sm:text-sm">
              #{{ pr.number }}
            </a>
            <time :datatime="pr.created_at" class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ useTimeAgo(new Date(pr.created_at)) }}</time>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 text-center">
      <NuxtLink to="https://prs.yizack.com" target="_blank">
        <span class="text-muted">prs.yizack.com</span>
      </NuxtLink>
    </div>
  </div>
  <div v-else>
    <div class="rounded-md flex flex-col gap-2">
      <div v-for="n of 4" :key="n" class="dark:bg-gray-800 bg-slate-100 flex items-center gap-2 sm:gap-4 p-4 rounded-md animate-pulse">
        <div class="size-10 sm:size-12 shrink-0 border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm bg-gray-300 dark:bg-gray-700" :class="n % 2 ? 'rounded-lg' : 'rounded-full'" />
        <div class="flex-1 flex justify-between gap-2 lg:gap-4">
          <div class="flex flex-col min-w-0 gap-0.5 sm:gap-1 flex-grow">
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
            <div class="flex gap-2 items-bottom">
              <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/6" />
              <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
