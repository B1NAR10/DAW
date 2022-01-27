<?php
    if (isset($_POST['calcular'])) {

        $numero = (string)$_POST['numero'];
       
        if (strlen($numero) <= 5 && $numero > 0) {
            
            $primeiro = substr($numero, 0, 1);
            $ultimo   = substr($numero, -1);

            if ($primeiro == $ultimo) {
            echo "O Número ".$numero." é Capicúa!";
            }else{
            echo "O Número ".$numero." NON é Capicúa!";
            }
            
        }else{
            echo "Erro, máximo 5 caracteres!";
            header('Location: T2_4_capicua.html');
        }    
    }
?>