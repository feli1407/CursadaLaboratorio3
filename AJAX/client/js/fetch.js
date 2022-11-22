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

const getPersonasAsync = async (id) => {
  try {
    setSpinner(divSpinner, "./assets/spinner.gif");
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  } finally {
    clearSpinner(divSpinner);
  }
};

const getPersona = (id) => {
  setSpinner(divSpinner, "./assets/spinner.gif");

  fetch(URL + "/" + id) //Esto devuelve una promesa
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

const updatePersona = (persona) => {
  setSpinner(divSpinner, "./assets/spinner.gif");

  fetch(URL + "/" + persona.id,{
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(persona)
  }) //Esto devuelve una promesa
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

const deletePersona = (id) => {
  setSpinner(divSpinner, "./assets/spinner.gif");

  fetch(URL + "/" + id,{
    method: "DELETE"
  }) //Esto devuelve una promesa
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
