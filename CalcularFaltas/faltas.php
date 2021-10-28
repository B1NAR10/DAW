<?php
    if (isset($_POST['calcular'])) {

        $asignatura =   $_POST['asignatura'];
        $horas_totais = $_POST['horas'];
        $faltas =       $_POST['faltas'];

        $sesions = ($horas_totais * 60)/50;
        $posibles_faltas = $sesions * 0.1;

        echo "A asignatura de ".$asignatura." ten un total de ".$horas."h. e podes faltar ".$posibles_faltas;


    }


/*
    Desenvolvemento web en contorno cliente     => 157 * 60 / 50 => 188sesions
    Desenvolvemento web en contorno servidor    => 175 * 60 / 50 => 210s
    Deseño de interfaces web                    => 157 * 60 / 50 => 188s
    Despregamento de aplicacións web            =>  88 * 60 / 50 => 105s

*/