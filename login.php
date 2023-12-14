<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fast</title>
</head>
<body>
    <h2>Iniciar Sesión</h2>
    
    <!-- Aquí puedes agregar un formulario de inicio de sesión -->
    <form action="login_handler.php" method="post">
        <!-- Campos del formulario (por ejemplo, usuario y contraseña) -->
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>

        <!-- Botón de envío del formulario -->
        <input type="submit" value="Iniciar Sesión">
    </form>
</body>
</html>
