-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Xerado en: 15 de Mar de 2018 ás 00:08
-- Versión do servidor: 5.6.21
-- Versión do PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `logos`
--

-- --------------------------------------------------------

--
-- Estrutura da táboa `clases`
--

CREATE TABLE IF NOT EXISTS `clases` (
`idClase` tinyint(4) NOT NULL,
  `nome` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `numero` int(2) NOT NULL,
  `solucionadas` int(2) NOT NULL,
  `usuario` tinyint(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- A extraer os datos da táboa `clases`
--

INSERT INTO `clases` (`idClase`, `nome`, `numero`, `solucionadas`, `usuario`) VALUES
(1, 'bebidas', 8, 5, 1),
(2, 'coches', 12, 2, 1),
(3, 'social media', 24, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da táboa `imaxes`
--

CREATE TABLE IF NOT EXISTS `imaxes` (
`idImaxe` tinyint(4) NOT NULL,
  `nome` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `clase` tinyint(4) NOT NULL,
  `resolta` tinyint(1) NOT NULL,
  `usuario` tinyint(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- A extraer os datos da táboa `imaxes`
--

INSERT INTO `imaxes` (`idImaxe`, `nome`, `clase`, `resolta`, `usuario`) VALUES
(1, 'bacardi', 1, 0, 1),
(2, 'coca cola', 1, 1, 1),
(3, 'estrella galicia', 1, 0, 1),
(4, 'heineken', 1, 0, 1),
(5, 'mahou', 1, 1, 1),
(6, 'malibu', 1, 1, 1),
(7, 'pepsi', 1, 1, 1),
(8, 'red bull', 1, 1, 1),
(9, 'audi', 2, 0, 1),
(10, 'bmw', 2, 0, 1),
(11, 'citroen', 2, 1, 1),
(12, 'ferrari', 2, 0, 1),
(13, 'honda', 2, 0, 1),
(14, 'jaguar', 2, 0, 1),
(15, 'lexus', 2, 0, 1),
(16, 'mazda', 2, 0, 1),
(17, 'mercedes', 2, 0, 1),
(18, 'seat', 2, 1, 1),
(19, 'toyota', 2, 0, 1),
(20, 'volkswagen', 2, 0, 1),
(21, 'android', 3, 1, 1),
(22, 'buffer', 3, 0, 1),
(23, 'delicious', 3, 0, 1),
(24, 'dribbble', 3, 0, 1),
(25, 'dropbox', 3, 0, 1),
(26, 'facebook', 3, 0, 1),
(27, 'flickr', 3, 0, 1),
(28, 'instagram', 3, 0, 1),
(29, 'linkedin', 3, 0, 1),
(30, 'myspace', 3, 0, 1),
(31, 'periscope', 3, 0, 1),
(32, 'pinterest', 3, 0, 1),
(33, 'reddit', 3, 0, 1),
(34, 'scribd', 3, 0, 1),
(35, 'skype', 3, 0, 1),
(36, 'snapchat', 3, 0, 1),
(37, 'spotify', 3, 0, 1),
(38, 'tumblr', 3, 0, 1),
(39, 'twitter', 3, 0, 1),
(40, 'vimeo', 3, 0, 1),
(41, 'whatsapp', 3, 0, 1),
(42, 'wikipedia', 3, 0, 1),
(43, 'wordpress', 3, 0, 1),
(44, 'youtube', 3, 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da táboa `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
`idUsuario` tinyint(4) NOT NULL,
  `nome` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `puntos` int(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- A extraer os datos da táboa `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nome`, `puntos`) VALUES
(1, 'jotaeme', 175);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clases`
--
ALTER TABLE `clases`
 ADD PRIMARY KEY (`idClase`);

--
-- Indexes for table `imaxes`
--
ALTER TABLE `imaxes`
 ADD PRIMARY KEY (`idImaxe`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clases`
--
ALTER TABLE `clases`
MODIFY `idClase` tinyint(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `imaxes`
--
ALTER TABLE `imaxes`
MODIFY `idImaxe` tinyint(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
MODIFY `idUsuario` tinyint(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
