<?php

        $sql = "CREATE TABLE IF NOT EXISTS `enquisa_futbol` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `nome` varchar(50) NOT NULL,
            `apelidos` varchar(50) NOT NULL,
            `telefono` varchar(20) NOT NULL,
            `localidade` varchar(50) NOT NULL,
            `estatura(cm)` int(3) NOT NULL,
            `idade(anos)` int(3) NOT NULL,
            `respostas_correctas` varchar(255) NOT NULL,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";


?>