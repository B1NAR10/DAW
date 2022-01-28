<?php
 
 //Creamos a cookie para o contador
    if(isset($_COOKIE['contador'])){
        $contador = $_COOKIE['contador'];
        $contador++;
        setcookie('contador', $contador, time()+3600);

    }else{
        $contador = 1;
        setcookie('contador', $contador, time()+3600);
    }

    echo "Hoxe é martes de entroido.";
    echo "<br>";
    echo "Visitas: ".$contador;

?>  