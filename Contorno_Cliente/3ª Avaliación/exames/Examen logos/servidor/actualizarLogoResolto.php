<?php
	// Conectamos coa base de datos
	require("conexion.php");

	// Collemos os datos da partida
   	$consulta = "UPDATE imaxes 
					SET resolta='1' 
				  WHERE usuario='".$_POST['usuario']."' AND idImaxe='".$_POST['logo']."'";

	$conexion->query($consulta);
	$conexion->close();
?>