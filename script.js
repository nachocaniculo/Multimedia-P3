document.getElementById("postal-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Muestra el mensaje de éxito
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    // Oculta el mensaje después de 3 segundos
    setTimeout(function() {
        overlay.style.display = "none";
    }, 3000);
});