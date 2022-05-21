$(document).ready(function () {
	usuario = 1;

	var pantalla1 = "";
	/* 	PANTALLA 1
		Cargar as clases ou niveis do usuario na columna da esquerda.
	 */
	$.getJSON("servidor/cargarClasesUsuario.php", { codigo: usuario })
		.done(function (datosClasesUsuario) {

			$.each(datosClasesUsuario, function () {
				tipoClase = this.nome;
				console.log(this.nome);
				$("#solucion").append("<div>");
				$("#solucion div:last").addClass("clase");

				$(".clase:last").append("<div>").append("<div>").append("<div>");

				$(".clase:last div:first").addClass("icona");
				$(".clase:last div:eq(1)").addClass("texto");
				$(".clase:last div:last").addClass("numero");

				$(".texto:last").append("<span class='texto'>");
				$(".numero:last").append("<span class='numero'>");

				$(".icona:last").html("<img class='icona' src='imaxes/iconas/" + this.idClase + ".png' data-codigo='" + this.idClase + "' data-clase='" + this.nome + "'/>");
				$(".texto:last").html(this.nome);
				$(".numero:last").html(this.solucionadas + "/" + this.numero);
			});
		})
		.fail(function (error) {
			alert("Error en la lectura de la base de datos cargarClasesUsuario.php. " + error)
		});

	//Cargar o nome e puntos do usuario que xoga na columna da dereita.
	$.getJSON("servidor/cargarDatosUsuario.php", { codigo: usuario })
		.done(function (datosUsuario) {
			//console.log(datosUsuario);
			$("#operacions").html("<div class='nome'><span class='texto'>" + datosUsuario.nome + "</span></div><div class='puntos'><span class='numero'>" + datosUsuario.puntos + "</span></div>");
		})
		.fail(function (error) {
			alert("Error en la lectura de la base de datos cargarDatosUsuario.php. " + error)
		});

	//Permitir premer nas iconas.

	// PANTALLA 2.
	/*  Amosar un botón na zona da dereita para poder retroceder de pantalla.
		Cargar as miniaturas correspondentes á icona premida.
		Permitir premer nas miniaturas.
	*/
	$(document).on("click", "img.icona", function () {
		let pantalla2 = "";
		let nombre= $(this).data('clase');
		$.getJSON("servidor/cargarMiniaturas.php", { codigo: usuario })
		.done(function (datosMiniaturas) {
				console.log(datosMiniaturas);
				console.log("Nombre: " + nombre);
				$.each(datosMiniaturas, function () {
					pantalla2 += "<img class='miniatura' src='imaxes/" + nombre + "/" + this.idImaxe + ".png' data-codigo='" + this.idImaxe + "' />";
				});

				$("#solucion").html(pantalla2);
				let enlace = "<button type='button'><a href='logos.html'>Inicio</a></button>";
				$("#operacions").append(enlace);
			})
			.fail(function (error) {
				alert("Error en la lectura de la base de datos cargarDatosUsuario.php. " + error)
			});
	});



	// PANTALLA 3.
	/*  Amosar un botón na zona da dereita para poder retroceder de pantalla.
		Amosar o logo que o usuario debe atinar.
		Amosar tantos ocos como letras hai que atinar, tendo en conta que debemos separar as palabras.
		Amosar 16 letras por orde alfabética entre as que se deben atopar as que permiten solucionar o problema.
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