<?php

    include ('conexion.php');
    echo "Conexión realizada con éxito";

    $usuario = "alberto";
    $contrasinal = "abc123.";

    $contrasinal_encriptada = md5($contrasinal);

    $insert_sql = "INSERT INTO `usuarios` (`usuario`, `clave`, `data`) VALUES ('$usuario', '12345678', '2022-05-12')";
?>