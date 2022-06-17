<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Comprobamos se ten as películas xa asignadas
	$consulta = "SELECT idFotograma, idPelicula, idXenero, resolta  
				   FROM quiz 
				  WHERE login = '".$_POST['usuario']."'
			   ORDER BY rand()";

	$saida = array();
	$numero = 0;
	if ($datos = $conexion->query($consulta)) {   		
		$numero = $datos->num_rows;
		if ($numero == 0) {
			// Collemos 10 películas de cada xénero e as introducimos na táboa 'quiz'
			$consulta = '';
			for ($i=1;$i<11;$i++) {
				$consulta = "SELECT idPelicula 
							    FROM peliculas
							   WHERE idXenero ='$i'
						    ORDER BY rand()
							   LIMIT 10";
				if ($datos = $conexion->query($consulta)) {   		
					while ($pelicula = $datos->fetch_object()) {
						$consulta = "INSERT INTO quiz VALUES ('','".$_POST['usuario']."','".$pelicula->idPelicula."','$i','0')";
						$conexion->query($consulta);
					}
				}							   
			}				   
			$consulta = "SELECT * 
						   FROM series
					   ORDER BY rand()
						  LIMIT 10";
			if ($datos = $conexion->query($consulta)) {   		
				while ($serie = $datos->fetch_object()) {
					$consulta = "INSERT INTO quiz VALUES ('','".$_POST['usuario']."','".$serie->idFotograma."','0','0')";
					$conexion->query($consulta);
				}
			}
			$consulta = "SELECT idFotograma, idPelicula, idXenero, resolta  
						   FROM quiz 
						  WHERE login = '".$_POST['usuario']."'";
			$datos = $conexion->query($consulta);   		
		}
		while ($opcion = $datos->fetch_object()) {
			$saida[] = $opcion;
		}
	}
	$datos->close();
	$conexion->close();
	echo json_encode($saida);
?>