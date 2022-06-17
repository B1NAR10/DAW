-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2022 a las 00:34:51
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fotogramas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `idPelicula` int(6) NOT NULL,
  `nome` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `fotograma1` int(6) NOT NULL,
  `fotograma2` int(6) NOT NULL,
  `fotograma3` int(6) NOT NULL,
  `erro` int(6) NOT NULL,
  `idXenero` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`idPelicula`, `nome`, `fotograma1`, `fotograma2`, `fotograma3`, `erro`, `idXenero`) VALUES
(1, 'La guerra de las galaxias', 1, 187, 519, 161, 10),
(2, 'Terminator', 197, 319, 847, 162, 10),
(3, 'El chico ideal', 3, 733, 845, 638, 3),
(4, 'Titanic', 4, 101, 679, 469, 7),
(5, 'Se7en', 5, 692, 615, 788, 10),
(6, 'American Beauty', 6, 120, 809, 210, 10),
(7, 'Matrix', 7, 81, 124, 610, 10),
(8, 'Salvar al soldado Ryan', 8, 636, 789, 350, 2),
(10, 'Sospechosos habituales', 10, 312, 723, 708, 10),
(11, 'El gran Lebowski', 11, 700, 559, 290, 10),
(13, 'La Bella y la Bestia', 13, 281, 226, 826, 5),
(14, 'La lista de Schindler', 14, 117, 581, 2, 7),
(15, 'Independence Day', 15, 141, 771, 674, 6),
(16, 'El rey león', 16, 12, 769, 724, 5),
(17, 'El club de la lucha', 17, 132, 275, 454, 10),
(18, 'Forrest Gump', 18, 103, 829, 529, 10),
(19, 'Cadena perpetua', 19, 102, 214, 400, 10),
(20, 'El quinto elemento', 20, 858, 743, 220, 10),
(22, 'Clueless (Fuera de onda)', 22, 770, 900, 710, 3),
(23, 'Blade Runner', 23, 84, 881, 302, 10),
(26, 'American History X', 26, 749, 370, 153, 10),
(27, 'Misery', 27, 509, 359, 603, 1),
(28, 'Súper Mario Bros.', 28, 269, 219, 265, 6),
(29, 'El retorno de las brujas', 29, 389, 326, 716, 10),
(31, 'La milla verde', 31, 134, 916, 449, 7),
(32, 'Uno de los nuestros', 32, 342, 831, 572, 10),
(33, 'Scream', 33, 920, 444, 903, 10),
(34, 'El silencio de los corderos', 34, 105, 193, 76, 10),
(35, 'Movida del 76', 35, 418, 534, 623, 10),
(38, 'Pulp Fiction', 38, 118, 443, 675, 10),
(39, 'Pesadilla antes de Navidad', 39, 624, 856, 785, 5),
(40, 'Braveheart', 40, 448, 542, 237, 8),
(41, 'Sleepy Hollow', 41, 627, 611, 702, 8),
(42, 'Jackie Brown', 42, 338, 630, 232, 4),
(43, 'Reservoir Dogs', 43, 66, 767, 875, 10),
(45, 'Jumanji', 45, 352, 435, 506, 6),
(46, 'La máscara', 46, 247, 334, 915, 10),
(48, 'Abierto hasta el amanecer', 48, 671, 588, 38, 10),
(49, '10 razones para odiarte', 49, 44, 619, 234, 3),
(50, 'Trainspotting', 50, 125, 834, 515, 10),
(51, 'Tropic Thunder', 51, 422, 601, 475, 3),
(52, 'Taxi Driver', 52, 531, 911, 273, 10),
(53, 'Qué bello es vivir', 53, 450, 513, 505, 7),
(54, '9 semanas y media', 54, 344, 154, 95, 7),
(55, 'Resacón en Las Vegas', 55, 673, 894, 411, 3),
(56, 'Los cazafantasmas', 56, 696, 585, 172, 10),
(57, 'Las brujas de Zugarramurdi', 57, 626, 622, 761, 3),
(58, 'Con faldas y a lo loco', 58, 595, 278, 407, 10),
(59, 'Los Goonies', 59, 520, 837, 757, 10),
(60, 'Supersalidos', 60, 583, 557, 551, 3),
(61, 'Memento', 719, 877, 663, 914, 4),
(63, 'Psicosis', 63, 848, 759, 783, 10),
(64, 'El profesional (León)', 64, 37, 565, 376, 2),
(65, 'Jamón, jamón', 65, 855, 659, 304, 3),
(67, 'Willow', 67, 206, 207, 105, 6),
(68, 'Manhattan', 68, 655, 293, 712, 3),
(69, 'Hancock', 69, 640, 776, 775, 6),
(70, 'Casablanca', 70, 296, 717, 582, 7),
(71, 'Lo que el viento se llevó', 71, 330, 568, 474, 7),
(72, '[REC]', 72, 230, 722, 495, 1),
(73, 'Malditos bastardos', 73, 253, 521, 734, 2),
(74, 'Boogie Nights', 74, 415, 849, 301, 7),
(75, 'El cabo del miedo', 75, 646, 379, 216, 10),
(77, 'Los caballeros las prefieren rubias', 361, 398, 413, 712, 3),
(78, 'Ocho apellidos vascos', 78, 523, 846, 245, 3),
(79, 'Malditos vecinos', 79, 259, 682, 346, 3),
(80, 'Cowboy de medianoche', 80, 554, 492, 662, 7),
(82, 'Risky Business', 82, 879, 669, 917, 7),
(85, 'Todo sobre mi madre', 85, 391, 613, 913, 7),
(86, 'Amélie', 86, 864, 335, 264, 10),
(87, 'Cuando Harry encontró a Sally', 87, 517, 666, 833, 3),
(88, 'El caballero oscuro', 88, 590, 284, 740, 10),
(89, 'El club de los poetas muertos', 89, 508, 657, 629, 10),
(90, 'Bitelchús', 90, 544, 303, 274, 10),
(91, 'Barb Wire', 91, 731, 396, 703, 2),
(93, 'Temblores', 93, 632, 332, 388, 1),
(94, 'Granujas a todo ritmo', 94, 532, 681, 426, 10),
(95, 'Instinto básico', 95, 369, 224, 647, 10),
(96, 'The artist', 96, 399, 357, 366, 3),
(97, 'Vacaciones en Roma', 97, 860, 356, 278, 3),
(100, 'Kill Bill', 100, 439, 608, 835, 10),
(104, 'Rocky', 104, 633, 578, 891, 7),
(106, 'Dirty Dancing', 106, 872, 548, 678, 7),
(107, 'Jurassic Park', 107, 313, 667, 804, 10),
(108, 'ET', 108, 306, 753, 729, 6),
(109, 'Tiburón', 109, 802, 526, 760, 10),
(110, 'Annie Hall', 110, 691, 387, 236, 3),
(111, 'Grease', 111, 358, 641, 552, 10),
(112, 'El graduado', 112, 782, 348, 851, 7),
(113, 'El mago de Oz', 113, 297, 819, 781, 10),
(114, 'El diario de Bridget Jones', 114, 212, 628, 337, 3),
(115, 'Regreso al futuro', 115, 530, 704, 635, 10),
(116, 'El precio del poder', 116, 437, 735, 248, 10),
(119, '2001: Una odisea en el espacio', 119, 307, 854, 15, 10),
(121, 'Pretty Woman', 121, 773, 814, 683, 10),
(122, 'Armageddon', 122, 670, 446, 15, 6),
(123, 'Alguien voló sobre el nido del cuco', 123, 618, 843, 127, 10),
(126, 'Cuenta conmigo', 126, 718, 329, 233, 8),
(127, 'El resplandor', 127, 196, 156, 179, 10),
(128, 'Moulin Rouge', 128, 345, 215, 899, 7),
(129, 'Bailando con lobos', 129, 886, 901, 360, 8),
(130, 'La princesa prometida', 130, 546, 857, 478, 10),
(131, 'Jerry Maguire', 131, 317, 436, 918, 3),
(133, 'Eduardo Manostijeras', 133, 516, 668, 885, 10),
(136, 'The Rocky Horror Picture Show', 136, 267, 472, 796, 10),
(137, 'Ghost', 137, 895, 805, 228, 7),
(138, 'Todo en un día', 138, 791, 482, 231, 3),
(139, 'El indomable Will Hunting', 139, 47, 665, 503, 7),
(140, 'Réquiem por un sueño', 140, 152, 427, 576, 10),
(142, 'El club de los cinco', 142, 271, 394, 748, 10),
(143, 'El señor de los anillos', 143, 887, 374, 402, 10),
(144, 'Slumdog Millionaire', 144, 514, 239, 336, 7),
(145, 'Carrie', 145, 903, 343, 584, 10),
(146, 'El planeta de los simios', 146, 643, 558, 365, 10),
(147, 'El diario de Noa', 147, 410, 562, 589, 7),
(148, 'Fiebre del sábado noche', 148, 512, 787, 423, 7),
(149, 'Misión imposible', 149, 288, 780, 840, 2),
(150, 'Viernes 13', 150, 208, 209, 192, 10),
(155, 'Los pájaros', 155, 249, 447, 295, 10),
(157, 'American Psycho', 157, 591, 598, 605, 10),
(158, 'Los otros', 158, 800, 487, 907, 1),
(160, 'El proyecto de la bruja de Blair', 160, 280, 842, 550, 10),
(163, 'La niebla', 163, 310, 686, 383, 1),
(164, 'Poltergeist', 164, 172, 235, 375, 1),
(166, 'La cosa', 166, 485, 765, 709, 10),
(167, 'El exorcista', 167, 584, 380, 151, 10),
(170, 'Oculus: el espejo del mal', 170, 730, 362, 736, 1),
(171, 'The Purge: La noche de las Bestias', 171, 889, 221, 631, 4),
(173, 'La cabaña en el bosque', 173, 292, 726, 501, 10),
(176, 'Nosferatu', 176, 392, 242, 451, 10),
(177, 'Sinister', 177, 739, 252, 372, 1),
(180, 'El pueblo de los malditos', 180, 339, 481, 26, 1),
(181, 'La semilla del diablo', 181, 688, 563, 839, 10),
(183, 'La profecía', 183, 825, 795, 798, 1),
(184, 'Déjame entrar', 184, 263, 438, 445, 10),
(185, 'Mulholland Drive', 185, 486, 434, 477, 10),
(186, 'The ring', 186, 594, 282, 493, 1),
(188, 'Paranormal Activity', 188, 525, 305, 545, 1),
(189, 'It follows', 189, 536, 602, 384, 1),
(190, 'La mujer de negro', 190, 378, 465, 347, 1),
(192, 'Mártires', 192, 457, 639, 725, 10),
(194, 'Los extraños', 194, 880, 229, 315, 1),
(195, 'Arrástrame al infierno', 195, 279, 351, 168, 1),
(197, 'Arma Letal', 203, 204, 205, 10, 10),
(198, 'El laberinto del fauno', 198, 222, 251, 299, 6),
(200, 'Al filo del mañana', 199, 200, 201, 202, 2),
(202, 'Monstruos S.A.', 300, 250, 223, 211, 5),
(203, 'Bichos', 441, 714, 815, 882, 5),
(204, 'La tentación vive arriba', 77, 838, 779, 595, 3),
(205, 'Aves de presa', 794, 750, 363, 314, 2),
(206, 'Fast & Furious', 406, 243, 309, 567, 2),
(207, 'El caso Bourne', 425, 713, 414, 876, 2),
(208, 'John Wick', 853, 241, 587, 817, 2),
(209, 'Contacto sangriento', 672, 573, 621, 786, 2),
(210, 'El otro guardaespaldas', 596, 604, 217, 707, 2),
(211, 'Heat', 754, 227, 816, 266, 4),
(212, 'Depredador', 367, 560, 793, 896, 2),
(213, 'Dos policías rebeldes', 461, 822, 270, 592, 2),
(214, 'Crank: Veneno en la sangre', 869, 355, 820, 600, 2),
(215, 'Casino Royale', 408, 490, 324, 685, 2),
(216, 'Al otro lado de la ley', 865, 524, 256, 698, 4),
(217, 'Gamer', 741, 458, 803, 255, 6),
(218, 'Jungla de cristal', 340, 801, 527, 720, 2),
(219, 'Oldboy', 285, 213, 540, 569, 4),
(220, 'Operación Dragón', 257, 728, 321, 836, 2),
(221, 'Proyecto Rampage', 614, 272, 539, 711, 6),
(222, 'Suspiria', 650, 354, 871, 470, 6),
(223, 'Robocop', 322, 467, 238, 419, 6),
(224, 'WALL-E', 607, 463, 919, 298, 5),
(225, 'Los increíbles', 276, 832, 397, 561, 5),
(226, 'Sin tregua', 824, 395, 701, 697, 4),
(227, 'The Night Comes for Us', 364, 480, 522, 649, 4),
(228, 'Tyler Rake', 489, 377, 827, 806, 4),
(229, 'Imparable', 316, 286, 368, 507, 4),
(230, 'Brave', 873, 294, 625, 908, 5),
(231, 'Buscando a Nemo', 453, 870, 742, 405, 5),
(232, 'Cars', 732, 556, 537, 98, 5),
(233, 'Coco', 371, 778, 494, 790, 5),
(234, 'It', 617, 884, 499, 575, 1),
(235, 'La matanza de Texas', 705, 462, 500, 381, 1),
(236, 'Pesadilla en Elm Street', 777, 812, 677, 553, 1),
(237, 'Ratatouille', 687, 642, 471, 483, 5),
(238, 'Saw', 452, 421, 390, 689, 1),
(239, 'Sé lo que hicisteis el último verano', 616, 442, 799, 906, 1),
(240, 'Up', 904, 484, 658, 644, 5),
(241, 'Perdición', 549, 428, 645, 182, 4),
(242, 'Crimen perfecto', 424, 861, 599, 763, 4),
(243, 'La noche del cazador', 609, 758, 811, 496, 4),
(244, 'Casino', 652, 432, 797, 498, 4),
(245, 'Origen', 417, 764, 218, 606, 4),
(246, 'Infiltrados', 225, 566, 727, 570, 4),
(247, 'El viaje de Chihiro', 460, 690, 909, 13, 5),
(248, 'El castillo ambulante', 830, 287, 403, 386, 5),
(249, 'Del revés (Inside Out)', 693, 651, 751, 863, 5),
(250, 'Big fish', 899, 766, 656, 476, 6),
(251, 'La invasión de los ladrones de cuerpos', 862, 349, 852, 14, 6),
(252, 'La carreta fantasma', 762, 260, 333, 752, 6),
(253, 'Centauros del desierto', 746, 528, 261, 323, 8),
(254, 'Lawrence de Arabia', 883, 902, 898, 684, 8),
(255, 'Espartaco', 653, 694, 420, 828, 8),
(256, 'Gladiator', 738, 637, 721, 912, 8),
(257, 'Ben-Hur', 664, 878, 745, 538, 8),
(258, 'La reina de África', 277, 818, 715, 109, 8),
(259, 'Interstellar', 823, 473, 808, 291, 8),
(260, 'Papillon', 888, 706, 661, 866, 8),
(262, 'Memorias de África', 564, 246, 579, 518, 8),
(263, 'El último mohicano', 331, 850, 648, 93, 8),
(264, 'Excalibur', 353, 547, 695, 20, 8),
(265, 'Los Vengadores', 810, 859, 699, 654, 9),
(266, 'Harry Potter', 772, 393, 497, 15, 9),
(267, 'Regreso al futuro', 416, 327, 479, 876, 9),
(268, 'Indiana Jones', 892, 774, 612, 867, 9),
(269, 'El señor de los anillos', 325, 580, 874, 23, 9),
(270, 'El Hobbit', 320, 430, 571, 67, 9),
(271, 'Piratas del Caribe', 756, 244, 254, 23, 9),
(272, 'Bourne', 844, 433, 240, 47, 9),
(273, 'Underworld', 488, 502, 455, 283, 9),
(274, 'Spider-Man', 897, 466, 543, 859, 9),
(275, 'X-Men', 440, 792, 268, 92, 9),
(276, 'Terminator', 737, 586, 385, 555, 9),
(277, 'Matrix', 890, 676, 680, 132, 9),
(278, 'Alien, el octavo pasajero', 412, 459, 841, 119, 9),
(279, 'Jungla de cristal', 464, 755, 510, 17, 9),
(280, 'Star Wars', 768, 341, 747, 919, 9),
(281, 'Superman', 328, 905, 620, 59, 9),
(282, 'Transformers', 511, 910, 577, 7, 9),
(283, 'Crepúsculo', 262, 533, 541, 42, 9),
(284, 'Ice Age', 258, 382, 807, 313, 9),
(285, 'Rocky', 468, 821, 784, 404, 9),
(286, 'Star Trek', 456, 289, 491, 660, 9),
(287, 'Fast & Furious', 429, 504, 535, 169, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quiz`
--

CREATE TABLE `quiz` (
  `idFotograma` int(6) NOT NULL,
  `login` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `idPelicula` int(6) NOT NULL,
  `idXenero` int(6) NOT NULL,
  `resolta` varchar(1) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `quiz`
--

INSERT INTO `quiz` (`idFotograma`, `login`, `idPelicula`, `idXenero`, `resolta`) VALUES
(1, 'roi', 186, 1, '0'),
(2, 'roi', 183, 1, '0'),
(3, 'roi', 188, 1, '0'),
(4, 'roi', 93, 1, '0'),
(5, 'roi', 239, 1, '0'),
(6, 'roi', 189, 1, '0'),
(7, 'roi', 234, 1, '0'),
(8, 'roi', 177, 1, '0'),
(9, 'roi', 195, 1, '0'),
(10, 'roi', 170, 1, '0'),
(11, 'roi', 207, 2, '0'),
(12, 'roi', 220, 2, '0'),
(13, 'roi', 212, 2, '0'),
(14, 'roi', 206, 2, '0'),
(15, 'roi', 91, 2, '0'),
(16, 'roi', 73, 2, '0'),
(17, 'roi', 213, 2, '0'),
(18, 'roi', 64, 2, '0'),
(19, 'roi', 149, 2, '0'),
(20, 'roi', 218, 2, '0'),
(21, 'roi', 60, 3, '0'),
(22, 'roi', 22, 3, '0'),
(23, 'roi', 3, 3, '1'),
(24, 'roi', 49, 3, '0'),
(25, 'roi', 87, 3, '0'),
(26, 'roi', 78, 3, '0'),
(27, 'roi', 77, 3, '0'),
(28, 'roi', 131, 3, '0'),
(29, 'roi', 79, 3, '0'),
(30, 'roi', 110, 3, '0'),
(31, 'roi', 241, 4, '0'),
(32, 'roi', 171, 4, '0'),
(33, 'roi', 242, 4, '0'),
(34, 'roi', 42, 4, '0'),
(35, 'roi', 219, 4, '0'),
(36, 'roi', 229, 4, '0'),
(37, 'roi', 216, 4, '0'),
(38, 'roi', 246, 4, '0'),
(39, 'roi', 227, 4, '0'),
(40, 'roi', 61, 4, '0'),
(41, 'roi', 247, 5, '0'),
(42, 'roi', 237, 5, '0'),
(43, 'roi', 39, 5, '0'),
(44, 'roi', 240, 5, '0'),
(45, 'roi', 232, 5, '0'),
(46, 'roi', 249, 5, '0'),
(47, 'roi', 233, 5, '0'),
(48, 'roi', 13, 5, '0'),
(49, 'roi', 248, 5, '0'),
(50, 'roi', 203, 5, '0'),
(51, 'roi', 250, 6, '0'),
(52, 'roi', 45, 6, '0'),
(53, 'roi', 252, 6, '0'),
(54, 'roi', 223, 6, '0'),
(55, 'roi', 122, 6, '0'),
(56, 'roi', 15, 6, '0'),
(57, 'roi', 222, 6, '0'),
(58, 'roi', 108, 6, '0'),
(59, 'roi', 67, 6, '0'),
(60, 'roi', 69, 6, '0'),
(61, 'roi', 82, 7, '0'),
(62, 'roi', 70, 7, '0'),
(63, 'roi', 137, 7, '0'),
(64, 'roi', 148, 7, '0'),
(65, 'roi', 80, 7, '0'),
(66, 'roi', 14, 7, '0'),
(67, 'roi', 106, 7, '0'),
(68, 'roi', 53, 7, '0'),
(69, 'roi', 74, 7, '0'),
(70, 'roi', 128, 7, '0'),
(71, 'roi', 257, 8, '0'),
(72, 'roi', 264, 8, '0'),
(73, 'roi', 263, 8, '0'),
(74, 'roi', 126, 8, '0'),
(75, 'roi', 41, 8, '0'),
(76, 'roi', 40, 8, '0'),
(77, 'roi', 253, 8, '0'),
(78, 'roi', 255, 8, '0'),
(79, 'roi', 258, 8, '0'),
(80, 'roi', 254, 8, '0'),
(81, 'roi', 279, 9, '0'),
(82, 'roi', 273, 9, '0'),
(83, 'roi', 265, 9, '0'),
(84, 'roi', 278, 9, '0'),
(85, 'roi', 283, 9, '0'),
(86, 'roi', 277, 9, '0'),
(87, 'roi', 281, 9, '0'),
(88, 'roi', 286, 9, '0'),
(89, 'roi', 267, 9, '0'),
(90, 'roi', 285, 9, '0'),
(91, 'roi', 26, 10, '1'),
(92, 'roi', 75, 10, '0'),
(93, 'roi', 184, 10, '0'),
(94, 'roi', 185, 10, '0'),
(95, 'roi', 35, 10, '0'),
(96, 'roi', 192, 10, '0'),
(97, 'roi', 18, 10, '1'),
(98, 'roi', 86, 10, '0'),
(99, 'roi', 115, 10, '0'),
(100, 'roi', 167, 10, '0'),
(101, 'roi', 201, 0, '0'),
(102, 'roi', 46, 0, '0'),
(103, 'roi', 301, 0, '0'),
(104, 'roi', 102, 0, '0'),
(105, 'roi', 50, 0, '0'),
(106, 'roi', 274, 0, '0'),
(107, 'roi', 34, 0, '0'),
(108, 'roi', 151, 0, '0'),
(109, 'roi', 294, 0, '0'),
(110, 'roi', 256, 0, '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

CREATE TABLE `series` (
  `idFotograma` int(6) NOT NULL,
  `nome` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `series`
--

INSERT INTO `series` (`idFotograma`, `nome`) VALUES
(1, 'Arcane League of Legends'),
(2, 'Perdidos'),
(3, 'Doctor Who'),
(4, 'El Ministerio del Tiempo'),
(5, 'Friends'),
(6, 'Fringe'),
(7, 'The Walking Dead'),
(8, 'El tiempo entre costuras'),
(9, 'Estoy vivo'),
(10, 'Fargo'),
(11, 'Dexter'),
(12, 'Fringe'),
(13, 'Fariña'),
(14, 'Fugitiva'),
(15, 'La niñera'),
(16, 'Peaky Blinders'),
(17, 'Orange Is the New Black'),
(18, 'Pájaro soñador'),
(19, 'Fringe'),
(20, 'American Horror Story'),
(21, 'Blindspot'),
(22, 'True Detective'),
(23, 'Big Little Lies'),
(24, 'Euphoria'),
(25, 'El cuento de la criada'),
(26, 'The Wire'),
(27, 'This Is Us'),
(28, 'Bates Motel'),
(29, 'Juego de tronos'),
(30, 'Hermanos de sangre'),
(31, 'Sense8'),
(32, 'Sherlock'),
(33, 'Taboo'),
(34, 'The Walking Dead'),
(35, 'Yellowstone'),
(36, 'El príncipe de Bel Air'),
(37, 'Modern Family'),
(38, 'Twin Peaks'),
(39, '24'),
(40, 'Better Call Saul'),
(41, 'BoJack Horseman'),
(42, 'Bruja Escarlata y Visión'),
(43, 'Friends'),
(44, 'Chernobyl'),
(45, 'Arcane League of Legends'),
(46, 'The Witcher'),
(47, 'Homeland'),
(48, 'The Crown'),
(49, 'Hijos de la anarquía'),
(50, 'Twin Peaks'),
(51, 'House of Cards'),
(52, 'Westworld'),
(53, 'The Wire'),
(54, 'Arcane League of Legends'),
(55, 'Death Note'),
(56, 'Sex Education'),
(57, 'The Wire'),
(58, 'Dexter'),
(59, 'Chernobyl'),
(60, 'Vikingos'),
(61, 'The Crown'),
(62, 'Rick y Morty'),
(63, 'El Ministerio del Tiempo'),
(64, 'House of Cards'),
(65, 'Fariña'),
(66, 'Gran Hotel'),
(67, 'Peaky Blinders'),
(68, 'Gambito de dama'),
(69, 'Águila Roja'),
(70, 'Euphoria'),
(71, 'Perdidos'),
(72, 'Stranger Things'),
(73, 'True Detective'),
(74, 'El tiempo entre costuras'),
(75, 'Big Little Lies'),
(76, 'Homeland'),
(77, 'Stranger Things'),
(78, 'Gambito de dama'),
(79, 'New Amsterdam'),
(80, 'True Detective'),
(81, 'Big Bang'),
(82, 'The Last Kingdom'),
(83, 'Rick y Morty'),
(84, 'Oz'),
(85, 'Orange Is the New Black'),
(86, 'Scorpion'),
(87, 'Big Little Lies'),
(88, 'Big Bang'),
(89, 'Los Simpson'),
(90, 'Veneno'),
(91, 'Friends'),
(92, 'Penny Dreadful'),
(93, 'Avatar La leyenda de Aang'),
(94, 'Juego de tronos'),
(95, 'The Walking Dead'),
(96, 'Stranger Things'),
(97, 'Estoy vivo'),
(98, 'Friends'),
(99, 'Penny Dreadful'),
(100, 'Hermanos de sangre'),
(101, 'Dexter'),
(102, 'Fargo'),
(103, 'Breaking Bad'),
(104, 'Narcos'),
(105, 'Vikingos'),
(106, 'Forever'),
(107, 'Penny Dreadful'),
(108, 'American Horror Story'),
(109, 'Hermanos de sangre'),
(110, 'La caza'),
(111, 'Twin Peaks'),
(112, 'La maldición de Hill House'),
(113, 'Penny Dreadful'),
(114, 'The Wire'),
(115, 'Cobra Kai'),
(116, 'Las chicas del cable'),
(117, 'El cuento de la criada'),
(118, 'This Is Us'),
(119, 'Mindhunter'),
(120, 'Cómo conocí a vuestra madre'),
(121, 'El príncipe de Bel Air'),
(122, 'The Boys'),
(123, 'The Resident'),
(124, 'This Is Us'),
(125, '24'),
(126, '24'),
(127, 'Dexter'),
(128, 'Gambito de dama'),
(129, '24'),
(130, 'The Mandalorian'),
(131, 'Billions'),
(132, 'Hijos de la anarquía'),
(133, 'Black Sails'),
(134, '9-1-1'),
(135, 'Bruja Escarlata y Visión'),
(136, 'Chicas buenas'),
(137, 'The Mandalorian'),
(138, 'Dark'),
(139, 'Breaking Bad'),
(140, 'Los Simpson'),
(141, 'El tiempo entre costuras'),
(142, 'Vikingos'),
(143, 'Arcane League of Legends'),
(144, 'Expediente X'),
(145, 'Twin Peaks'),
(146, 'The Witcher'),
(147, 'Big Little Lies'),
(148, 'Hermanos de sangre'),
(149, 'Fariña'),
(150, 'Hawai 5.0'),
(151, 'Los Soprano'),
(152, 'Las chicas del cable'),
(153, 'Peaky Blinders'),
(154, 'Mindhunter'),
(155, 'Hijos de la anarquía'),
(156, 'Mr. Robot'),
(157, 'Big Bang'),
(158, 'Arcane League of Legends'),
(159, 'Sex Education'),
(160, 'Los Soprano'),
(161, 'The Witcher'),
(162, 'Oz'),
(163, 'Taboo'),
(164, 'This Is Us'),
(165, 'Chernobyl'),
(166, 'Vivir sin permiso'),
(167, 'Blindspot'),
(168, 'Big Bang'),
(169, 'Anne with an E'),
(170, 'Juego de tronos'),
(171, 'Breaking Bad'),
(172, 'Juego de tronos'),
(173, 'Stranger Things'),
(174, 'Chernobyl'),
(175, 'Billions'),
(176, 'Westworld'),
(177, 'Los Simpson'),
(178, 'Brooklyn Nine Nine'),
(179, 'Los Soprano'),
(180, 'La casa de papel'),
(181, 'Fariña'),
(182, 'This Is Us'),
(183, 'La maldición de Hill House'),
(184, 'Blindspot'),
(185, 'Vikingos'),
(186, 'The Wire'),
(187, 'The Last Kingdom'),
(188, 'Fringe'),
(189, 'Sex Education'),
(190, 'Las chicas del cable'),
(191, 'Narcos'),
(192, 'Perdidos'),
(193, 'Mr. Robot'),
(194, 'The Mandalorian'),
(195, 'Mr. Robot'),
(196, 'Cobra Kai'),
(197, 'Ray Donovan'),
(198, 'Taboo'),
(199, 'Cómo conocí a vuestra madre'),
(200, 'Rick y Morty'),
(201, 'Breaking Bad'),
(202, 'Yellowstone'),
(203, 'Fringe'),
(204, 'The Walking Dead'),
(205, 'Better Call Saul'),
(206, 'Billions'),
(207, 'Cobra Kai'),
(208, 'The Crown'),
(209, 'The Crown'),
(210, 'El Ministerio del Tiempo'),
(211, '9-1-1'),
(212, 'Black Sails'),
(213, 'Dark'),
(214, 'El tiempo entre costuras'),
(215, 'The Witcher'),
(216, 'La casa de papel'),
(217, 'Estoy vivo'),
(218, 'Perdidos'),
(219, 'Orange Is the New Black'),
(220, 'Fargo'),
(221, 'La casa de papel'),
(222, 'Homeland'),
(223, 'Orange Is the New Black'),
(224, 'House of Cards'),
(225, 'Cobra Kai'),
(226, 'Modern Family'),
(227, 'Narcos'),
(228, 'Cómo conocí a vuestra madre'),
(229, 'Mindhunter'),
(230, 'Oz'),
(231, 'Oz'),
(232, 'Suits: La clave del éxito'),
(233, 'Blindspot'),
(234, 'Rick y Morty'),
(235, 'Taboo'),
(236, 'The Boys'),
(237, 'The Boys'),
(238, 'American Horror Story'),
(239, 'Veneno'),
(240, 'Avatar La leyenda de Aang'),
(241, 'Bones'),
(242, 'Modern Family'),
(243, 'Los Soprano'),
(244, 'Chicago PD'),
(245, 'Chicago PD'),
(246, 'Fargo'),
(247, 'La maldición de Hill House'),
(248, 'La maldición de Hill House'),
(249, 'Bates Motel'),
(250, 'Mr. Robot'),
(251, 'Narcos'),
(252, 'El cuento de la criada'),
(253, 'Sense8'),
(254, 'Euphoria'),
(255, 'Sense8'),
(256, 'Sherlock'),
(257, 'Westworld'),
(258, 'This Is Us'),
(259, 'The Boys'),
(260, 'The Last Kingdom'),
(261, 'Bates Motel'),
(262, 'Veneno'),
(263, 'Black Sails'),
(264, 'The Last Kingdom'),
(265, 'Peaky Blinders'),
(266, 'American Horror Story'),
(267, 'Euphoria'),
(268, 'El príncipe de Bel Air'),
(269, 'Westworld'),
(270, 'BoJack Horseman'),
(271, 'House of Cards'),
(272, 'Expediente X'),
(273, 'Forever'),
(274, 'Las chicas del cable'),
(275, 'The Flash'),
(276, 'The Office'),
(277, 'Cobra Kai'),
(278, 'Sex Education'),
(279, 'The Pacific'),
(280, 'Vigilados: Person of Interest'),
(281, 'Modern Family'),
(282, 'The Wire'),
(283, 'Gambito de dama'),
(284, 'Cómo conocí a vuestra madre'),
(285, 'Yellowstone'),
(286, 'Homeland'),
(287, 'True Detective'),
(288, 'Better Call Saul'),
(289, 'Bates Motel'),
(290, 'Bates Motel'),
(291, 'Black Sails'),
(292, 'Boardwalk Empire'),
(293, 'Dark'),
(294, '9-1-1'),
(295, 'The Mandalorian'),
(296, 'La casa de papel'),
(297, 'El Ministerio del Tiempo'),
(298, 'Lucifer'),
(299, 'Mindhunter'),
(300, 'El cuento de la criada'),
(301, 'Riverdale'),
(302, 'The Good Doctor'),
(303, 'The Pacific'),
(304, 'The Umbrella Academy'),
(305, 'Veneno'),
(306, 'Vivir sin permiso'),
(307, 'Yellowstone'),
(308, 'Arrow'),
(309, 'Better Call Saul'),
(310, 'BoJack Horseman'),
(311, 'Bruja Escarlata y Visión'),
(312, 'Bruja Escarlata y Visión'),
(313, 'Dark');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` varchar(9) COLLATE utf8_spanish_ci NOT NULL,
  `login` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `contrasinal` varchar(8) COLLATE utf8_spanish_ci NOT NULL,
  `puntuacion` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `login`, `contrasinal`, `puntuacion`) VALUES
('11111111A', 'jotaeme', 'abc123.', 1234),
('22222222Z', 'roi', 'iria', 3355),
('33333333K', 'kkdelavaka', 'abc123.', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xenero`
--

CREATE TABLE `xenero` (
  `idXenero` int(6) NOT NULL,
  `nome` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `xenero`
--

INSERT INTO `xenero` (`idXenero`, `nome`) VALUES
(1, 'terror'),
(2, 'acción'),
(3, 'comedia'),
(4, 'thriller'),
(5, 'animación'),
(6, 'fantástico'),
(7, 'drama'),
(8, 'aventuras'),
(9, 'sagas'),
(10, 'películas de culto');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`idPelicula`);

--
-- Indices de la tabla `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`idFotograma`);

--
-- Indices de la tabla `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`idFotograma`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `xenero`
--
ALTER TABLE `xenero`
  ADD PRIMARY KEY (`idXenero`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `idPelicula` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=288;

--
-- AUTO_INCREMENT de la tabla `quiz`
--
ALTER TABLE `quiz`
  MODIFY `idFotograma` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `series`
--
ALTER TABLE `series`
  MODIFY `idFotograma` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=314;

--
-- AUTO_INCREMENT de la tabla `xenero`
--
ALTER TABLE `xenero`
  MODIFY `idXenero` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
