<?php

    $sql = "CREATE TABLE IF NOT EXISTS `fruteria` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `nome_froita` varchar(255) NOT NULL,
        `proveedor` varchar(255) NOT NULL,
        `telefono_proveedor` varchar(20) NOT NULL,
        `stock` int(255) NOT NULL,
        `prezo_kg` float(255) NOT NULL,
        `cantidade vendida` int(255) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";


?>


    


    