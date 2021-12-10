//Obtenemos los los elementos html
let mensajeError = document.getElementById("mensaje-error");
let formulario = document.getElementById("formulario-contacto");
let enviar = document.getElementById("enviar");
let nombre = document.querySelector("#form-nombre");
let apellidos = document.querySelector("#apellidos");
let asunto = document.querySelector("#asunto");
let email = document.querySelector("#email");
let mensaje = document.querySelector("#mensaje");

mensaje.disabled = true;

//Manejador de eventos en el boton enviar
enviar.addEventListener('click', validar);

//Manejador de eventos en los inputs nombre, apellidos y email
nombre.addEventListener('focusout', validaNombre);
apellidos.addEventListener('focusout', validaApellidos);
email.addEventListener('focusout', validaEmail);

//Manejador de eventos en el input email
email.addEventListener('keypress',(e)=>{
    if(e.shiftKey){
        alert("No introduzcas mayuculas");
    }
});

//Manejador de eventos en el input asunto
asunto.addEventListener('keypress', validaAsunto);

function checkTextArea() {
    if (nombre.checkValidity() && apellidos.checkValidity() && email.checkValidity() && asunto.checkValidity()) {
        mensaje.disabled = false;
        console.log("textarea activado");
    } else {
        console.log("textarea desactivado");
        mensaje.disabled = true;
    }
}

//Además del mensaje de error flotante, indicamos otro arriba del boton enviar
function error (elemento) {
    mensajeError.innerHTML = elemento.validationMessage;
}

function borrarError() {
    for (let e of formulario) {
        e.setCustomValidity("");
        document.getElementById("mensaje-error").innerHTML = e.validationMessage;
    }
}

function validar(e) {
    if (validaNombre() && validaApellidos() && validaEmail() && validaAsunto() && validaMensaje() && confirm("¿Enviar formulario?")) {
        e.preventDefault();
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

// Con tiempo podriamos generalizar todas estas funciones, creando una sola para todo
function validaNombre() {
    borrarError();
    let elemento = nombre;
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            elemento.setCustomValidity("Debes introducir un nombre");
        }
        elemento.reportValidity();
        error(elemento);
        return false;
    }
    console.log("Nombre valido");
    checkTextArea();
    return true;
}

function validaApellidos() {
    borrarError();
    let elemento = apellidos;
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            elemento.setCustomValidity("Debes introducir los apellidos");
        }
        elemento.reportValidity();
        error(elemento);
        return false;
    }
    console.log("Apellidos validos");
    checkTextArea();
    return true;
}

function validaAsunto() {
    borrarError();
    let elemento = asunto;
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            elemento.setCustomValidity("Debes introducir un asunto");
        }
        elemento.reportValidity();
        error(elemento);
        return false;
    }
    console.log("Asunto valido");
    checkTextArea();
    return true;
}

function validaEmail() {
    borrarError();
    let elemento = email;
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            elemento.setCustomValidity("Debes introducir un email");
        }
        if (elemento.validity.patternMismatch) {
            elemento.setCustomValidity("Debes introducir un email correcto");
        }
        elemento.reportValidity();
        error(elemento);
        return false;
    }
    console.log("Email valido");
    checkTextArea();
    return true;
}

function validaMensaje() {
    borrarError();
    let elemento = mensaje;
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            elemento.setCustomValidity("Debes escribir un mensaje");
        }
        elemento.reportValidity();
        error(elemento);
        return false;
    }
    console.log("Mensaje valido");
    return true;
}
