<script setup lang="ts">
import { MasonryWall } from "@yeger/vue-masonry-wall";

useHead({
  title: "Yizack Rangel's Portfolio"
});
</script>

<template>
  <main>
    <UContainer class="py-6">
      <div id="about">
        <div class="flex flex-wrap lg:gap-6">
          <div class="flex-none lg:w-9/12 w-full">
            <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:user-id-outline" size="2rem" />
              <span>About Me</span>
            </h2>
            <div class="text-toned">
              <p class="mb-4">I like developing Web Applications and API Integrations, mainly using <NuxtLink to="https://nuxt.com" target="_blank">Nuxt</NuxtLink>, the <NuxtLink to="https://vuejs.org" target="_blank">Vue</NuxtLink> framework, and the power of Serverless services to take advantage of their high performance at a low cost.</p>
              <p class="mb-4">My passion for computers began at the age of 14. It all started with creating blogs and diving into HTML editors, driven by curiosity and a desire to learn. Over time, I began watching tutorials to learn Java and JavaScript, which allowed me to have a brief understanding of coding before starting my bachelor's degree.</p>
              <p class="mb-4">I studied a bachelor's degree in Computer Systems Engineering at the Technological University of Panama. I am deeply passionate about computers and emerging technologies. I have experience in Web and Mobile App Development, API Integrations, Server Management, Domains Administration, System Automation, Database Management, Testing, Continuous Integration. With my determination, I am confident in my ability to overcome any programming challenge that comes my way.</p>
            </div>
            <h5 class="text-2xl font-bold flex items-center gap-2 mb-4">Socials</h5>
            <div class="flex items-center gap-2">
              <NuxtLink v-for="(social, index) in portfolio.socials" :key="index" :to="social.url" target="_blank" class="me-2" :title="social.name">
                <Icon :name="social.icon" size="2rem" />
              </NuxtLink>
            </div>
            <hr class="my-6 lg:hidden dark:border-slate-700">
          </div>
          <div class="grow">
            <div class="mb-4">
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="solar:map-point-hospital-linear" size="1.5rem" />
                <span>Location</span>
              </h5>
              <p class="flex gap-2 text-toned">
                <img :src="portfolio.flag">
                <span>{{ portfolio.location }}</span>
              </p>
            </div>
            <div class="mb-4">
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="solar:mailbox-linear" size="1.5rem" />
                <span>Email</span>
              </h5>
              <ULink class="underline text-toned" :to="`mailto:${portfolio.email}`">{{ portfolio.email }}</ULink>
            </div>
            <div>
              <h5 class="text-2xl font-bold flex items-center gap-2 mb-2">
                <Icon name="bi:translate" size="1.5rem" />
                <span>Languages</span>
              </h5>
              <ul class="text-toned">
                <li v-for="(language, index) in portfolio.languages" :key="index">
                  <div class="mt-2">{{ language.name }}: {{ language.level }}</div>
                  <UProgress v-model="language.p" size="xl" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <USeparator class="my-4" />
        <div class="mb-6">
          <div id="work" class="mb-3">
            <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:suitcase-linear" size="2rem" />
              <span>Work Experience</span>
            </h2>
            <div class="flex flex-col gap-3">
              <div v-for="(work, work_index) in portfolio.works" :key="work_index" class="bg-elevated rounded-md overflow-hidden py-3 px-4 w-full">
                <div>
                  <h5 class="text-lg sm:text-xl inline-block">
                    <strong>{{ work.position }}</strong> at <strong>{{ work.company }}</strong>
                    <ULink :to="work.website" class="inline-block align-sub ms-1"><Icon name="bi:globe" size="1.3rem" /></ULink>
                    <ULink :to="work.linkedin" class="inline-block align-sub ms-1"><Icon name="bi:linkedin" size="1.3rem" /></ULink>
                  </h5>
                </div>
                <p class="text-toned">{{ work.city }}</p>
                <p class="text-muted">{{ work.period }}</p>
                <ul v-if="work.bullets" class="text-toned list-disc ms-5">
                  <li v-for="(task, task_index) in work.bullets" :key="task_index">{{ task }}</li>
                </ul>
              </div>
            </div>
          </div>
          <USeparator class="my-4" />
          <div id="education">
            <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
              <Icon name="solar:square-academic-cap-2-linear" size="2rem" />
              <span>Education</span>
            </h2>
            <div class="flex flex-col gap-3">
              <div v-for="(edu, index) in portfolio.education" :key="index" class="bg-elevated rounded-md overflow-hidden py-3 px-4 w-full">
                <h5 class="text-lg sm:text-xl"><b>{{ edu.diploma }}</b> at <b>{{ edu.institution }}</b></h5>
                <p class="text-toned">{{ edu.city }}</p>
                <p class="text-muted">{{ edu.period }}</p>
              </div>
            </div>
          </div>
        </div>
        <USeparator class="my-4" />
        <div class="text-sm">
          <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
            <Icon name="solar:bolt-linear" size="2rem" />
            <span>Main Skills</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div v-for="(skill, key) in portfolio.skills" :key="key" class="bg-elevated rounded-md overflow-hidden shadow-md">
              <div class="bg-primary text-inverted text-center py-2">
                <h5 class="text-1/4 sm:text-lg">
                  <strong>{{ skill.title }}</strong>
                </h5>
              </div>
              <div class="p-4">
                <div class="flex flex-wrap gap-2">
                  <div v-for="(stack, i) in skill.stack" :key="i" class="flex items-center gap-1 py-1 px-2 rounded-lg bg-accented/50 border border-accented">
                    <Icon :name="stack.icon" size="1rem" />
                    <span>{{ stack.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <USeparator class="my-4" />
        <div id="quality-practices">
          <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
            <Icon name="solar:rocket-2-linear" size="2rem" />
            <span>Quality Practices</span>
          </h2>
          <div class="bg-elevated rounded-md overflow-hidden py-3 px-4">
            <ul class="list-none mb-3 text-toned">
              <li v-for="(quality, index) in portfolio.qualities" :key="index" class="flex items-center gap-2 mb-3">
                <Icon name="solar:alt-arrow-right-line-duotone" size="1.5rem" class="text-primary" />
                <span>{{ quality }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <USeparator class="my-4" />
      <div id="projects">
        <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
          <Icon name="solar:programming-linear" size="2rem" />
          <span>Projects</span>
        </h2>
        <MasonryWall :items="portfolio.projects" :ssr-columns="2" :gap="16">
          <template #default="{ item: project }">
            <div class="bg-elevated rounded-md overflow-hidden shadow-md">
              <ImageCarousel v-if="project.images && project.images.length" :images="project.images" class="card-img-top" />
              <div class="p-4">
                <h5 class="text-xl">
                  <NuxtLink v-if="project.url || project.github" class="text-decoration-none" :to="project.url || project.github" target="_blank">
                    <strong>{{ project.name }}</strong>
                  </NuxtLink>
                  <strong v-else>{{ project.name }}</strong>
                </h5>
                <p class="text-muted mb-4">{{ project.period }}</p>
                <p class="text-toned mb-4">{{ project.description }}</p>
                <ul v-if="project.bullets" class="text-toned list-disc ms-5 mb-4">
                  <li v-for="(task, task_index) in project.bullets" :key="task_index">{{ task }}</li>
                </ul>
                <div class="flex flex-wrap gap-2 text-sm">
                  <span v-for="(technology, tech_index) in project.technologies" :key="tech_index" class="rounded-lg py-1 px-2 bg-accented/50 border border-accented">{{ technology }}</span>
                </div>
              </div>
              <div class="flex w-full">
                <UButton v-if="project.github" :to="project.github" target="_blank" color="neutral" variant="soft" class="light:bg-slate-700 light:text-inverted light:hover:bg-slate-700/90 dark:bg-accented dark:hover:bg-accented/75 rounded-none py-3 px-4 flex items-center justify-center" :class="project.url ? 'w-1/2' : 'w-full'">
                  <Icon name="bi:github" size="1rem" />
                  <strong class="ms-1">Repository</strong>
                </UButton>
                <UButton v-if="project.url" :to="project.url" target="_blank" color="primary" class="rounded-none py-3 px-4 flex items-center justify-center" :class="project.github ? 'w-1/2' : 'w-full'">
                  <Icon name="solar:square-bottom-up-linear" size="1rem" />
                  <strong class="ms-1">View</strong>
                </UButton>
              </div>
            </div>
          </template>
        </MasonryWall>
      </div>
      <USeparator class="my-4" />
      <div id="contributions">
        <h2 class="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
          <Icon name="bi:github" size="2rem" />
          <span>Open Source Contributions</span>
        </h2>
        <GHContributions />
      </div>
    </UContainer>
  </main>
</template>
