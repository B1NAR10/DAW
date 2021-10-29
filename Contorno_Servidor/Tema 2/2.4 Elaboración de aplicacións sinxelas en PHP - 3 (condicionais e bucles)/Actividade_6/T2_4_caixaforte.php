<?php
        if (isset($_POST['abrir'])){

            
            
            function comprobar(){
                $combinacion_correcta = 4409;
                $combinacion = $_POST['combinacion'];
                if ($combinacion == $combinacion_correcta) { 
                    echo "A caixa forte abréuse satisfactoriamente"; 
                }else{ 
                    echo "Sintoo, esa non é a combinación"; 
                }
            }

//hacer un programa que pida una combinación de 4 dígitos y que compruebe si es correcta o no.
//si es correcta, debe mostrar un mensaje de que se abre satisfactoriamente.    }       
        }                             

            // $oportunidades = 0;
            // while ($oportunidades != 4) {
            //     $oportunidades++;
            //     comprobar();   
            // }
            
            $contador = 0;
            while ($contador <= 4) {
                comprobar();
                $contador++;  
            }

            // for ($i=0; $i < 5; $i++) { 
               
                // var color = "" 
                // while (color != "rojo"){ 
                // color = prompt("dame un color (escribe rojo para salir)","") 
    }   
        //     // }
        //         echo "Debes esperar un minuto para o volver intentar e inserta a combinación";
        //    }
?>



