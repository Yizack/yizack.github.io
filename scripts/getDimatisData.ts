import { writeFile, mkdir } from "node:fs/promises";
import { $fetch } from "ofetch";
import { SITE } from "../app/utils/site";

const dir = "./app/assets/data";

Promise.all([
  $fetch<DimatisTrack[]>(`${SITE.src_url}/data/tracks.json`),
  $fetch<DimatisAlbum[]>(`${SITE.src_url}/data/albums.json`)
]).then(async ([tracks, albums]) => {
  await mkdir(dir, { recursive: true });
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

  await writeFile("./app/assets/data/all.json", JSON.stringify(sorted));
});
