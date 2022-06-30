let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let numeroFunc = parseInt(lines.shift());
let salario = parseFloat(lines.shift());
let hrs = parseFloat(lines.shift());

console.log("NUMBER =", numeroFunc);
console.log("SALARY = U$", (salario * hrs).toFixed(2));