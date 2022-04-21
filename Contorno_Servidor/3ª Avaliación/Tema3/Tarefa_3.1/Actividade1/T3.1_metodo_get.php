<?php

        $identificador = $_GET['id'];
        $categoria = $_GET['categoria'];
        $referencia = $_GET['referencia'];

        echo "<h1>Tarefa 3.1 Tarefa 3.1 GET, POST e Cookies</h1>";
        echo "<h2>Actividade 1 - Usar o Método GET através da URL </h2> <br>";

        $datos = array(
            $identificador  => "<b>Identificador: </b>", 
            $categoria      => "<b>Categoria: </b>",
            $referencia     => "<b>Referencia: </b>",
        );

       foreach ($datos as $key => $value) {
            echo $value . $key . "<br><br>";
        }

?>