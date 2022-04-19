<?php

        $numero1 = $_POST['n1'];
        $numero2 = $_POST['n2'];
        $numero3 = $_POST['n3'];
        $numero4 = $_POST['n4'];
        $numero5 = $_POST['n5'];
        $numero6 = $_POST['n6'];
        $numero7 = $_POST['n7'];
        $numero8 = $_POST['n8'];

        echo '<h1>Tarefa 2.5 Elaboración de aplicacións sinxelas en PHP - 4 (Arrays e Funcións)</h1>';
        echo '<h2>Actividade 3 - Numeros Enteiros que Cambian de Cor </h2> <br>';

        $enteiros = array($numero1, $numero2, $numero3, $numero4, $numero5, $numero6, $numero7, $numero8);
    
        function cambiaCor($numero) {
            if ($numero % 2 == 0) {   
                echo '<span style="color: green;">' . 'O Número ' . $numero . ' é Par! </span>';
            } else {                  
                echo '<span style="color: red;">'   . 'O Número ' . $numero . ' é Impar! </span>';  
            }
        }
        
        for ($i=0; $i < sizeof($enteiros); $i++) { 
           echo cambiaCor($enteiros[$i]) . '</br>';
       }

?>