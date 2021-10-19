<?php
    if (isset($_POST['Calcular'])) {
        
        $radio = $_POST['Radio'];
        $pi = pi();

        echo "Pi: " . $pi . "<br>";
		echo "Radio: " . $radio . "<br>";
		echo "Radio ao cadrado: " . $radio * $radio . "<br>";
		echo "A área do circulo é: ". $pi  * ($radio * $radio) . " cm²";
    
    }
?>