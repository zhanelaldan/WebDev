import {Album} from "./models";

export const ALBUMS: Album[] = [];

for(let i: number = 0; i < 5; i++){
  ALBUMS.push({
    userId: 1,
    id: i + 1,
    title: `title ${i + 1}`
  })
}