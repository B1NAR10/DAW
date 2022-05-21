<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os datos da partida
   	$consulta = "SELECT * 
				   FROM usuarios
				  WHERE idUsuario='".$_GET['codigo']."'";

	if ($datos = $conexion->query($consulta)) {
		$usuario = $datos->fetch_object();
		$datos->close();
	}
	$conexion->close();
	echo json_encode($usuario);
?>