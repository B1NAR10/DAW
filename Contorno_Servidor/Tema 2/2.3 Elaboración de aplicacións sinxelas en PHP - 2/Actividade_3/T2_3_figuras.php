<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa 2.3 - Actividade 3</title>
</head>
<body>
    <h1>Tarefa 2.3 Elaboración de aplicacións sinxelas en PHP - 2</h1>
    <h2>Actividade 3 - Pirámide de Asteriscos</h2> <br>

    <?php

        $cadea = null;
        for ($i = 1; $i <= $filas; $i++) {
            for ($h = $i; $h <= $i; $h++) {
                $cadea .= "*";
            }
            echo $cadena."<br />";
        }    

    ?>


</body>
</html>