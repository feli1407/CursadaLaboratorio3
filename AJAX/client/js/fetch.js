const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");

const getPersonas = () => {
  setSpinner(divSpinner, "./assets/spinner.gif");

  fetch(URL) //Esto devuelve una promesa
    .then(
      (res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Error: ${res.status} - ${res.statusText}`)
      //si tiene el campo ok en true pasa al siguiente then y sino va al catch.
    )
    .then((data) => {
      //manejo la data.
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      clearSpinner(divSpinner);
    });
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
