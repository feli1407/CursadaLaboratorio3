import { Anuncio } from "./anuncio.js";

const divAnunciosAutos = document.querySelector(".anunciosAutos");
let anuncios = [];
if (JSON.parse(localStorage.getItem("anuncios")) != null) {
  anuncios = JSON.parse(localStorage.getItem("anuncios"));
  divAnunciosAutos.appendChild(CrearTarjetas(anuncios));
}

function CrearTarjetas(anuncios) {
  const tarjetas = document.createElement("div");

  data.forEach((elemento) => {
    const tarjeta = document.createElement("div");
    const parrafo = document.createElement("p");
    for (const atributo in elemento) {
      if (atributo === "id") {
        continue;
      }
      parrafo.textContent += elemento[atributo];
    }
    tarjeta.appendChild(parrafo);
    tarjetas.appendChild(tarjeta);
  });

  return tarjetas;
}
