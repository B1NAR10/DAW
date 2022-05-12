<?php

    include ('conexion.php');
    echo "Conexión realizada con éxito";

    $usuario = "alberto";
    $contrasinal = "abc123.";

    $contrasinal_encriptada = md5($contrasinal);

    $insert_sql = "INSERT INTO `usuarios` (`usuario`, `clave`, `data`) VALUES ('$usuario', '$contrasinal_encriptada', current_date())";
    mysqli.query($$insert_sql);
?>