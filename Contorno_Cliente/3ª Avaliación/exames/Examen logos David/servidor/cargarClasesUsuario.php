<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os datos da partida
   	$consulta = "SELECT * 
				   FROM clases
				  WHERE usuario='".$_GET['codigo']."'
			   ORDER BY nome";

	$saida = array();
	if ($datos = $conexion->query($consulta)) {
		while ($clase = $datos->fetch_object()) {
			$saida[] = $clase;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>