import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior (to) {
    if (to.hash) return { el: to.hash, top: 80 };
  }
} satisfies RouterConfig;
