<script setup>
import { SITE } from "~/dimatis-info.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpotify, faSoundcloud, faYoutube, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import data from "~/assets/data/all.json";
</script>

<template>
  <div class="bg-image" :style="`background-image: url('${ SITE.background }')`"></div>
  <div class="container text-white">
    <div class="row">
      <div class="mx-auto col-lg-4" v-for="(fanlink, key) in data" :key="key">
        <div class="card o-hidden my-3 p-0 border-dark bg-dark">
          <div class="row">
            <div class="col-lg-12">
              <!-- cover -->
              <img class="img-fluid mx-auto d-block rounded-top" :src="`${SITE.src_url}/images/${ fanlink.cover || key }.jpg`" width="100%">
              <!-- titulo -->
              <div class="p-3">
                <div class="text-center">
                  <h5><b>{{ fanlink.title }}</b></h5>
                  <h6 class="mb-0">{{ fanlink.artists }}</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="d-grid">
                <a :href="`/${ key }/`" type="button" class="btn btn-primary btn-lg btn-block text-white rounded-0 rounded-bottom" title="View Fanlink">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto col-lg-12 socials text-center h4">
        <ul class="icons my-2 p-0">
          <li>
            <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank"><FontAwesomeIcon :icon="faSpotify"/></a>
          </li>
          <li>
            <a href="https://soundcloud.com/dimatis" target="_blank"><FontAwesomeIcon :icon="faSoundcloud"/></a>
          </li>
          <li>
            <a href="https://youtube.com/dimatis" target="_blank"><FontAwesomeIcon :icon="faYoutube"/></a>
          </li>
          <li>
            <a href="https://twitter.com/dimatismusic" target="_blank"><FontAwesomeIcon :icon="faTwitter"/></a>
          </li>
          <li>
            <a href="https://facebook.com/dimatismusic" target="_blank"><FontAwesomeIcon :icon="faFacebook"/></a>
          </li>
          <li class="p-0">
            <a href="https://instagram.com/dimatismusic" target="_blank"><FontAwesomeIcon :icon="faInstagram"/></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mx-auto col-lg-12 text-center h5 website">
      <a class="text-decoration-none" href="https://dimatis.yizack.com" target="_blank" title="Website">dimatis.yizack.com</a>
    </div>
  </div>
</template>

<style scoped>
  @import "~/assets/css/links.css";
</style>

<script>
export default {
  name: "FanLinks"
};
</script>

<!--
<script>
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
</script>
-->
