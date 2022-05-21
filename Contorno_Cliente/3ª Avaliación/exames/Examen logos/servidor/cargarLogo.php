<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os logos pertencentes a unha clase
   	$consulta = "SELECT nome, resolta 
				   FROM imaxes
				  WHERE idImaxe='".$_GET['codigo']."'";

	if ($datos = $conexion->query($consulta))
	{   		
		$logo = $datos->fetch_object(); 
		$datos->close();
	}
	$conexion->close();
	echo json_encode($logo);
?>