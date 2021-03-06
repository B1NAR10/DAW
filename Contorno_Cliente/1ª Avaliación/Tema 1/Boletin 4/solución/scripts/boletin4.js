function resolver_4_1() {
	var texto = '';
	const MAXIMO = 100;
	var vector = new Array(MAXIMO);
	
	for (let i=0; i<MAXIMO; i++){
		vector[i] = (Math.random() * 100).toFixed(0);
		texto += vector[i] + ' ';
	}
	amosarResultado(texto);
}

function resolver_4_2() {
	var texto = '';
	var suma = 0;	
	const FILAS = 5;
	const COLUMNAS = 6;
	var matriz = new Array(FILAS);
	
/*	texto = '<table id="taboa_4_2">';
	for (let i=0; i<FILAS; i++){
		matriz[i] = new Array(COLUMNAS);
		texto += '<tr>';
		for (let j=0; j<COLUMNAS; j++) {
			matriz[i][j] = i;
			suma += matriz[i][j];
			texto += '<td>' + matriz[i][j] + '</td>';
		}
		texto += '</tr>';
	}
	texto += '</table>';*/

	for (let i=0; i<FILAS; i++){
		matriz[i] = new Array(COLUMNAS);
	}

	for (let i=0; i<FILAS; i++){
		for (let j=0; j<COLUMNAS; j++) {
			matriz[i][j] = i;
		}
	}

	texto = '<table id="taboa_4_2">';
	for (let i=0; i<FILAS; i++){
		texto += '<tr>';
		for (let j=0; j<COLUMNAS; j++) {
			texto += '<td>' + matriz[i][j] + '</td>';
		}
		texto += '</tr>';
	}
	texto += '</table>';
		
	for (let i=0; i<FILAS; i++){
		for (let j=0; j<COLUMNAS; j++) {
			suma += matriz[i][j];
		}
	}
	console.log(matriz);
	amosarResultado(texto + suma);
}

function resolver_4_3() {
	var texto = 'Neste vector hai os seguintes elementos: [';
	const MAXIMO = 10;
	const MINIMO = -10;
	var vector = new Array(MAXIMO);
	var numPositivos = 0;
	var numNegativos = 0;
	var numCeros = 0;

	for (let i=0; i<MAXIMO; i++){
		vector[i] = Math.round(Math.random()*(MAXIMO-MINIMO) + MINIMO);
		if (vector[i] == 0) {
			numCeros++;	
		} else if (vector[i] > 0) {
			numPositivos++;
		} else {	
			numNegativos++;
		}	
		texto += vector[i] + ',';
	}
	texto = texto.substring(0,texto.length-1) + ']';
	texto += '<br>No vector hai ' + numNegativos + ' números negativos, ' + numPositivos + ' números positivos e ' + numCeros + ' ceros';

	amosarResultado(texto);
}

function resolver_4_4(numero) {
	if (isNaN(numero)) {
		texto = 'Introduce un número válido';
	} else {
		vector.push(numero);
		texto = 'Vector ordenado: ' + vector.sort(function (a,b) { return a-b; });
		iteracion++;
		pedirDatos(4,4);
	}	
	amosarResultado(texto);
}

function resolver_4_5(numero) {
	const CANTIDADE = 10;
	var texto = '';
	if (isNaN(numero)) {
		texto = 'Introduce un número válido';
	} else {
		numero = parseFloat(numero);
		vector.push(numero);
		suma += numero;
		if (vector.length == CANTIDADE) {
			var media = suma / CANTIDADE;
			texto = '[' + vector + ']<br>A suma dos elementos é igual a: ' + suma + '<br>A media dos elementos é igual a: ' + media;
		} else {
			iteracion++;
			pedirDatos(4,5);
		}		
	}	
	amosarResultado(texto);
}

function resolver_4_6(numero) {
	var texto = '';
	for (let i=0; i<numero; i++ ) {
		texto += document.getElementById('numero_' + i + '_' + i).value + ' ';
	}			
	amosarResultado(texto);
}

function resolver_4_7(filas,columnas) {
	var texto = '';
	for (let i=0; i<columnas; i++ ) {
		for (let j=0; j<filas; j++ ) {
			texto += document.getElementById('numero_' + j + '_' + i).value + ' ';
		}
		texto += '<br>';			
	}			
	amosarResultado(texto);
}

function resolver_4_8(numero) {
	var suma = 0;
	if (isNaN(numero) || numero<1 || (numero % 1 != 0)) {
		texto = 'Debes introducir un número válido';
	} else {
		var texto = 'O vector inicial é: [';
		for (let i=0; i<numero; i++ ) {
			aleatorio = Math.ceil((Math.random() * 100));
			vector[i] = aleatorio;
			texto += vector[i] + ',';
			vector[i] = suma;
			suma += aleatorio;
		}			
		texto = texto.substring(0,texto.length-1) + ']<br>O vector final é: [' + vector + ']';
	}
	amosarResultado(texto);	
}

function resolver_4_9(numero) {
	var texto = '';
	if (isNaN(numero) || numero<1 || (numero % 1 != 0)) {
		texto = 'Debes introducir un número válido';
	} else {
		var texto = 'O vector inicial é: [';
		for (let i=0; i<numero; i++ ) {
			aleatorio = Math.ceil((Math.random() * 100));
			vector[i] = aleatorio;
		}			
		texto += vector + ']';
		var auxiliar = new Array();
		texto += '<br>Reverso do vector: [';
		for (let i=0; i<vector.length/2; i++) {
			auxiliar[i] = vector[vector.length-i-1];
			auxiliar[vector.length-i-1] = vector[i];
		}
		texto += auxiliar + ']';
	}
	amosarResultado(texto);	
}

function resolver_4_10(numero) {
	const CANTIDADE = 10;
	var texto = '';
	if (isNaN(numero)) {
		texto = 'Introduce un número válido';
	} else {
		numero = parseFloat(numero);
		vector.push(numero);
		suma += numero;
		if (vector.length == CANTIDADE) {
			var boton = document.getElementById('boton');
			boton.disabled = true;
			var media = suma / CANTIDADE;
			var contador = 0;
			for (let i=0; i<vector.length; i++) {
				if (vector[i] > media) { contador++; }
			}	
			texto = '[' + vector + ']<br>Hai ' + contador + ' elementos maiores que a media';
		} else {
			iteracion++;
			pedirDatos(4,10);
		}		
	}	
	amosarResultado(texto);
}

function resolver_4_11() {
	const ANCHO = 8;
	xerarTaboleiro(ANCHO);
	colocarPezas();
	pintarTaboleiro();

}

function xerarTaboleiro(ancho) {
	pezas = new Array(ancho);
	for (let i=0; i<pezas.length; i++) {
		pezas[i] = new Array(ancho);
		for (j=0; j<pezas[i].length; j++) {
			pezas[i][j] = new Array(2);
			pezas[i][j][0] = '&nbsp;';
			pezas[i][j][1] = '&nbsp;';			
		}
	}	
}

function colocarPezas() {	
	pezas[0][0][0] = 'T';
	pezas[0][0][1] = 'N';
	pezas[0][1][0] = 'C';
	pezas[0][1][1] = 'N';
	pezas[0][2][0] = 'B';
	pezas[0][2][1] = 'N';
	pezas[0][3][0] = 'D';
	pezas[0][3][1] = 'N';
	pezas[0][4][0] = 'R';
	pezas[0][4][1] = 'N';
	pezas[0][5][0] = 'B';
	pezas[0][5][1] = 'N';	
	pezas[0][6][0] = 'C';
	pezas[0][6][1] = 'N';	
	pezas[0][7][0] = 'T';
	pezas[0][7][1] = 'N';	
	pezas[1][0][0] = 'P';
	pezas[1][0][1] = 'N';
	pezas[1][1][0] = 'P';
	pezas[1][1][1] = 'N';
	pezas[1][2][0] = 'P';
	pezas[1][2][1] = 'N';
	pezas[1][3][0] = 'P';
	pezas[1][3][1] = 'N';
	pezas[1][4][0] = 'P';
	pezas[1][4][1] = 'N';
	pezas[1][5][0] = 'P';
	pezas[1][5][1] = 'N';
	pezas[1][6][0] = 'P';
	pezas[1][6][1] = 'N';
	pezas[1][7][0] = 'P';
	pezas[1][7][1] = 'N';
	pezas[6][0][0] = 'P';
	pezas[6][0][1] = 'B';
	pezas[6][1][0] = 'P';
	pezas[6][1][1] = 'B';
	pezas[6][2][0] = 'P';
	pezas[6][2][1] = 'B';
	pezas[6][3][0] = 'P';
	pezas[6][3][1] = 'B';
	pezas[6][4][0] = 'P';
	pezas[6][4][1] = 'B';
	pezas[6][5][0] = 'P';
	pezas[6][5][1] = 'B';
	pezas[6][6][0] = 'P';
	pezas[6][6][1] = 'B';
	pezas[6][7][0] = 'P';
	pezas[6][7][1] = 'B';
	pezas[7][0][0] = 'T';
	pezas[7][0][1] = 'B';
	pezas[7][1][0] = 'C';
	pezas[7][1][1] = 'B';
	pezas[7][2][0] = 'B';
	pezas[7][2][1] = 'B';
	pezas[7][3][0] = 'D';
	pezas[7][3][1] = 'B';
	pezas[7][4][0] = 'R';
	pezas[7][4][1] = 'B';
	pezas[7][5][0] = 'B';
	pezas[7][5][1] = 'B';	
	pezas[7][6][0] = 'C';
	pezas[7][6][1] = 'B';	
	pezas[7][7][0] = 'T';
	pezas[7][7][1] = 'B';
}

function pintarTaboleiro() {
	texto = '<table>';
	for (let i=0; i<pezas.length; i++){
		texto += '<tr>';
		for (let j=0; j<pezas[i].length; j++) {
			if ((i+j) % 2 == 0) {
				clase = 'fondoBranco';			
			} else {
				clase = 'fondoNegro';
			}
			if (pezas[i][j][0] == '&nbsp;') {
				peza = '';
			} else {
				peza = '<img src="imaxes/xadrez/' + pezas[i][j][0] + pezas[i][j][1] + '.png">';
			}	
			texto += '<td class="' + clase + '">' + peza + '</td>';
		}
		texto += '</tr>';
	}
	texto += '</table>';
	amosarResultado(texto);
}

function resolver_4_12(decision) {
	vector_A = [1,'a',2,'t'];
	vector_B = [3,2,1,1];
	
	calcularSolucion(decision,vector_A,vector_B);
}

function calcularSolucion(decision,vector_A,vector_B) {
	var texto = '';	
	switch(decision) {
		case 'union':
			var vectorAuxiliar = vector_A.concat(vector_B);
			vectorAuxiliar = new Set(vectorAuxiliar);
			vectorAuxiliar = Array.from(vectorAuxiliar);
			texto = vectorAuxiliar.sort();
			break;
		case 'interseccion':
			var vectorInterseccion = new Array();
/*			var vectorAuxiliar = vector_A.concat(vector_B);
			vectorAuxiliar.sort();
			for (let i=0; i<vectorAuxiliar.length; i++) {
				if (vectorAuxiliar[i] == vectorAuxiliar[i+1]) {
					vectorInterseccion.push(vectorAuxiliar[i]);
				}	
			}	
			vectorInterseccion = new Set(vectorInterseccion);
			vectorInterseccion = Array.from(vectorInterseccion);*/
			
			vectorInterseccion = vector_A.filter(valor=>vector_B.includes(valor));			
			texto = vectorInterseccion;			
			break;
		default:
			texto = 'Caso non definido';
	}			
	amosarResultado(texto);
}

function resolver_4_13(numero) {
	var texto = 'Debes introducir un número natural';
	if (!isNaN(numero) && numero>0 && (numero % 1 == 0)) {
		numero = parseInt(numero);
		var vector = new Array(numero);
		var incompleto = true;
		var MAXIMO = 100;
		var contador = 0;
		texto = 'O vector aleatorio ten os seguintes números: ';
		while (incompleto) {
			var primo = Math.floor(Math.random() * MAXIMO);
			if (esPrimo(primo)) { 
				vector[contador] = primo;
				contador++;
				texto += primo + ' ';
			}
			if (contador == numero) { incompleto = false; }
		}
		texto += '<br>O máximo é: ' + Math.max(...vector);
	}
	amosarResultado(texto);
}



