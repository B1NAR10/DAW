<?php

    $divisa = $_POST['divisa']; //Valor en nº 
    $tipo_moeda = $_POST['moeda']; //Tipo de moeda

    $dolar = 1.0884;
    $peseta = 166.386;

    echo "<div style=\"text-align:center\">";
        print("<h1>Conversor de divisas</h1>");
        switch ($tipo_moeda) {
            case "$":
                $euro = round($divisa / $dolar, 2);
                $peseta = round($divisa * $peseta, 2);
                echo $divisa." $ equivalen a: </br> </br>";
                echo "Euros: ".$euro." € <br>";
                echo "Pesetas: ".$peseta." Pts";
                break;
                
            case "€":
                $dolar = round($divisa * $euro, 2);
                $peseta = round($divisa * $peseta, 3);
                echo $divisa." € equivalen a: <br></br>";
                echo "Dolar: ".$dolar." $ <br>";
                echo "Pesetas: ".$peseta." Pts";
                break;

            case "p":
                $euro  = round($divisa / $peseta, 3);
                $dolar = round($euro * $dolar, 3);
                echo $divisa." Pts equivalen a: <br></br>";
                echo "Euros: ".$euro." € <br>";
                echo "Dolar: ".$dolar." $ <br>";
                break;

            default:
                print("<p>Erro</p>");
                break;
        }
    echo "</div>";
?>
