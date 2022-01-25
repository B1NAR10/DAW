<?php

    // Conexión a base de datos
    $ip = "localhost";
    $usuario = "u497341644_alber";
    $contrasinal = "Probas123456.";
    $basedatos = "u497341644_dwcs";
    $conexion = mysqli_connect($ip, $usuario, $contrasinal, $basedatos);
    
    // Comprobación de conexión
    if(!$conexion){
        die("Erro na conexión: " . mysqli_connect_error());
    }else{
        echo "Conexión realizada correctamente";
    }
?>



