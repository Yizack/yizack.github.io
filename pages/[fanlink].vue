<script setup>
import { SITE } from "~/dimatis-info.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpotify, faSoundcloud, faYoutube, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import data from "~/assets/data/all.json";
</script>

<template>
  <div class="bg-image" :style="`background-image: url(${SITE.src_url}/images/${ page.cover || param }.jpg)`"></div>
  <div class="container text-white">
    <div class="row">
      <div class="mx-auto col-lg-4">
        <div class="card o-hidden my-3 p-0 border-dark bg-dark">
          <div class="row m-auto">
            <div class="col-lg-12 p-0">
              <!-- cover -->
              <img class="img-fluid mx-auto d-block rounded-top" :src="`${SITE.src_url}/images/${page.cover || param}.jpg`" width="100%">
              <!-- titulo -->
              <div class="p-4">
                <div class="text-center">
                  <h5><b>{{ page.title }}</b></h5>
                  <h6 class="mb-0">{{ page.artists }}</h6>
                </div>
              </div>
            </div>
            <!-- full album -->
            <template v-if="album">
              <a class="row m-auto links text-white" :href="`/${ page.cover || param }/`" target="_blank" :title="`Full ${data[page.cover || param].type}`">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" :src="`/images/stores/${ page.cover || param }.png`" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- piano version -->
            <template v-if="'piano' in page.fanlink.links">
              <a class="row m-auto links text-white" href="/{{ page.piano }}" target="_blank" title="Piano Version">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" src="/images/stores/{{ page.piano }}.png" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- remix version -->
            <template v-if="'remix' in page.fanlink.links">
              <a class="row m-auto links text-white" href="/{{ page.remix }}" target="_blank" title="Remix Version">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" src="/images/stores/{{ page.remix }}.png" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- remix version -->
            <template v-if="'remixes' in page.fanlink.links">
              <a class="row m-auto links text-white" href="/{{ page.remixes }}" target="_blank" title="Remixes Release">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" src="/images/stores/{{ page.remixes }}.png" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- instrumental version -->
            <template v-if="'instrumental' in page.fanlink.links">
              <a class="row m-auto links text-white" href="/{{ page.instrumental }}" target="_blank" title="Instrumental Version">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" src="/images/stores/{{ page.instrumental }}.png" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- spotify -->
            <template v-for="(link, key) in page.fanlink.links" :key="key">
              <template v-if="key in page.fanlink.links">
                <a class="row m-auto links text-white" :href="key === 'spotify' ? link + '?si' : link" target="_blank" :title="SITE.stores[key].name">
                  <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                    <img class="d-block" :src="SITE.stores[key].image" width="100%"/>
                  </div>
                  <div class="col-5 px-0 py-4 text-center my-auto">
                    <span class="btn btn-outline-light rounded-pill px-3">{{ SITE.stores[key].text }}</span>
                  </div>
                </a>
              </template>
            </template>
            <!-- free download -->
            <div class="col-lg-12 mt-3 p-0">
              <div class="d-grid">
                <a class="btn btn-primary btn-lg btn-block text-white rounded-0 rounded-bottom" :href="`https://dev.yizack.com/music/?file=${ param }&code=${ page.dropbox }`" title="Free Download" data-bs-toggle="tooltip" data-bs-placement="right" role="button">Free Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto col-lg-12 socials text-center h4">
        <ul class="icons my-2 p-0">
          <li>
            <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank"><FontAwesomeIcon :icon="faSpotify" :class="{'text-dark' : page.fanlink.dark}"/></a>
          </li>
          <li>
            <a href="https://soundcloud.com/dimatis" target="_blank"><FontAwesomeIcon :icon="faSoundcloud" :class="{'text-dark' : page.fanlink.dark}"/></a>
          </li>
          <li>
            <a href="https://youtube.com/dimatis" target="_blank"><FontAwesomeIcon :icon="faYoutube" :class="{'text-dark' : page.fanlink.dark}"/></a>
          </li>
          <li>
            <a href="https://twitter.com/dimatismusic" target="_blank"><FontAwesomeIcon :icon="faTwitter" :class="{'text-dark' : page.fanlink.dark}"/></a>
          </li>
          <li>
            <a href="https://facebook.com/dimatismusic" target="_blank"><FontAwesomeIcon :icon="faFacebook" :class="{'text-dark' : page.fanlink.dark}"/></a>
          </li>
          <li class="p-0">
            <a href="https://instagram.com/dimatismusic" target="_blank"><FontAwesomeIcon :icon="faInstagram" :class="{'text-dark' : page.fanlink.dark}"/></a>
          </li>
        </ul>
      </div>
      <div class="mx-auto col-lg-12 text-center h5 website" :class="{'text-dark' : page.fanlink.dark}">
        <a class="text-decoration-none" href="https://dimatis.yizack.com" target="_blank" title="Website">dimatis.yizack.com</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "~/assets/css/links.css";
</style>

<script>
export default {
  name: "MusicFanlink",
  data() {
    return {
      param: this.$route.params.fanlink,
      page: data[this.$route.params.fanlink],
      album: Object.keys(data).includes(this.$route.params.fanlink) ? "album" in data[this.$route.params.fanlink] : false,
    };
  },
  created() {
    useHead({
      bodyAttrs: { id: "page-top" },
    });
  }
};
</script>