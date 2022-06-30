let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let nome = toString(lines.shift())
let salarioFixed = parseFloat(lines.shift());
let totVendas = parseFloat(lines.shift());
let operacao = parseFloat((0.15 * totVendas) + salarioFixed).toFixed(2)

console.log("TOTAL = R$", operacao)