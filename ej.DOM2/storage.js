// json.parse('string') y retorna objeto.
// json.stringify('obj') y retorna un string.

const lista = [];

if(localStorage.getItem("lista"))
{
    const vector = JSON.parse(localStorage.getItem("lista"));
    vector.forEach(element => {
        lista.push(element);
    });
}
else{
    localStorage.setItem("lista", JSON.stringify(lista));
}

window.addEventListener("load", () =>{
    document.getElementById("btnCargar")
    .addEventListener("click", ()=>{
        lista.push(document.getElementsByName("palabra")[0].value);
        localStorage.setItem("lista", JSON.stringify(lista));
    });
    console.log(lista);
});