<script setup lang="ts">
useHead({
  title: "Yizack Rangel's Portfolio",
  bodyAttrs: { "data-bs-spy": "scroll" }
});
</script>

<template>
  <main>
    <div class="mx-auto px-4 py-6 sm:px-6 md:px-8 max-w-7xl">
      <div id="about">
        <div class="flex flex-wrap lg:gap-6">
          <div class="flex-none lg:w-8/12 w-full">
            <h2 class="text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon class="text-primary-emphasis" name="solar:user-id-outline" size="2rem" />
              <span>About Me</span>
            </h2>
            <div class="dark:text-gray-300 text-gray-700">
              <p class="mb-4">Currently, I consider myself an enthusiast in the development of Progressive Web Applications (PWAs), mainly using Nuxt, the Vue framework, and the power of Serverless services to take advantage of their high performance at a low cost.</p>
              <p class="mb-4">I have been passionate about computers and new technologies since I was 14 years old. It all began when I created my first blogs and bravely tried to understand and use HTML editors. Later, I started watching videos to learn Java and JavaScript, which allowed me to develop automated posting bots for social media.</p>
              <p class="mb-4">I studied Computer Systems Engineering at the Technological University of Panama. I am deeply passionate about computers and emerging technologies. I have experience in web and mobile app development, system automation, and database management. With my determination, I am confident in my ability to overcome any programming challenge that comes my way.</p>
            </div>
            <h5 class="text-2xl font-bold flex items-center gap-2 mb-4">Socials</h5>
            <div class="flex items-center gap-2">
              <a v-for="(social, index) in portfolio.socials" :key="index" :href="social.url" target="_blank" class="text-dark-emphasis me-2" :title="social.name">
                <Icon :name="social.icon" size="2rem" />
              </a>
            </div>
            <hr class="my-6 lg:hidden">
          </div>
          <div class="grow">
            <div class="mb-4">
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="solar:map-point-hospital-linear" class="text-primary-emphasis" size="1.5rem" />
                <span>Location</span>
              </h5>
              <p class="flex gap-2 dark:text-gray-300 text-gray-700">
                <img :src="portfolio.flag">
                <span>{{ portfolio.location }}</span>
              </p>
            </div>
            <div class="mb-4">
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="solar:mailbox-linear" class="text-primary-emphasis" size="1.5rem" />
                <span>Email</span>
              </h5>
              <a class="underline dark:text-gray-300 text-gray-700 hover:text-gray-100" :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
            </div>
            <div>
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="bi:translate" class="text-primary-emphasis" size="1.5rem" />
                <span>Languages</span>
              </h5>
              <ul class="dark:text-gray-300 text-gray-700">
                <li v-for="(language, index) in portfolio.languages" :key="index">
                  <div class="mt-2">{{ language.name }}: {{ language.level }}</div>
                  <div class="h-6 bg-gray-800 rounded-md overflow-hidden" role="progressbar" aria-label="Language level" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div class="h-full bg-slate-300" :style="`width: ${language.p}%`" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-4 d-lg-none d-block">
        <div class="mb-6">
          <div class="mb-3">
            <h2 class="text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon class="text-primary-emphasis" name="solar:square-academic-cap-2-linear" size="2rem" />
              <span>Education</span>
            </h2>
            <div v-for="(edu, index) in portfolio.education" :key="index" class="mb-4">
              <h5 class="text-xl dark:text-gray-300 text-gray-700"><b class="dark:text-white">{{ edu.diploma }}</b> at <b class="dark:text-white">{{ edu.institution }}</b></h5>
              <p>{{ edu.city }}</p>
              <p>{{ edu.period }}</p>
            </div>
          </div>
          <hr class="my-6">
          <div id="work">
            <h2 class="text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:suitcase-linear" size="2rem" />
              <span>Work Experience</span>
            </h2>
            <div v-for="(work, work_index) in portfolio.works" :key="work_index">
              <div class="flex items-center gap-3">
                <h5 class="text-xl dark:text-gray-300 text-gray-700">
                  <strong class="dark:text-white">{{ work.position }}</strong> at <strong class="dark:text-white">{{ work.company }}</strong>
                </h5>
                <div class="flex gap-2 bottom-0 start-100">
                  <a :href="work.website" class="text-body"><Icon name="bi:globe" size="1.3rem" /></a>
                  <a :href="work.linkedin" class="text-body"><Icon name="bi:linkedin" size="1.3rem" /></a>
                </div>
              </div>
              <p class="m-0">{{ work.city }}</p>
              <p class="text-dark-emphasis">{{ work.period }}</p>
              <ul v-if="work.bullets" class="dark:text-gray-300 text-gray-700 list-disc ms-5 mb-4">
                <li v-for="(task, task_index) in work.bullets" :key="task_index">{{ task }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-3xl font-bold flex items-center gap-2 mb-4">
            <Icon name="solar:bolt-linear" size="2rem" />
            <span>Main Skills</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div v-for="(skill, key) in portfolio.skills" :key="key" class="dark:bg-gray-800 bg-slate-100 rounded-md overflow-hidden shadow-lg">
              <div class="dark:bg-slate-700 bg-slate-400 text-center py-2 text-lg">
                <h5 class="m-0">
                  <strong>{{ skill.title }}</strong>
                </h5>
              </div>
              <div class="p-4">
                <div class="flex flex-wrap gap-2">
                  <div v-for="(stack, i) in skill.stack" :key="i" class="flex items-center gap-2 border dark:border-gray-600 border-slate-300 py-1 px-2 skill small rounded-lg dark:bg-gray-700 bg-slate-200">
                    <Icon :name="stack.icon" size="1.3rem" />
                    <span>{{ stack.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6">
        <div>
          <h2 class="text-3xl font-bold flex items-center gap-2 mb-4">
            <Icon name="solar:rocket-2-linear" size="2rem" />
            <span>Quality Practices</span>
          </h2>
          <ul class="list-none mb-3 dark:text-gray-300 text-gray-700">
            <li v-for="(quality, index) in portfolio.qualities" :key="index" class="flex items-center gap-2 mb-3">
              <Icon name="solar:alt-arrow-right-line-duotone" size="1.5rem" class="text-white" />
              <span>{{ quality }}</span>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-6">
      <div id="projects">
        <h2 class="text-3xl font-bold flex items-center gap-2 mb-4">
          <Icon name="solar:programming-linear" size="2rem" />
          <span>Projects</span>
        </h2>
        <MasonryWall :items="portfolio.projects" :ssr-columns="2" :gap="16" :max-columns="2" :column-width="400">
          <template #default="{ item: project }">
            <div class="dark:bg-gray-800 bg-slate-100 rounded-md overflow-hidden shadow-lg">
              <img :src="project.image" class="card-img-top">
              <div class="p-4">
                <h5 class="text-xl">
                  <a v-if="project.url || project.github" class="text-decoration-none" :href="project.url || project.github" target="_blank">
                    <strong>{{ project.name }}</strong>
                  </a>
                  <strong v-else>{{ project.name }}</strong>
                </h5>
                <p class="text-dark-emphasis mb-4">{{ project.period }}</p>
                <p class="dark:text-gray-300 text-gray-700 mb-4">{{ project.description }}</p>
                <ul v-if="project.bullets" class="dark:text-gray-300 text-gray-700 list-disc ms-5 mb-4">
                  <li v-for="(task, task_index) in project.bullets" :key="task_index">{{ task }}</li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(technology, tech_index) in project.technologies" :key="tech_index" class="flex items-center gap-2 border dark:border-gray-600 border-slate-300 bg-slate-200 py-1 px-2 skill small rounded-lg dark:bg-gray-700">{{ technology }}</span>
                </div>
              </div>
              <div class="flex w-full gap-0.5">
                <a v-if="project.github" :href="project.github" target="_blank" class="bg-slate-700 text-white py-3 px-4 flex items-center justify-center hover:bg-slate-600" :class="project.url ? 'w-1/2' : 'w-full'">
                  <Icon name="bi:github" size="1rem" />
                  <span class="ms-1">Repository</span>
                </a>
                <a v-if="project.url" :href="project.url" target="_blank" class="bg-slate-700 text-white py-3 px-4 flex items-center justify-center hover:bg-slate-600" :class="project.github ? 'w-1/2' : 'w-full'">
                  <Icon name="solar:square-bottom-up-linear" size="1rem" />
                  <span class="ms-1">View</span>
                </a>
              </div>
            </div>
          </template>
        </MasonryWall>
      </div>
    </div>
  </main>
</template>
