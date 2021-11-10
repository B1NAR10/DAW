<?php
    if (isset($_POST['calcular'])) {
    
        $nome = $_POST['nome'];
        $num1 = $_POST['numero1'];
        $num2 = $_POST['numero2'];
        $num3 = $_POST['numero3'];

        $medio = ($num1 + $num2 + $num3) / 3;
        $minimo = min($num1, $num2, $num3);
        $maximo = max($num1, $num2, $num3);
        $producto = $num1 * $num2 * $num3;  

        


        echo "Ola, son ".$nome." e acabo de inserir os números ".$num1.", ".$num2.", ".$num3.". <br><br>";
        echo "O resultado da media é  : ".$medio."<br>"; 
        echo "O resultado do mínimo é : ".$minimo."<br>";
        echo "O resultado do máximo é : ".$maximo."<br>";                  

               

}
