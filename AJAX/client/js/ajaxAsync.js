const URL = "http://localhost:3000/mascotas";

const getEntidades = async (divSpinner) => {
    return new Promise((res, rej) => {
        setSpinner(divSpinner, "../assets/loading.gif");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", URL);
        xhr.send();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4){
                if (xhr.status >= 200 && xhr.status < 400){
                    const data = JSON.parse(xhr.responseText);
                    if (data){
                        res(data);
                    }
                }
                else{
                    rej(`Error ${xhr.status}: ${xhr.statusText}`);
                }
                clearSpinner(divSpinner);
            }
        })
    })
}

const getEntidad = async (divSpinner, id) => {
    return new Promise((res, rej) => {
        setSpinner(divSpinner, "../assets/loading.gif");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", URL + `/${id}`);
        xhr.send();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4){
                if (xhr.status >= 200 && xhr.status < 400){
                    const data = JSON.parse(xhr.responseText);
                    if (data){
                        res(data);
                    }
                } 
                else{
                    rej(`Error ${xhr.status}: ${xhr.statusText}`);
                }
                clearSpinner(divSpinner);
            }
        })
    })
}

const createEntidad = async (divSpinner, entidad) => {
    return new Promise((res, rej) => {
        setSpinner(divSpinner, "../assets/loading.gif");
        const xhr = new XMLHttpRequest();
        xhr.open("POST", URL);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(entidad));
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4){
                if (xhr.status >= 200 && xhr.status < 400){
                    const data = JSON.parse(xhr.responseText);
                    if (data){
                        res(data);
                    }
                }
                else{
                    rej(`Error ${xhr.status}: ${xhr.statusText}`);
                }
                clearSpinner(divSpinner);
            }
        })
    })
}

const updateEntidad = async (divSpinner, entidad) => {
    return new Promise((res, rej) => {
        setSpinner(divSpinner, "../assets/loading.gif");
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", URL + `/${entidad.id}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(entidad));
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4){
                if (xhr.status >= 200 && xhr.status < 400){
                    const data = JSON.parse(xhr.responseText);
                    if (data){
                        res(data);
                    }
                }
                else{
                    rej(`Error ${xhr.status}: ${xhr.statusText}`);
                }
                clearSpinner(divSpinner);
            }
        })
    })
}

const deleteEntidad = async (divSpinner, id) => {
    return new Promise((res, rej) => {
        setSpinner(divSpinner, "../assets/loading.gif");
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", URL + `/${id}`);
        xhr.send();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState == 4){
                if (xhr.status >= 200 && xhr.status < 400){
                    const data = JSON.parse(xhr.responseText);
                    if (data){
                        res(data);
                    }
                }
                else{
                    rej(`Error ${xhr.status}: ${xhr.statusText}`);
                }
                clearSpinner(divSpinner);
            }
        })
    })
}

// Spinner

const setSpinner = (div, src) => {
    const $spinner = document.createElement("img");
    $spinner.setAttribute("src", src);
    $spinner.setAttribute("alt", "spinner");
    $spinner.setAttribute("height", "64px");
    $spinner.setAttribute("width", "64px");
    $spinner.setAttribute("id", "imgSpinner");
    div.appendChild($spinner);
}

const clearSpinner = (div) => {
    if (div != null){
        div.removeChild(document.querySelector("#imgSpinner"));
    }
}

export { getEntidades, getEntidad, createEntidad, updateEntidad, deleteEntidad }

