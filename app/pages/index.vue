<script setup lang="ts">
useHead({
  title: "Yizack Rangel's Portfolio"
});
</script>

<template>
  <main>
    <div class="mx-auto px-4 py-6 sm:px-6 md:px-8 max-w-7xl">
      <div id="about">
        <div class="flex flex-wrap lg:gap-6">
          <div class="flex-none lg:w-8/12 w-full">
            <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:user-id-outline" size="2rem" />
              <span>About Me</span>
            </h2>
            <div class="dark:text-slate-200 text-slate-700">
              <p class="mb-4">Currently, I consider myself an enthusiast in the development of Progressive Web Applications (PWAs), mainly using Nuxt, the Vue framework, and the power of Serverless services to take advantage of their high performance at a low cost.</p>
              <p class="mb-4">I have been passionate about computers and new technologies since I was 14 years old. It all began when I created my first blogs and bravely tried to understand and use HTML editors. Later, I started watching videos to learn Java and JavaScript, which allowed me to develop automated posting bots for social media.</p>
              <p class="mb-4">I studied Computer Systems Engineering at the Technological University of Panama. I am deeply passionate about computers and emerging technologies. I have experience in web and mobile app development, system automation, and database management. With my determination, I am confident in my ability to overcome any programming challenge that comes my way.</p>
            </div>
            <h5 class="text-2xl font-bold flex items-center gap-2 mb-4">Socials</h5>
            <div class="flex items-center gap-2">
              <a v-for="(social, index) in portfolio.socials" :key="index" :href="social.url" target="_blank" class="dark:hover:text-green-100 me-2" :title="social.name">
                <Icon :name="social.icon" size="2rem" />
              </a>
            </div>
            <hr class="my-6 lg:hidden dark:border-slate-700">
          </div>
          <div class="grow">
            <div class="mb-4">
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="solar:map-point-hospital-linear" size="1.5rem" />
                <span>Location</span>
              </h5>
              <p class="flex gap-2 dark:text-slate-100 text-slate-700">
                <img :src="portfolio.flag">
                <span>{{ portfolio.location }}</span>
              </p>
            </div>
            <div class="mb-4">
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="solar:mailbox-linear" size="1.5rem" />
                <span>Email</span>
              </h5>
              <a class="underline dark:text-slate-200 dark:hover:text-slate-300 text-slate-700 hover:text-slate-900" :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
            </div>
            <div>
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="bi:translate" size="1.5rem" />
                <span>Languages</span>
              </h5>
              <ul class="dark:text-slate-100 text-slate-700">
                <li v-for="(language, index) in portfolio.languages" :key="index">
                  <div class="mt-2">{{ language.name }}: {{ language.level }}</div>
                  <div class="h-6 dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden" role="progressbar" aria-label="Language level" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div class="h-full dark:bg-green-200 bg-green-500" :style="`width: ${language.p}%`" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-4 dark:border-slate-700">
        <div class="mb-6">
          <div id="work" class="mb-3">
            <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:suitcase-linear" size="2rem" />
              <span>Work Experience</span>
            </h2>
            <div class="flex flex-col gap-3">
              <div v-for="(work, work_index) in portfolio.works" :key="work_index" class="dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden py-3 px-4 w-full">
                <div class="flex items-center gap-3">
                  <h5 class="text-lg sm:text-xl dark:text-slate-100 text-slate-700">
                    <strong class="dark:text-white">{{ work.position }}</strong> at <strong class="dark:text-white">{{ work.company }}</strong>
                  </h5>
                  <div class="flex gap-2 bottom-0 start-100">
                    <NuxtLink :to="work.website" class="text-body"><Icon name="bi:globe" size="1.3rem" /></NuxtLink>
                    <NuxtLink :to="work.linkedin" class="text-body"><Icon name="bi:linkedin" size="1.3rem" /></NuxtLink>
                  </div>
                </div>
                <p class="dark:text-slate-300 text-gray-700">{{ work.city }}</p>
                <p class="dark:text-slate-400 text-gray-500">{{ work.period }}</p>
                <ul v-if="work.bullets" class="dark:text-slate-100 text-slate-700 list-disc ms-5">
                  <li v-for="(task, task_index) in work.bullets" :key="task_index">{{ task }}</li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 dark:border-slate-700">
          <div id="education">
            <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:square-academic-cap-2-linear" size="2rem" />
              <span>Education</span>
            </h2>
            <div class="flex flex-col gap-3">
              <div v-for="(edu, index) in portfolio.education" :key="index" class="dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden py-3 px-4 w-full">
                <h5 class="text-lg sm:text-xl dark:text-slate-100 text-slate-700"><b class="dark:text-white">{{ edu.diploma }}</b> at <b class="dark:text-white">{{ edu.institution }}</b></h5>
                <p class="dark:text-slate-300 text-gray-700">{{ edu.city }}</p>
                <p class="dark:text-slate-400 text-gray-500">{{ edu.period }}</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 dark:border-slate-700">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
            <Icon name="solar:bolt-linear" size="2rem" />
            <span>Main Skills</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div v-for="(skill, key) in portfolio.skills" :key="key" class="dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden shadow-lg">
              <div class="dark:bg-green-200 bg-green-500 dark:text-slate-900 text-white text-center py-2">
                <h5 class="text-1/4 sm:text-lg">
                  <strong>{{ skill.title }}</strong>
                </h5>
              </div>
              <div class="p-4">
                <div class="flex flex-wrap gap-2">
                  <div v-for="(stack, i) in skill.stack" :key="i" class="flex items-center gap-2 border dark:border-slate-600 border-slate-300 py-1 px-2 skill small rounded-lg dark:bg-slate-700 bg-slate-200">
                    <Icon :name="stack.icon" size="1.3rem" />
                    <span>{{ stack.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 dark:border-slate-700">
        <div id="quality-practices">
          <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
            <Icon name="solar:rocket-2-linear" size="2rem" />
            <span>Quality Practices</span>
          </h2>
          <div class="dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden py-3 px-4">
            <ul class="list-none mb-3 dark:text-slate-100 text-slate-700">
              <li v-for="(quality, index) in portfolio.qualities" :key="index" class="flex items-center gap-2 mb-3">
                <Icon name="solar:alt-arrow-right-line-duotone" size="1.5rem" class="dark:text-green-200 text-green-500" />
                <span>{{ quality }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 dark:border-slate-700">
      <div id="projects">
        <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
          <Icon name="solar:programming-linear" size="2rem" />
          <span>Projects</span>
        </h2>
        <MasonryWall :items="portfolio.projects" :ssr-columns="2" :gap="16" :max-columns="2" :column-width="400">
          <template #default="{ item: project }">
            <div class="dark:bg-slate-800 bg-slate-100 rounded-md overflow-hidden shadow-lg">
              <ImageCarousel :images="project.images" class="card-img-top" />
              <div class="p-4">
                <h5 class="text-xl">
                  <a v-if="project.url || project.github" class="text-decoration-none" :href="project.url || project.github" target="_blank">
                    <strong>{{ project.name }}</strong>
                  </a>
                  <strong v-else>{{ project.name }}</strong>
                </h5>
                <p class="dark:text-slate-400 text-gray-500 mb-4">{{ project.period }}</p>
                <p class="dark:text-slate-100 text-slate-700 mb-4">{{ project.description }}</p>
                <ul v-if="project.bullets" class="dark:text-slate-100 text-slate-700 list-disc ms-5 mb-4">
                  <li v-for="(task, task_index) in project.bullets" :key="task_index">{{ task }}</li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(technology, tech_index) in project.technologies" :key="tech_index" class="flex items-center gap-2 border dark:border-slate-600 border-slate-300 bg-slate-200 py-1 px-2 skill small rounded-lg dark:bg-slate-700">{{ technology }}</span>
                </div>
              </div>
              <div class="flex w-full gap-0.5">
                <NuxtLink v-if="project.github" :to="project.github" target="_blank" class="bg-slate-700 text-white py-3 px-4 flex items-center justify-center hover:bg-slate-600" :class="project.url ? 'w-1/2' : 'w-full'">
                  <Icon name="bi:github" size="1rem" />
                  <strong class="ms-1">Repository</strong>
                </NuxtLink>
                <NuxtLink v-if="project.url" :to="project.url" target="_blank" class="dark:bg-green-200 dark:text-slate-900 dark:hover:bg-green-300 bg-green-500 hover:bg-green-600 text-white py-3 px-4 flex items-center justify-center" :class="project.github ? 'w-1/2' : 'w-full'">
                  <Icon name="solar:square-bottom-up-linear" size="1rem" />
                  <strong class="ms-1">View</strong>
                </NuxtLink>
              </div>
            </div>
          </template>
        </MasonryWall>
      </div>
      <hr class="my-6 dark:border-slate-700">
      <div id="contributions">
        <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
          <Icon name="bi:github" size="2rem" />
          <span>Open Source Contributions</span>
        </h2>
        <GHContributions />
      </div>
    </div>
  </main>
</template>
