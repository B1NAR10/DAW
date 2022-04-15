<?php

    $n1 =  $_POST['n1'];
    $n2 =  $_POST['n2'];
    $n3 =  $_POST['n3'];
    $n4 =  $_POST['n4'];
    $n5 =  $_POST['n5'];
    $n6 =  $_POST['n6'];
    $n7 =  $_POST['n7'];
    $n8 =  $_POST['n8'];
    $n9 =  $_POST['n9'];
    $n10 = $_POST['n10'];

    $numeros = array($n1, $n2, $n3, $n4, $n5, $n6, $n7, $n8, $n9, $n10);
    rsort($numeros);

    echo '<h1>Tarefa 2.5 Elaboración de aplicacións sinxelas en PHP - 4 (Arrays e Funcións)</h1>';
    echo '<h2>Actividade 1 - Array de 10 números ordeado de Maior a Menor </h2> <br>';
    echo 'Os números ordeados son: ';
    foreach ($numeros as $numero) {
        echo $numero.' ';

    }
  
?>