import { personas } from "./data.js";

const numeros = [3, 17, 6, 8, 9];
const nombres = ["Juan", "Pedro", "Lucia", "Alicia", "Sebastian"];

////El MAP me devuelve un array con los datos que yo le pida
// const vec = personas.map((persona) => {
//   //return persona.nombre;
//   return {nombre:persona.nombre, id: persona.id}
// });

//El FILTER me devuelve un array con los elementos que hicieron que el callback retornara TRUE.
// const vec = numeros.filter((valor) => {
//    return valor % 2 ? false : true; //me devuelve los pares
// });
//  const vec =personas.filter((persona)=>{
//     //return persona.sueldo >= 1500;//sueldo mayor a 1500
//     //return persona.genero == "M";//genero masculino
//     return persona.edad >= 50;//edad mayuor a 50
//  })

//console.log(vec);

//REDUCE
// let total = numeros.reduce((previo, actual, index, array) => {
//   return previo + actual;//Suma total de los numeros del array
// }, 0);
// let total = numeros.reduce((previo, actual, index, array) => {
//     return previo>actual ? previo : actual;//Numero mas alto del array
//   }, 0);
// console.log(total);
// let totalSalario = personas.reduce((previo, actual) => {
//     return previo + actual.sueldo;//previo es un 0 porque lo inicializo en 0 y actual siempre va a ser una persona, entonces sumo los sueldos.
// }, 0);
// console.log(totalSalario);

//Asi conseguiria el total del salario de los hombres, primero filtro hombres y despues hago el reduce.
// const totalSalarioHombres = personas.filter((persona)=>persona.genero == "M").reduce((previo, actual) => {
//     return previo + actual.sueldo;//previo es un 0 porque lo inicializo en 0 y actual siempre va a ser una persona, entonces sumo los sueldos.
// }, 0);
// console.log(totalSalarioHombres);

//filtro los paises sin repetirlos y los agrupo en un array con el set
// const paises = [...(new Set(personas.map((persona)=>persona.pais)))] ;
// console.log(paises);

//para ordenar las personas por el sueldo de forma ascendente
// personas.sort((persona1, persona2) => {
//   return persona1.sueldo - persona2.sueldo;
// });
// console.log(personas);

//El nombre del hombre que mas gana con FILTER, MAP y REDUCE
const hombreConMasSueldo = personas
  .filter((persona) => persona.genero == "M")
  .map((hombre) => ({
    nombre: hombre.nombre,
    sueldo: hombre.sueldo,
  }))
  .reduce(
    (previo, actual) => {
      return previo.sueldo > actual.sueldo ? previo : actual;
    },
    { nombre: "", sueldo: 0 }
  );
console.log(hombreConMasSueldo.nombre);
