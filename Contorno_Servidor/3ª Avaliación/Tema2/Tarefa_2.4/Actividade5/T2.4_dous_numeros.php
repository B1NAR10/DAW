<?php

    $numero1 = $_POST['numero1'];  //345
    $numero2 = $_POST['numero2'];  //165

    for ($i = $numero1; $i > $numero2; $i-=12) {
        echo $i.", ";
    }

?>