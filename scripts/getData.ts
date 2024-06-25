import { writeFileSync, existsSync, mkdirSync } from "fs";

interface Track {
  id: string;
  title: string;
  date: string;
}

interface Album {
  type: string;
  cover: string;
  title: string;
  date: string;
}

const dir = "./assets/data";

Promise.all([
  fetch("https://dimatis.yizack.com/data/tracks.json").then(response => response.json() as Promise<Record<string, Track>>),
  fetch("https://dimatis.yizack.com/data/albums.json").then(response => response.json() as Promise<Record<string, Album>>)
]).then(([tracks, albums]) => {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  const data: Record<string, Track | Album> = tracks;

  const albumsData: Record<string, Album> = Object.entries(albums).reduce((curr: Record<string, Album>, [, value]) => {
    if (value.type === "Album" || value.type === "EP") {
      curr[value.cover] = value;
      curr[value.cover].title = `${value.title} (${value.type})`;
    }
    return curr;
  }, {});

  Object.assign(data, albumsData);

  const sorted: Record<string, Track | Album> = Object.entries(data).sort(([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  writeFileSync("./assets/data/all.json", JSON.stringify(sorted));
});
