function multiplicar(n1, n2){
    if (n1 === 0 || n2 === 0){
        return "todo numero multiplicado por 0 da 0"
    } else {
        return "resultado: " + n1 * n2
    }
}

// console.log( multiplicar(0, 2));

module.exports = multiplicar