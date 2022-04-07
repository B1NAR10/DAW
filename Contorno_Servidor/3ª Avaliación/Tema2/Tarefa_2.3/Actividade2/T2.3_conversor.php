<?php

    $divisa = $_POST['divisa'];
    $tipo_moeda = $_POST['moeda'];

    print "<h1>Conversor de Moedas</h1>";
    
    function ConversorEuroDolar($divisa, $tipo_moeda) {
        if ($tipo_moeda == '$') {  $resultado = round($divisa / 1.0884, 2);
                                        
        }elseif ($tipo_moeda == '€') {  $resultado = round($divisa * 1.0884, 2);
                                         
          return $resultado; 
            }
    }

    function ConversorEuroPeseta($divisa, $tipo_moeda) {
        if ($tipo_moeda == '$') {  $resultado = round($divisa * 166.386, 2);                                    
        }elseif ($tipo_moeda == '€') {  $resultado = round($divisa / 166.386, 2);                                 
       return $resultado;
        }  
    }


?>