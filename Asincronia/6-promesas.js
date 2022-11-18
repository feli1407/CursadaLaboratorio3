/**
 * Quiero sumar 2 numeros, al resultado le calculo el cuadrado,
 * al resultado lo multiplico por 10 y al producto le resto 5
 * y muestro el resultado por consola.
 *
 */

// una promesa es un objeto
// las promesas son retornadas por funciones que quieren ser asincronas
/*
function esPositivo(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(numero)) {
        reject("No es un numero");
      } else if (numero >= 0) {
        resolve("Es Positivo");
      } else {
        resolve("Es Negativo");
      }
    }, 10000);
  });
}

console.log("Inicio");

esPositivo(23).then(rta => {console.log(rta)}).catch(err=>console.error(err));
*/
//console.log("Fin");

//  estado pending fullfilled
// resuelta rechazada

function sumarPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        let suma = a + b;
        console.log("La suma es " + suma);
        resolve(suma);
      }
      reject("Parametros invalidos para la suma");
    }, 1500);
  });
}
function cuadradoPromise(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number") {
        let cuad = a * a;
        console.log("El cuadrado es " + cuad);
        resolve(cuad);
      }
      reject("Parametros invalidos para el cuadrado");
    }, 1500);
  });
}
function multiplicarPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        let p = a * b;
        console.log("El producto es " + p);
        resolve(p);
      }
      reject("Parametros invalidos para el producto");
    }, 1500);
  });
}
function restarPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        let r = a - b;
        console.log("La resta es " + r);
        resolve(r);
      }
      reject("Parametros invalidos para la resta");
    }, 1500);
  });
}

function informar(valor) {
  console.log("El resultado es " + valor);
}

function calcular(a, b) {
  sumarPromise(a, b)
    .then((suma) => cuadradoPromise(suma))
    .then((cuadrado) => multiplicarPromise(cuadrado, 10))
    .then((producto) => producto < 800 ? restarPromise(producto, 5):Promise.reject("El producto es mayor a 800"))
    .then((resta) => informar(resta))
    .catch((err) => console.error(err));
}

console.log("Inicio");

calcular(4, 5);

console.log("Fin");
