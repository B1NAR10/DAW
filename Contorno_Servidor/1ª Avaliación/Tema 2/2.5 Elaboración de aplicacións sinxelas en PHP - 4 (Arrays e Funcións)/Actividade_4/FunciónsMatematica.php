<?php

    function eCapicua($numero){
        $numero = (string)$numero;
        $numero = strrev($numero);
        if($numero == $numero){
            return true;
        }else{
            return false;
        }
    }

    function ePrimo($numero){
        $contador = 0;
        for($i = 1; $i <= $numero; $i++){
            if($numero % $i == 0){
                $contador++;
            }
        }
        if($contador == 2){
            return true;
        }else{
            return false;
        }
    }

    function ContarDixitos  ($numero){
        $numero = (string)$numero;
        $numero = strlen($numero);
        return $numero;
    }

    function xuntarNumeros($numero1, $numero2){
        $numero1 = (string)$numero1;
        $numero2 = (string)$numero2;
        $numero1 = $numero1.$numero2;
        return $numero1;
    }

?>