<?php

    if (isset($_POST['calcular'])) {
        $numeros = array();
        $numeros = $_POST['numeros'];   
        $numeros = array_filter($numeros); // array_filter: elimina elementos de un array que non satisfagan unha condición.
        $numeros = array_values($numeros); // array_values: devolve un array con valores únicos.
        $numeros = array_unique($numeros); // array_unique: elimina elementos duplicados dun array.
        $numeros = array_reverse($numeros); // array_reverse: inverte a orde de elementos dun array.
        $numeros = array_slice($numeros, 0, 3); // array_slice: devolve un subconxunto de elementos dun array.
        $numeros = implode(", ", $numeros); // implode: devolve unha string formada por elementos dun array.    
        echo "Os numeros ordenados son: " . $numeros;
    }

?>