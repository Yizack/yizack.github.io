import { SITE } from "./utils/dimatis-info.js";

export default defineNuxtConfig({
  app: {
    rootId: "app",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      bodyAttrs: {
        "data-bs-theme": "dark"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#151515" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-TileImage", content: `${SITE.src_url}/icons/mstile-144x144.png` }
      ],
      link: [
        { rel: "preload", as: "style", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "stylesheet", crossorigin: "anonymous", href: "https://fonts.googleapis.com/css?family=Roboto:400,300" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: `${SITE.src_url}/favicon-16x16.png` },
        { rel: "icon", type: "image/png", sizes: "32x32", href: `${SITE.src_url}/favicon-32x32.png` },
        { rel: "icon", type: "image/png", sizes: "192x192", href: `${SITE.src_url}/android-chrome-192x192.png` },
        { rel: "shortcut icon", href: `${SITE.src_url}/images/dimatis-logo.png` },
        { rel: "apple-touch-icon", sizes: "57x57", href: `${SITE.src_url}/apple-touch-icon-57x57.png` },
        { rel: "apple-touch-icon", sizes: "60x60", href: `${SITE.src_url}/apple-touch-icon-60x60.png` },
        { rel: "apple-touch-icon", sizes: "72x72", href: `${SITE.src_url}/apple-touch-icon-72x72.png` },
        { rel: "apple-touch-icon", sizes: "76x76", href: `${SITE.src_url}/apple-touch-icon-76x76.png` },
        { rel: "apple-touch-icon", sizes: "114x114", href: `${SITE.src_url}/apple-touch-icon-114x114.png` },
        { rel: "apple-touch-icon", sizes: "120x120", href: `${SITE.src_url}/apple-touch-icon-120x120.png` },
        { rel: "apple-touch-icon", sizes: "144x144", href: `${SITE.src_url}/apple-touch-icon-144x144.png` },
        { rel: "apple-touch-icon", sizes: "152x152", href: `${SITE.src_url}/apple-touch-icon-152x152.png` },
        { rel: "apple-touch-icon", sizes: "180x180", href: `${SITE.src_url}/apple-touch-icon-180x180.png` },
        { rel: "mask-icon", href: `${SITE.src_url}/safari-pinned-tab.svg`, color: "#5bbad5" },
        { rel: "manifest", href: `${SITE.src_url}/site.webmanifest` }
      ]
    }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/global.css",
    "~/assets/css/theme-dark.css",
    "~/assets/css/theme-light.css"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"]
    }
  },
  modules: [
    "@nuxt/eslint",
    "nuxt-icon"
  ],
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  spaLoadingTemplate: false,
  features: {
    inlineStyles: false
  }
});
