/* checkvalidity setcustomvalidity...
 on change (cuando perdamos el foco)

 enel boton usamos click
 en un parametro onchange
 y en otro el blur

 */

let formulario = document.getElementById("formulario-contacto");
let enviar = document.getElementById("enviar");

enviar.addEventListener('click', validar);

function error (elemento) {
    document.getElementById("mensaje-error").innerHTML = elemento.validationMessage;
    elemento.className = "error";
}

function borrarError(elemento) {
    for (let e of formulario) {
        e.setCustomValidity("");
        document.getElementById("mensaje-error").innerHTML = e.validationMessage;
    }
} 

function validar(e) {
    if (validaNombre() && confirm("¿Enviar formulario?")) {
        e.preventDefault();
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function validaNombre() {
    borrarError();
    let elemento = document.querySelector("#form-nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            elemento.setCustomValidity("Debes introducir un nombre");
        }
        if (elemento.validity.tooLong) {
            elemento.setCustomValidity("El nombre no debe superar " + elemento.maxLength + " caracteres");
        }
        elemento.reportValidity();
        error(elemento);
        return false;        
    }
    console.log("Nombre valido");
    return true;
}

