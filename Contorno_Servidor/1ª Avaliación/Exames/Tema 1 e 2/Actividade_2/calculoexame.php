<?php

    function sumar($valores) {
        $suma = 0;
        foreach ($valores as $valor) {
            $suma += $valor;
        }
        return $suma;
    }

    function elevado($valores) {
        $elevado = 1;
        foreach ($valores as $valor) {
            $elevado *= $valor;
        }
        return $elevado;
    }

?>