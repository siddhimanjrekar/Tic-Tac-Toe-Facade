const Game = require("./Game.js");

let g1 = Game("Siddhi", "Swati");
let g2 = Game("Suman", "Suhas");
let g3 = Game("Swarangi", "Manasi");

console.log(g1.play(0));
console.log(g1.play(3));
console.log(g1.play(1));
console.log(g1.play(4));
console.log(g1.play(2));

console.log(g2.play(3));
console.log(g2.play(0));
console.log(g2.play(5));
console.log(g2.play(4));
console.log(g2.play(7));
console.log(g2.play(8));

console.log(g3.play(0));
console.log(g3.play(1));
console.log(g3.play(2));
console.log(g3.play(3));
console.log(g3.play(5));
console.log(g3.play(4));
console.log(g3.play(6));
console.log(g3.play(8));
console.log(g3.play(7));


