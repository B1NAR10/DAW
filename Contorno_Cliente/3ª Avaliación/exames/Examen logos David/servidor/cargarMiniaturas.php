<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os logos pertencentes a unha clase
   	$consulta = "SELECT idImaxe, nome, resolta 
				   FROM imaxes
				  WHERE clase='".$_GET['codigo']."'
			   ORDER BY RAND()";

	$saida = array();
	if ($datos = $conexion->query($consulta))
	{   		
		while ($logos = $datos->fetch_object()) 
		{
			$saida[] = $logos;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>