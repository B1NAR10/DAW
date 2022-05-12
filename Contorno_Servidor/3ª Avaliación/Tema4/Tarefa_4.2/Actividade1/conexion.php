<?php

    $servidor = "localhost";
    $usuario = "root"; 
    $contraseña = "";
    $base_datos = "tarefa4.2";

    $conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos) or die ("No se ha podido conectar al servidor de Base de Datos" . mysqli_connect_error()) ;


?>