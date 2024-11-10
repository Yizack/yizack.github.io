import { SITE } from "./app/utils/site";
import dimatisData from "./app/assets/data/all.json";

const fanlinks = dimatisData.map(data => "/" + ("cover" in data.fanlink ? data.fanlink.cover : data.id));

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "@nuxt/icon"
  ],
  app: {
    rootId: "app",
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
        { rel: "preload", href: "/fonts/Ebrima.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
        { rel: "preload", href: "/fonts/EbrimaBd.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
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
    "~/assets/css/global.css",
    "~/assets/css/transitions.css"
  ],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: ""
  },
  spaLoadingTemplate: false,
  routeRules: {
    "/:fanlink": { appMiddleware: "dimatis", prerender: true },
    "/fanlinks": { redirect: SITE.fanlinks_url, prerender: true },
    "/@dimatis": { redirect: `${SITE.src_url}/links`, prerender: true }
  },
  future: { compatibilityVersion: 4 },
  features: {
    inlineStyles: false
  },
  experimental: {
    payloadExtraction: false,
    typedPages: true
  },
  compatibilityDate: "2024-10-24",
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: false,
      failOnError: false,
      routes: ["/", ...fanlinks]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  icon: {
    mode: "svg",
    clientBundle: {
      scan: true,
      sizeLimitKb: 2048
    }
  }
});
