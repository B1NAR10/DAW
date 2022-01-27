<?php
    if (isset($_POST['calcular'])) {

        $mes = $_POST['mes'];

        switch ($mes) {
            case 1:
                echo "O Número ".$mes." equivale a Xaneiro!";
                break;
            case 2:
                echo "O Número ".$mes." equivale a Febreiro!";
                break;
            case 3:
                echo "O Número ".$mes." equivale a Marzo!";
                break;
            case 4:
                echo "O Número ".$mes." equivale a Abril!";
                break;
            case 5:
                echo "O Número ".$mes." equivale a Maio!";
                break;
            case 6:
                echo "O Número ".$mes." equivale a Xuño!";
                break;
            case 7:
                echo "O Número ".$mes." equivale a Xullo!";
                break;
            case 8:
                echo "O Número ".$mes." equivale a Agosto!";
                break;
            case 9:
                echo "O Número ".$mes." equivale a Setembro!";
                break;
            case 10:
                echo "O Número ".$mes." equivale a Outubro!";
                break;
            case 11:
                echo "O Número ".$mes." equivale a Novembro!";
                break;
            case 12:
                echo "O Número ".$mes." equivale a Decembro!";
                break;
            default:
                echo "O Número ".$mes." NON equivale ningún Mes!";
                break;
        }
    }
?>