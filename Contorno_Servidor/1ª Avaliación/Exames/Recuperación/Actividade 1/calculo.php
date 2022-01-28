<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sumar Nºs Array con Función</title>
</head>
<body>

    <h1>Sumar Nºs Array con Función</h1>
    
    <?php
       function sumar(){
        include 'array.php';
        $suma = $numeros[0] + $numeros[1] + $numeros[2] + $numeros[3] + $numeros[4];
        return $suma;
    }
       
        echo "<br><br> A suma dos números é:".sumar();
    ?>     
    
</body>
</html>
