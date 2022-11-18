const URL = "http://localhost:3000/personas";

const divSpinner = document.getElementById("spinner");

const getPersonas = () => {
  setSpinner(divSpinner, "./assets/relojArena.gif");

  axios(URL)
    .then((res) => {
      console.log(res.data); //axios hace el parse por nosotros.
    })
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      clearSpinner(divSpinner);
    });
};

//Asi seria asincronico.
const getPersonasAsync = async () => {
  try {
    setSpinner(divSpinner, "./assets/relojArena.gif");
    const data = await axios(URL);
    console.log(data.data);
  } catch (error) {
    console.error(error.message);
  } finally {
    clearSpinner(divSpinner);
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
