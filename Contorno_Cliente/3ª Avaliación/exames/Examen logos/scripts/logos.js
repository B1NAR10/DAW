$(document).ready(function () {
	usuario = 1;
	/* 	PANTALLA 1
		Cargar as clases ou niveis do usuario na columna da esquerda.
	 */
	inicio();
	function inicio() {
		$.getJSON("servidor/cargarClasesUsuario.php", { codigo: usuario })
			.done(function (datosClasesUsuario) {
				$("#operacions .boton").remove();
				$.each(datosClasesUsuario, function () {
					$("#solucion").append("<div>");
					$("#solucion div:last").addClass("clase");

					$("#solucion div.clase:last").append("<div>").append("<div>").append("<div>");

					$("#solucion div.clase:last div:first").addClass("icona");
					$("#solucion div.clase:last div:eq(1)").addClass("texto");
					$("#solucion div.clase:last div:last").addClass("numero");

					$("#solucion div.icona:last").append("<img>");
					$("#solucion img:last").addClass("icona");
					$("#solucion img:last")
						.attr("src", "imaxes/iconas/" + this.idClase + ".png")
						.attr("data-codigo", this.idClase).attr("data-clase", this.nome);

					$("#solucion div.texto:last").append("<span>");
					$("#solucion span:last")
						.addClass("texto")
						.text(this.nome);

					$("#solucion div.numero:last").append("<span>");
					$("#solucion span:last")
						.addClass("numero")
						.text(this.solucionadas + "/" + this.numero);
				});
			})
			.fail(function (error) {
				alert("Error en la lectura de la base de datos cargarClasesUsuario. " + error)
			});

		//Cargar o nome e puntos do usuario que xoga na columna da dereita.
		$.getJSON("servidor/cargarDatosUsuario.php", { codigo: usuario })
			.done(function (datosUsuario) {
				$("#operacions").append("<div>");
				$("#operacions div:last").addClass("nome");

				$("#operacions div.nome").append("<span>");
				$("#operacions span:last").addClass("texto").text(datosUsuario.nome);

				$("#operacions").append("<div>");
				$("#operacions div:last").addClass("puntos");

				$("#operacions div.puntos").append("<span>");
				$("#operacions span:last").addClass("numero").text(datosUsuario.puntos);
			})
			.fail(function (error) {
				alert("Error en la lectura de la base de datos cargarDatosUsuario.php. " + error)
			});
	}

	// PANTALLA 2.
	//Permitir premer nas iconas.
	$(document).on("click", "img.icona", function () {
		tipoClase = $(this).data("clase");
		codigoIcona = $(this).data("codigo");
		// Cargar as miniaturas correspondentes á icona premida.
		cargarMiniaturas();

		//Amosar un botón na zona da dereita para poder retroceder de pantalla.
		$("#operacions").append("<button id='inicio'>");
		$("#inicio").text("Inicio");
	});

	function cargarMiniaturas() {
		$.getJSON("servidor/cargarMiniaturas.php", { codigo: codigoIcona })
			.done(function (datosMiniaturas) {
				console.log(datosMiniaturas);
				$("#solucion").empty();
				$.each(datosMiniaturas, function () {
					$("#solucion").append("<img>");
					$("#solucion img:last")
						.addClass("miniatura")
						.attr("src", "imaxes/" + tipoClase + "/" + this.idImaxe + ".png")
						.attr("data-codigo", this.idImaxe);
					if (this.resolta == 1) {
						$("#solucion img:last").addClass("resolta");
					}
				});
			})
			.fail(function (error) {
				alert("Error en la lectura de la base de datos cargarMiniaturas.php. " + error)
			});
	}

	$(document).on("click", "#inicio", function () {
		$("#solucion, #operacions").empty();
		inicio();
	});

	// Permitir premer nas miniaturas.
	$(document).on("click", "img.miniatura", function () {
		let codigoMiniatura = $(this).data("codigo");

		// Amosar un botón na zona da dereita para poder retroceder de pantalla.
		$("#operacions").append("<button id='clases'>");
		$("#operacions button:last")
			.text(tipoClase);

		$.getJSON("servidor/cargarLogo.php", { codigo: codigoMiniatura })
			.done(function (datosLogo) {
				console.log(datosLogo.nome);

				// PANTALLA 3.
				// Amosar o logo que o usuario debe atinar.
				$("#solucion").empty();
				$("#solucion").append("<div>");
				$("#solucion div").addClass("logo");
				$("#solucion div.logo").append("<img>");
				$("#solucion div.logo img").addClass("logo");
				$("#solucion div.logo img")
					.attr("src", "imaxes/" + tipoClase + "/" + codigoMiniatura + ".png");

				$("#solucion").append("<div>");
				$("#solucion div:last").addClass("ocos");

				$("#solucion").append("<div>");
				$("#solucion div:last").addClass("letras");

				// Amosar tantos ocos como letras hai que atinar, tendo en conta que debemos separar as palabras.
				numLetras = (datosLogo.nome).length;

				for (let i = 0; i < numLetras; i++) {
					$("div.ocos").append("<div>");
					$("div.ocos div:last").addClass("oco");
					$("div.ocos div:last").append("<div>");
					$("div.ocos div:last > div").addClass("letra");
				}

				const MINIMO = 0;
				const MAXIMO = 16;
				// Almaceno en una variable el nombre del logo separado por letras y guardado en un array.
				let abecedario = datosLogo.nome.toUpperCase().split("");
				console.log(abecedario);

				// Bucle para generar una letra aleatoria.
				for (let i = 0; i < MAXIMO - numLetras; i++) {
					// Almaceno en una variable cada letra aleatoria generada.
					abecedario.push(letraAleatoria());
					/* NO */ shuffle(abecedario);
				}

				// Construyo y añado la letra escodida.
				let letraEscogida = "";
				for (let i = MINIMO; i < MAXIMO; i++) {
					$("div.letras").append("<div>");
					$("div.letras div:last").addClass("letra");
					letraEscogida = "<span class='letra'>" + abecedario[i] + "</span>";
					$("div.letra:last").append(letraEscogida);
				}
			})
			.fail(function (error) {
				alert("Error en la lectura de la base de datos cargarLogo.php. " + error);
			});
	});

	// Amosar 16 letras por orde alfabética entre as que se deben atopar as que permiten solucionar o problema.
	function letraAleatoria() {
		const ASCII_A = 65;
		const ASCII_Z = 90;
		let letra = Math.floor(Math.random() * (ASCII_Z - ASCII_A)) + ASCII_A;
		/* let letraEscogida = "<span class='letra'>" + String.fromCharCode(letra) + "</span>"; */
		console.log(ASCII_A, ASCII_Z, letra);
		return String.fromCharCode(letra);
	}

	// Amosar un botón na zona da dereita para poder retroceder de pantalla.
	$(document).on("click", "#clases", function () {
		$("#solucion").empty();
		$("#clases").remove();
		cargarMiniaturas();
	});

	/*
		
		Converter as letras en elementos arrastrables.
		Crear a zona de recepción nos ocos.
		Eliminar o efecto de arrastre nas letras xa colocadas.
		Eliminar como zona de recepción o oco onde se colocou unha letra.
		Empregar efectos para sumar 10 puntos se o nome se corresponde coa imaxe e restar 5 puntos se non se corresponde.
		Actualizar a base de datos cos novos puntos.
		Actualizar a base de datos se o logo está acertado.
		Ocultar as letras sobrantes cando se acerta o logo.
		Permitir premer nas letras colocadas para quitalas volvendo a convertir a letra en arrastrable (a letra volve a súa posición inicial) e o oco en zona de recepción.
	*/

});