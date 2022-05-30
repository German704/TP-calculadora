//use el if como se usarlo en funciones y con dunciones dentro de otra funcion

function dividiendo(n1, n2){
    if(n1 === 0 || n2 === 0){
        return "No se puede dividir por cero"
    } else {
        return "resultado: " + n1 / n2
    }
}

function multiplicando(n1, n2){
    if (n1 === 0 || n2 === 0){
        return "todo numero multiplicado por 0 da 0"
    } else {
        return "resultado: " + n1 * n2
    }
}

function restando(n1, n2){
    return "resultado: " + (n1 - n2)
}

function sumando(n1, n2){
    return "resultado: " + (n1 + n2);
}

function calculadora(opnes, n1, n2){
    if(opnes === dividiendo){
        return dividiendo(n1, n2)
    }else if (opnes === multiplicando){
        return multiplicando(n1, n2)
    }else if (opnes === restando){
        return restando(n1, n2)
    }else if (opnes === sumando){
        return sumando(n1, n2)
    } else {
        return "Posiblemente mas operaciones matematicos proximamente"
    }
}
console.log(calculadora(dividiendo, 0, 4));
console.log(calculadora(multiplicando, 0, 4));
console.log(calculadora(restando, 4, 20));
console.log(calculadora(sumando, -20, 4));