console.log(window);
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.links);
console.log(document.links[1]);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.title);
console.log(document.characterSet);
console.log(document.documentElement.lang);
console.log(document.documentElement["lang"]);

// Selectores

// for(let i=0; i < items.length; i++){
//     console.log(items[i]);
// }

console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("parrafo1"));
const $p1 = document.querySelector("#parrafo1");

console.log(document.getElementsByClassName("rojo"));
console.log(document.querySelectorAll(".rojo")[0]);

const items = document.getElementsByTagName("li");
console.log(items);
console.log(document.querySelectorAll("div li"));

let texto = `<p class="pepe">esto es un texto
 <b>Esto se ve en negrita</b> para rellenar
 el parrafo</p>`;

$p1.outerHTML = texto;

// atributos

const $linkGoogle = document.querySelector("a");

console.log($linkGoogle.href);
console.log($linkGoogle.getAttribute("href"));
console.log($linkGoogle.hasAttribute("target"));

$linkGoogle.setAttribute("target", "_blank");

console.log($linkGoogle.hasAttribute("target"));

$linkGoogle.removeAttribute("target");

console.log($linkGoogle.hasAttribute("target"));

const $lista = document.querySelectorAll("ul")[1];


console.log($lista.getAttribute("data-description"));
console.log($lista.dataset.description);


// estilos

const $li = document.querySelector("ul").firstElementChild;

console.log($li);

console.log($li.style);
console.log($li.getAttribute("style"));
//$li.style.backgroundColor = "blue";
$li.style.setProperty("background-color","cyan");

//------------------------------------------------------------

//DOM TRAVERSING

//el signo $ es para que se sepa que la variable pertenece al DOM.
const $cards = document.getElementById("cards");

//console.log($cards);
//console.log($cards.childNodes);
//console.log($cards.children);
//console.log($cards.parentElement);
//console.log($cards.firstElementChild);
//console.log($cards.lastElementChild);
//console.log($cards.children[2]);
//console.log($cards.previousElementSibling);
//console.log($cards.nextElementSibling);
//console.log($cards.hasChildNodes());
//console.log($cards.closest("main"));
//console.log($cards.querySelector("figcaption"));
//console.log($cards.querySelectorAll("figcaption"));

let hijo = $cards.firstElementChild;

//console.log(hijo);

// do
// {
//     console.log(hijo);
//     hijo = hijo.nextElementSibling;
// }while(hijo.nextElementSibling);

//-------------------------------------------------
//Crar elementos



// $newcard.classList.toggle("rotar-45");
// $newcard.classList.toggle("rotar-45");

const frutas = ["banana" , "pera" , "manzana" , "melon"];

const $listaFrutas  = document.createElement("ul");
$listaFrutas.innerHTML = "";

frutas.forEach((fruta) => {
    $listaFrutas.innerHTML += `<li>${fruta}</li>`;
})

document.body.appendChild($listaFrutas);

const personas = ["felipe" , "carlos" , "marina" , "camila", "rodrigo" , "morena" , "graciela" , "luis", "justo" , "rotha" , "clara" , "azul"];

const $ol = document.querySelector("ol");

const fragmento = document.createDocumentFragment();

personas.forEach((persona) => {
    const $li = document.createElement("li");
    $li.textContent = persona;
    fragmento.appendChild($li);
});

$ol.appendChild(fragmento);



