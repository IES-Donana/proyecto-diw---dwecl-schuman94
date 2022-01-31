document.getElementById("nombre").addEventListener("click", mostrarModal);

function mostrarModal() {
    document.getElementById("modal").showModal();
}

document.getElementById("ok").addEventListener("click", cerrarModal);

function cerrarModal() {
    document.getElementById("modal").close();
}
