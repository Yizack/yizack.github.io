<script setup lang="ts">
const { $bootstrap } = useNuxtApp();

const releasepop = ref<{ $el: HTMLElement }>();
const releasepop_content = ref<HTMLElement>();

const page = ref(tracksData[0]!);

onBeforeUnmount(() => {
  if (!releasepop.value) return;
  $bootstrap.hidePopover(releasepop.value.$el);
});

onMounted(() => {
  if (!releasepop.value || !releasepop_content.value) return;

  $bootstrap.Popover(releasepop.value.$el, {
    container: "body",
    content: releasepop_content.value.innerHTML,
    html: true,
    placement: "bottom",
    trigger: "hover"
  });
});
</script>

<template>
  <main id="links">
    <div class="bg-links" :style="{ backgroundImage: `url(${LINKS.background})`, filter: 'blur(10px)', opacity: .9 }" />
    <div class="container py-5">
      <div class="card rounded-4 col-lg-7 mx-auto overflow-hidden">
        <div class="card-header text-center py-5">
          <img class="img-fluid rounded-4 scale-on-hover" :src="SITE.image" height="350" width="350">
          <h1 class="text-center mb-0 mt-3">{{ SITE.name }}</h1>
          <p class="text-center text-muted m-0">{{ portfolio.name }}</p>
          <p class="text-center text-muted m-0">{{ SITE.description }}</p>
          <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a>
        </div>
        <div class="card-body px-lg-5 bg-body-secondary">
          <h4>Latest Release</h4>
          <div class="position-relative neon scale-on-hover normal">
            <NuxtLink ref="releasepop" :to="`/${page.cover ? page.cover : page.id}`" class="bg-body-tertiary d-flex align-items-center rounded-4 overflow-hidden mb-2 border text-decoration-none position-relative z-1" data-bs-toggle="popover">
              <img class="img-fluid" :src="`${SITE.src_url}/images/${page.id}.jpg`" :alt="`${page.artists} - ${page.title}`" width="100" height="100">
              <div class="px-3 w-100">
                <h5 class="m-0">{{ page.title }}</h5>
                <p class="m-0 text-muted">{{ page.artists }}</p>
              </div>
            </NuxtLink>
          </div>
          <hr>
          <template v-for="(tree, i) of LINKS.tree" :key="tree.id">
            <h4>{{ tree.title }}</h4>
            <div v-for="(link, j) of tree.content" :key="j" class="position-relative neon scale-on-hover" :class="link.code ? link.code : 'normal'">
              <a :href="link.url" class="bg-body d-flex align-items-center rounded-4 overflow-hidden mb-2 border text-decoration-none position-relative z-1">
                <div class="d-flex align-items-center justify-content-center text-white" :style="{ minWidth: '100px' }">
                  <Icon v-if="link.code" :name="`fa6-brands:${link.code}`" size="1.5rem" />
                  <DimatisIcon v-else size="1.5rem" />
                </div>
                <div class="bg-body-tertiary px-3 py-4 w-100">
                  <h5 class="m-0">{{ link.title }}</h5>
                </div>
              </a>
            </div>
            <hr v-if="i !== LINKS.tree.length - 1">
          </template>
        </div>
      </div>
    </div>
    <!-- Release Content -->
    <div ref="releasepop_content" class="d-none">
      <div id="release_popped" class="bg-dark text-white rounded-3">
        <img class="d-block img-fluid p-2" :src="`${SITE.src_url}/images/${page.id}.jpg`" :alt="`${page.artists} - ${page.title}`" width="300">
        <div class="p-4">
          <div class="text-center">
            <h5><b>{{ page.title }}</b></h5>
            <h6 class="mb-0">{{ page.artists }}</h6>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.scale-on-hover {
  transition: transform .2s ease-in-out;
}
.scale-on-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 10px rgb(0 0 0 / 15%)!important;
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
.neon:hover::after {
  opacity: 1;
  transform: translateZ(0) scale(.97,.75);
  transition: opacity .3s;
}
.neon::after {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  filter: blur(20px);
}
.spotify:hover::after {
  background-color: #1db954;
}
.youtube:hover::after {
  background-color: #ff0000;
}
.soundcloud:hover::after {
  background-color: #ff8800;
}
.instagram:hover::after {
  background-color: #833ab4;
}
.facebook:hover::after {
  background-color: #3b5998;
}
.normal:hover::after {
  background-color: #f7f7f7;
}
.x-twitter:hover::after {
  background-color: #f7f7f7;
}
.bandcamp:hover::after {
  background-color: #1da0c3;
}
</style>
