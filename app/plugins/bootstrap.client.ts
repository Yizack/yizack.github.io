import "bootstrap/js/dist/offcanvas";
import Popover from "bootstrap/js/dist/popover";
import Carousel from "bootstrap/js/dist/carousel";

class Bootstrap {
  Popover (el: HTMLElement, options: Record<string, unknown>) {
    return new Popover(el, options);
  }

  hidePopover (el: HTMLElement) {
    const popover = Popover.getInstance(el);
    if (popover) {
      popover.hide();
    }
  }

  Carousel (el: HTMLElement, options: Record<string, unknown>) {
    return new Carousel(el, options);
  }
}

const bootstrap = new Bootstrap();

export default defineNuxtPlugin(() => {
  return {
    provide: { bootstrap }
  };
});
