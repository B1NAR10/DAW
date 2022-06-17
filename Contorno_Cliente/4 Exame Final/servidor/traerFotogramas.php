<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos as 10 películas do xénero escollido
	$saida = array();
	$consulta = '';
	for ($i=0;$i<count($_GET['peliculas']);$i++) {
		$consulta = "SELECT * 
					   FROM peliculas
					  WHERE idPelicula ='".$_GET['peliculas'][$i]."'";
					  
		if ($datos = $conexion->query($consulta)) {   		
			while ($opcion = $datos->fetch_object()) {
				$saida[] = $opcion;
			}
			$datos->close();
		}
	}	
	$conexion->close();
	echo json_encode($saida);
?>