function control2(){
	enunciado.innerHTML = 
		'<p>Xerar tres botóns nos que aparezan 3 números aleatorios entre 1 e 10; ao premer en calquera deles debe aparecer, dependendo de se é par ou impar, o nome dunha froita ou a súa imaxe.';
	const MAXIMO = 10;
	datos.innerHTML = 
		'<button type="button" onClick="pintar(this.textContent);">' + Math.ceil(Math.random() * MAXIMO) + '</button>' +
		'<button type="button" onClick="pintar(this.textContent);">' + Math.ceil(Math.random() * MAXIMO) + '</button>' +
		'<button type="button" onClick="pintar(this.textContent);">' + Math.ceil(Math.random() * MAXIMO) + '</button>';
	solucion.innerHTML = '';
}

function pintar(numero){
	numero = parseInt(numero);
	var texto = '';
	switch(numero) {
		case 1: texto = 'framboesa'; break;
		case 2: texto = 'kiwi'; break;
		case 3: texto = 'laranxa'; break;
		case 4: texto = 'limón'; break;
		case 5: texto = 'mandarina'; break;
		case 6: texto = 'mazá'; break;
		case 7: texto = 'milgranda'; break;
		case 8: texto = 'pera'; break;
		case 9: texto = 'pexego'; break;
		case 10: texto = 'pomelo'; break;
		default: texto = 'ERRO: Non hai froita asignada a ese número'; 
	}
	if (numero % 2 == 0) {
		texto = '<img src="./imaxes/froitas/' + texto + '.png">';
	}	
	solucion.innerHTML = texto;
}