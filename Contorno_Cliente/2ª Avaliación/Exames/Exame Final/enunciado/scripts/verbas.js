$(function() {
	// Crear as variables globais necesarias
	// Crear o contedor do son
	// Amosar o número de letras (MÍNIMO 3 e MÁXIMO 10) posibles nas verbas
	// Amosar a puntuación
	// Amosar o idioma
	// Escoller o número de letras
	// Cambiar o elemento do menú activo
	// Escoller o idioma das verbas
	// Desactivar a icona correspondente ao idioma usado
	// Cargar o abecedario do idioma	
	// Crear o taboleiro coas letras
	// Crear a zona da solución
	// Actualizar o número de columnas no CSS
	// Facer arrastrables as letras
	// Crear as zonas de recepción
	// Colocar a letra no oco
	// Facer draggable a letra seguinte na columna
	// Eliminar a letra usada
	// Desactivar o oco no que deixamos a letra
	// Comprobar se todos os ocos están ocupados
	// Comprobar palabra correcta
	// Indicar palabra correcta mediante un son
	// Sumar puntos
	// Indicar palabra incorrecta mediante un son
	// Restar puntos
	// Actualizar visualmente a puntuación
	// Reiniciar solucion
	// Comprobar se o xogo rematou e indicalo mediante un son
	// Controlar posibles erros da BD

	// Escolle aleatoriamente unha letra das posibles e a elimina para non repetila
	// Recibe a posición da letra dentro do taboleiro
	// Devolve a imaxe que tapa a letra e a fila, columna e letra como atributos 
	function letraAleatoria(i,j) {
		var letra = $('#taboleiro').find('#'+i+'_'+j).text();
		$('#taboleiro').find('#'+i+'_'+j).remove();
		return {
			letra: letra,
			fila: i,
			columna: j,
			imaxe: '<img src="imaxes/'+letra+'.png" alt="'+letra+'">'
		};	
	}
	
	// Actualiza visualmente a puntuación
	// Recibe os puntos
	function actualizarPuntos(puntos) {
		$("#puntos").text(puntos);
		
	}
	
	// Emitir un son
	// Recibe un nome de ficheiro
	function musica(ficheiro) {
		var audio = new Audio("sons/"+ficheiro);
		audio.play();
	}
});