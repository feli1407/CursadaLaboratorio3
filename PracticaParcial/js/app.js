import { CrearTabla, ActualizarTabla } from "./tablaDinamica.js";
import { validarCampoVacio, ValidarRadioSeleccionado } from "./validaciones.js";
import { Anuncio } from "./anuncio.js";

const formulario = document.forms[0];
//console.log(formulario);

const {
  txtTitulo,
  Venta,
  Alquiler,
  txtDescripcion,
  numPrecio,
  numBanios,
  numAutos,
  numDormitorios,
  txtId,
} = formulario;
//Uso el id para saber si es a modificar o lo estoy creando el anuncio.

//console.log(ValidarRadioSeleccionado());

//Asi se quien llamo al evento click, para saber el indice del array
window.addEventListener("click", (e) => {
  if (e.target.matches("td")) {
    let id = e.target.parentElement.dataset.id;
    console.log(id);
    //asi obtengo la persona que selecciono para modificarla
    CargarFormulario(anuncios.find((anuncio) => anuncio.id == id));
  } else if (e.target.matches("#btnEliminar")) {
    manejadorEliminar(parseInt(txtId.value));
    txtId.value = "";
    formulario.reset();
    ActualizarTabla(anuncios);
    ActualizarLocalStorage();
    //Elimino un anuncio del array y updateo la tabla para ver los cambios.
  }
  else if(e.target.matches("#btnCancelar"))
  {
    //pongo el id sin nada para poder agregar uno nuevo y que no lo elimine
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

//Consigo el numero de id con el array de anuncios que tengo en el localstorage.
//Si es que lo tengo, saco el indice y actualizo la tabla.
let anuncios = [];
if (JSON.parse(localStorage.getItem("anuncios")) != null) {
  anuncios = JSON.parse(localStorage.getItem("anuncios"));
  ActualizarTabla(anuncios);
}

//Evento que maneja el sumbit de guardar.
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //Valido que no haya errores en los datos ingresados y sino salgo del evento.
  const controles = e.target.elements;
  for (const control of controles) {
    if (
      control.classList.contains("inputError") ||
      ValidarRadioSeleccionado() == false
    ) {
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
    numBanios.value,
    numAutos.value,
    numDormitorios.value
  );

  if (anuncio.id === "") {
    //Si el id no existe tengo que hacer el alta
    anuncio.id = Date.now();
    manejadorCrear(anuncio);
  } else {
    //Como existe el id se que es una modificacion
    manejadorModificar(anuncio);
  }

  ActualizarTabla(anuncios);
  console.log("enviando...");
  ActualizarLocalStorage();
});

const manejadorCrear = (nuevoAnuncio) => {
  anuncios.push(nuevoAnuncio);
};

const manejadorModificar = (anuncioEditado) => {
  const anunciosActualizados = anuncios.map((anuncio) =>
    anuncio.id == anuncioEditado.id ? anuncioEditado : anuncio
  );
  anuncios = anunciosActualizados;
  //Si encuentro la persona que vine a editar te devuelvo la persona editada, sino te devuelvo la misma.
  //Map nos devuelve un array con la persona actualizada y lo paso al array original asi lo sobreescribe con los datos actualizados.
};

const manejadorEliminar = (id) => {
  let indiceEliminar = anuncios.findIndex((anuncio) => {
    return anuncio.id == id;
  });
  anuncios.splice(indiceEliminar, 1);
};

//actualizo el local storage
function ActualizarLocalStorage()
{
  localStorage.setItem("anuncios", JSON.stringify(anuncios));
}

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
  numBanios.value = anuncio.cantBanios;
  numAutos.value = anuncio.cantAutos;
  numDormitorios.value = anuncio.cantDormitorios;
}

//localStorage.clear();
