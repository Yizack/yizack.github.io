<script setup>
import { SITE } from "~/site-info.js";
import data from "~/public/data/all.json";
</script>

<template>
  <div class="bg-image" :style="`background-image: url(${SITE.src_url}/images/${param}.jpg)`"></div>
  <div class="container text-white">
    <div class="row">
      <div class="mx-auto col-lg-4">
        <div class="card o-hidden my-3 p-0 border-dark bg-dark">
          <div class="row m-auto">
            <div class="col-lg-12 p-0">
              <!-- cover -->
              <img class="img-fluid mx-auto d-block rounded-top" :src="`${SITE.src_url}/images/${param}.jpg`" width="100%">
              <!-- titulo -->
              <div class="p-4">
                <div class="text-center">
                  <h5><b>{{ page.title }}</b></h5>
                  <h6 class="mb-0">{{ page.artists }}</h6>
                </div>
              </div>
            </div>
            <template v-if="album">
              <!-- full album -->
              <a class="row m-auto links text-white" :href="`/${ album.cover }`" target="_blank" title="Full Album" v-if="album.type ==='Album'">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" src="/images/stores/{{ page.album }}.png" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
              <!-- full ep -->
              <a class="row m-auto links text-white" :href="`/${ album.cover }`" target="_blank" title="Full EP" v-if="album.type ==='EP'">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block" src="/images/stores/{{ page.ep }}.png" width="100%"/>
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- piano version -->
            <a class="row m-auto links text-white" href="/{{ page.piano }}" target="_blank" title="Piano Version">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/{{ page.piano }}.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">View</span>
              </div>
            </a>
            <!-- remix version -->
            <a class="row m-auto links text-white" href="/{{ page.remix }}" target="_blank" title="Remix Version">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/{{ page.remix }}.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">View</span>
              </div>
            </a>
            <!-- remix version -->
            <a class="row m-auto links text-white" href="/{{ page.remixes }}" target="_blank" title="Remixes Release">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/{{ page.remixes }}.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">View</span>
              </div>
            </a>
            <!-- instrumental version -->
            <a class="row m-auto links text-white" href="/{{ page.instrumental }}" target="_blank" title="Instrumental Version">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/{{ page.instrumental }}.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">View</span>
              </div>
            </a>
            <!-- spotify -->
            <a class="row m-auto links text-white" :href="`${ page.fanlink.links.spotify }?si`" target="_blank" title="Stream on Spotify">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/spotify.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- soundcloud -->
            <a class="row m-auto links text-white" href="{{ page.soundcloud }}" target="_blank" title="Stream on Soundcloud">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/soundcloud.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- youtube -->
            <a class="row m-auto links text-white" href="{{ page.youtube }}" target="_blank" title="Stream on Youtube">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/youtube.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- apple music -->
            <a class="row m-auto links text-white" href="{{ page.apple }}" target="_blank" title="Stream on Apple Music">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/apple-music.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- itunes music -->
            <a class="row m-auto links text-white" href="{{ page.itunes }}" target="_blank" title="Buy on iTunes">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/itunes.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Buy</span>
              </div>
            </a>
            <!-- bandcamp-->
            <a class="row m-auto links text-white" href="{{ page.bandcamp }}" target="_blank" title="Buy on Bandcamp">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/bandcamp.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Buy</span>
              </div>
            </a>
            <!-- deezer -->
            <a class="row m-auto links text-white" href="{{ page.deezer }}" target="_blank" title="Stream on Deezer">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/deezer.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- tidal -->
            <a class="row m-auto links text-white" href="{{ page.tidal }}" target="_blank" title="Stream on Tidal">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/tidal.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- yandex -->
            <a class="row m-auto links text-white" href="{{ page.yandex }}" target="_blank" title="Stream on Yandex">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/yandex.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- amazon -->
            <a class="row m-auto links text-white" href="{{ page.amazon }}" target="_blank" title="Buy on Amazon">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/amazon.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Buy</span>
              </div>
            </a>
            <!-- beatport -->
            <a class="row m-auto links text-white" href="{{ page.beatport }}" target="_blank" title="Buy on Beatport">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/beatport.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Buy</span>
              </div>
            </a>
            <!-- netease -->
            <a class="row m-auto links text-white" href="{{ page.netease }}" target="_blank" title="Stream on Netease Cloud Music">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/netease.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Stream</span>
              </div>
            </a>
            <!-- tiktok -->
            <a class="row m-auto links text-white" href="{{ page.tiktok }}" target="_blank" title="Use on Tiktok">
              <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                <img class="d-block" src="/images/stores/tiktok.png" width="100%"/>
              </div>
              <div class="col-5 px-0 py-4 text-center my-auto">
                <span class="btn btn-outline-light rounded-pill px-3">Use</span>
              </div>
            </a>
            <!-- free download -->
            <div class="col-lg-12 mt-3 p-0">
              <div class="d-grid">
                <a class="btn btn-primary btn-lg btn-block text-white rounded-0 rounded-bottom" href="https://dev.yizack.com/music/?file={{ page.link }}&code={{ page.dropbox }}" title="Free Download" data-bs-toggle="tooltip" data-bs-placement="right" role="button">Free Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto col-lg-12 socials text-center h4">
        <ul class="icons my-2 p-0">
          <li>
            <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank"><i class="fa-brands fa-spotify{% if page.dark == true %} text-dark{% endif %}"></i></a>
          </li>
          <li>
            <a href="https://soundcloud.com/dimatis" target="_blank"><i class="fa-brands fa-soundcloud{% if page.dark == true %} text-dark{% endif %}"></i></a>
          </li>
          <li>
            <a href="https://youtube.com/dimatis" target="_blank"><i class="fa-brands fa-youtube{% if page.dark == true %} text-dark{% endif %}"></i></a>
          </li>
          <li>
            <a href="https://twitter.com/dimatismusic" target="_blank"><i class="fa-brands fa-twitter{% if page.dark == true %} text-dark{% endif %}"></i></a>
          </li>
          <li>
            <a href="https://facebook.com/dimatismusic" target="_blank"><i class="fa-brands fa-facebook{% if page.dark == true %} text-dark{% endif %}"></i></a>
          </li>
          <li class="p-0">
            <a href="https://instagram.com/dimatismusic" target="_blank"><i class="fa-brands fa-instagram{% if page.dark == true %} text-dark{% endif %}"></i></a>
          </li>
        </ul>
      </div>
      <div class="mx-auto col-lg-12 text-center h5 website{% if page.dark == true %} text-dark{% endif %}">
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
      page: data.tracks[this.$route.params.fanlink],
      album: "album" in data.tracks[this.$route.params.fanlink] ? data.albums[data.tracks[this.$route.params.fanlink].album.replace(/\s+/g, "-").toLowerCase()] : null,
    };
  },
  created() {
    useHead({
      bodyAttrs: { class: "test", id: "page-top" },
    });
  }
};
</script>
