import { faker } from "@faker-js/faker";

function generateMusic() {
  return {
    song: faker.music.songName(),
    author: faker.word.words({ count: { min: 1, max: 2 } }).toUpperCase(),
    genre: faker.music.genre(),
    cover: faker.image.url({ height: 80, width: 80 }),
  };
}

export function generateData() {
  const songs = Array.from({ length: 3 }, generateMusic);
  return {
    status: "ok",
    timestamp: Date.now(),
    songs: songs,
  };
}
