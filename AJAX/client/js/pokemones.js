const URL = "https://pokeapi.co/api/v2/pokemon/";

const divSpinner = document.getElementById("spinner");

const imgPokemon = document.getElementById("imgPokemon");

//uso getPersonas para no modificar el HTML pero seria getPokemones
const getPersonas = async () => {
  let nombre = document.getElementById("nombre").value;//nombre lo saca del input del html

  try {
    divSpinner.classList.add("ball");
    fetch(URL + nombre)//agrego el nombre del pokemon que quiero mostrar a la url
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        //console.log(data);
        imgPokemon.setAttribute("src", data.sprites.front_default);
      });
  } catch (error) {
  } finally {
    setTimeout(() => {
      divSpinner.classList.remove("ball");
    }, 1000);
  }
};

const setSpinner = (div, src) => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "spinner");
  div.appendChild(img);
};

const clearSpinner = (div) => {
  while (div.hasChildNodes()) {
    div.removeChild(div.firstElementChild);
  }
};
