<?php 

// $erro = "";
// $resultado = "";
// $dni = "";

// // Iniciamos el cliente SOAP
// // Escribimos la dirección donde se encuentra el servicio
// $url = "https://www.raulprietofernandez.net/images/blog/211/DNI/calcularLetra.php";
// $uri = "https://www.raulprietofernandez.net/images/blog/211/DNI/";
// $cliente = new SoapClient(null, array('location' => $url, 'uri' => $uri));

// // Ejecutamos las siguientes líneas al enviar el formulario
// if (isset($_POST['enviar'])) {
//     // Establecemos los parámetros de envío
//     if (!empty($_POST['dni']) && (strlen($_POST['dni'])) >= 7) {
//         $dni = $_POST['dni'];
//         // Si los parámetros son correctos, llamamos a la función letra de calcularLetra.php
//         $resultado = "La letra es: " . $cliente->letra($dni);
//     } else {
//         $erro = "<strong>Error:</strong> Debes introducir unha DATA correcta<br/><br/>Ej: 03/01/1990";
//     }
// }

    $data = "";
   
    $signos = array(
        "capricornio" => array (
                '2212', '2312', '2412', '2512', '2612', '2712', '2812', '2912', '3012', '3112', '0101', '0201', '0301', '0401', '0501', '0601', '0701', '0801', '0901', '1001', '1101', '1201', '1301', '1401', '1501', '1601', '1701','1801', '1901', '2001'),   
        "acuario"     => array (
                '2101', '2201', '2301', '2401', '2501', '2601', '2701', '2801', '2901', '3001', '3101', '0102', '0202', '0302', '0402', '0502', '0602', '0702', '0802', '0902', '1002', '1102', '1202', '1302', '1402', '1502', '1602', '1702', '1802', '1902'),
        "piscis"      => array (
                '2002', '2102', '2202', '2302', '2402', '2502', '2602', '2702', '2802', '2902', '0103', '0203', '0303', '0403', '0503', '0603', '0703', '0803', '0903', '1003', '1103', '1203', '1303', '1403', '1503', '1603', '1703', '1803', '1903', '2003'),
        "aries"       => array (
                '2103', '2203', '2303', '2403', '2503', '2603', '2703', '2803', '2903', '3003', '3103', '0104', '0204', '0304', '0404', '0504', '0604', '0704', '0804', '0904', '1004', '1104', '1204', '1304', '1404', '1404', '1604', '1704', '1804', '1904', '2004'),
        "tauro"       => array (
                '2104', '2204', '2304', '2404', '2504', '2604', '2704', '2804', '2904', '3004', '0105', '0205', '0305', '0405', '0505', '0605', '0705', '0805', '0905', '1005', '1105', '1205', '1305', '1405', '1505', '1605', '1705', '1805', '1905', '2005'),
        "xeminis"     => array (
                '2105', '2205', '2305', '2405', '2505', '2605', '2705', '2805', '2905', '3005', '3105', '0106', '0206', '0306', '0406', '0506', '0606', '0706', '0806', '0906', '1006', '1106', '1206', '1306', '1406', '1506', '1606', '1706', '1806', '1906', '2006', '2106'),
        "cancer"      => array (
                '2206', '2306', '2406', '2506', '2606', '2706', '2806', '2906', '3006', '0107', '0207', '0307', '0407', '0507', '0607', '0707', '0807', '0907', '1007', '1107', '1207', '1307', '1407', '1507', '1607', '1707', '1807', '1907', '2007', '2107', '2207'),
        "leo"         => array (
                '2307', '2407', '2507', '2607', '2707', '2807', '2907', '3007', '3107', '0108', '0208', '0308', '0408', '0508', '0608', '0708', '0808', '0908', '1008', '1108', '1208', '1308', '1408', '1508', '1608', '1708', '1808', '1908', '2008', '2108', '2208'),
        "virgo"       => array (
                '2308', '2408', '2508', '2608', '2708', '2808', '2908', '3008', '3108', '0109', '0209', '0309', '0409', '0509', '0609', '0709', '0809', '0909', '1009', '1109', '1209', '1309', '1409', '1509', '1609', '1709', '1809', '1909', '2009', '2109', '2209', '2309'),
        "libra"       => array (
                '2309', '2409', '2509', '2609', '2709', '2809', '2909', '3009', '0110', '0210', '0310', '0410', '0510', '0610', '0710', '0810', '0910', '1010', '1110', '1210', '1310', '1410', '1510', '1610', '1710', '1810', '1910', '2010', '2110', '2210'),
        "escorpio"    => array (
                '2310', '2410', '2510', '2510', '2610', '2710', '2810', '2910', '3010', '3110', '0111', '0211', '0311', '0411', '0511', '0911', '1011', '1111', '1211', '1311', '1411', '1511', '1611', '1711', '1811', '1911', '2011', '2111'),
        "saxitario"   => array (
                '2211', '2311', '2411', '2511', '2611', '2711', '2811', '2911', '3011', '0112', '0212', '0312', '0412', '0512', '1612', '1712', '1812', '1912', '2012', '2112'),
    );        
    

    // Iniciamos o cliente SOAP
    // Escribimos a dirección onde se atopa o servizo
    $url = "localhost/calcularHoroscopo.php";
    $uri = "localhost/";
    $cliente = new SoapClient(null, array('location' => $url, 'uri' => $uri));

    // Parseamos a data sen /
    $data = explode("/", $data);
  
    // Calculamos o signo
    
    function CalcularSigno($data){
        $signo = "";
        
        // array_search($data, $capricornio);
        // array_search($data, $aquario);
        // array_search($data, $piscis);
        // array_search($data, $aries);
        // array_search($data, $tauro);
        // array_search($data, $xeminis);
        // array_search($data, $cancer);
        // array_search($data, $leo);
        // array_search($data, $virgo);
        // array_search($data, $libra);
        // array_search($data, $escorpio);

        
    }       

 
?>



<!DOCTYPE html>
<html>
    <head>
        <title>Calcular Horoscopo - Servicio Web + PHP + SOAP</title>
        <link rel="stylesheet" type="text/css" href="estilo.css">
    </head>
<body>
    <h1>Obter Horoscopo</h1>
    <h2>Servicio Web + PHP + SOAP</h2>
    <form action="index.php" method="post">

    <?php 
        print "<input type='text' name='data' value='.$data.' placeholder = 'Exemplo: 03/01'/>";
        print "</br> </br>";
        print "<input type='submit' name='enviar' value='Calcular Horoscopo'>";
        print "<p class='error'>$error</p>";
        print "<p style='font-size: 12pt;font-weight: bold;color: #0066CC;'>$resultado</p>";
    ?>

    </form>
    <div id="footer">Creado con <span class="red">♥</span> por: <a href="https://albertomendez.gal">Alberto Méndez Taboada</a></div>
</body>
</html>