
import { writeFileSync, existsSync, mkdirSync } from "fs";

const dir = "./public/data";

Promise.all([
  fetch("https://dimatis.yizack.com/data/tracks.json"),
  fetch("https://dimatis.yizack.com/data/albums.json")
]).then(responses => Promise.all(responses.map(response => response.json()))).then(([tracks, albums]) => {

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const data = {tracks, albums};
  writeFileSync("./public/data/all.json", JSON.stringify(data));
});
