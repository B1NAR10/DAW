<?php    
        session_start();

        if(isset($_SESSION['visitas'])){
            $_SESSION['visitas']++;
        }else{
            $_SESSION['visitas'] = 1;     
        }

       
?>
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
        echo "<b>Visitas: </b>" . $_SESSION['visitas'];
    ?>
		
	</form>   
    
</body>
</html>