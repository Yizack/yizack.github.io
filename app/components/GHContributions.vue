<script setup lang="ts">
const { data } = useFetch<Contributions>("https://prs.yizack.com/api/contributions", {
  key: "contributions",
  lazy: true,
  server: !!import.meta.dev
});

const prsSpliceSize = ref(20);
const issuesSpliceSize = ref(20);

const prs = computed(() => {
  if (!data.value) return [];
  return data.value.prs.slice(0, prsSpliceSize.value);
});

const issues = computed(() => {
  if (!data.value) return [];
  return data.value.issues.slice(0, issuesSpliceSize.value);
});

const increasePrsSplice = () => {
  prsSpliceSize.value += 20;
};

const increaseIssuesSplice = () => {
  issuesSpliceSize.value += 20;
};

const tabs = [
  {
    label: "Pull Requests",
    slot: "prs"
  },
  {
    label: "Issues",
    slot: "issues"
  }
];
</script>

<template>
  <div v-if="data && prs.length > 0">
    <div class="mb-2 text-sm">
      <span>source:</span> <ULink to="https://prs.yizack.com" target="_blank" class="underline">prs.yizack.com</ULink>
    </div>
    <UTabs :items="tabs">
      <template #prs>
        <div class="rounded-md flex flex-col gap-2">
          <div v-for="(pr, i) of prs" :key="i" class="bg-elevated flex items-center gap-2 sm:gap-4 p-4 rounded-md">
            <NuxtLink :to="`https://github.com/${pr.repo}`" target="_blank" relative :class="['size-10 sm:size-12 shrink-0 border border-muted overflow-hidden shadow-xs', pr.type === 'Organization' ? 'rounded-lg' : 'rounded-full']">
              <img :src="`https://github.com/${pr.repo.split('/')[0]}.png`" :alt="pr.repo" class="size-full">
            </NuxtLink>
            <div class="flex-1 flex justify-between gap-2 lg:gap-4 min-w-0">
              <div class="flex flex-col min-w-0 gap-0.5 sm:gap-1">
                <a :href="pr.url" target="_blank" class="text-sm sm:text-base flex items-center gap-0.5 sm:gap-1 hover:underline">
                  <Icon
                    :name="mapPrIcons(pr.state)"
                    class="shrink-0"
                    :class="{
                      'text-green-500 dark:text-green-400': pr.state === 'open',
                      'text-slate-500 dark:text-slate-400': pr.state === 'draft',
                      'text-purple-500 dark:text-purple-400': pr.state === 'merged',
                      'text-red-500 dark:text-red-400': pr.state === 'closed',
                    }"
                    size="1.2em"
                  />
                  <ContributionTitle :text="pr.title" class="truncate" />
                </a>
                <div class="flex gap-2 items-bottom">
                  <NuxtLink :to="`https://github.com/${pr.repo}`" target="_blank" class="text-sm sm:text-base inline-flex gap-1 hover:text-black dark:hover:text-white truncate">
                    <span class="opacity-75">{{ pr.repo.split('/')[0] }}</span>
                    <span class="opacity-50">/</span>
                    <span class="truncate">{{ pr.repo.split('/')[1] }}</span>
                  </NuxtLink>
                  <NuxtLink :to="`https://github.com/${pr.repo}`" target="_blank" class="items-center hidden sm:inline-flex gap-0.5 hover:text-black dark:hover:text-white truncate">
                    <Icon name="octicon:star" class="text-yellow-400" />
                    <span class="text-xs text-muted">{{ formatStars(pr.stars) }}</span>
                  </NuxtLink>
                  <NuxtLink :to="pr.url" target="_blank" class="items-center hidden sm:inline-flex gap-0.5 hover:text-black dark:hover:text-white truncate">
                    <Icon name="octicon:comment-16" size="14px" />
                    <span class="text-xs text-muted">{{ formatStars(pr.comments) }}</span>
                  </NuxtLink>
                </div>
              </div>
              <div class="flex flex-col justify-between shrink-0 text-right">
                <a :href="pr.url" target="_blank" class="hover:underline text-xs sm:text-sm">
                  #{{ pr.number }}
                </a>
                <time :datetime="pr.created_at" class="text-xs sm:text-sm text-muted">{{ useTimeAgo(new Date(pr.created_at)) }}</time>
              </div>
            </div>
          </div>
          <a v-if="prsSpliceSize < data.prs.length" class="dark:text-slate-200 text-sm text-center underline cursor-pointer" @click="increasePrsSplice">Show more</a>
        </div>
      </template>
      <template #issues>
        <div class="rounded-md flex flex-col gap-2">
          <div v-for="(issue, i) of issues" :key="i" class="bg-elevated flex items-center gap-2 sm:gap-4 p-4 rounded-md">
            <NuxtLink :to="`https://github.com/${issue.repo}`" target="_blank" relative :class="['size-10 sm:size-12 shrink-0 border border-muted overflow-hidden shadow-xs', issue.type === 'Organization' ? 'rounded-lg' : 'rounded-full']">
              <img :src="`https://github.com/${issue.repo.split('/')[0]}.png`" :alt="issue.repo" class="size-full">
            </NuxtLink>
            <div class="flex-1 flex justify-between gap-2 lg:gap-4 min-w-0">
              <div class="flex flex-col min-w-0 gap-0.5 sm:gap-1">
                <a :href="issue.url" target="_blank" class="text-sm sm:text-base flex items-center gap-0.5 sm:gap-1 hover:underline">
                  <Icon
                    :name="mapIssueIcons(issue.state)"
                    class="shrink-0"
                    :class="{
                      'text-green-500 dark:text-green-400': issue.state === 'open',
                      'text-slate-500 dark:text-slate-400': issue.state === 'not-planned',
                      'text-purple-500 dark:text-purple-400': issue.state === 'completed',
                    }"
                    size="1.2em"
                  />
                  <ContributionTitle :text="issue.title" class="truncate" />
                </a>
                <div class="flex gap-2 items-bottom">
                  <NuxtLink :to="`https://github.com/${issue.repo}`" target="_blank" class="text-sm sm:text-base inline-flex gap-1 hover:text-black dark:hover:text-white truncate">
                    <span class="opacity-75">{{ issue.repo.split('/')[0] }}</span>
                    <span class="opacity-50">/</span>
                    <span class="truncate">{{ issue.repo.split('/')[1] }}</span>
                  </NuxtLink>
                  <NuxtLink :to="`https://github.com/${issue.repo}`" target="_blank" class="items-center hidden sm:inline-flex gap-0.5 hover:text-black dark:hover:text-white truncate">
                    <Icon name="octicon:star" class="text-yellow-400" />
                    <span class="text-xs text-muted">{{ formatStars(issue.stars) }}</span>
                  </NuxtLink>
                  <NuxtLink :to="issue.url" target="_blank" class="items-center hidden sm:inline-flex gap-0.5 hover:text-black dark:hover:text-white truncate">
                    <Icon name="octicon:comment-16" size="14px" />
                    <span class="text-xs text-muted">{{ formatStars(issue.comments) }}</span>
                  </NuxtLink>
                </div>
              </div>
              <div class="flex flex-col justify-between shrink-0 text-right">
                <a :href="issue.url" target="_blank" class="hover:underline text-xs sm:text-sm">
                  #{{ issue.number }}
                </a>
                <time :datetime="issue.created_at" class="text-xs sm:text-sm text-muted">{{ useTimeAgo(new Date(issue.created_at)) }}</time>
              </div>
            </div>
          </div>
          <a v-if="issuesSpliceSize < data.issues.length" class="dark:text-slate-200 text-sm text-center underline cursor-pointer" @click="increaseIssuesSplice">Show more</a>
        </div>
      </template>
    </UTabs>
  </div>
  <div v-else>
    <div class="rounded-md flex flex-col gap-2">
      <div v-for="n of 4" :key="n" class="bg-elevated flex items-center gap-2 sm:gap-4 p-4 rounded-md animate-pulse">
        <div class="size-10 sm:size-12 shrink-0 border border-muted overflow-hidden shadow-xs bg-accented" :class="n % 2 ? 'rounded-lg' : 'rounded-full'" />
        <div class="flex-1 flex justify-between gap-2 lg:gap-4">
          <div class="flex flex-col min-w-0 gap-0.5 sm:gap-1 grow">
            <div class="h-4 bg-accented rounded-sm w-1/2" />
            <div class="flex gap-2 items-bottom">
              <div class="h-4 bg-accented rounded-sm w-1/6" />
              <div class="h-4 bg-accented rounded-sm w-1/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
