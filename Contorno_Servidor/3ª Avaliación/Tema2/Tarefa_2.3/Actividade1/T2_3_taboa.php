<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa 2.3 - Actividade 1</title>
    <style>
            body{ text-align: center;}

            table {     border: 3px solid black;
                        border-collapse: collapse; 
            }

            th, #hora{  color: white;
                        background-color: green;
                        border: 3px solid black;
                        border-collapse: collapse; 
                        padding: 5px;
            }
            
            td {        border: 3px solid black;
                        border-collapse: collapse; 
                        padding: 5px;
            }

            #dwcs {   
                        background-color: brown;
                        color: white;
            }

            #dwcc{  background-color: orange}

            #daw {  background-color: greenyellow;}

            #diw {  background-color: yellow;}                               

    </style>
</head>
<body>
    <h1>Tarefa 2.3 Elaboración de aplicacións sinxelas en PHP - 2</h1>
    <h2>Actividade 1</h2> <br>

    <table>
        <tr>
            <th>Horas</th>
            <th>Luns</th> 
            <th>Martes</th>
            <th>Mércores</th>
            <th>Xoves</th>
            <th>Venres</th>
        </tr>
        <tr>
            <td id="hora"><?php echo "8:50&nbsp-&nbsp9:40"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td> 
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "9:40&nbsp-&nbsp10:30"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td> 
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "10:30&nbsp-&nbsp11:20"?></td>
            <td id="daw"><?php echo  "Despregremento de Aplicacións Web"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "11:20&nbsp-&nbsp12:00"?></td>
            <td id="hora"><?php echo "R"?></td>
            <td id="hora"><?php echo "E"?> </td>
            <td id="hora"><?php echo "CR"?> </td>
            <td id="hora"><?php echo "E"?></td>
            <td id="hora"><?php echo "O"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "12:00&nbsp-&nbsp12:50"?></td>
            <td><?php echo "&nbsp"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td>    
            <td><?php echo "&nbsp"?> </td>
        </tr>
        <tr>
            <td id="hora"><?php echo "12:50&nbsp-&nbsp13:40"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td> 
            <td id="daw"><?php echo  "Despregremento de Aplicacións Web"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "13:40&nbsp-&nbsp14:30"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td id="diw"><?php echo  "Deseño de Interfaces Web"?></td> 
            <td id="daw"><?php echo  "Despregremento de Aplicacións Web"?></td>
            <td id="dwcc"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
        </tr>        
        <tr>
            <td id="hora"><?php echo "14:30&nbsp-&nbsp16:00"?></td>
            <td id="hora"><?php echo " C "?></td>
            <td id="hora"><?php echo " O "?></td>
            <td id="hora"><?php echo " M "?></td>
            <td id="hora"><?php echo " E "?></td>
            <td id="hora"><?php echo " R "?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "16:00&nbsp-&nbsp16:50"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "&nbsp"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "16:50&nbsp-&nbsp7:40"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td id="daw"><?php echo  "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "&nbsp"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "17:40&nbsp-&nbsp18:30"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td id="daw"><?php echo  "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "&nbsp"?></td>
            <td id="dwcs"><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
    </table>   
</body>
</html>