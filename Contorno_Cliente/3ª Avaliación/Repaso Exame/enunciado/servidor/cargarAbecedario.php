<?php
	// Conectamos coa base de datos
	require('conexion.php');
	
	// Escollemos unha cantidade determinada de verbas para que quede ben o taboleiro
	switch ($_GET['numero']) {
		case 3: $limite = 39; break;
		case 4: $limite = 35; break;
		case 5: $limite = 30; break;
		case 6: $limite = 24; break;
		case 7: $limite = 17; break;
		case 8: $limite = 18; break;
		case 9: $limite = 19; break;
		case 10: $limite = 20; break;
	}

	// Collemos as verbas coas que formamos o taboleiro
   	$consulta = "SELECT verba 
				   FROM ".$_GET['idioma']."
				  WHERE tamaño='".$_GET['numero']."'
				  ORDER BY rand() LIMIT ".$limite;

	$saida = '';
	if ($datos = $conexion->query($consulta)) {   		
		while ($verbas = $datos->fetch_object()) {
			$saida = $saida . $verbas->verba;
		}
		$datos->close();
	}
	$conexion->close();
	echo json_encode($saida);
?>