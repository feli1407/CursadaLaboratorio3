import {
  ActualizarTabla,
  CrearTabla,
  MostrarColumna,
  OcultarColumna,
} from "./tablaDinamica.js";
import {
  validarCampoVacio,
  ValidarKm,
  ValidarPotencia,
  ValidarPuertas,
  ValidarRadioSeleccionado,
} from "./validaciones.js";
import { Anuncio } from "./anuncio.js";
import {
  createAnuncioAsync,
  getAnunciosAsync,
  updateAnuncioAsync,
  deleteAnuncioAsync,
} from "./ajax.js";

const formulario = document.forms[0];
//console.log(formulario);

const {
  txtTitulo,
  Venta,
  Alquiler,
  txtDescripcion,
  numPrecio,
  numPuertas,
  numKms,
  numPotencia,
  txtId,
} = formulario;

//Asi se quien llamo al evento click, para saber el indice del array.
window.addEventListener("click", (e) => {
  if (e.target.matches("td")) {
    let id = e.target.parentElement.dataset.id;
    console.log(id);
    //asi obtengo el anuncio que selecciono para modificarlo.
    CargarFormulario(anuncios.find((anuncio) => anuncio.id == id));
  } else if (e.target.matches("#btnEliminar")) {
    deleteAnuncioAsync(parseInt(txtId.value))
      .then((anuncioTest) => console.log(anuncioTest))
      .catch((err) => console.error(err));
    txtId.value = "";
    formulario.reset();
    ActualizarTabla(anuncios);
    //Elimino un anuncio del array y updateo la tabla para ver los cambios.
  } else if (e.target.matches("#btnCancelar")) {
    //Pongo el id sin nada para poder agregar uno nuevo y que no lo elimine.
    txtId.value = "";
    formulario.reset();
  }
});

const controles = formulario.elements;
for (let i = 0; i < controles.length; i++) {
  const control = controles.item(i);
  if (control.matches("input")) {
    if (control.matches("[type=text]") || control.matches("[type=number]")) {
      control.addEventListener("blur", validarCampoVacio);
    }
  }
}

//SERVIDOR AJAX
let anuncios = [];
getAnunciosAsync()
  .then((anunciosAJAX) => {
    ActualizarTabla(anunciosAJAX);
    anuncios = anunciosAJAX;
  })
  .catch((err) => console.error(err));

// //Test obtener un anuncio por id
// getAnuncioAsync(9)
//   .then((anuncioGET) => console.log(anuncioGET))
//   .catch((err) => console.error(err));

// //Test crear un anuncio.
// //Funciona pero tira error aca porque cuando lo crea recarga la pagina e intenta crear otro con el mismo id.
// let anuncioTest = new Anuncio(
//   9,
//   "probando la modificacion",
//   "Venta",
//   "funcionoincreible",
//   30000,
//   5,
//   55000,
//   230
// );
// createAnuncioAsync(anuncioTest)
// .then((anuncioTest)=>console.log(anuncioTest))
// .catch((err) => console.error(err));

// //Test modificar anuncio.
// updateAnuncioAsync(anuncioTest)
// .then((anuncioTest)=>console.log(anuncioTest))
// .catch((err) => console.error(err));

// //Test eliminar anuncio.
// deleteAnuncioAsync(8)
// .then((anuncioTest)=>console.log(anuncioTest))
// .catch((err) => console.error(err));

//Evento que maneja el sumbit de guardar.
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //Valido que no haya errores en los datos ingresados y sino salgo del evento.
  const controlesValidar = e.target.elements;
  for (const control of controlesValidar) {
    if (
      control.classList.contains("inputError") ||
      ValidarRadioSeleccionado() == false ||
      ValidarKm(document.getElementById("numKms").value) == false ||
      ValidarPotencia(document.getElementById("numPotencia").value) == false ||
      ValidarPuertas(document.getElementById("numPuertas").value) == false
    ) {
      console.log("Error en las validaciones");
      return;
    }
  }

  //creo un anuncio con los datos
  const anuncio = new Anuncio(
    txtId.value,
    txtTitulo.value,
    ValidarRadioSeleccionado(),
    txtDescripcion.value,
    numPrecio.value,
    numPuertas.value,
    numKms.value,
    numPotencia.value
  );

  if (anuncio.id === "") {
    //Si el id no existe tengo que hacer el alta
    anuncio.id = Date.now();
    createAnuncioAsync(anuncio)
      .then((anuncioCreado) => console.log(anuncioCreado))
      .catch((err) => console.error(err));
  } else {
    //Como existe el id se que es una modificacion
    updateAnuncioAsync(anuncio)
      .then((anuncioModificado) => console.log(anuncioModificado))
      .catch((err) => console.error(err));
  }

  ActualizarTabla(anuncios);
  console.log("enviando...");
});

//Carga los datos del anuncio en el formulario
function CargarFormulario(anuncio) {
  txtId.value = anuncio.id;
  txtTitulo.value = anuncio.titulo;
  //asi asigno al radiobutton la opcion.
  if (anuncio.transaccion == "Venta") {
    Venta.checked = true;
  } else {
    Alquiler.checked = true;
  }
  txtDescripcion.value = anuncio.descripcion;
  numPrecio.value = anuncio.precio;
  numPuertas.value = anuncio.cantPuertas;
  numKms.value = anuncio.cantKms;
  numPotencia.value = anuncio.cantPotencia;
}

const transaccion = document.getElementById("opFiltrarTransaccion");
const promedio = document.getElementById("promedio");

transaccion.addEventListener("change", (e) => {
  if (e.target.value == "Venta") {
    promedio.textContent = "Promedio: " + FiltrarTransaccion("Venta", anuncios);
  } else if (e.target.value == "Alquiler") {
    promedio.textContent =
      "Promedio: " + FiltrarTransaccion("Alquiler", anuncios);
  } else {
    promedio.textContent = "Seleccione una transaccion.";
  }
});

function FiltrarTransaccion(tipo, autos) {
  let retorno = 0;
  if (tipo == "Venta") {
    let totalAutosVenta = autos.filter((auto) => {
      return auto.transaccion == "Venta";
    });
    let totalPrecioVentas = totalAutosVenta.reduce((previo, actual) => {
      return previo + parseFloat(actual.precio); //previo es un 0 porque lo inicializo en 0 y actual siempre va a ser una auto, entonces sumo los importes.
    }, 0);
    retorno = totalPrecioVentas / totalAutosVenta.length;
  } else if (tipo == "Alquiler") {
    let totalAutosAlquiler = autos.filter((auto) => {
      return auto.transaccion == "Alquiler";
    });
    let totalPrecioAlquiler = totalAutosAlquiler.reduce((previo, actual) => {
      return previo + parseFloat(actual.precio); //previo es un 0 porque lo inicializo en 0 y actual siempre va a ser una auto, entonces sumo los importes.
    }, 0);
    retorno = totalPrecioAlquiler / totalAutosAlquiler.length;
  }
  return retorno;
}

const opcionesFiltrar = document.querySelector(".seleccionarColumnas");

opcionesFiltrar.addEventListener("change", (e) => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]");

  for (let i = 0; checkboxes.length > i; i++) {
    if (checkboxes[i].checked) {
      if (checkboxes[i].name == "titulo") {
        MostrarColumna(i);
      } else if (checkboxes[i].name == "transaccion") {
        MostrarColumna(i);
      } else if (checkboxes[i].name == "descripcion") {
        MostrarColumna(i);
      } else if (checkboxes[i].name == "precio") {
        MostrarColumna(i);
      } else if (checkboxes[i].name == "cantPuertas") {
        MostrarColumna(i);
      } else if (checkboxes[i].name == "cantKms") {
        MostrarColumna(i);
      } else if (checkboxes[i].name == "cantPotencia") {
        MostrarColumna(i);
      }
    } else {
      OcultarColumna(i);
    }
  }
});
