<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa 2.3 - Actividade 1</title>
    <style>
            table {     text-align: center;
                        border: 1px solid orange;
                        border-collapse: collapse; 
            }

            th, #hora{  color: white;
                        background-color: orange;
                        border: 1px solid orange;
                        border-collapse: collapse; 
                        padding: 5px;
            }
            
            td {        border: 1px solid orange;
                        border-collapse: collapse; 
                        padding: 5px;
            }

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
            <td id="hora"><?php echo "8:50 - 9:40" ?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td> 
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "9:40 - 10:30"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td> 
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "10:30 - 11:20"?></td>
            <td><?php echo "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "11:20 - 12:00"?></td>
            <td><?php echo "R"?></td>
            <td><?php echo "E"?> </td>
            <td><?php echo "CR"?> </td>
            <td><?php echo "E"?></td>
            <td><?php echo "O"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "12:00 - 12:50"?></td>
            <td><?php echo "&nbsp"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td>    
            <td><?php echo "&nbsp"?> </td>
        </tr>
        <tr>
            <td id="hora"><?php echo "12:50 - 13:40"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td> 
            <td><?php echo "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "13:40 - 14:30"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "Deseño de Interfaces Web"?></td> 
            <td><?php echo "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Cliente"?></td>
        </tr>        
        <tr>
            <td id="hora"><?php echo "&nbsp"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "&nbsp"?></td>
            <td><?php echo "&nbsp"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "16:00 - 16:50"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "&nbsp"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "16:50 - 17:40"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "&nbsp"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
        <tr>
            <td id="hora"><?php echo "17:40 - 18:30"?></td>
            <td><?php echo "&nbsp"?> </td>
            <td><?php echo "Despregremento de Aplicacións Web"?></td>
            <td><?php echo "&nbsp"?></td>
            <td><?php echo "Desenvolvemento de Aplicacións Web en Contorno Servidor"?></td>
            <td><?php echo "&nbsp"?></td>
        </tr>
    </table>   
</body>
</html>