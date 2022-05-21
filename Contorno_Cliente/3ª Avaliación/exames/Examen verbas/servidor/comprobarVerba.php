<?php
	// Conectamos coa base de datos
	require('conexion.php');
	
	// Comprobamos se existe a plabra proposta como resultado
   	$consulta = "SELECT verba 
				   FROM ".$_GET['idioma']."
				  WHERE verba='".$_GET['verba']."'
				COLLATE utf8_bin";

	$saida = '';
	if ($datos = $conexion->query($consulta)) {   		
		if ($conexion->affected_rows == 1) { $saida = 'OK'; }
		else { $saida = 'ERRO'; }
		$datos->close();
		$conexion->close();
		echo json_encode($saida);
	}	
?>