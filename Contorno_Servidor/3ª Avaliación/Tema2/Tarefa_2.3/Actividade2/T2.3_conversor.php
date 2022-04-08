<?php

    $divisa = $_POST['divisa']; //Valor en nº 
    $tipo_moeda = $_POST['moeda']; //Tipo de moeda

    $dolar = 1.0884;
    $euro  = 0.90884;
    $peseta = 166.386;

    
    echo "<div style=\"text-align:center\">";
        print("<h1>Conversor de divisas</h1>");
    echo "</div>";

    echo "<div style=\"color:orange\">";

        switch ($tipo_moeda) {
            case "$":
                $euro = round($divisa * $dolar, 2);
                $peseta = round($euro * 166.386, 2);
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
                $resultado = $divisa * $peseta;
                print("<p>$divisa $tipo_moeda = $resultado $tipo_moeda</p>");
                break;
            default:
                print("<p>Erro</p>");
                break;
        }
    echo "</div>";


    $euro_dolar   = round($divisa / 0.858704, 2);
    $dolar_euro   = round($divisa * 0.858704, 2);

    $euro_peseta  = round($divisa * 166.386, 2);
    $peseta_euro  = round($divisa / 166.386, 2);

    $dolar_peseta = round($dolar_euro * 166.386, 2);
    $peseta_dolar = round($euro_dolar / 166.386, 2);

  
    

?>
