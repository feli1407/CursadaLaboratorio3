//button[id=$]{ClickMe $}*50 asi creo 50 botones en un HTML.

//Muestro en la consola el emisor del evento cuando hago click en un boton, pero siempre que se hace click se estaria llamando al evento.
document.addEventListener("click" , (e) =>{
    const emisor = e.target;

    if(emisor.matches("#divBotones button"))
    {
        console.log(emisor);
    }
    else if(emisor.matches("button"))
    {
        HandlerBotonSaludar();
    }
    
});

function handlerBotonNumerico(){
    
}

function HandlerBotonSaludar()
{
    console.log("Soy el boton saludar");
}
