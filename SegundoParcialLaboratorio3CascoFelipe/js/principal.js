import { Anuncio } from "./anuncio.js";
import { getAnunciosAsync } from "./ajax.js";

const divAnunciosAutos = document.querySelector(".anunciosAutos");

getAnunciosAsync()
  .then((anunciosAJAX) => divAnunciosAutos.appendChild(CrearTarjetas(anunciosAJAX)))
  .catch((err) => console.error(err));

//CAMBIAR A AJAX

function CrearTarjetas(anuncios) {
  const tarjetas = document.createElement("div");

  anuncios.forEach((elemento) => {
    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");
    const parrafo = document.createElement("p");
    for (const atributo in elemento) {
      if (atributo === "id") {
        continue;
      }
      parrafo.textContent += atributo+": "  + elemento[atributo] + " / ";
    }
    tarjeta.appendChild(parrafo);
    tarjeta.setAttribute("class", "card text-center border-success");
    tarjeta.setAttribute("style", "margin-top: 15px");
    tarjetas.appendChild(tarjeta);
  });

  return tarjetas;
}
