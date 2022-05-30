let dividir = require ("./operaciones/dividir") 
let multiplicar = require ("./operaciones/multiplicar")
let resta = require ("./operaciones/resta")
const suma = require("./operaciones/suma")


console.log(["==si se usa cero=="]);
console.log(dividir(0, 7))
console.log(multiplicar(0, 7))
console.log(resta(0, 7))
console.log(suma(0, 4))

console.log(["==No se usan cero=="]);
console.log(dividir(4, 7))
console.log(multiplicar(5, 7))
console.log(resta(9, 7))
console.log(suma(3, 4))