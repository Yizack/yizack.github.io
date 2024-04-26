<template>
  <div class="bg-links" :style="`background-image: url('${SITE.background}'); opacity: 0.5;`" />
  <div class="container text-white">
    <div class="text-center row py-4">
      <div class="col-lg-12 mb-2" style="z-index: 1;">
        <img class="mx-auto rounded-circle" src="https://dimatis.yizack.com/images/sq-logo-dimatis.jpg" height="150" width="150" style="z-index: 1;">
      </div>
      <div class="col-lg-12 mb-4" style="z-index: 1;">
        <h3 style="z-index: 1;">Dimatis</h3>
      </div>
      <div class="col-12 text-uppercase mx-auto"><span>Latest Release</span></div>
      <!-- Latest release -->
      <NuxtLink ref="releasepop" :to="`/${ page.cover || param }`" class="link normal col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center" data-bs-toggle="popover">
        <DimatisIcon width="24" height="24" />
        <strong class="ms-1">{{ page.artists }} - {{ page.title }}</strong>
      </NuxtLink>
      <div class="col-12 text-uppercase mx-auto"><span>Useful Links</span></div>
      <!-- Playlist -->
      <a :href="SITE.useful.playlist" target="_blank" class="link spotify col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="bi:spotify" />
        <strong class="ms-1">Melodic Dubstep Playlist</strong>
      </a>
      <!-- Submit -->
      <a :href="SITE.useful.submit" target="_blank" class="link normal col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="solar:plain-bold" />
        <strong class="ms-1">Submit to my playlist</strong>
      </a>
      <!-- Merch -->
      <a ref="merchpop" :href="SITE.useful.merch" target="_blank" class="link normal col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center" data-bs-toggle="popover">
        <Icon name="solar:t-shirt-bold" />
        <strong class="ms-1">Buy my merch</strong>
      </a>
      <div class="col-12 text-uppercase mx-auto"><span>Social Links</span></div>
      <!-- Spotify -->
      <a :href="SITE.socials.spotify" target="_blank" class="link spotify col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="bi:spotify" />
        <strong class="ms-1">Spotify</strong>
      </a>
      <!-- Youtube -->
      <a :href="SITE.socials.youtube" target="_blank" class="link youtube col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="bi:youtube" />
        <strong class="ms-1">YouTube</strong>
      </a>
      <!-- Soundcloud -->
      <a :href="SITE.socials.soundcloud" target="_blank" class="link soundcloud col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="fa6-brands:soundcloud" />
        <strong class="ms-1">Soundcloud</strong>
      </a>
      <!-- Instagram -->
      <a :href="SITE.socials.instagram" target="_blank" class="link instagram col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="bi:instagram" />
        <strong class="ms-1">Instagram</strong>
      </a>
      <!-- Facebook -->
      <a :href="SITE.socials.facebook" target="_blank" class="link facebook col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="bi:facebook" />
        <strong class="ms-1">Facebook</strong>
      </a>
      <!-- Twitter -->
      <a :href="SITE.socials.twitter" target="_blank" class="link twitter col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="bi:twitter" />
        <strong class="ms-1">Twitter</strong>
      </a>
      <!-- Bandcamp -->
      <a :href="SITE.socials.bandcamp" target="_blank" class="link bandcamp col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <Icon name="fa-brands:bandcamp" />
        <strong class="ms-1">Bandcamp</strong>
      </a>
      <!-- Website -->
      <a :href="SITE.src_url" target="_blank" class="link normal col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center">
        <DimatisIcon width="24" height="24" />
        <strong class="ms-1">Website</strong>
      </a>
    </div>
  </div>

  <!-- Release Content -->
  <div ref="releasepop_content" class="d-none">
    <div id="release_popped" class="bg-dark text-white rounded-3">
      <img class="d-block img-fluid p-2" :src="`${SITE.src_url}/images/${param}.jpg`" :alt="`${ page.artists } - ${ page.title }`" width="300">
      <div class="p-4">
        <div class="text-center">
          <h5><b>{{ page.title }}</b></h5>
          <h6 class="mb-0">{{ page.artists }}</h6>
        </div>
      </div>
    </div>
  </div>

  <!-- Merch Content -->
  <div ref="merchpop_content" class="d-none">
    <div id="merch-carousel" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div v-for="(merch, index) in SITE.merch" :key="index" class="carousel-item" :class="{'active' : index === 0}">
          <img :src="merch" class="d-block img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: Object.values(data)[0],
      param: Object.keys(data)[0]
    };
  },
  onBeforeUnmount () {
    this.$nuxt.$bootstrap.Popover(this.$refs.releasepop.$el, "dispose");
  },
  mounted () {
    this.$nuxt.$bootstrap.Popover(this.$refs.releasepop.$el, {
      container: "body",
      content: this.$refs.releasepop_content.innerHTML,
      html: true,
      placement: "bottom",
      trigger: "hover"
    });

    this.$nuxt.$bootstrap.Popover(this.$refs.merchpop, {
      container: "body",
      content: this.$refs.merchpop_content.innerHTML,
      html: true,
      placement: "bottom",
      trigger: "hover"
    });

    const myPopoverTrigger = this.$refs.merchpop;
    myPopoverTrigger.addEventListener("shown.bs.popover", () => {
      const myCarouselElement = document.querySelector(".popover #merch-carousel");
      this.$nuxt.$bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        ride: "carousel"
      });
    });
  }
};
</script>

<style>
.border {
    border: 2px solid #151515!important;
}
.spotify:hover, .youtube:hover, .soundcloud:hover, .instagram:hover, .facebook:hover, .normal:hover, .twitter:hover, .bandcamp:hover {
  border-color: #fff!important;
  color: #fff!important;
}
.bg-links {
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
.spotify {
  color: #1db954;
}
.spotify:hover {
  background-color: #48ad6c!important;
}
.youtube {
  color: #ff0000;
}
.youtube:hover {
  background-color: #e44747!important;
}
.soundcloud {
  color: #ff8800;
}
.soundcloud:hover {
  background-color: #ff953c!important;
}
.instagram {
  color: #833ab4;
}
.instagram:hover {
  background-color: #8f58b3!important;
}
.facebook {
  color: #3b5998;
}
.facebook:hover {
  background-color: #5879c0!important;
}
.normal {
  color: #151515;
}
.normal:hover {
  background-color: #151515!important;
}
.twitter {
  color: #1da1f2;
}
.twitter:hover {
  background-color: #39b4ff!important;
}
.bandcamp {
  color: #1da0c3;
}
.bandcamp:hover {
  background-color: #1da0c3!important;
}
.popover {
  max-width: 1000px;
  background-color: transparent;
  border-radius: unset;
  border: unset;
  font-family: 'Roboto', sans-serif;
}
.popover-body {
  padding: unset;
}
#release_popped {
  width:300px;
}
#merch-carousel{
  padding: 1rem 1rem;
  border-radius: 2rem;
  background-color: #f7f7f7;
  border: 1px solid #151515;
}
.rounded {
  border-radius: 2rem!important;
}
</style>
