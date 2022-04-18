<?php

        $xaneiro = $_POST['xaneiro'];
        $febreiro = $_POST['febreiro'];
        $marzo = $_POST['marzo'];
        $abril = $_POST['abril'];
        $maio = $_POST['maio'];
        $xuño = $_POST['xuño'];
        $xullo = $_POST['xullo'];
        $agosto = $_POST['agosto'];
        $setembro = $_POST['setembro'];
        $outubro = $_POST['outubro'];
        $novembro = $_POST['novembro'];
        $decembro = $_POST['decembro'];

        $temperaturas = array($xaneiro, $febreiro, $marzo, $abril, $maio, $xuño, $xullo, $agosto, $setembro, $outubro, $novembro, $decembro);
        $meses = array('Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro');

        echo '<h1>Tarefa 2.5 Elaboración de aplicacións sinxelas en PHP - 4 (Arrays e Funcións)</h1>';
        echo '<h2>Actividade 2 - Temperatura Meses do Ano </h2> <br>';

        for($i = 0; $i < count($temperaturas); $i++){
            echo "A temperatura de " . $meses[$i] . " é: " . $temperaturas[$i] . "<br>";
        }

?>