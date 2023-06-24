import { writeFileSync, existsSync, mkdirSync } from "fs";

const dir = "./assets/data";

Promise.all([
  fetch("https://dimatis.yizack.com/data/tracks.json"),
  fetch("https://dimatis.yizack.com/data/albums.json")
]).then(responses => Promise.all(responses.map(response => response.json()))).then(([tracks, albums]) => {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  const data = tracks;

  const albumsData = Object.entries(albums).reduce((curr, [, value]) => {
    if (value.type === "Album" || value.type === "EP") {
      curr[value.cover] = value;
      curr[value.cover].title = `${value.title} (${value.type})`;
    }
    return curr;
  }, {});

  Object.assign(data, albumsData);

  const sorted = Object.entries(data).sort(([, a], [, b]) => new Date(b.date) - new Date(a.date)).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeFileSync("./assets/data/all.json", JSON.stringify(sorted));
});
