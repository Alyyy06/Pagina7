function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();

    if (nombre === "" || apellido === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }

    // Validación adicional del campo de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return false; // Evita el envío del formulario
    }

    // Si todo está bien, puedes enviar el formulario
    return true;
}