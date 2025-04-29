

import { HlsPlayer } from "@superstreamer/player";

const container = document.getElementById("sprs");
const player = new HlsPlayer(container);

console.log("hi this is sprs.js")
player.load('https://fp-usc.b-cdn.net/package/2e244ee2-ba86-4443-9e88-147c49510291/hls/master.m3u8')

console.log(player)
