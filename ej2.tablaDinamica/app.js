import { personas } from "./data.js";
import { CrearTabla } from "./tablaDinamicaEj.js";

//console.log(personas);



document.getElementById("btnMostrarPersonas").addEventListener("click", () => {
    document.querySelector(".divTabla").appendChild(CrearTabla(personas));
});