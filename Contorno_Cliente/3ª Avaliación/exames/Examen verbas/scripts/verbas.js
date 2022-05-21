$(document).ready(function () {
	// Crear as variables globais necesarias
	var puntos = 0;
	var letras = false;
	var idioma = false;

	// Crear o contedor do son.
	let cabecera = "<div class='cabeceira'><div id='audio'></div>";
	// Amosar o número de letras (MÍNIMO 3 e MÁXIMO 10) posibles nas verbas.
	/* Selector de longitud de palabras */
	const MINIMO = 3;
	const MAXIMO = 10;
	cabecera += "<div class='numeros'>";
	for (let i = MINIMO; i <= MAXIMO; i++) {
		cabecera += "<div class='numero'>" + i + "</div>";
	}
	cabecera += "</div>";

	// Amosar a puntuación.
	cabecera += "<div class='puntuacion'>";
	cabecera += "<figure class='letras'><img src='imaxes/letras/0.jpg'></figure>";
	cabecera += "</div>";

	// Amosar o idioma.
	cabecera += "<div class='idioma'>";
	cabecera += "<figure class='idioma'><img id='galego' src='imaxes/bandeiras/galego.png'></figure>";
	cabecera += "<figure class='idioma'><img id='castellano' src='imaxes/bandeiras/castellano.png'></figure>";
	cabecera += "<figure class='idioma'><img id='english' src='imaxes/bandeiras/english.png'></figure>";
	cabecera += "</div>";
	cabecera += "</div>";

	/** Mostrar por pantalla. */
	$("header").after(cabecera);

	// Escoller o número de letras.
	/* Evento dinámico */
	var numLetras;
	$(document).on("click", ".numero", function () {
		numLetras = parseInt($(this).text());
		// Cambiar o elemento do menú activo
		$(".numero").removeClass("activa");
		$(this).addClass("activa");
		letras = true;
		crearTaboleiro();
	});

	// Escoller o idioma das verbas.
	var idiomaActivo;
	$(document).on("click", "figure.idioma > img", function () {
		idiomaActivo = $(this).attr("id");
		$("figure.idioma > img").each(function () {
			$(this).attr("src", "imaxes/bandeiras/" + $(this).attr("id") + ".png");
		});
		// Desactivar a icona correspondente ao idioma usado.
		$(this).attr("src", "imaxes/bandeiras/" + idiomaActivo + "-inactivo.png");
		idioma = true; console.log(idioma);
		crearTaboleiro();
	});

	// Cargar o abecedario do idioma.
	function crearTaboleiro() {
		if (letras && idioma) {
			$.getJSON("servidor/cargarAbecedario.php", { numero: numLetras, idioma: idiomaActivo })
				.done(function (datos) {
					/* datos es una cadena.*/
					abecedario = datos;

					// Reiniciar el tablero, la solución y la puntuación por si se selecciona otro número de letras o idioma.
					$("#taboleiro").remove();
					$("#solucion").remove();
					$(".puntuacion").html("<figure class='letras'><img src='imaxes/letras/0.jpg'></figure>");
					puntos = 0;

					// Crear o taboleiro coas letras.
					const COLUMNAS = numLetras + 10;
					const FILAS = datos.length / COLUMNAS;
					let tablero = "<div id='taboleiro'>";
					for (let i = 0; i < FILAS; i++) {
						tablero += "<div class='fila'>";
						for (let j = 0; j < COLUMNAS; j++) {
							tablero += letraAleatoria(i, j);
						}
						tablero += "</div>";
					}
					tablero += "</div>";
					$(".cabeceira").after(tablero);

					// Actualizar o número de columnas no CSS.
					$(".fila").css("grid-template-columns", "repeat(" + COLUMNAS + ", 4vw)");

					// Crear a zona da solución.
					
					let solucion = "<div id='solucion'>";
					for (let i = 0; i < numLetras; i++) {
						solucion += "<div class='letra'></div>";
					}
					solucion += "</div>";
					$("#taboleiro").after(solucion);

					// Facer arrastrables as letras.
					$("div.fila:last img").each(function () {
						$(this).attr("src", "imaxes/letras/" + $(this).data("letra") + ".png").draggable({ revert: true, });
					});

					// Crear as zonas de recepción.
					$("#solucion div.letra").droppable({

						// Colocar a letra no oco.
						/* Se declara lo aceptable del arrastre. El hueco se desactiva después de 
						coloar un elemento en él. */
						accept: "figure.letras img",
						drop: function (event, ui) {

							// Selecciono el hueco correspondiente con el selector y le añado la letra que es arrastrada
							// en ese momento con draggable.data("letra").
							$(this).data("letra", ui.draggable.data("letra")).append("<figure class='letras'><img src='imaxes/letras/" + ui.draggable.data("letra") + ".jpg'></figure>");

							// Facer draggable a letra seguinte na columna.
							let letraSuperior = $("figure.letras img[data-fila='" + (ui.draggable.data("fila") - 1) + "'][data-columna='" + ui.draggable.data("columna") + "']");
							letraSuperior.attr("src", "imaxes/letras/" + letraSuperior.data("letra") + ".png").draggable({ revert: true, });

							// Eliminar a letra usada.
							ui.draggable.remove();

							// Desactivar o oco no que deixamos a letra.
							$(this).droppable("disable");

							// Comprobar se todos os ocos están ocupados.
							if ($("div.letra:empty").length == 0) {

								// Comprobar palabra correcta.
								let verba = "";
								$("div.letra").each(function () {
									verba += $(this).data("letra");
								});
								$.getJSON("servidor/comprobarVerba.php", { idioma: idiomaActivo, verba: verba })
									.done(function (datos) {
										// Indicar palabra correcta mediante un son.
										if (datos == "OK") {
											musica("correcta");

											// Sumar puntos.
											puntos += numLetras * 5;
										} else {

											// Indicar palabra incorrecta mediante un son.
											musica("incorrecta");

											// Restar puntos.
											puntos -= numLetras * 3;

										}
										// Actualiza visualmente a puntuación.
										// Controlo que puntos nunca sea un valor negativo.
										if (puntos < 0) {
											puntos = 0;
										}
										actualizarPuntos(puntos);

										// Reiniciar solución.
										/* Este reinicio es para poder continuar añadiendo nuevas palabras en una siguiente ronda. */
										$("#solucion div.letra figure").remove();
										$("#solucion div.letra").droppable("enable");

										// Comprobar se o xogo rematou e indicalo mediante un son.
										if ($("#taboleiro img").length == 0) {
											musica("rematar");
										}
									})

									// Controlar posibles erros da BD (1).
									.fail(function (error) {
										alert("Error en la lectura de la base de datos comprobarVerba.php. " + error)
									});
							}
						}
					});
				})
				// Controlar posibles erros da BD (2).
				.fail(function (error) {
					alert("Error en la lectura de la base de datos cargarAbecedario.php. " + error);
				});
		}
	}

	// Escolle aleatoriamente unha letra das posibles e a elimina para non repetila
	// Recibe a posición da letra dentro do taboleiro
	// Devolve a imaxe que tapa a letra e a fila, columna e letra como atributos 
	function letraAleatoria(i, j) {
		// Escojo una letra al azar.
		let letra = Math.floor(Math.random() * abecedario.length);
		let letraEscogida = abecedario[letra];
		// Construir la imagen.
		let imaxe = "<figure class='letras'><img src='imaxes/letras/reverso.png' data-fila='" + i + "' data-columna='" + j + "' data-letra='" + letraEscogida + "'></figure>";
		abecedario = abecedario.slice(0, letra) + abecedario.slice(letra + 1);
		return imaxe;
	}

	// Actualiza visualmente a puntuación.
	// Recibe os puntos.
	function actualizarPuntos(puntos) {
		puntos = puntos.toString();
		let modificarPuntos = "";
		for (let i = 0; i < puntos.length; i++) {
			modificarPuntos += "<figure class='letras'><img src='imaxes/letras/" + puntos[i] + ".jpg'></figure>";
		}
		$("div.puntuacion").html(modificarPuntos);
	}

	// Emitir un son.
	// Recibe un nome de ficheiro.
	function musica(ficheiro) {
		audio.innerHTML = "<audio autoplay><source src='sons/" + ficheiro + ".mp3'></audio>";
	}
});