/**
 * Quiero sumar 2 numeros, al resultado le calculo el cuadrado,
 * al resultado lo multiplico por 10 y al producto le resto 5
 * y muestro el resultado por consola.
 *
 */

function sumar(a, b) {
    let rdo;
    rdo =  a + b;
    console.log("La suma es " + rdo);
    return rdo;
}
function cuadrado(a) {
    let rdo;
    rdo =  a * a;
    console.log("El cuadrado es " + rdo);
    return rdo;
}
function multiplicar(a, b) {
    let rdo;
    rdo =  a * b;
    console.log("El producto es " + rdo);
    return rdo;
}
function restar(a, b) {
    let rdo;
    rdo =  a - b;
    console.log("La resta es " + rdo);
    return rdo;
}

function informar(valor) {
  console.log("El resultado es " + valor);
}

console.log("Inicio");
let suma = sumar(4, 5);
let cuad = cuadrado(suma);
let producto = multiplicar(cuad, 10);
let resta = restar(producto, 5);
informar(resta);
console.log("Fin");
