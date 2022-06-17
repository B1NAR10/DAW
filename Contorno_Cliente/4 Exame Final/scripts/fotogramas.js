$(function() {

	

	$("#mensaxe").dialog({
		
		mensaxes()

		
	});	

	// Crear as dúas zonas principais
	// Amosar a opción de LOGIN
	// Dotar de funcionalidade ao botón de LOGIN
	// Dotar de funcionalidade ao botón de LOGOUT	
	// Comprobar usuario
		// Cambiar o botón de Login polo de Logout
		// Actualizar o nome do xogador e os puntos almacenados
		// Traer as películas dese usuario
		// Amosar mensaxe de erro
	// Controlar o evento para saír das mensaxes de introdución de usuario e de erro	
	
	function traerPeliculas(usuario) {
		// Creamos os vectores necesarios para almacenar as películas a acertar e os contadores de cantas están xa resoltas (ben ou mal),
		//son 10 xéneros máis as series
		// Traer as películas --- veñen marcadas como xa acertadas, falladas ou non intentadas
		// Gárdanse no vector 'vectorPeliculas'
		$.getJSON("servidor/traerPeliculas.php", {codigo:usuario},function(peliculas) {
			
			console.log(peliculas);
			
		
			
		});	
		
	}	 
		
	function cargarMenu() {		
		// Cargar o menú	
			// Construír os botóns dos xéneros e as estatísticas inferiores
	}
		
	// Recibe o texto a colocar no botón
	function construirTexto(texto) {
		// Crea visualmente o texto
		// Devolve o texto construído
	}

	// Dotar de funcionalidade aos botóns dos xéneros	
		// Traer da base de datos os fotogramas das películas a adiviñar
		// Gardar os datos no vector vectorDatos
			// Gardar nun vector os fotogramas que debe acertar
			// Amosar o carrusel de fotogramas

	function amosarCarrusel() {
		// Borrar carrusel anterior
		// Botón Retroceder
		// Construír o carrusel
		// Amosar as catro imaxes de forma aleatoria
		// Botón Avanzar
	}

	// Avanzar no carrusel de películas

	// Retroceder no carrusel de imaxes

	// Premer na imaxe que non corresponde á película
		// Cambiar a opacidade do fotograma ao 25%
		// Impedir cambiar o fotograma escollido
		// Sumar ou restar puntuación
				// Se acertou sumar 25 puntos e se fallou restar 25 puntos
				// Comprobar que os puntos non son negativos
				// Actualizar visualmente a puntuación	
				// Amosar os ocos e as letras

	// Amosar letras e ocos	
	function amosarLetrasOcos(pelicula) {
		// Construir ocos e letras
		// Gardar no oco o carácter ASCII da letra
		// Ordenar as letras alfabeticamente
		// Converter as letras en elementos arrastrables
		// Crear a zona de recepción
		// Colocar letra no oco
		// Eliminar droppable
		// Comprobar solucion
		// Sumar e restar puntos por acertar a película (100 e -50)
	}	

	function mensaxes(tipo) {
		var contido = '';
		switch (tipo) {
			case 'login':
				contido = 
					'<h3>Introduce as túas credenciais de acceso</h3>' +
					'<div id="divFormulario">' +
						'<fieldset class="login">' +
							'<legend>Detalles de Acceso</legend>' +
							'<div class="fieldset">' +
								'<label for="usuario">Usuario</label>' +
								'<input type="text" id="usuario"/>' +
							'</div>' +
							'<div class="fieldset">' +
								'<label for="contrasinal">Contrasinal</label>' +
								'<input type="password" id="contrasinal"/>' +
							'</div>' +
						'</fieldset>' +	
						'<div id="comprobar">' +
							'<input type="button" id="enviar" value="Acceder">' +
						'</div>' +
					'</div>';
				break;
			case 'erro':
				contido =
					'<h3>Usuario ou contrasinal incorrectos</h3>' +
					'<div class="mensaxeErro">Faga dobre click para eliminar o cadro de diálogo</div>';
				break;	
			default:
		}	
		return contido;				
	}	
});
