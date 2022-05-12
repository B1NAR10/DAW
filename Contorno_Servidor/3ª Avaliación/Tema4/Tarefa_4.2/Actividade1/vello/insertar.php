<?php

    include("conexion.php");

    $usuario = "alberto";
    $contrasinal = "abc123.";

    mysqli_query($conexion, "INSERT INTO usuarios (usuario, contrasinal, data_hoxe) VALUES ('$usuario', '$contrasinal'now())");
    mysqli_close($conexion);
    echo "Datos Inseridos Corectamente!";

?>