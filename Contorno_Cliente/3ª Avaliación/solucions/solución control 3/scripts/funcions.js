function moverImaxe(imaxe) {
	setTimeout(function () { 
		posicion += 0.5;
		caminante.style.marginLeft = posicion + 'em';
		caminante.src = './imaxes/caminante/' + imaxe + '.png';
	}, 250 * imaxe);
}
