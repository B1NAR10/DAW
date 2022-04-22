<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa 3.2 Actividade 1</title>
</head>
<body>
    <h1>Tarefa 3.2  Sesións</h1>
    <h2>Actividade 1 - Contador de Visitas con Sesións </h2> <br>

    <?php

        session_start();

        if(!isset($_SESSION['contador'])){
            $_SESSION['contador'] = 0;
        }

        $_SESSION['contador']++;

        echo "<b>Visitas: </b>" . $_SESSION['contador'];

    ?>
		
	</form>   
    
</body>
</html>