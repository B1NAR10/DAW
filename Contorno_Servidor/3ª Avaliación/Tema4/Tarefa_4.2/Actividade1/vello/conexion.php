<?php

    $servidor = "localhost";
    $usuario = "root";
    $contrasinal = "";
    $bd = "activ1_t4";

    $conexion = new mysqli($servidor, $usuario, $contrasinal, $bd);

    if(!$conexion){
        die("Conexión fallida: " . $conexion->connect_error);
    }else{
        echo "Conexión realizada correctamente!! </br>";
    }

?>