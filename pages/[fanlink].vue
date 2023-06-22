<template>
  <div class="bg-image" :style="`background-image: url(${SITE.src_url}/images/${ page.cover || param }.jpg)`" />
  <div class="container text-white">
    <div class="row">
      <div class="mx-auto col-lg-4">
        <div class="card o-hidden my-3 p-0 border-dark bg-dark">
          <div class="row m-auto">
            <div class="col-lg-12 p-0">
              <!-- cover -->
              <img class="img-fluid mx-auto d-block rounded-top w-100" :src="`${SITE.src_url}/images/${page.cover || param}.jpg`">
              <!-- titulo -->
              <div class="p-4">
                <div class="text-center text-white">
                  <h5><b>{{ page.title }}</b></h5>
                  <h6 class="mb-0">{{ page.artists }}</h6>
                </div>
              </div>
            </div>
            <!-- full album -->
            <template v-if="album">
              <a class="row m-auto links text-white" :href="`/${ page.cover || param }/`" target="_blank" :title="`Full ${data[page.cover || param].type}`">
                <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                  <img class="d-block w-100" :src="`/images/stores/${ page.cover || param }.png`">
                </div>
                <div class="col-5 px-0 py-4 text-center my-auto">
                  <span class="btn btn-outline-light rounded-pill px-3">View</span>
                </div>
              </a>
            </template>
            <!-- Stores -->
            <template v-for="(link, key) in page.fanlink.links" :key="key">
              <template v-if="link">
                <a class="row m-auto links text-white" :href="key === 'spotify' ? link + '?si' : link" target="_blank" :title="SITE.stores[key].name">
                  <div class="col-7 px-3 py-4 d-flex flex-wrap align-content-center">
                    <img class="d-block w-100" :src="SITE.stores[key].image">
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
                <a class="btn btn-primary btn-lg btn-block text-white rounded-0 rounded-bottom" :href="`https://dev.yizack.com/api/dimatis/download?file=${ param }`" title="Free Download" data-bs-toggle="tooltip" data-bs-placement="right" role="button">Free Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto col-lg-12 socials text-center h4">
        <ul class="icons my-2 p-0">
          <li>
            <a href="https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR" target="_blank">
              <Icon name="bi:spotify" :class="{'text-dark' : page.fanlink.dark}" size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/dimatis" target="_blank">
              <Icon name="fa6-brands:soundcloud" :class="{'text-dark' : page.fanlink.dark}" height="2rem" width="2rem" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/dimatis" target="_blank">
              <Icon name="bi:youtube" :class="{'text-dark' : page.fanlink.dark}" size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dimatismusic" target="_blank">
              <Icon name="bi:twitter" :class="{'text-dark' : page.fanlink.dark}" size="1.5rem" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/dimatismusic" target="_blank">
              <Icon name="bi:facebook" :class="{'text-dark' : page.fanlink.dark}" size="1.5rem" />
            </a>
          </li>
          <li class="p-0">
            <a href="https://instagram.com/dimatismusic" target="_blank">
              <Icon name="bi:instagram" :class="{'text-dark' : page.fanlink.dark}" size="1.5rem" />
            </a>
          </li>
        </ul>
      </div>
      <div class="mx-auto col-lg-12 text-center h5 website" :class="{'text-dark' : page.fanlink.dark}">
        <a class="text-decoration-none" href="https://dimatis.yizack.com" target="_blank" title="Website">dimatis.yizack.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicFanlink",
  data () {
    return {
      param: this.$route.params.fanlink,
      page: data[this.$route.params.fanlink],
      album: Object.keys(data).includes(this.$route.params.fanlink) ? "album" in data[this.$route.params.fanlink] : false
    };
  },
  created () {
    useHead({
      title: `${this.page.artists} - ${this.page.title}`,
      meta: [
        { name: "keywords", content: `release, ${this.page.title}, ${this.page.genre}, play, stream, download, fanlink` },
        { name: "description", content: this.page.description },
        // Protocolo Open Graph
        { property: "og:url", content: `${SITE.url}/music/${this.param}/` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${this.page.artists} - ${this.page.title}` },
        { property: "og:site_name", content: SITE.name },
        { property: "og:image", content: `${SITE.src_url}/images/${this.page.cover || this.param}.jpg` },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "500" },
        { property: "og:image:alt", content: `${this.page.artists} - ${this.page.title}` },
        { property: "og:description", content: this.page.description },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE.src_url}/images/${this.page.cover || this.param}.jpg` },
        { name: "twitter:title", content: `${this.page.artists} - ${this.page.title}` },
        { name: "twitter:description", content: this.page.description },
        { name: "twitter:site", content: "@dimatismusic" }
      ],
      link: [
        { rel: "canonical", href: `${SITE.url}/${this.param}/` }
      ],
      bodyAttrs: { id: "page-top" }
    });
  }
};
</script>

<style scoped>
  @import "~/assets/css/links.css";
</style>
