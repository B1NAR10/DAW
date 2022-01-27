<?php
    if (isset($_POST['calcular'])) {
        
        include('calculoexame.php');

        $valores = array(
        'num1' => $_POST['numero1'],
        'num2' => $_POST['numero2']
        );

       
        echo "A suma dos valores é: ".sumar($valores);
        echo "<br>";
        echo "A Operación de ".$valores['num1']." elevado a ".$valores['num2']." é: ".elevado($valores);       

}
