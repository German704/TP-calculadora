function dividir(n1, n2){
    if(n1 === 0 || n2 === 0){
        return "No se puede dividir por cero"
    } else {
        return "resultado: " + n1 / n2
    }
}

// console.log( dividir(0, 7))

module.exports = dividir