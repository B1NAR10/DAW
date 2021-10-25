<?php
        $divisa = $_POST['divisa'];  
        $tipo_moeda = $_POST['moeda'];  

        $euro_dolar   = round($divisa / 0.858704, 2);
        $dolar_euro   = round($divisa * 0.858704, 2);

        $euro_peseta  = round($divisa * 166.386, 2);
        $peseta_euro  = round($divisa / 166.386, 2);

        $dolar_peseta = round($dolar_euro * 166.386, 2);
        $peseta_dolar = round($euro_dolar / 166.386, 2);

        switch ($tipo_moeda){

            case '$':
                echo $divisa." $ equivalen a: <br>";
                echo "Euros: ".$dolar_euro." € <br>";
                echo "Pesetas: ".$dolar_peseta." Pts";
                break;
            case '€':
                echo $divisa." € equivalen a: <br>";
                echo "Dolar: ".$euro_dolar." $ <br>";
                echo "Pesetas: ".$euro_peseta." Pts";
                break;
            case 'p':
                echo $divisa." Pts <br>";
                echo "Euros: ".$peseta_euro." € <br>";
                echo "Dolar: ".$peseta_dolar." $ <br>";
                break;
        }        
?>
