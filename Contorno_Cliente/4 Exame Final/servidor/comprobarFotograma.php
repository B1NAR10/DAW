<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Buscamos os datos do usuario
	$consulta = "SELECT *  
				   FROM peliculas 
				  WHERE idPelicula = '".$_GET['pelicula']."' AND erro = '".$_GET['fotograma']."'";

	$numero = 0;
	if ($datos = $conexion->query($consulta)) {   	
		$usuario = $datos->fetch_object();	
		$numero = $datos->num_rows;
		$datos->close();
		$conexion->close();
	}	
	echo json_encode($numero);
?>