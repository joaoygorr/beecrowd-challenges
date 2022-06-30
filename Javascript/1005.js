var input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

console.log("MEDIA =", ((a * 3.5 + b * 7.5) / 11).toFixed(5));

