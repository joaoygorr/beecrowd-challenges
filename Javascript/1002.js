var input = require('fs').readFileSync('stdin', 'utf8');
var lines = parseFloat(input.split('\n'));

let n = 3.14159;
let operacao = n * Math.pow(lines, 2)
console.log("A=" + operacao.toFixed(4));