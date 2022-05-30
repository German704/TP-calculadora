//me gusta, pero no se como sacar el undefined que queda en consola, si pueden darme tips o decirme mi error seria genial. Gracias
//no use lo de si da 0 poner un string que diga que no es posible tal operacion o que en multiplicar da siempre 0 por que es para practicar el switch

let suma = (n1, n2) => {
    return "result = " + (n1 + n2)
}

let resta = (n1, n2) => {
    return "result = " + (n1 - n2)
}

let division = (n1, n2) => {
    return "result = " + (n1 / n2)
}

//solucione lo del undefined cambiando el console.log por return ya que es una funcion donde esta el switch y ya que el return tiene un funcionamiento parecido a un break pense que funcionaria, reemplase el break por return, y deje el ultimo, en switch que seria el default, con el console,log para mostrar como aparece con undefined si no uso return 

let calculadora = (operar, n1, n2) => {
    switch (operar) {
    case "resta":
        return resta(n1, n2);
        
    case "suma":
        return suma(n1, n2);
        
    case "division":
        return division(n1, n2);
        
    default:
        console.log("javascrip")
        break;
}
}

//tambien pude usar el require en ves de hacer de nuevo elas funciones de oeraciones, pero creo que en este caso no nesecita el require, ya que en calculadora demostramos que para requerir algo solo necesitamos la funcion exportada y un console log. entonces creo que es inecesario el switch de esa manera.

console.log(calculadora("resta", 1, 10));
console.log(calculadora("suma", 1, 10));
console.log(calculadora("division", 1, 10));
console.log(calculadora("f", 1, 10));


