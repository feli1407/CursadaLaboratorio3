
console.log("Hola consola");

let nombre = "Juan";//Con let muere en el scope.
const vec = [2,4,5,6,1];//De esta forma no puede cambiar el espacio en memoria donde se almacena, nos ayuda a evitar errores.
//var nombre = "Juan"; Es mala practica usar var por que hace que la variable sea global.

//Los objetos lanzan EVENTOS y EXCEPCIONES.

// function saludar()
// {
//     alert("Hola bienvenido a Java Script.");
// }

//Asi obtengo la referencia al boton, lo guardo en una const asi no me trae errores despues.
// const btn = document.getElementById("btnSaludar");

//Como manejo el evento.
//1-Nombre del evento. 2-Ubicacion en memoria de la funcion a ejecutar(sin parentesis).
// btn.addEventListener("click", saludar);
//El navegador ejecuta el script cuando se lo pasamos, en este caso para que funcione tenemos que poner el script al final del body.
//U otra forma seria poner un DEFER dentro del script que lo que hace es que cuando termine de cargar el html ejecute el js.

//La manera optimizada de hacerlo seria:
window.onload = function () {
    this.document.getElementById("btnSaludar").addEventListener("click", function () {
        alert("Hola bienvenido a JS.");
    });
};


//EJEMPLOS

//FUNCION DECLARADA
function sumar(a, b){
    return a + b;
}

//FUNCION EXPRESADA
const sumarr =  function (a,b){
    return a + b;
};


