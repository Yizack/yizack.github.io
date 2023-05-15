import "bootstrap/js/dist/offcanvas";
import Popover from "bootstrap/js/dist/popover";
import Carousel from "bootstrap/js/dist/carousel";

class Bootstrap {
  Popover (el, options) {
    return new Popover(el, options);
  }

  Carousel (el, options) {
    return new Carousel(el, options);
  }
}

const bootstrap = new Bootstrap();

export default defineNuxtPlugin(() => {
  return {
    provide: { bootstrap }
  };
});
