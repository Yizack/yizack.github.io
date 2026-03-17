import { SITE } from "./app/utils/site";
import dimatisData from "./app/assets/data/all.json";
import icons from "./icons";

const fanlinks = dimatisData.map(data => "/" + ("cover" in data.fanlink ? data.fanlink.cover : data.id));

export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "nuxt-ui-colors-no-inline",
    "@nuxtjs/color-mode",
    "@nuxt/icon"
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#151515" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-TileImage", content: `${SITE.src_url}/icons/mstile-144x144.png` }
      ],
      link: [
        { rel: "preconnect", href: "https://avatars.githubusercontent.com" },
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
        { rel: "manifest", href: `${SITE.url}/site.webmanifest` }
      ]
    }
  },

  css: [
    "~/assets/css/ui.tailwind.css",
    "~/assets/scss/app.scss"
  ],

  colorMode: {
    preference: "dark",
    fallback: "dark"
  },

  ui: {
    theme: {
      colors: ["primary"]
    }
  },

  spaLoadingTemplate: false,

  routeRules: {
    "/:fanlink": { appMiddleware: "dimatis", prerender: true },
    "/fanlinks": { redirect: SITE.fanlinks_url, prerender: true },
    "/@dimatis": { redirect: `${SITE.src_url}/links`, prerender: true }
  },

  // future: { compatibilityVersion: 4 },

  features: {
    inlineStyles: false
  },

  experimental: {
    payloadExtraction: false,
    typedPages: true
  },

  compatibilityDate: "2026-03-16",

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: false,
      failOnError: false,
      routes: ["/", ...fanlinks]
    }
  },

  typescript: {
    nodeTsConfig: {
      include: [
        "../scripts/**/*",
        "../shared/**/*.d.ts"
      ]
    }
  },

  icon: {
    mode: "svg",
    provider: "none",
    clientBundle: {
      icons,
      sizeLimitKb: 2048
    }
  }
});
