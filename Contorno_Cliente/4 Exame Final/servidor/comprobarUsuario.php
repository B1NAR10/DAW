<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Buscamos os datos do usuario
	$consulta = "SELECT *  
				   FROM usuarios 
				  WHERE login = '".$_POST['usuario']."' AND contrasinal = '".$_POST['contrasinal']."'";

	$numero = -1;
	if ($datos = $conexion->query($consulta)) {   	
		$usuario = $datos->fetch_object();	
		$numero = ($datos->num_rows == 1) ? intval($usuario->puntuacion) : -1;
		$datos->close();
		$conexion->close();
	}	
	echo json_encode($numero);
?>