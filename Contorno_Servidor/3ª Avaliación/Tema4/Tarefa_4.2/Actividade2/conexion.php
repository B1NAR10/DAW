<?php

    $servidor = "localhost";
    $usuario = "root"; 
    $contraseña = "";
    $base_datos = "tarefa4.2_2";

    $conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos) or die ("Non se pudo conectar ao servidor de Base de Datos" . mysqli_connect_error()) ;


?>