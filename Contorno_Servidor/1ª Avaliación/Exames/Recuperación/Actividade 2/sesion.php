<?php

    $nome = $_POST['nome'];
    $contrasinal = $_POST['contrasinal'];
     
    $usuario1 = "Alberto";
    $contrasinal1 = "abc123.";

    $usuario2 = "Pedro";
    $contrasinal2 = "123abc.";


    if ($nome == $usuario1 && $contrasinal == $contrasinal1) {

        session_start();
        $_SESSION['nome'] = $nome;
        echo "Ola $nome, bos días.";
        setcookie("nome", $nome, time() + 14400);

    }elseif ($nome == $usuario2 && $contrasinal == $contrasinal2) {

        session_start();
        $_SESSION['nome'] = $nome;
        echo "Ola $nome, bos días.";
        setcookie("nome", $nome, time() + 14400);

    
    }else {

        echo "Nome ou Contrasinal Incorrecto, Ténteo de novo!";

    }
?>