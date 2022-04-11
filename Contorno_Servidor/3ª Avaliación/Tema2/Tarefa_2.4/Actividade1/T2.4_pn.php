<?php
    if (isset($_POST['calcular'])) {

        $numero = $_POST['numero'];

        if ($numero >= 0) {
        echo "O Número ".$numero." é Positivo!";
        }else{
        echo "O Número ".$numero." é Negativo!";
        }
    }
?>