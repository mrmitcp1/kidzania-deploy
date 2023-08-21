function showModal (idItem, idModal,idClose) {
    let link = document.getElementById(idItem);
    var modal = document.getElementById(idModal);
    var closeButton = document.getElementById(idClose);

    modal.style.display = "block";
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
}