<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
        <h1>Formulario Sesión</h1>
        <form action="sesion.php" method="post">
            <label for="nome">Nome Usuario :</label><br>
            <input type="text" name="nome" id="nome">
            <br><br>
            <label for="email">Contrasinal :</label><br>
            <input type="password" name="contrasinal" id="contrasinal">
            <br><br>

            <input type="submit" value="Enviar">
</body>
</html>
