const formulario = document.getElementsByTagName("form")[0];

formulario.addEventListener("submit", function(e){

    e.preventDefault();
    console.log(e.target);

})