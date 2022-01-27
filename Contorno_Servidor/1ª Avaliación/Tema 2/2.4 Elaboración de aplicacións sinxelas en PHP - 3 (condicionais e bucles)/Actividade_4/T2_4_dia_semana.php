<?php
    if (isset($_POST['calcular'])) {

        $dia_semana = strtolower( $_POST['dia']); // strlower: convirte caracteres a minúsculas.
       
        switch ($dia_semana) {

            case "luns":
                echo "Hoxe é luns e tomei un café ás 8:00h.";
                break;
            case "martes":
                echo " Hoxe é martes e choveu toda a mañá.";
                break;
            case "mercores":
                echo "Hoxe é mércores e vou traballar con php.";
                break;               
            case "xoves":
                echo "Hoxe é xoves e teño que vir pola tarde.";
                break;             
            case "venres":
                echo "Hoxe é venres e xa case estou na fin de semana.";
                break;  
                
            case "sabado":
                echo "Hoxe é sábado e vou formatear o ordenador";
                break;  
            case "domingo":
                echo "Hoxe é domingo e vou descansar pescando no río";
                break;  
            default:
                echo "Erro, ese día NON e Correcto!";
                break;
        }
        
    }
?>
