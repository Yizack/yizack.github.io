<script setup>
import portfolio from "~/portfolio.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faSuitcase, faBolt, faRocket, faLaptopCode, faArrowUpRightFromSquare, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
  <nav id="navbar" class="navbar px-3 mb-3 sticky-top fixed bg-body">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Yizack Rangel</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link rounded-pill" href="#about">About</a>
        </li>
        <li class="nav-item rounded-pill">
          <a class="nav-link" href="#work">Work Experience</a>
        </li>
        <li class="nav-item rounded-pill">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example p-3 rounded-2 container" tabindex="0">
    <div class="mb-4" id="about">
      <div class="row">
        <div class="col-md-9 mb-3">
          <div class="mb-4">
            <h2 class="mb-3"><FontAwesomeIcon class="me-2 text-body" :icon="faAddressCard"/>About Me</h2>
            <p>I love Programming, passionate about computers and new technologies since I was 14 years old, it all started when I created my first blogs and bravely tried to understand and make use of HTML editors. Later I started watching videos about Java, and JavaScript to develop automated posting bots for social medias.
            <br/><br/>
            I like to learn and focus on new technologies related to developing web and mobile apps, databases, system automation, server implementations, and GitHub for personal projects.
            <br/><br/>
            I studied Computer and Systems Engineering at the Technological University of Panama. Since the first year of my career I always told myself "There is no programming problem or challenge that can beat me, I can do them all" I went with that mindset until the end of my career and there was never a programming problem that I have given up on.</p>
          </div>
          <div class="mb-3">
            <h2 class="mb-3"><FontAwesomeIcon class="me-2 text-body" :icon="faGraduationCap"/>Education</h2>
            <div v-for="(edu, index) in portfolio.education" :key="index">
              <h5 class="m-0"><b class="text-primary-emphasis">{{ edu.diploma }}</b> at <b class="text-primary-emphasis">{{ edu.institution }}</b></h5>
              <p class="m-0">{{ edu.city }}</p>
              <p class="text-dark-emphasis">{{ edu.period }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div>
            <div>
              <h5>Location</h5>
              <p><img :src="portfolio.flag"/> {{ portfolio.location }}</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>
                <a :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
              </p>
            </div>
            <div>
              <h5>Languages</h5>
              <ul class="list-group list-group-flush w-75">
                <li class="list-group-item px-0 border-0" v-for="(language, index) in portfolio.languages" :key="index">
                  {{ language.name }}: {{ language.level }}
                  <div class="progress" role="progressbar" aria-label="Language level" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-primary" :style="`width: ${language.p}%`"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-4">
          <h2 class="mb-3"><FontAwesomeIcon class="me-2 text-body" :icon="faRocket"/>Quality Practices</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item px-0 border-0" v-for="(quality, index) in portfolio.qualities" :key="index"><FontAwesomeIcon class="me-2 text-primary-emphasis" :icon="faAngleRight"/>{{ quality }}</li>
          </ul>
        </div>
        <div class="col-md-7">
          <h2 class="mb-3"><FontAwesomeIcon class="me-2 text-body" :icon="faBolt"/>Main Skills</h2>
          <div class="mb-2" v-for="(skill, key) in portfolio.skills" :key="key">
            <table class="table table-borderless m-0 align-middle">
              <tbody>
                <tr>
                  <td class="col-3 text-center bg-primary rounded">
                    <p class="m-0 text-white">{{ key }}</p>
                  </td>
                  <td>
                    <span class="border px-3 py-1 rounded-pill skill align-middle mx-1 my-1" v-for="(technology, index) in skill" :key="index">{{ technology }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div class="my-4" id="work">
      <h2 class="mb-3"><FontAwesomeIcon class="me-2 text-body" :icon="faSuitcase"/>Work Experience</h2>
      <div v-for="(work, index) in portfolio.works" :key="index">
        <h5 class="m-0"><b class="text-primary-emphasis">{{ work.position }}</b> at <b class="text-primary-emphasis">{{ work.company }}</b></h5>
        <p class="m-0">{{ work.city }}</p>
        <p class="text-dark-emphasis">{{ work.period }}</p>
        <ul v-if="work.bullets">
          <li v-for="(task, index) in work.bullets" :key="index">{{ task }}</li>
        </ul>
      </div>
    </div>
    <hr/>
    <div class="mt-4" id="projects">
      <h2 class="mb-3"><FontAwesomeIcon class="me-2  text-body" :icon="faLaptopCode"/>Projects</h2>
      <div class="row row-cols-1 row-cols-md-2 g-4" :data-masonry="JSON.stringify({percentPosition: true, itemSelector: '.col' })">
      <div class="col" v-for="(project, index) in portfolio.projects" :key="index">
        <div class="card">
          <img :src="project.image" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-primary-emphasis m-0">{{ project.name }}</h5>
            <p class="text-dark-emphasis">{{ project.period }}</p>
            <p class="card-text">{{ project.description }}</p>
            <ul v-if="project.bullets">
              <li v-for="(task, index) in project.bullets" :key="index">{{ task }}</li>
            </ul>
            <span class="border px-3 py-1 rounded-pill skill align-middle mx-1 small mb-1" v-for="(technology, index) in project.technologies" :key="index">{{ technology }}</span>
            <div class="d-flex justify-content-end mt-2">
              <a :href="project.github" class="me-3 text-decoration-none" target="_blank" v-if="project.github"><FontAwesomeIcon :icon="faGithub" width="24" height="24"/> Repository</a>
              <a :href="project.url" class="text-decoration-none" target="_blank" v-if="project.url"><FontAwesomeIcon :icon="faArrowUpRightFromSquare" width="24" height="24"/> View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
  @import "~/assets/css/portfolio.css";
</style>

<script>
export default {
  name: "IndexPage",
  props: ["site"],
  created() {
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
};
</script>
