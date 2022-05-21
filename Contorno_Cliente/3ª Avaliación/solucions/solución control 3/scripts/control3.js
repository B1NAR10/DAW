function control3(){
	enunciado.innerHTML = '<p>Fai que un camiñante que se encontra no lado esquerdo da pantalla vaia cara á dereita premendo co rato sobre el.</p>';
	datos.innerHTML = '';
	solucion.innerHTML = '<img id="caminante" src="./imaxes/caminante/0.png" onclick="mover();">';
	posicion = 0;
}

function mover(){
	const NUMERO_DE_IMAXES = 10;
	for (let i=0; i<NUMERO_DE_IMAXES; i++) {
		moverImaxe(i);
	}	
}
