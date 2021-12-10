var NUMERO_PRACTICAS = 5;


function cargarMenu() {
    var texto = ''; 
	for(var i=1; i<=NUMERO_PRACTICAS; i++) {
		texto += '<div id="practica' + i + '" class="menu" onClick="cargarSubmenu(' + i + ');">Práctica ' + i + '</div>';
	}		
	menu.innerHTML = texto;	
}

function cargarSubmenu(opcion) {
    inicializarEstetica(opcion);
	switch (opcion) {
        case 1: NUMERO_EXERCICIOS = 16; break;
        case 2: NUMERO_EXERCICIOS = 18; break;
        case 3: NUMERO_EXERCICIOS = 23; break;
        case 4: NUMERO_EXERCICIOS = 13; break;
        default: NUMERO_EXERCICIOS = 0;            
    }
    var texto = '<div>'; 
	for(var i=1; i<=NUMERO_EXERCICIOS; i++) {
		texto += '<div id="exercicio' + i + '" class="submenu" onClick="iteracion = 1; vector = new Array(); suma = 0; pedirDatos(' + opcion + ',' + i + ');">Exercicio ' + i + '</div>';
	}    
	texto += '</div>';
    submenu.innerHTML = texto;
}

function opcionSubmenu(opcion) {
	for(var i=1; i<=NUMERO_EXERCICIOS; i++) {
		document.getElementById('exercicio' + i).classList.remove("activo");
	}
	document.getElementById('exercicio' + opcion).classList.add("activo");
}

function inicializarEstetica(opcion) {
	for(var i=1; i<=NUMERO_PRACTICAS; i++) {
		document.getElementById('practica' + i).classList.remove("activo");
	}
	document.getElementById('practica' + opcion).classList.add("activo");
    submenu.innerHTML = '';
    enunciado.innerHTML = '';
    datos.innerHTML = '';
    resultado.innerHTML = '';    
}

function amosarResultado(texto) {
    resultado.innerHTML = texto;
}

function pedirDatos(practica,opcion){
	opcionSubmenu(opcion);
	switch (practica) {
		case 1: break;
		case 2: break;
		case 3: 
			switch (opcion) {
				case 1: 
					enunciado.innerHTML = 'Suma dos primeiros 50 números naturais'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 2: 
					enunciado.innerHTML = 'Imprimir un contador do 0 ao 100'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 3: 
					enunciado.innerHTML = 'Suma dos números pares existentes entre o 0 e o 100'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 4: 
					enunciado.innerHTML = 'Imprimir os números primos existentes entre o 0 e o 100'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 5:	
					enunciado.innerHTML = 'Cálculo do Factorial dun número calquera'; 
					datos.innerHTML = 
						'Número: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;
				case 6:
					enunciado.innerHTML = 'Imprime a serie 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5...';
					datos.innerHTML = 
						'Límite: <input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;	
				case 7:
					enunciado.innerHTML = 'Imprime a serie 0, 1, -1, 2, -2, 3, -3, 4, -4...';
					datos.innerHTML = 
						'Límite: <input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;
				case 8:
					enunciado.innerHTML = 'Imprime a serie de Fibonacci; é dicir, a serie que, empezando polo 1, presenta como seguinte elemento a suma dos dous anteriores: 1, 1, 2, 3, 5, 8, 13...';
					datos.innerHTML = 
						'Límite: <input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;
				case 9:
					enunciado.innerHTML = 'Imprime a serie 0, 1, 4, 3, 16, 5, 36...; é dicir n<sup>2</sup>, n+1, (n+2)<sup>2</sup>, n+3...';
					datos.innerHTML = 
						'Límite: <input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;
				case 10:
					enunciado.innerHTML = 'Dado un número N, amosar por pantalla todas as combinacións de dous números naturais que sumados dean N';
					datos.innerHTML = 
						'Límite: <input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;
				case 11:
					enunciado.innerHTML = 'Calcular a probabilidade de que dous dados lanzados sumen 7 e amósala por pantalla';
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;	
				case 12:
					enunciado.innerHTML = 'Dados N números, indica cal é o maior';
					datos.innerHTML = 
						'Número: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;	
				case 13:
					enunciado.innerHTML = 'Dados 3 números, calcular o máximo común divisor';
					datos.innerHTML = 
						'Número 1: <input id="numero1" type="text"/>' +
						'Número 2: <input id="numero2" type="text"/>' +
						'Número 3: <input id="numero3" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero1.value,numero2.value,numero3.value);">Premer</button>';
					break;	
				case 14:
					enunciado.innerHTML = 'Dado un número, sacar por pantalla a suma dos díxitos que o forman';
					datos.innerHTML = 
						'Número: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;
				case 15:
					enunciado.innerHTML = 'Dado un número, indicar se é par, se é primo e se é cadrado perfecto';
					datos.innerHTML = 
						'Número: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;					
				case 16:
					enunciado.innerHTML = 'Escribir un programa que lea N números enteiros e indique en que posición introducimos o valor máximo';
					datos.innerHTML = 
						'Número: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;					
				case 17:
					enunciado.innerHTML = 'Escribir un programa que calcule o máximo común divisor de dous números naturais positivos segundo o algoritmo de Euclides, que consiste en ir restando o número menor ao maior ata obter dous números iguais, momento no que temos o máximo común divisor';
					datos.innerHTML = 
						'Número 1: <input id="numero1" type="text"/>' +
						'Número 2: <input id="numero2" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero1.value,numero2.value);">Premer</button>';
					break;					
				case 18:
					enunciado.innerHTML = 'Escribir un programa que amose todas as fichas do xogo do dominó';
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;					
				case 19:
					enunciado.innerHTML = 'Debuxar por pantalla con asteriscos o número de liñas que introduce o usuario (cada liña debe ter o número de asteriscos que se corresponde co número de liña)';
					datos.innerHTML = 
						'Número de liñas: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;					
				case 20:
					enunciado.innerHTML = 'Debuxar por pantalla con asteriscos un cadrado usando o número de liñas que introduce o usuario (a liña inferior e superior debe ter o número de asteriscos que introduce o usuario)';
					datos.innerHTML = 
						'Número de liñas: <input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;					
				case 21:
					enunciado.innerHTML = 
						'<p>Vamos facer unha simulación do xogo da canción infantil <span class="negra">pim-pam-pum</span>. Consiste en ir dicindo alternativamente cada neno os números naturais dende o 1 ata o 30 de maneira que:</p>' +
						'<ul>' +
							'<li>Se o número é divisible por 2 dise <span class="negra">pim</span></li>' +
							'<li>Se o número é divisible por 3 dise <span class="negra">pam</span></li>' +
							'<li>Se o número é divisible por 5 dise <span class="negra">pum</span></li>' +
							'<li>Se é divisible por máis dun número faise a combinación correspondente</li>' +
							'<li>Se non é divisible por ningún dos números dise o número</li>' +
						'</ul>' +
						'<p>NOTA: </p>' +
						'<p>En vez de dicilo, pintámolo por pantalla en liñas distintas sabendo que xogan 3 persoas e indicando cal delas está a falar en cada momento.</p>' +
						'<p>EXEMPLO:</p>' +
						'<code>Persoa 1: 1</code><br>' +
						'<code>Persoa 2: pim</code><br>' +
						'<code>Persoa 3: pam</code><br>' +
						'<code>Persoa 1: pim</code><br>' +
						'<code>Persoa 2: pum</code><br>' +
						'<code>Persoa 3: pim pam</code><br>' +
						'<code>Persoa 1: 7</code><br>' +
						'<code>...</code>';
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;	
				case 22:
					enunciado.innerHTML = 
						'<p>Crea unha xanela coa pregunta <span class="negra">Ata que número quere calcular?</span> de forma que non se peche ata que se prema un número enteiro positivo. Cando se peche debe sacar por pantalla en liñas diferentes de maior a menor a suma dos números primos ata o valor introducido, sen duplicados</p>';
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Amosar a solución</button>';
					break;
				case 23:
					enunciado.innerHTML = 
						'<p>Precisamos realizar un control da existencia ou non de determinados ficheiros nun cartafol; todos estes ficheiros teñen un número de rexistro consecutivo.</p><p>O programa debe permitir escoller:</p><ul><li>número de rexistro inicial</li><li>número de rexistro final</li><li>cartafol onde están os ficheiros</li></ul><p><br />O resultado debe indicar que ficheiros faltan.</p>';
					datos.innerHTML = 
						'<p><label for="inicial">Número de rexistro inicial: </label><input id="inicial"/></p>' +
						'<p><label for="final">Número de rexistro final: </label><input id="final"/></p>' +
						'<p><label for="cartafol">Cartafol: </label><input type="file" id="cartafol" webkitdirectory directory multiple/></p>' +
						'<p><button type="button" onclick="resolver_' + practica + '_' + opcion + '(inicial.value,final.value)">Comprobar</button></p>';
					break;					
				default: alert('Exercicio inexistente');
			}
			break;
		case 4: 
			switch (opcion) {
				case 1: 
					enunciado.innerHTML = 'Imprimir os valores dun vector de 100 elementos'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 2: 
					enunciado.innerHTML = 'Lee unha matriz de 5x6, e imprime a suma total da matriz'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 3: 
					enunciado.innerHTML = 'Lee un vector numérico de dimensión 10 e determina cantos elementos son positivos, negativos e ceros, imprimindo por pantalla cada un deles, para finalmente imprimir os contadores por pantalla'; 
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;
				case 4: 
					enunciado.innerHTML = 'Ordena ascendentemente unha serie de números dados'; 
					datos.innerHTML = 
						'<label id="mensaxe">' + iteracion + 'º elemento a ordenar: </label><input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;
				case 5:	
					enunciado.innerHTML = 'Dados 10 números, introducilos nun vector e amosar a media e a suma'; 
					datos.innerHTML = 
						'<label id="mensaxe">' + iteracion + 'º elemento a introducir: </label><input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;
				case 6:
					enunciado.innerHTML = 'Encher unha matriz 3x3 e amosar a diagonal principal';
					var FILAS = 3;
					var formulario = 'Enche a seguinte matriz:<br>';
					for (let i=0; i<FILAS; i++) {
						for (let j=0; j<FILAS; j++) {
							formulario += '<input id="numero_' + i + '_' + j + '" type="text"/>';	
						}	
						formulario += '<br>';
					}	
					datos.innerHTML = formulario +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(' + FILAS + ');">Premer</button>';
					break;	
				case 7:
					enunciado.innerHTML = 'Solicitar os datos dunha matriz 3x4 e amosala trasposta';
					var FILAS = 3;
					var COLUMNAS = 4;
					var formulario = 'Enche a seguinte matriz:<br>';
					for (let i=0; i<FILAS; i++) {
						for (let j=0; j<COLUMNAS; j++) {
							formulario += '<input id="numero_' + i + '_' + j + '" type="text"/>';	
						}	
						formulario += '<br>';
					}	
					datos.innerHTML = formulario +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(' + FILAS + ',' + COLUMNAS + ');">Premer</button>';
					break;	
				case 8:
					enunciado.innerHTML = 'Dado un vector de N elementos, modificar ese vector para que cada elemento conteña a suma dos anteriores';
					datos.innerHTML = 
						'<label for="limite">Límite: </label><input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;
				case 9:
					enunciado.innerHTML = 'Dado un vector de N elementos, devolver outro vector cos elementos ao revés';
					datos.innerHTML = 
						'<label for="limite">Límite: </label><input id="limite" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(limite.value);">Premer</button>';
					break;
				case 10:
					enunciado.innerHTML = 'Escribir un programa para ler 10 números por teclado e indicar cantos son maiores que a media';
					datos.innerHTML = 
						'<label id="mensaxe">' + iteracion + 'º elemento a introducir: </label><input id="numero" type="text"/>' +
						'<button id="boton" type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;
				case 11:
					enunciado.innerHTML = '<p>Crea unha función que reciba un vector bidimensional que contén as posicións dunha partida de xadrez e que pinte o taboleiro correspondente</p><p>NOTA: O vector contén outro vector bidimensional que indica que peza (P: peón, T: torre, C: cabalo, B: bispo, R: rei, D: dama) e de que cor (N: negro, B: branco) está colocada nesa posición';
					datos.innerHTML = 
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '();">Premer</button>';
					break;	
				case 12:
					enunciado.innerHTML = '<p>Crea unha función que reciba dous vectores e que, dependendo da decisión do usuario, xere outro vector coa unión ou intersección dos vectores iniciais.</p><p><span class="negra">NOTA: </span></p><p>No vector resultante <span class="negra">NON</span> deben aparecer elementos repetidos.</p><p><span class="negra">EXEMPLO:</span></p><code>vector_A = [1,\'a\',2,\'t\']</code><br/><code>vector_B = [3,2,1]</code><br/><code>// Os vectores solución non teñen por que estar ordenados pero seguro que así resulta máis doado ;)</code><br/><code>union = [1,2,3,\'a\',\'t\']</code><br/><code>interseccion = [1,2]</code>';
					datos.innerHTML = 
						'<button id="union" type="button" onClick="resolver_' + practica + '_' + opcion + '(this.id);">Unión</button>' +
						'<button id="interseccion" type="button" onClick="resolver_' + practica + '_' + opcion + '(this.id);">Intersección</button>';
					break;	
				case 13:
					enunciado.innerHTML = '<p>Crea un vector de números dun tamaño introducido por teclado, éncheo con números aleatorios primos menores que 100 e indica cal é o maior de todos eles</p>';
					datos.innerHTML = 
						'<label for="numero">Número de elementos: </label><input id="numero" type="text"/>' +
						'<button type="button" onClick="resolver_' + practica + '_' + opcion + '(numero.value);">Premer</button>';
					break;	
				default: alert('Exercicio inexistente');
			}
			break;

		default: alert('Práctica aínda non resolta');	
	}	
	
	resultado.innerHTML = '';
}

