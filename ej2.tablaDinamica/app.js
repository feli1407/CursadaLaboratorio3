import { personas } from "./data.js";
import { CrearTabla } from "./tablaDinamicaEj.js";
import {autos} from "./autos.js";

//console.log(personas);



document.getElementById("btnMostrarPersonas").addEventListener("click", () => {
    document.querySelector(".divTabla").appendChild(CrearTabla(personas));
});