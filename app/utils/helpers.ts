export { useTimeAgo } from "@vueuse/core";

export const formatStars = (stars: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(stars);
};
