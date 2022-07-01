let input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let lines1 = lines.shift().split(" ");
let lines2 = lines.shift().split(" ");

let codPeca = parseInt(lines1[0])
let numPeca = parseInt(lines1[1])
let valorUnitario = parseFloat(lines1[2])

let codPeca2 = parseInt(lines2[0])
let numPeca2 = parseInt(lines2[1])
let valorUnitario2 = parseFloat(lines2[2])

console.log(`VALOR A PAGAR: R$ ${(numPeca * valorUnitario + numPeca2 * valorUnitario2).toFixed(2)}`);