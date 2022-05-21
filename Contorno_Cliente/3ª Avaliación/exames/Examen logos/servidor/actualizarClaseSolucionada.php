<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os datos da partida
   	$consulta = "UPDATE clases 
					SET solucionadas= solucionadas + 1 
				  WHERE usuario='".$_POST['usuario']."' AND idClase='".$_POST['clase']."'";

	$conexion->query($consulta);
	$conexion->close();
?>