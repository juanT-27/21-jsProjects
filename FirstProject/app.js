import Player from "./modules/player.js";

const myPlayer= new Player(0, 100, 50)

console.log(myPlayer.winXp(1))
console.log(myPlayer.manageHealth("hurt", "50"))