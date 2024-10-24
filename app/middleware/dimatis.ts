import dimatisData from "~/assets/data/all.json";

export default defineNuxtRouteMiddleware((to) => {
  const fanlink = to.path.split("/")[1];
  const isDimatis = dimatisData.find(track => track.id === fanlink);

  if (isDimatis) navigateTo("https://go.dimatis.music/" + fanlink, { external: true });
});
