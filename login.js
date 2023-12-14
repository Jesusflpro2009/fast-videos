document.addEventListener("DOMContentLoaded", function () {
    // Manejar clic en el botón de inicio de sesión
    document.getElementById("loginBtn").addEventListener("click", function () {
        window.location.href = "login.php";
    });

    // Manejar clic en el botón de registro
    document.getElementById("registerBtn").addEventListener("click", function () {
        window.location.href = "secure.php";
    });
});
