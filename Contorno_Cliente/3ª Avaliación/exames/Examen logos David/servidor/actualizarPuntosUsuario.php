<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os datos da partida
   	$consulta = "UPDATE usuarios 
					SET puntos='".$_POST['puntos']."' 
				  WHERE idUsuario='".$_POST['usuario']."'";

	$conexion->query($consulta);
	$conexion->close();
?>