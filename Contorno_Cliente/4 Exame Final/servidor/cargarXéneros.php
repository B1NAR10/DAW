<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos as opcións do xénero para amosalas nun despregábel
	$consulta = "SELECT * 
				   FROM xenero
			   ORDER BY nome";

	$saida = array();
	if ($datos = $conexion->query($consulta)) {   		
		while ($opcion = $datos->fetch_object()) {
			$saida[] = $opcion;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>