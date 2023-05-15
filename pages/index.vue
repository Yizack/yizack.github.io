<script setup>
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faSuitcase, faBolt, faRocket, faLaptopCode, faArrowUpRightFromSquare, faGraduationCap, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
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
            <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
              <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-dark-emphasis" />
              <hr class="d-lg-none my-2 text-dark-emphasis">
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 text-center" role="button" @click="toggleTheme()"><FontAwesome :icon="dark ? faMoon : faSun" width="16" height="16" /><span class="d-lg-none d-inline"> Toogle Theme</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2 container" tabindex="0">
    <div id="about">
      <div class="row">
        <div class="col-md-9">
          <div>
            <h2 class="mb-3"><FontAwesome class="me-2 text-body" :icon="faAddressCard" width="32" height="32" />About Me</h2>
            <p>
              I love Programming, passionate about computers and new technologies since I was 14 years old, it all started when I created my first blogs and bravely tried to understand and make use of HTML editors. Later I started watching videos about Java, and JavaScript to develop automated posting bots for social medias.
              <br><br>
              I like to learn and focus on new technologies related to developing web and mobile apps, databases, system automation, server implementations, and GitHub for personal projects.
              <br><br>
              I studied Computer and Systems Engineering at the Technological University of Panama. Since the first year of my career I always told myself "There is no programming problem or challenge that can beat me, I can do them all" I went with that mindset until the end of my career and there was never a programming problem that I have given up on.
            </p>
          </div>
          <div class="mb-3">
            <h2 class="mb-3"><FontAwesome class="me-2 text-body" :icon="faGraduationCap" width="32" height="32" />Education</h2>
            <div v-for="(edu, index) in portfolio.education" :key="index">
              <h5 class="m-0"><b class="text-primary-emphasis">{{ edu.diploma }}</b> at <b class="text-primary-emphasis">{{ edu.institution }}</b></h5>
              <p class="m-0">{{ edu.city }}</p>
              <p class="text-dark-emphasis">{{ edu.period }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <h5>Location</h5>
            <p><img :src="portfolio.flag"> {{ portfolio.location }}</p>
            <h5>Email</h5>
            <p>
              <a :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
            </p>
            <h5>Languages</h5>
            <ul class="list-group list-group-flush">
              <li v-for="(language, index) in portfolio.languages" :key="index" class="list-group-item px-0 border-0">
                {{ language.name }}: {{ language.level }}
                <div class="progress" role="progressbar" aria-label="Language level" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-primary" :style="`width: ${language.p}%`" />
                </div>
              </li>
            </ul>
            <hr>
            <h5>Socials</h5>
            <a v-for="(social, index) in portfolio.socials" :key="index" :href="social.url" target="_blank" class="text-dark-emphasis" :title="social.name">
              <FontAwesome :icon="social.icon" width="24" height="24" />
            </a>
          </div>
        </div>
        <hr class="my-4">
        <div class="col-md-5">
          <h2 class="mb-3"><FontAwesome class="me-2 text-body" :icon="faRocket" width="32" height="32" />Quality Practices</h2>
          <ul class="list-group list-group-flush mb-3">
            <li v-for="(quality, index) in portfolio.qualities" :key="index" class="list-group-item px-0 border-0"><FontAwesome class="me-2 text-primary-emphasis" :icon="faAngleRight" />{{ quality }}</li>
          </ul>
        </div>
        <div class="col-md-7">
          <h2 class="mb-3"><FontAwesome class="me-2 text-body" :icon="faBolt" width="32" height="32" />Main Skills</h2>
          <div v-for="(skill, key) in portfolio.skills" :key="key" class="mb-2">
            <table class="table table-borderless m-0 align-middle">
              <tbody>
                <tr>
                  <td class="col-3 text-center bg-primary rounded">
                    <p class="m-0 text-white">{{ key }}</p>
                  </td>
                  <td>
                    <span v-for="(technology, index) in skill" :key="index" class="border px-3 py-1 rounded-pill skill align-middle mx-1 my-1">{{ technology }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <div id="work">
      <h2 class="mb-3"><FontAwesome class="me-2 text-body" :icon="faSuitcase" width="32" height="32" />Work Experience</h2>
      <div v-for="(work, work_index) in portfolio.works" :key="work_index">
        <h5 class="m-0"><b class="text-primary-emphasis">{{ work.position }}</b> at <b class="text-primary-emphasis">{{ work.company }}</b></h5>
        <p class="m-0">{{ work.city }}</p>
        <p class="text-dark-emphasis">{{ work.period }}</p>
        <ul v-if="work.bullets">
          <li v-for="(task, task_index) in work.bullets" :key="task_index">{{ task }}</li>
        </ul>
      </div>
    </div>
    <hr class="my-4">
    <div id="projects">
      <h2 class="mb-3"><FontAwesome class="me-2  text-body" :icon="faLaptopCode" width="32" height="32" />Projects</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4" :data-masonry="JSON.stringify({percentPosition: true, itemSelector: '.col' })">
        <div v-for="(project, project_index) in portfolio.projects" :key="project_index" class="col">
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
              <span v-for="(technology, tech_index) in project.technologies" :key="tech_index" class="border px-3 py-1 rounded-pill skill align-middle mx-1 small mb-1">{{ technology }}</span>
              <div class="d-flex justify-content-end mt-2">
                <a v-if="project.github" :href="project.github" class="me-3 text-decoration-none" target="_blank"><FontAwesome :icon="faGithub" width="24" height="24" /> Repository</a>
                <a v-if="project.url" :href="project.url" class="text-decoration-none" target="_blank"><FontAwesome :icon="faArrowUpRightFromSquare" width="24" height="24" /> View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data () {
    return {
      dark: true
    };
  },
  created () {
    useHead({
      title: "Yizack Rangel's Portfolio",
      bodyAttrs: { "data-bs-spy": "scroll" },
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js",
          body: true,
          crossorigin: "anonymous",
          async: true
        }
      ]
    });
  },
  methods: {
    toggleTheme () {
      this.dark = !this.dark;
      useHead({
        bodyAttrs: { "data-bs-theme": this.dark ? "dark" : "light" }
      });
    }
  }
};
</script>

<style scoped>
  @import "~/assets/css/portfolio.css";
</style>
