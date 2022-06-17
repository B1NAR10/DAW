<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Comprobamos se ten as películas xa asignadas
	$consulta = "SELECT nome  
				   FROM peliculas 
				  WHERE idPelicula = '".$_GET['pelicula']."'";

	$saida = '';
	if ($datos = $conexion->query($consulta)) {   		
		$pelicula = $datos->fetch_object();
		$saida = $pelicula->nome;
	}
	$datos->close();
	$conexion->close();
	echo json_encode($saida);
?>