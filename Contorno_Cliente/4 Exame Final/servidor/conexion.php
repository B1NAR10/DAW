<?php
	$servidor='localhost';
	$usuario='root';
	$contrasinal='';
	$baseDatos='fotogramas';

	// Creamos a conexi�n
	$conexion = new mysqli($servidor, $usuario, $contrasinal, $baseDatos);
	$conexion->query("SET NAMES 'utf8'");
?>
