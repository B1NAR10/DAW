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
        }    
           
?>



