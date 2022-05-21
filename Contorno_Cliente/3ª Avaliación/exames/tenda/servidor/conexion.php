<?php
	$servidor='localhost';
	$usuario='root';
	$contrasinal='';
	$baseDatos='tenda';

	// Creamos a conexi�n
	$conexion = new mysqli($servidor, $usuario, $contrasinal, $baseDatos);
	$conexion->query("SET NAMES 'utf8'");
?>
