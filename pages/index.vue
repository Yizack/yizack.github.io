<script setup lang="ts">
import "~/assets/css/portfolio.css";

const { $colorMode } = useNuxtApp();

const toggleTheme = () => {
  $colorMode.preference = $colorMode.preference === "light" ? "dark" : "light";
};

useHead({
  title: "Yizack Rangel's Portfolio",
  bodyAttrs: { "data-bs-spy": "scroll" }
});
</script>

<template>
  <main>
    <nav id="navbar" class="navbar navbar-expand-lg px-3 mb-3 sticky-top bg-body">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ portfolio.name }}</a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon" />
        </button>
        <div id="offcanvasNavbar" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasDarkNavbarLabel" class="offcanvas-title">{{ portfolio.name }}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav nav-pills ms-auto">
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link rounded-pill px-lg-3 text-center" href="#about">About</NuxtLink>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link rounded-pill px-lg-3 text-center" href="#work">Work Experience</NuxtLink>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link rounded-pill px-lg-3 text-center" href="#projects">Projects</NuxtLink>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <a class="nav-link rounded-pill px-lg-3 text-center" href="/Eliezer_Rangel_Resume_EN.pdf" target="_blank">Download Resume</a>
              </li>
              <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-dark-emphasis" />
                <hr class="d-lg-none my-2 text-dark-emphasis">
              </li>
              <li class="nav-item">
                <a class="nav-link px-lg-3 text-center" role="button" @click="toggleTheme()"><Icon :name="$colorMode.preference === 'dark' ? 'solar:moon-stars-bold' : 'solar:sun-2-bold'" size="1rem" /><span class="d-lg-none d-inline"> Toogle Theme</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2 container" tabindex="0">
      <div id="about">
        <div class="row">
          <div class="col-lg-9">
            <div>
              <h2 class="mb-3"><Icon class="me-2 text-primary-emphasis" name="solar:user-id-outline" size="2rem" />About Me</h2>
              <p>
                Currently, I consider myself an enthusiast in the development of Progressive Web Applications (PWAs), mainly using Nuxt, the Vue framework, and the power of Serverless services to take advantage of their high performance at a low cost.
                <br><br>
                I have been passionate about computers and new technologies since I was 14 years old. It all began when I created my first blogs and bravely tried to understand and use HTML editors. Later, I started watching videos to learn Java and JavaScript, which allowed me to develop automated posting bots for social media.
                <br><br>
                I studied Computer Systems Engineering at the Technological University of Panama. I am deeply passionate about computers and emerging technologies. I have experience in web and mobile app development, system automation, and database management. With my determination, I am confident in my ability to overcome any programming challenge that comes my way.
              </p>
              <h5>Socials</h5>
              <a v-for="(social, index) in portfolio.socials" :key="index" :href="social.url" target="_blank" class="text-dark-emphasis me-2" :title="social.name">
                <Icon :name="social.icon" size="2rem" />
              </a>
              <hr class="my-4">
            </div>
          </div>
          <div class="col-lg-3">
            <h5 class="d-flex align-items-center gap-2">
              <Icon name="solar:map-point-hospital-linear" class="text-primary-emphasis" size="1.5rem" />
              <span>Location</span>
            </h5>
            <p><img :src="portfolio.flag"> {{ portfolio.location }}</p>
            <h5 class="d-flex align-items-center gap-2">
              <Icon name="solar:mailbox-linear" class="text-primary-emphasis" size="1.5rem" />
              <span>Email</span>
            </h5>
            <p>
              <a :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
            </p>
            <h5 class="d-flex align-items-center gap-2">
              <Icon name="bi:translate" class="text-primary-emphasis" size="1.5rem" />
              <span>Languages</span>
            </h5>
            <ul class="list-group list-group-flush">
              <li v-for="(language, index) in portfolio.languages" :key="index" class="list-group-item px-0 border-0">
                {{ language.name }}: {{ language.level }}
                <div class="progress" role="progressbar" aria-label="Language level" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-primary" :style="`width: ${language.p}%`" />
                </div>
              </li>
            </ul>
          </div>
          <hr class="my-4 d-lg-none d-block">
          <div class="col-lg-12">
            <div class="mb-3">
              <h2 class="mb-3 d-flex align-items-center">
                <Icon class="me-2 text-primary-emphasis" name="solar:square-academic-cap-2-linear" size="2rem" />
                <span>Education</span>
              </h2>
              <div v-for="(edu, index) in portfolio.education" :key="index">
                <h5 class="m-0"><b class="text-primary-emphasis">{{ edu.diploma }}</b> at <b class="text-primary-emphasis">{{ edu.institution }}</b></h5>
                <p class="m-0">{{ edu.city }}</p>
                <p class="text-dark-emphasis">{{ edu.period }}</p>
              </div>
            </div>
            <hr class="my-4">
            <div id="work">
              <h2 class="mb-3 d-flex align-items-center">
                <Icon class="me-2 text-primary-emphasis" name="solar:suitcase-linear" size="2rem" />
                <span>Work Experience</span>
              </h2>
              <div v-for="(work, work_index) in portfolio.works" :key="work_index">
                <h5 class="m-0">
                  <span class="position-relative">
                    <strong class="text-primary-emphasis">{{ work.position }}</strong> at <strong class="text-primary-emphasis">{{ work.company }}</strong>
                    <div class="position-absolute d-flex gap-2 bottom-0 start-100 ps-2">
                      <a :href="work.website" class="text-body"><Icon name="bi:globe" size="1.3rem" /></a>
                      <a :href="work.linkedin" class="text-body"><Icon name="bi:linkedin" size="1.3rem" /></a>
                    </div>
                  </span>
                </h5>
                <p class="m-0">{{ work.city }}</p>
                <p class="text-dark-emphasis">{{ work.period }}</p>
                <ul v-if="work.bullets">
                  <li v-for="(task, task_index) in work.bullets" :key="task_index">{{ task }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <h2 class="mb-3 d-flex align-items-center">
              <Icon class="me-2 text-primary-emphasis" name="solar:bolt-linear" size="2rem" />
              <span>Main Skills</span>
            </h2>
            <div class="d-flex flex-wrap gap-2 justify-content-center">
              <div v-for="(skill, key) in portfolio.skills" :key="key" class="card">
                <div class="card-header bg-primary d-flex flex-wrap justify-content-between">
                  <h5 class="m-0">
                    <strong>{{ skill.title }}</strong>
                  </h5>
                </div>
                <div class="card-body">
                  <div class="d-flex flex-wrap gap-2 skills">
                    <div v-for="(stack, i) in skill.stack" :key="i" class="d-flex align-items-center gap-1 border py-1 px-2 skill small rounded-pill bg-body-tertiary">
                      <Icon :name="stack.icon" size="1.3rem" />
                      <span>{{ stack.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="col-lg-12">
            <h2 class="mb-3 d-flex align-items-center">
              <Icon class="me-2 text-primary-emphasis" name="solar:rocket-2-linear" size="2rem" />
              <span>Quality Practices</span>
            </h2>
            <ul class="list-group list-group-flush mb-3">
              <li v-for="(quality, index) in portfolio.qualities" :key="index" class="list-group-item px-0 border-0"><Icon class="me-2 text-primary-emphasis" name="solar:alt-arrow-right-line-duotone" size="1.5rem" />{{ quality }}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-4">
      <div id="projects">
        <h2 class="mb-3 d-flex align-items-center">
          <Icon class="me-2 text-primary-emphasis" name="solar:programming-linear" size="2rem" />
          <span>Projects</span>
        </h2>
        <MasonryWall :items="portfolio.projects" :ssr-columns="2" :gap="16" :max-columns="2" :column-width="400">
          <template #default="{ item: project }">
            <div class="card">
              <img :src="project.image" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title text-primary-emphasis m-0">
                  <a v-if="project.url || project.github" class="text-decoration-none" :href="project.url || project.github" target="_blank">
                    <strong>{{ project.name }}</strong>
                  </a>
                  <strong v-else>{{ project.name }}</strong>
                </h5>
                <p class="text-dark-emphasis">{{ project.period }}</p>
                <p class="card-text">{{ project.description }}</p>
                <ul v-if="project.bullets">
                  <li v-for="(task, task_index) in project.bullets" :key="task_index">{{ task }}</li>
                </ul>
                <span v-for="(technology, tech_index) in project.technologies" :key="tech_index" class="border px-3 py-1 rounded-pill skill align-middle mx-1 small mb-1 bg-body-tertiary">{{ technology }}</span>
                <div class="d-flex justify-content-end mt-2">
                  <a v-if="project.github" :href="project.github" class="me-3 text-decoration-none d-flex align-items-center" target="_blank">
                    <Icon name="bi:github" size="1rem" />
                    <span class="ms-1">Repository</span>
                  </a>
                  <a v-if="project.url" :href="project.url" class="text-decoration-none d-flex align-items-center" target="_blank">
                    <Icon name="solar:square-bottom-up-linear" size="1rem" />
                    <span class="ms-1">View</span>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </MasonryWall>
      </div>
    </div>
  </main>
</template>
