import { writeFileSync, existsSync, mkdirSync } from "fs";
import { SITE } from "../app/utils/site";

const dir = "./app/assets/data";

Promise.all([
  fetch(`${SITE.src_url}/data/tracks.json`).then(response => response.json() as Promise<DimatisTrack[]>),
  fetch(`${SITE.src_url}/data/albums.json`).then(response => response.json() as Promise<DimatisAlbum[]>)
]).then(([tracks, albums]) => {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  const data: (DimatisTrack | DimatisAlbum)[] = tracks;

  const albumsData: DimatisAlbum[] = albums.reduce((acc = [], value) => {
    if (value.type === "Album" || value.type === "EP") {
      acc.push({
        ...value,
        id: value.cover,
        title: `${value.title} (${value.type})`
      });
    }
    return acc;
  }, [] as DimatisAlbum[]);

  data.push(...albumsData);

  const sorted: (DimatisTrack | DimatisAlbum)[] = data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  writeFileSync("./app/assets/data/all.json", JSON.stringify(sorted));
});
