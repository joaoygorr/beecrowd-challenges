let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());

console.log("DIFERENCA =", (a * b - c * d));