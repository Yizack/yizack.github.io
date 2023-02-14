import { Popover, Carousel } from "bootstrap";

export default defineNuxtPlugin(() => {
  return {
    provide: { Popover, Carousel }
  };
});
