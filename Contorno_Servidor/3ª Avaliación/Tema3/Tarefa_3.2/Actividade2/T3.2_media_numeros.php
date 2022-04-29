<?php
    
    session_start();

    if (!isset($_SESSION['suma'])) {
        $_SESSION['suma'] = 0;
    }

    if (!isset($_SESSION['cantidadeElementos'])) {
        $_SESSION['cantidadeElementos'] = 0;
    }

    if (!isset($_SESSION['media'])) {
        $_SESSION['media'] = 0;
    }

?>
<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa 3.2 Actividade 2</title>
</head>
<body>
    <h1>Tarefa 3.2 Sesións</h1>
    <h2>Actividade 2 - Calcular Media con Sesións </h2> <br>

   

    <?php
   
        if (isset($_POST['numero'])) {
            $numero = $_POST['numero'];
        
            if ($numero >= 0) {
                $_SESSION['suma'] += $numero;
                $_SESSION['cantidadeElementos']++;
            $_SESSION['media'] = $_SESSION['suma'] / $_SESSION['cantidadeElementos'];
            } else {
                session_destroy();
                header("refresh: 0;"); 
            }
        }
    ?>
    
    <h3>
        <p>Suma = <?php echo $_SESSION['suma']; ?></p>
        <p>Cantidade de Elementos = <?php echo $_SESSION['cantidadeElementos'] ?></p>
        <p>Media = <?php echo $_SESSION['media'] ?></p>

    </h3>
    <br>
    <form action="#" method="POST">
        <p>Introduzca un Número: </p>
        <p><input type="number" name="numero"></p>
        <p><input type="submit" value="OK"></p>
    </form>

</body>
</html>