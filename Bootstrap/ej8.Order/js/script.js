let btnDesordenar = document.querySelector("#btnDesordenar");

btnDesordenar.addEventListener("click", () => {
    //Asi me traeria del div containes, el primer hijo, osea el row y de adentro del row todos los col.
    let columnas = document.querySelectorAll(".container>div:first-child>div.col");

    columnas[0].classList.add("order-3");
    columnas[1].classList.add("order-1");
    columnas[2].classList.add("order-2");
});
