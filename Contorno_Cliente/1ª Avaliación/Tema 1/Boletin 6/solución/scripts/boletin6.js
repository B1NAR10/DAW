var NUMERO_EXERCICIOS = 16;
var textoEnunciado = "ENUNCIADO: ";
var textoDatos = "DATOS: ";
var textoResultado = "RESULTADO: ";
var enunciados = new Array(NUMERO_EXERCICIOS);
var figura = '';
var signos = ['+', '-', '*', '/'];
var acertos = 0;
var erros = 0;
var numeroResultados = 0;
var intentos = 0;
var texto = '';
var auxiliar = '';
var cartosIntroducidos = 0;
var prezo = 0;
var contactos = new Array();

// pintarMenu: Inicializa o menú
function pintarMenu() {
	titulo.innerHTML = "<h1>BOLETÍN 6: Mesturando a sintaxe</h1>";
	iniciarEnunciados();
	var texto = "";
	for (var i=0; i<NUMERO_EXERCICIOS; i++) {	
		texto += "<div id='exercicio" + i + "' class='menu' onclick='exercicio(" + i + ")'> Exercicio " + (i+1) + "</div>";
	}
	menu.innerHTML = texto;
}

// iniciarEnunciados: Inicializa o vector cos enunciados dos exercicios
function iniciarEnunciados() {
	for(var i=0; i<NUMERO_EXERCICIOS; i++)
	{
		switch(i)
		{
			case 0: enunciados[i] = "Calcula se gañaches a porra dos partidos da Champions League, sabendo que as apostas eran sobre oito partidos e só se podía apostar 1, X ou 2 en cada partido."; break;
			case 1: enunciados[i] = "Vamos botar unha partida de tute. Comproba se algún dos contrincantes pode cantar despois de repartir as cartas."; break;
			case 2: enunciados[i] = "Saber se un alumno está aprobado ou suspenso na materia, tendo en conta que para aprobar debe ter unha nota maior ou igual a 4 nos exames parciais teóricos e prácticos, sempre e cando a nota media dos exames sexa superior ou igual a 5."; break;    
			case 3: enunciados[i] = "Converter un número romano introducido no seu equivalente arábigo."; break;
			case 4: enunciados[i] = "Converter un número arábigo introducido no seu equivalente romano."; break;
			case 5: enunciados[i] = "Indicar que tipo de triángulo é (equilátero, isósceles, escaleno ou non é un triángulo) a partir das medidas dos lados introducidas por teclado."; break;
			case 6: enunciados[i] = "Dada unha frase, comprobar se é palíndromo."; break;
			case 7: enunciados[i] = "Dado un número variable de figuras xeométricas (triángulo, cadrado, rectángulo e círculo) amosar a área de cada unha delas e dicir cal é a máis grande. O dato de entrada serán os lados."; break;
			case 8: enunciados[i] = "Facer unha páxina que xere dous números do 0 ao 9 aleatoriamente que estarán colocados en dúas caixas. Terá que existir un botón para que os xere e outro para que os compare. Cando os compare terá que indicar se son iguais ou non, transferindo o maior dos dous a outra caixa."; break;
			case 9: enunciados[i] = "Recoller unha frase mediante un formulario e sacar despois unha estatística por pantalla onde se indique, por separado, cantas letras, números e outro tipo de caracteres hai na frase introducida."; break;
			case 10: enunciados[i] = "Amosar por pantalla a táboa de multiplicar dun número dado."; break;
			case 11: enunciados[i] = "Realizar un programa que permita avaliar a capacidade dun neno para realizar as catro operacións aritméticas básicas. O programa deberá presentar 10 operacións (xeradas aleatoriamente) con números positivos de 2 cifras, dando un máximo de 3 oportunidades por operación. O programa contará o número de oportunidades empregadas, contando 5 no caso de fallar 3 veces a mesma operación, e ao final amosará unha mensaxe de avaliación (10 oportunidades: PERFECTO; 11 ou 12 oportunidades: EXCELENTE; de 13 a 15: BEN; de 16 a 20: REGULAR; de 21 a 30: MAL; máis de 30: LAMENTABLE)."; break;
			case 12: enunciados[i] = "No Parking de Lalín precisan que programemos as máquinas de cobro. Estas admiten para o mesmo billetes de 20, 10 e 5 euros e moedas de 2 e 1 euro e 50, 20, 10 e 5 céntimos. Realiza un programa que devolva o cambio nas mínimas pezas posibles (Por exemplo: tendo que pagar 2,55 euros e introducindo un billete de 5 devolva 1 moeda de 2 euros, 2 moedas de 20 céntimos e 1 moeda de 5 céntimos).Recoller unha frase mediante un formulario e sacar despois unha estatística por pantalla onde se indique, por separado, cantas letras, números e outro tipo de caracteres hai na frase introducida."; break;			
			case 13: enunciados[i] = "Escribir un número decimal positivo en letra, tomando dun ou varios vectores os literais."; break;			
			case 14: enunciados[i] = "<p>Queremos crear unha axenda electrónica dos nosos contactos na que poidamos:</p><ul><li>Introducir un novo contacto (os datos que debemos recabar son o nome, o teléfono e o correo electrónico)</li><li>Eliminar un contacto existente</li><li>Listar os contactos</li><li>Procurar contactos</li></ul><p><span class='negra'>NOTAS:</span></p><p>Simularemos a base de datos cun vector bidimensional.</p><p>A clave que usaremos será o teléfono e <span class='negra'>NON</span> debe haber elementos duplicados.</p>"; break;			
			case 15: enunciados[i] = "<p>Queremos facer unha táboa clasificatoria dunha competición deportiva, onde se se preme no nome dun dos equipos se amosen as imaxes dos xogadores que compoñen ese equipo e se pasamos co rato por riba dunha delas apareza un <span class='negra'>texto informativo</span> lateral cos datos do xogador.</p>"; break;			
			default: break;
		}
	}
}

// exercicio: Amosa o enunciado do exercicio e pide os datos precisos para resolvelo
function exercicio(numero) {	
	for(var i=0; i<enunciados.length; i++) {
		document.getElementById("exercicio" + i).classList.remove("activo");			
	}
	document.getElementById("exercicio" + numero).classList.add("activo");
	enunciado.innerHTML = textoEnunciado + "<p>" + enunciados[numero] + "</p>";
	datos.innerHTML = textoDatos;
	resultado.innerHTML = textoResultado;
	pedirDatos(numero);
}

// pedirDatos: Amosa o formulario correspondente ao enunciado
function pedirDatos(numero) {
	switch(numero)
	{
		case 0: exercicio1(); break;
		case 1: exercicio2(); break;
		case 2: exercicio3(); break;
		case 3: exercicio4(); break;
		case 4: exercicio5(); break;
		case 5: exercicio6(); break;
		case 6: exercicio7(); break;
		case 7: exercicio8(); break;
		case 8: exercicio9(); break;
		case 9: exercicio10(); break;
		case 10: exercicio11(); break;
		case 11: exercicio12(); break;
		case 12: exercicio13(); break;		
		case 13: exercicio14(); break;		
		case 14: exercicio15(); break;		
		case 15: exercicio16(); break;		
		default: break;
	}
}

// marcar: Marca o resultado escollido polo usuario
function marcar(elemento) {
	var tamano = elemento.length;
	for(var i=0; i<3; i++) {
		document.getElementById(elemento.substr(0,tamano-1)+i).classList.remove("activo");			
	}
	document.getElementById(elemento).classList.add("activo");
	prognosticos[elemento.substr(tamano-2,1)] = elemento.substr(tamano-1,1);
}

// comprobar: Compara os resultados
function comprobar() {
	var acertos = 0;
	for(var i=0; i<prognosticos.length; i++) {
		if(resultados[i] == prognosticos[i]) {
			acertos++;
			document.getElementById('resultado'+i+prognosticos[i]).classList.remove("activo");	
			document.getElementById('resultado'+i+prognosticos[i]).classList.add("correcto");			
		}
	}
	if (acertos == prognosticos.length) {
		texto = 'GAÑACHES: Tes ' + acertos + ' acertos';
	}
	else {
		texto = 'PERDICHES: Tes ' + acertos + ' acertos';
	}
	amosarResultado(texto);
}

function exercicio1() {
	var partidos = ["Bayern München - Shakhtar Donetz","Chelsea - Paris Saint Germain","Porto - Basel","Real Madrid - Schalke 04","Atlético de Madrid - Bayer 04 Leverkusen","FC barcelona - Manchester City","Borussia Dortmund - Juventus","Monaco - Arsenal"];
	resultados = new Array("1","0","1","2","1","1","2","2");
	prognosticos = new Array("","","","","","","","");
	for(var i=0; i<partidos.length; i++) {
		datos.innerHTML += "<div id='partido" + i + "'>" +  partidos[i] + 
								"<span id='resultado" + i + "1' class='resultado' onclick='marcar(this.id);'/>1</span>" +
								"<span id='resultado" + i + "0' class='resultado' onclick='marcar(this.id);'/>X</span>" +
								"<span id='resultado" + i + "2' class='resultado' onclick='marcar(this.id);'/>2</span></div>";			
	}
	datos.innerHTML += "<div id='comprobar' class='boton' onclick='comprobar();'>Comprobar</div>"; 
}

function exercicio2() {
	var baralla = new Array("o1","o2","o3","o4","o5","o6","o7","o10","o11","o12",
							"c1","c2","c3","c4","c5","c6","c7","c10","c11","c12",
							"e1","e2","e3","e4","e5","e6","e7","e10","e11","e12",
							"b1","b2","b3","b4","b5","b6","b7","b10","b11","b12");
	baralla.sort(function() {return Math.random() - 0.5});

	var cantes = new Array(4);
	for(var i=0; i<cantes.length; i++)
	{
		cantes[i] = new Array(false,false,false,false,false,false,false,false);
	}

	for (var i=0; i<baralla.length; i++) {	
		if (i%10 == 0) { var xogador = i/10; }
		switch(baralla[i])
		{
			case "o11": cantes[xogador][0] = true; break;
			case "o12": cantes[xogador][1] = true; break;
			case "c11": cantes[xogador][2] = true; break;
			case "c12": cantes[xogador][3] = true; break;
			case "e11": cantes[xogador][4] = true; break;
			case "e12": cantes[xogador][5] = true; break;
			case "b11": cantes[xogador][6] = true; break;
			case "b12": cantes[xogador][7] = true; break;
			default: break;
		}
	}

	var podeCantar = new Array(4);
	for (var i=0; i<4; i++) {	
		podeCantar[i] = "";
		if (cantes[i][0] && cantes[i][1]) { 
			podeCantar[i] = "Pode cantar en Ouros"; 
		}
		if (cantes[i][2] && cantes[i][3]) { 
			if (podeCantar[i] == "") { 
				podeCantar[i] = "Pode cantar en Copas"; 
			} else {
				podeCantar[i] += " e en Copas";
			}
		}	
		if (cantes[i][4] && cantes[i][5]) { 
			if (podeCantar[i] == "") { 
				podeCantar[i] = "Pode cantar en Espadas"; 
			} else {
				podeCantar[i] += " e en Espadas";
			}
		}
		if (cantes[i][6] && cantes[i][7]) { 
			if (podeCantar[i] == "") { 
				podeCantar[i] = "Pode cantar en Bastos"; 
			} else {
				podeCantar[i] += " e en Bastos";
			} 
		}
		if (podeCantar[i] == "") {podeCantar[i] = "Non pode cantar";}
	}	
	
	datos.innerHTML = '';

	for(var i=0; i<baralla.length; i++)
	{
		if (i%10 == 0) {
			var xogador = (i/10) + 1; 
			resultado.innerHTML += "<p>XOGADOR " + xogador + ": " + podeCantar[xogador-1];
		}

		resultado.innerHTML += "<figure><img src='./imaxes/baralla/" + baralla[i] + ".jpg'></figure>";

		if (i%10 == 9) {
			resultado.innerHTML += "</p>";
		}			
	}
}

function aprobar(nota) {
	if (nota < 4) { suspenso = true; }
	notas.push(nota);
	numero = notas.length;
	total = 0;
	for(var i=0; i<numero; i++) {
		total += parseFloat(notas[i]);
	}
	textoAnterior += "<p>" + nota + "</p>"; 
	pedirNota();
	if (!suspenso) { 
		media = total/numero;
		if (media < 5) {
			texto = "SUSPENSO -- MEDIA: " + media.toFixed(2); 
		} else {
			texto = "APROBADO -- MEDIA: " + media.toFixed(2); 
		}
	} else {
		texto = "SUSPENSO -- HAI NOTAS MENORES DE CATRO"; 
	} 
	amosarResultado(texto); 
}

function pedirNota() {	
	textoActual = "<p><label>NOTA DO EXAME: </label><input type='text' onchange='aprobar(this.value);'></p>";
	datos.innerHTML = textoDatos + "<form>" + textoAnterior + textoActual + "</form>"; 
}

function exercicio3() {
	notas = new Array();
	media = 0;
	numNotas = 0;
	textoAnterior = '';
	suspenso = false;
	pedirNota();
}

function validarRomano(romano) {
	romano = romano.toUpperCase();
	var correcto = true;
	var numero = 0;
	for (var i=0; i<romano.length; i++) {
		switch (romano[i]) {
			case 'I': 
			case 'V': 				
			case 'X': 		
			case 'L': 
			case 'C': 				
			case 'D': 				
			case 'M': break;	
			default: correcto = false; break;
		}
	}
	
	if (!correcto) {
		texto = "DATO INCORRECTO: Algunha das letras introducidas non ten valor en números romanos";
	} else {	
		var romanos = new Array("MMM","MM","M","CM","DCCC","DCC","DC","D","CD","CCC","CC","C",
								"XC","LXXX","LXX","LX","L","XL","XXX","XX","X","IX","VIII","VII","VI","V","IV","III","II","I");
		var decimais = new Array("3000","2000","1000","900","800","700","600","500","400","300","200","100",
								"90","80","70","60","50","40","30","20","10","9","8","7","6","5","4","3","2","1");
		var offset = new Array(2,11,20,29);
		for (var i=0; i<romanos.length; i++) {
			if (romano.match(romanos[i]) && romano.search(romanos[i]) == 0) {
				romano = romano.replace(romanos[i],'');
				numero += parseInt(decimais[i]);
				if (decimais[i]>999) { 
					i = offset[0]; 
				} else if (decimais[i]>99) { 
					i = offset[1]; 
				} else if (decimais[i]>9) {
					i = offset[2]; 
				} else if (decimais[i]>0) { 
					i = offset[3]; 
				}
			}
		}
		if (romano != '') {
			texto = "DATO INCORRECTO: Bloque repetido ou incorrecto";
		}else{
			texto = "O número en decimal é o " + numero;	
		}
	}
	amosarResultado(texto);
}

function exercicio4() { 
	datos.innerHTML = textoDatos + "<p><label>NÚMERO ROMANO: </label><input type='text' onchange='validarRomano(this.value);'></p>";
}	

function validarDecimal(numero)
{
	if (isNaN(numero)) {
		texto = "DATO INCORRECTO: O valor introducido non é un número";
	} else {
		if (numero < 4000) {
			texto = "O número en romano é o " + calcularRomano(numero);
		} else {
			texto = "DATO INCORRECTO: O valor introducido excede o rango permitido";
		}			
	}
	amosarResultado(texto);
}

function calcularRomano(numero)
{
	var millares = new Array('','M','MM','MMM');
	var centeas = new Array('','C','CC','CCC','CD','D','DC','DCC','DCCC','CM');
	var deceas = new Array('','X','XX','XXX','XL','L','LX','LXX','LXXX','XC');	
	var unidades = new Array('','I','II','III','IV','V','VI','VII','VIII','IX');

	var restoMillares, restoCenteas, restoDeceas, restoUnidades;

	restoUnidades = numero % 10;
	numero = (numero - restoUnidades) / 10;

	restoDeceas = numero % 10;
	numero = (numero - restoDeceas) / 10;

	restoCenteas = numero % 10;
	numero = (numero - restoCenteas) / 10;	

	restoMillares = numero;	
	
	return millares[restoMillares] + centeas[restoCenteas] + deceas[restoDeceas] + unidades[restoUnidades];
}

function exercicio5() { 
	datos.innerHTML = textoDatos + "<p><label>NÚMERO ARÁBIGO: </label><input type='text' onchange='validarDecimal(this.value);'></p>";
}

function triangulo(lado1,lado2,lado3){
	lado1 = parseFloat(lado1);
	lado2 = parseFloat(lado2);
	lado3 = parseFloat(lado3);
	
	switch (true) {
		case (lado1 + lado2 <= lado3):
		case (lado1 + lado3 <= lado2):
		case (lado3 + lado2 <= lado1): texto = 'Os datos introducidos NON forman un triángulo'; break;
		case (lado1 == lado2 && lado2 == lado3): texto = 'O triángulo é EQUILÁTERO'; break;
		case (lado1 == lado2 && lado2 != lado3): 
		case (lado1 == lado3 && lado2 != lado3):
		case (lado3 == lado2 && lado2 != lado1): texto = 'O triángulo é ISÓSCELES'; break;
		default: texto = 'O triángulo é ESCALENO'; break;
	}
	amosarResultado(texto);
}

function exercicio6() { 
	datos.innerHTML = textoDatos + 	"<p><label>Lado 1: </label><input type='text' id='lado1' value='0'/></p>" + 
									"<p><label>Lado 2: </label><input type='text' id='lado2' value='0'/></p>" +
									"<p><label>Lado 3: </label><input type='text' id='lado3' value='0'/></p>" +
									"<div id='triangulo' class='boton' onclick='triangulo(lado1.value,lado2.value,lado3.value);'>Indicar</div>";
}

function palindromo(frase) { 
	frase = frase.replace(/ /g,'').toUpperCase().replace(/Á/g,'A').replace(/É/g,'E').replace(/Í/g,'I').replace(/Ó/g,'O').replace(/Ú/g,'U');
	
	var correcto = true;
	var fin = frase.length - 1;
	for (var i=0; i<frase.length/2; i++) {
		if (frase[i] != frase[fin]) { correcto = false; break; }
		fin--;
	}
	if (correcto) {
		texto = 'A frase é un palíndromo';
	} else {
		texto = 'A frase NON é un palíndromo';
	}
	amosarResultado(texto);
}

function exercicio7() { 
	datos.innerHTML = textoDatos + 	"<p><label>FRASE: </label><input type='text' id='frase' size='100'/></p>" +
									"<div class='boton' onclick='palindromo(frase.value);'>Comprobar</div>";
}

function pedirFigura(paralelogramo) {
	figura = paralelogramo;
	switch (figura) {
		case 0: textoActual = "<p><label>Base: </label><input id='lado1' type='text'></p>" + 
							  "<p><label>Altura: </label><input type='text' onchange='compararFigura(lado1.value,this.value);'></p>"; break;
		case 1: textoActual = "<p><label>Lado: </label><input type='text' onchange='compararFigura(this.value);'></p>"; break;
		case 2: textoActual = "<p><label>Lado 1: </label><input id='lado1' type='text'></p>" + 
							  "<p><label>Lado 2: </label><input id='lado2' type='text'></p>" +
							  "<p><label>Lado 3: </label><input type='text' onchange='compararFigura(lado1.value,lado2.value,this.value);'></p>"; break;
		case 3: textoActual = "<p><label>Radio: </label><input type='text' onchange='compararFigura(this.value);'></p>"; break;
		default: break;
	}
	datos.innerHTML = textoDatos + textoOpcions + textoActual + textoAnterior;
}

function compararFigura(lado1,lado2,lado3) {
	lado1 = parseFloat(lado1);
	lado2 = parseFloat(lado2);
	lado3 = parseFloat(lado3);
	switch (figura) {
		case 0: nomeFigura = 'Rectángulo'; area = lado1 * lado2; break;
		case 1: nomeFigura = 'Cadrado'; area = lado1 * lado1; break;
		case 2: nomeFigura = 'Triángulo'; semi = (lado1 + lado2 + lado3)/2; area = Math.sqrt(semi*(semi-lado1)*(semi-lado2)*(semi-lado3)); break;
		case 3: nomeFigura = 'Círculo'; area = Math.PI * lado1 * lado1; break;
		default: break;
	}
	numFigura++;
	textoAnterior += "<p>A figura " + numFigura + " (" + nomeFigura + ") ten unha área de: " + area + "</p>";
	amosarOpcions();
	if (area > areaMaior) { areaMaior = area; numFiguraMaior = numFigura; }
	texto = "A figura " + numFiguraMaior + " é a que ten unha área maior";
	amosarResultado(texto);
}

function amosarOpcions() {	
	datos.innerHTML = textoDatos + textoOpcions + textoAnterior;								
}

function exercicio8() { 
	numFigura = 0;
	areaMaior = 0;
	textoAnterior = '';
	textoOpcions = "<p><div class='boton' onclick='pedirFigura(0);'>Rectángulo</div>" +
					"<div class='boton' onclick='pedirFigura(1);'>Cadrado</div>" +
					"<div class='boton' onclick='pedirFigura(2);'>Triángulo</div>" +
					"<div class='boton' onclick='pedirFigura(3);'>Círculo</div></p>";
	amosarOpcions();
}

function xerar() {
	numero1.value = Math.floor(Math.random()*10);
	numero2.value = Math.floor(Math.random()*10);
}
	
function comparar(n1,n2) { 
	maior.value = n1;
	if (n1 == n2) {
		texto = 'Os números son iguais';
	} else {
		texto = 'Os números son distintos';
		if (n2 > n1) { maior.value = n2; }
	}
	amosarResultado(texto);
}

function exercicio9() {
	datos.innerHTML = textoDatos + 	"<p><label>Número 1: </label><input type='text' id='numero1' size='1'/></p>" +
									"<p><label>Número 2: </label><input type='text' id='numero2' size='1'/></p>" +
									"<p><label>Número maior: </label><input type='text' id='maior' size='1'/></p>" +
									"<div class='boton' onclick='xerar();'>Xerar</div>" +
									"<div class='boton' onclick='comparar(numero1.value,numero2.value);'>Comparar</div>";
}

function estatistica(frase) {
	var letras = 0;
	var numeros = 0;
	var outros = 0;
	for (var i=0; i<frase.length; i++) {
		if (frase.charAt(i).match(/[0-9]/)) { numeros++; }
		else if (frase.charAt(i).match(/[a-zñáéíóúA-ZÑÁÉÍÓÚ]/)) { letras++; }
		else { outros++; }			  
	}
	
	texto = 'A frase contén ' + letras + ' letras, ' + numeros + ' números e outros ' + outros + ' caracteres';
	amosarResultado(texto);
}

function exercicio10() {
	datos.innerHTML = textoDatos + 	"<p><label>FRASE: </label><input type='text' size='100' onchange='estatistica(this.value);'/></p>";
}

function taboa(numero) {
	var texto = '';
	for (var i=1; i<=10; i++) {
		texto += "<p>" + numero + "*" + i + " = " + (numero*i) + "</p>";
	}
	amosarResultado(texto);
}

function exercicio11() {
	datos.innerHTML = textoDatos + 	"<p><label>Introduce o número: </label><input type='text' size='2' onchange='taboa(this.value);'/></p>";
}

function mensaxeAvaliacion() {
    switch (true) {
		case (intentos == 10): texto += "<p>PERFECTO</p>"; break;
		case (intentos == 11):
		case (intentos == 12): texto += "<p>EXCELENTE</p>"; break;
		case (intentos > 12 && intentos <= 15): texto += "<p>BEN</p>"; break;
		case (intentos > 15 && intentos <= 20): texto += "<p>REGULAR</p>"; break;
		case (intentos > 20 && intentos <= 30): texto += "<p>MAL</p>"; break;
		case (intentos > 30): texto += "<p>LAMENTABLE</p>"; break;
		default: break;
	}
}

function operar(valor,solucion) {
	texto += valor;
	intentos++;
	if (valor == solucion) {
		numeroResultados++;
		texto += "<span class='correcto'> Solución correcta</span></p>";
		acertos++;
		erros = 0;
		auxiliar = '';
	} else {
		texto += "<span class='activo'> Solución incorrecta </span></p>";
		erros++;
	}
	if (erros == 3) {
		intentos += 2;
		numeroResultados++;
	} else {
		texto += auxiliar;
	}
	
	amosarResultado(texto);
	exercicio12();
}

function exercicio12() {
	if (numeroResultados < 10) {
		if (erros == 0 || erros == 3) {
			erros = 0;
			var dificil = true;
			var signo = signos[parseInt(Math.random() * 4)];
			while (dificil) {
				var numero1 = parseInt(Math.random() * 100);
				var numero2 = parseInt(Math.random() * 100);
				//comprobamos que a operación é resoluble por un neno
				switch (signo) {
					case '+': //sempre é unha operación válida para un neno
						solucion = numero1 + numero2;
						dificil = false;
						break; 
					case '-': //se o minuendo é menor que o sustraendo
						solucion = numero1 - numero2;
						dificil = (numero1 >= numero2) ? false : true;
						break; 
					case '*': //multiplicamos só por unha cifra
						solucion = numero1 * numero2;
						dificil = (numero2 <= 10) ? false : true; 
						break; 
					case '/': //división enteira
						solucion = numero1 / numero2;
						dificil = (numero1 % numero2 == 0) ? false : true;
						break; 
					default: break;
				}
			}
			textoActual = textoDatos + numero1 + " " + signo + " " + numero2 + " = ";
			texto += "<p>" + numero1 + " " + signo + " " + numero2 + " = ";
			auxiliar = "<p>" + numero1 + " " + signo + " " + numero2 + " = ";
			amosarResultado(texto);
		}
		datos.innerHTML = 
			textoActual +
			"<form>" +
				"<p><label>Introduce o resultado: </label><input id='valor' type='text' size='2'></p>" +
			"</form>" +
			"<p><button id='boton' onclick='operar(valor.value," + solucion  + ")'>Comprobar</button></p>";
    } else {
		mensaxeAvaliacion();
		valor.disabled = true;
		boton.disabled = true;
    }
	amosarResultado(texto);
}

function inserirCartos(cantidade) {
	cartosIntroducidos += cantidade;
    cartos.textContent = (cartosIntroducidos / 100).toFixed(2);
}

function pagarParking() {
	var texto = '';
	var auxiliar = prezo * 100;
    if (cartosIntroducidos < auxiliar) {
		texto = "Non chega!!!";
    } else {
		var devolucion = cartosIntroducidos - auxiliar;
        texto = "<p>RECOLLA O SEU CAMBIO: </p>";
		var billete = 0;
		while (devolucion != 0) {
			switch (true) {
				case (devolucion >= 2000): billete = 2000; break;
				case (devolucion >= 1000): billete = 1000; break;
				case (devolucion >= 500): billete = 500; break;
				case (devolucion >= 200): billete = 200; break;
				case (devolucion >= 100): billete = 100; break;
				case (devolucion >= 50): billete = 50; break;
				case (devolucion >= 20): billete = 20; break;
				case (devolucion >= 10): billete = 10; break;
				case (devolucion >= 5): billete = 5; break;
				default: break;
            }
			devolucion -= billete;
			texto += "<figure><img class='billete' src='imaxes/cartos/" + billete + ".png'/></figure>";
        }
    }
	amosarResultado(texto);
}

function exercicio13() {
	var invalido = true;
	while (invalido) {
		prezo = (Math.random() * 100).toFixed(2);
		if (((prezo * 100) % 5) == 0) {
			invalido = false;
		}
	}
	datos.innerHTML = 
		"<p class='activo'>Cartos a pagar: " + prezo + "</p>" +
		"<p>Insira os cartos: </p>" + 
		"<p><figure><img class='billete' src='imaxes/cartos/2000.png' onclick='inserirCartos(2000);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/1000.png' onclick='inserirCartos(1000);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/500.png' onclick='inserirCartos(500);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/200.png' onclick='inserirCartos(200);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/100.png' onclick='inserirCartos(100);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/50.png' onclick='inserirCartos(50);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/20.png' onclick='inserirCartos(20);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/10.png' onclick='inserirCartos(10);'/></figure>" +
		"<figure><img class='billete' src='imaxes/cartos/5.png' onclick='inserirCartos(5);'/></figure></p>" +
        "<p>Cartos introducidos: <span id='cartos'></span></p>" +
        "<p><button id='boton' onclick='pagarParking()'>Pagar</button></p>";
}

function exercicio14() {
	datos.innerHTML = 
		"<form>" +
			"<p><label>Introduce a cantidade: </label><input type='text' id='cantidade'></p>" +
		"</form>" +
		"<p><button id='boton' onclick='enLetra(cantidade.value)'>Traducir</button></p>";
}

function traducir(cantidade) {
	var texto = "";
	var unidades = new Array('','un','dous','tres','catro','cinco','seis','sete','oito','nove');
	var excepcion = new Array('dez','once','doce','trece','catorce','quince');
	var decenas = new Array('','deza','vinte','trinta','corenta','cincuenta','sesenta','setenta','oitenta','noventa');
	var contador = 0;
	var dixitos = new Array();
	var auxiliar = cantidade;
	var decena = 0;

	while (auxiliar != 0) {
		resto = Math.floor(auxiliar % 10);
		dixitos.push(resto);
		auxiliar = Math.floor(auxiliar / 10);
		contador++;
	}
	
	for (var i=0; i<contador; i++) {
		var dixito = dixitos.pop();
		switch (contador-i) {
			case 1: var unidade = dixito; break;
			case 2:	decena = dixito; break;
			case 3: texto += (dixito == 1) ? "cento " : unidades[dixito] + "centos "; break;
			case 4: texto += (dixito == 1) ? "mil " : unidades[dixito] + " mil "; break;
			default: break;
		}	
	} 

	switch (decena) {
		case 0: texto += unidades[unidade];	break;
		case 1: texto += (unidade <= 5) ? excepcion[unidade] : decenas[decena] + unidades[unidade]; break;
		default: texto += (unidade == 0) ? decenas[decena] + unidades[unidade] : decenas[decena] + " e " + unidades[unidade]; break;
	}
	return texto;
}

function enLetra(cantidade) {
	var texto = "Entrada inválida";
	if (!(isNaN(cantidade))) {
		cantidade = parseFloat(cantidade).toFixed(2);
		if (cantidade > 0) {
			cantidade *= 100;
			var decimal = Math.floor(cantidade % 100);
			var enteira = Math.floor(cantidade/100);
			texto = (enteira == 0) ? "cero" : traducir(enteira);
			texto += (decimal != 0) ? " con " + traducir(decimal) : "";
		} else {
			texto = "Os números deben ser positivos";
			cantidade.disabled = true;
			boton.disabled = true;
		}				
	} else {
		cantidade.disabled = true;
		boton.disabled = true;
	}			
			
	amosarResultado(texto);
}

function exercicio15() {
	DATOS = 
		'<div><h2>Axenda de contactos</h2>' +
			'<div>' +
				'<button id="novo" onclick="inserirContacto();">Novo contacto</button>' +
				'<button id="eliminar" onclick="eliminarContacto();">Eliminar contacto</button>' +
				'<button id="listar" onclick="listarContactos();">Listar contactos</button>' +
				'<button id="procurar" onclick="procurarContacto();">Procurar contacto</button>' +
			'</div>' +	
		'</div>';
	datos.innerHTML = DATOS;
	resultado.innerHTML = '';
}

function inserirContacto() {
	datos.innerHTML = DATOS +  
		'<form>' +			
			'<p><label>Teléfono: </label><input id="telefono" type="text"/></p>' +
			'<p><label>Nome: </label><input id="nome" type="text"/></p>' +
			'<p><label>Email: </label><input id="email" type="text"/></p>' +             
		'</form>' + 
		'<p><button onclick="inserir(telefono.value,nome.value,email.value);" type="button">Inserir</button></p>';	
}

function inserir(telefono,nome,email) {
	var existe = false;
	for (var i = 0; i < contactos.length; i++) {
		if (telefono == contactos[i][0]) {
			existe = true;
			break;
		}
	}
	if (!existe) { 
		contactos.push([telefono,nome,email]);
		alert('Contacto inserido na axenda');
	} else {
		alert('O contacto xa existe'); 
	}
}

function eliminarContacto() {
	datos.innerHTML = DATOS +  
		'<form>' +			
			'<p><label>Teléfono: </label><input id="telefono" type="text"/></p>' +
		'</form>' + 
		'<p><button onclick="eliminar(telefono.value);" type="button">Eliminar</button></p>';	
}

function eliminar(telefono) {
	var existe = false;
	for (var i = 0; i < contactos.length; i++) {
		if (telefono == contactos[i][0]) { 
			existe = true;
			contactos.splice(i,1);
			break;
		}
	}
	if (existe) { 
		alert('Contacto eliminado na axenda');
	} else {
		alert('O contacto non existe'); 
	}
}

function listarContactos() {
	var texto = DATOS;
	texto += '<table border="1"><tr><th>Teléfono</th><th>Nome</th><th>Email</th></tr>';
	for (var i = 0; i < contactos.length; i++) {
		texto += '<tr><td>' + contactos[i][0] + '</td><td>' + contactos[i][1] + '</td><td>' + contactos[i][2] + '</td></tr>';
	}
	texto += '</table>';
	datos.innerHTML = texto;  
}

function procurarContacto() {
	datos.innerHTML = DATOS +  
		'<form>' +			
			'<p><label>Teléfono: </label><input id="telefono" type="text"/></p>' +
		'</form>' + 
		'<p><button onclick="procurar(telefono.value);" type="button">Procurar</button></p>';	
}

function procurar(telefono) {
	var existe = false;
	for (var i = 0; i < contactos.length; i++) {
		if (telefono == contactos[i][0]) { 
			existe = true;
			break;
		}
	}
	if (existe) { 
		alert('Contacto encontrado na axenda');
		var texto = DATOS;
		texto += '<table border="1"><tr><th>Teléfono</th><th>Nome</th><th>Email</th></tr>';
		texto += '<tr><td>' + contactos[i][0] + '</td><td>' + contactos[i][1] + '</td><td>' + contactos[i][2] + '</td></tr>';
		texto += '</table>';
		datos.innerHTML = texto;
	} else {
		alert('O contacto non existe'); 
	}
}

function exercicio16() {
	DATOS = '<p><button onclick="amosarTaboa();" type="button">Amosar táboa</button></p>';
	datos.innerHTML = DATOS;
	resultado.innerHTML = '';
}

function amosarTaboa() {
	var texto = '<table><tr><th>EQUIPOS</th><th>PUNTOS</th><th>X</th><th>G</th><th>E</th><th>P</th><th>GOLES</th><th>DIFERENZA</th></tr>';
	for (var i=0; i<equipos.length; i++) {
		texto += 
			'<tr>' +
				'<td><span onclick="amosarXogadores(\'' + equipos[i][6] + '\')">' + equipos[i][0] + '</span></td>' +
				'<td><span class="negra">' + (equipos[i][1]*2 + equipos[i][2]) + '</span></td>' +
				'<td>' + (equipos[i][1] + equipos[i][2] + equipos[i][3]) + '</td>' +
				'<td>' + equipos[i][1] + '</td>' +
				'<td>' + equipos[i][2] + '</td>' +
				'<td>' + equipos[i][3] + '</td>' +
				'<td>' + equipos[i][4] + ':' + equipos[i][5] + '</td>' +
				'<td>' + (equipos[i][4] - equipos[i][5]) + '</td>' +
			'</tr>';
	}
	texto += "</table>";
	amosarResultado(texto);
}

function amosarXogadores(equipo) {
	// Como estamos simulando unha base de datos podemos supor que coñecemos o nome do vector no que introducimos os datos
	// Neste caso será 'bidasoa'
	// Só debe funcionar se coincide con este nome o parámetro de entrada
	// Para facer o texto informativo á dereita acceder a https://www.w3schools.com/howto/howto_css_tooltip.asp
	if (equipo == 'bidasoa') {
		texto = '';
		for (var i=0; i<bidasoa.length; i++) {
			texto += 
				'<div class="tooltip">' +
					'<img src="./imaxes/equipos/' + equipo + '/' + bidasoa[i][5] + '.jfif">' +
					'<div class="tooltiptext">' +
						'<p>' + bidasoa[i][5] + '</p>' +
						'<p class="reducida">' + bidasoa[i][0] + ' ' + bidasoa[i][1] + '</p>' + 
						'<p class="reducida">' + bidasoa[i][6] + '</p>' + 
						'<p class="reducida">' + bidasoa[i][8] + ' centímetros</p>' + 
						'<p class="reducida">' + bidasoa[i][9] + ' quilogramos</p>' + 
						'<p class="reducida">' + bidasoa[i][4] + '</p>' + 
						'<p class="reducida">' + bidasoa[i][3] + ' goles</p>' + 
						'<p>' + '<img src="./imaxes/bandeiras/' + bidasoa[i][2].toLowerCase() + '.jpg">' + '</p>' + 
					'</div>' +
				'</div>';
		}		
		amosarResultado(texto);
	}	
}		

function amosarResultado(texto) { 
	resultado.innerHTML = textoResultado + "<p>" + texto + "</p>";
}