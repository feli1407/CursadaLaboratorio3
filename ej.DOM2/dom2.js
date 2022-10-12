function CrearTarjeta(src, title)
{
    const newCard = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "foto " + title);
    
    
    const figcaption = document.createElement("figcaption");
    const texto1 = document.createTextNode("Any");
    figcaption.appendChild(texto1);
    
    newCard.appendChild(img);
    newCard.appendChild(figcaption);
    //cards.appendChild(newCard);
    
    newCard.classList.add("card");

    return newCard;
}

//TAREA HACER FUNCION CREAR TABLA QUE RECIBA UN ARRAY COMO PARAMETRO.
/*
Armar tabla con thead y tbody, en el thead hay que poner un tr con td con los encabezados de la columna y
en el tbody tenemos que que hacer un tr con td por los objetos que tenga el array.
Tiene que recibir un array cualquiera y poder generar una tabla.
atributo customatribute buscar.(tiene que empezar con data)
*/


const $nuevaTarjeta = CrearTarjeta("https://placeimg.com/200/200/any", "Any");

const $todasLasTrjetas = document.querySelector("#cards");


$cards.replaceChild($nuevaTarjeta, $todasLasTrjetas.firstElementChild);



