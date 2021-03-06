function exercicio1(){
	enunciado.textContent = 'Suma de dous números e impresión do resultado';
	datos.innerHTML = 
	   "<form id='form1'>" +
			"<input id='numero1'/>" +
			"<input id='numero2'/>" +
 			"<button type='button' onclick='resolver1(numero1.value,numero2.value)'>Sumar</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver1(numero1,numero2){
	solucion.textContent = parseFloat(numero1) + parseFloat(numero2);	
}

function exercicio2(){
	enunciado.textContent = 'Un individuo quere investir o seu capital nun banco e desexa saber cantos cartos aforrará despois de tres meses, se o banco paga a razón do 2% mensual';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<label for='capital'>Capital </label><input id='capital'/>" +
 			"<button type='button' onclick='resolver2(capital.value)'>Obter xuros</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver2(capital){
	var capital = parseFloat(capital);
	const XURO = 0.02;
	var xuros = capital * XURO;
	xuros += (capital + xuros) * XURO;
	xuros += (capital + xuros) * XURO; 
	solucion.textContent = xuros.toFixed(2) + ' €';	
}

function exercicio3(){
	enunciado.textContent = 'Unha tenda ofrece un desconto do 15% sobre o total da compra, e un cliente desexa saber canto deberá pagar finalmente pola súa compra';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<label for='total'>Total da compra </label><input id='total'/>" +
 			"<button type='button' onclick='resolver3(total.value)'>Prezo final</button>" +
 		"</form>";
 	solucion.textContent = '';	
}

function resolver3(total){
	const DESCONTO = 0.15;
	var total = parseFloat(total);
	var prezo = total * (1 - DESCONTO);
	solucion.textContent = prezo.toFixed(2) + ' €';	
}

function exercicio4(){
	enunciado.textContent = 'Porcentaxe de homes e porcentaxe de mulleres que hai en clase nun momento determinado';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<label for='homes'>Número de homes </label><input id='homes'/>" +
      	"<label for='mulleres'>Número de mulleres </label><input id='mulleres'/>" +
 			"<button type='button' onclick='resolver4(homes.value,mulleres.value)'>Calcular porcentaxes</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver4(homes,mulleres){
	var homes = parseInt(homes);
	var mulleres = parseInt(mulleres);
	var total = homes + mulleres;
	var porcentaxeHomes = (homes / total) * 100;
	var porcentaxeMulleres = (mulleres / total) * 100;
	solucion.innerHTML = '% de homes = ' + porcentaxeHomes.toFixed(2) + '<br /> % de mulleres = ' + porcentaxeMulleres.toFixed(2);	
}

function exercicio5(){
	enunciado.textContent = 'Dada unha cantidade en euros, obter a equivalencia en pesetas e en dólares';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<label for='euros'>Cantidade en euros </label><input id='euros'/>" +
      	"<button type='button' onclick='resolver5(euros.value)'>Cambiar divisa</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver5(euros){
	const pesetas = 166.386;
	var dolares = 1.18;
	var euros = parseFloat(euros);
	solucion.innerHTML = 'Dólares = ' + (euros * dolares).toFixed(2) + '<br /> Pesetas = ' + (euros * pesetas).toFixed(2);	
}

function exercicio6(){
	enunciado.textContent = 'Calcular o numero de pulsacións que ten unha persoa por cada dez segundos de exercicio se a fórmula é numeroDePulsacions = (220-idade)/6';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<label for='idade'>Idade </label><input id='idade'/>" +
      	"<button type='button' onclick='resolver6(idade.value)'>Calcular pulsacións</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver6(idade){
	var numeroDePulsacions = (220 - parseInt(idade)) / 6;
	solucion.innerHTML = 'Número máximo de pulsacións = ' + numeroDePulsacions.toFixed(0);	
}

function exercicio7(){
	enunciado.textContent = 'Dados dous números, calcula a división do primeiro entre o segundo e imprímea por pantalla';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='dividendo'>Dividendo </label><input id='dividendo'/></p>" +
      	"<p><label for='divisor'>Divisor </label><input id='divisor'/></p>" +
      	"<button type='button' onclick='resolver7(dividendo.value,divisor.value)'>Dividir</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver7(dividendo,divisor){
	var dividendo = parseFloat(dividendo);
	var divisor = parseFloat(divisor);
	solucion.innerHTML = 'O resultado da división é = ' + (dividendo / divisor).toFixed(2);	
}

function exercicio8(){
	enunciado.textContent = 'Un vendedor recibe o soldo base máis un 10% extra de comisión polas súas vendas; o vendedor quere saber cantos cartos obterá no concepto de comisións polas tres vendas que realizou no mes pasado e o total que recibirá no mes. Para obter o resultado final pódese considerar que o seu soldo base é de 1000 euros e que as vendas que realizou foron de 1200, 350 e 5600 euros';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='soldoBase'>Soldo base </label><input id='soldoBase'/></p>" +
      	"<p><label for='comision1'>Comisión 1 </label><input id='comision1'/></p>" +
      	"<p><label for='comision2'>Comisión 2 </label><input id='comision2'/></p>" +
      	"<p><label for='comision3'>Comisión 3 </label><input id='comision3'/></p>" +
      	"<p><label for='porcentaxe'>Porcentaxe </label><input id='porcentaxe'/></p>" +
      	"<button type='button' onclick='resolver8(soldoBase.value,comision1.value,comision2.value,comision3.value,porcentaxe.value)'>Calcular soldo e comisións</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver8(soldoBase,comision1,comision2,comision3,porcentaxe){
	var soldoBase = parseFloat(soldoBase);
	var comision1 = parseFloat(comision1);
	var comision2 = parseFloat(comision2);
	var comision3 = parseFloat(comision3);
	var porcentaxe = parseFloat(porcentaxe) / 100;
	var comisions = (comision1 + comision2 + comision3) * porcentaxe;	
	solucion.innerHTML = 'O vendedor cobrará de comisións ' + comisions.toFixed(2) + ' €<br/>O vendedor cobrará en total ' + (soldoBase + comisions).toFixed(2) + ' €';	
}

function exercicio9(){
	enunciado.textContent = 'Escribir un programa que lea os 3 coeficientes reais a, b, c dun polinomio de segundo grao e que determine as súas raíces reais';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='a'>a </label><input id='a'/></p>" +
      	"<p><label for='b'>b </label><input id='b'/></p>" +
      	"<p><label for='c'>c </label><input id='c'/></p>" +
      	"<button type='button' onclick='resolver9(a.value,b.value,c.value)'>Calcular raíces</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver9(a,b,c){
	var a = parseFloat(a);
	var b = parseFloat(b);
	var c = parseFloat(c);
	var r1 = (-b + Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2 * a);
	var r2 = (-b - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
	solucion.innerHTML = 'As posibles solucións son: ' + r1 + ' e ' + r2;	
}

function exercicio10(){
	enunciado.textContent = 'Escribir un programa que pida unha temperatura en graos Fahrenheit e calcular e amosar o seu equivalente en graos Celsius, ambos admitindo dous decimais';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='fahrenheit'>Introduza os graos Fahrenheit </label><input id='fahrenheit'/></p>" +
      	"<button type='button' onclick='resolver10(fahrenheit.value)'>Calcular graos Celsius</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver10(fahrenheit){
	var celsius = (parseFloat(fahrenheit) - 32) / 1.8;
	solucion.innerHTML = 'A equivalencia en graos Celsius é: ' + celsius.toFixed(2);	
}

function exercicio11(){
	enunciado.textContent = 'Escribir un programa que obteña a equivalencia en polgadas, pés e millas dunha cantidade introducida en metros';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='metros'>Metros </label><input id='metros'/></p>" +
      	"<button type='button' onclick='resolver11(metros.value)'>Converter</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver11(metros){
	var metros = parseFloat(metros);
	var polgadas = metros * 39.3701;
	var pes = metros * 3.28084;
	var millas = metros * 0.000621371;
	solucion.innerHTML = metros + " metros son equivalentes a " + polgadas + " polgadas ou " + pes + " pés ou " + millas + " millas";	
}

function exercicio12(){
	enunciado.textContent = 'Escribir un programa que obteña o resultado da operación (a-b)(a+b) logo de introducir os datos correspondentes';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='a'>a </label><input id='a'/></p>" +
      	"<p><label for='b'>b </label><input id='b'/></p>" +
      	"<button type='button' onclick='resolver12(a.value,b.value)'>Facer operación</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver12(a,b){
	var a =parseFloat(a);
	var b =parseFloat(b);
	solucion.innerHTML = (a+b) * (a-b);	
}

function exercicio13(){
	enunciado.textContent = 'Dous atletas percorren a mesma distancia e rexístranse os seus tempos en segundos. Desexamos saber o tempo total utilizado por ambos atletas en horas, minutos e segundos';
	datos.innerHTML = 
      "<form id='form1'>" +
      	"<p><label for='tempo1'>Segundos empregados polo atleta 1 </label><input id='tempo1'/></p>" +
      	"<p><label for='tempo2'>Segundos empregados polo atleta 2 </label><input id='tempo2'/></p>" +
      	"<button type='button' onclick='resolver13(tempo1.value,tempo2.value)'>Calcular</button>" +
 		"</form>";
 	solucion.textContent = '';
}

function resolver13(tempo1,tempo2){
	var tempo1 = parseFloat(tempo1);
	var tempo2 = parseFloat(tempo2);
	var total = tempo1 + tempo2;
	var horas = Math.floor(total / 3600);
	//var minutos = Math.floor(total / 60) - (horas * 60);
	//var minutos = Math.floor((total - (horas * 3600)) / 60);
	var minutos = Math.floor((total % 3600) / 60);
	var segundos = total % 60;
	solucion.innerHTML = horas + ":" + minutos + ":" + segundos.toFixed(2);	
}

function exercicio14(){
	enunciado.textContent = 'Unha persoa desexa saber cales son os seus parámetros físicos para saber se debería facer dieta. Quere saber o seu índice de masa corporal, a relación cintura/altura e o número de calorías diarias a consumir. Recolle os datos necesarios e amosa por pantalla unha táboa cos cálculos realizados. Para simplificar cálculos, e tendo en conta que non podedes usar máis que asignacións e operacións, non fai falla saber se é un home ou unha muller a que o quere saber. Pódese empregar a fórmula 10*peso + 6.25*altura - 5*edad para calcular o número de calorías a consumir diariamente';
	datos.innerHTML = 
		'<form id="form1">' +			
			'<p><label>Peso: </label><input id="peso" type="text"/><label> kilogramos</label></p>' +
			'<p><label>Estatura: </label><input id="estatura" type="text"/><label> centímetros</label></p>' +
			'<p><label>Idade: </label><input id="idade" type="text"/><label> anos</label></p>' +             
			'<p><label>Perímetro da cintura: </label><input id="perimetro" type="text"/><label> centímetros</label></p>' +                
			'<p><button onclick="resolver14(peso.value,estatura.value,idade.value,perimetro.value);" type="button">Calcular</button></p>' +
		'</form>';
	solucion.textContent = '';
}

function resolver14(peso,estatura,idade,perimetro) {
	var peso = parseFloat(peso);
	var estatura = parseFloat(estatura);
	var idade = parseInt(idade);
	var perimetro = parseFloat(perimetro);
	
	var imc = peso / Math.pow(estatura / 100,2);
	var cintura = perimetro / estatura;
	var calorias = (10 * peso) + (6.25 * estatura) - (5 * idade);
	
	solucion.innerHTML =
		'<table border="1">' +
			'<tr><th>IMC</th><th>Relación cintura/estatura</th><th>Calorías diarias</th></tr>' +
			'<tr><td>' + imc.toFixed(2) + '</td><td>' + cintura.toFixed(2) + '</td><td>' + calorias.toFixed(2) + '</td></tr>' + 
		'</table>';	
}

function exercicio15(){
	enunciado.innerHTML = '<p>Dado un número natural de catro díxitos (non fai falla comprobar que ten catro díxitos) indicar cantos millares, centenas, decenas e unidades ten.</p><p>EXEMPLO:</p><code>1234</code><br /><code>O número introducido ten 1 millares, 2 centenas, 3 decenas e 4 unidades</code><br /><code>27</code><br /><code>O número introducido ten 0 millares, 0 centenas, 2 decenas e 7 unidades</code>';
	datos.innerHTML = 
		'<form id="form1">' +			
			'<p><label>Número: </label><input id="numero" type="text"/></p>' +
			'<p><button onclick="resolver15(numero.value);" type="button">Calcular</button></p>' +
		'</form>';
	solucion.textContent = '';
}

function resolver15(numero) {
	var numero = parseInt(numero);

	var unidades = numero % 10;
	numero = Math.floor(numero / 10);
	var decenas = numero % 10;
	numero = Math.floor(numero / 10);
	var centenas = numero % 10;
	var millares = Math.floor(numero / 10);
		
	solucion.innerHTML = 'O número introducido ten ' + millares + ' millares, ' + centenas + ' centenas, ' + decenas + ' decenas e ' + unidades + ' unidades';
}

function exercicio16(){
	enunciado.innerHTML = '<p>Calcular a incidencia acumulada e a evolución do número reprodutivo básico (R<sub>0</sub>) na comunidade galega</p>';
	datos.innerHTML = 
		'<form id="form1">' +
			'<p>Positivos PCR diarios onte: <input id="PCRDiarioOnte"/></p>' +
			'<p>Positivos PCR nos últimos 14 días onte: <input id="PCR14DiasOnte"/></p>' +
			'<p>Casos activos onte: <input id="casosActivosOnte"/></p>' +
			'<p>Positivos PCR diarios hoxe: <input id="PCRDiarioHoxe"/></p>' +
			'<p>Positivos PCR nos últimos 14 días hoxe: <input id="PCR14DiasHoxe"/></p>' +
			'<p>Casos activos hoxe: <input id="casosActivosHoxe"/></p>' +
			'<p><button type="button" onclick="resolver16(PCRDiarioOnte.value,PCR14DiasOnte.value,casosActivosOnte.value,PCRDiarioHoxe.value,PCR14DiasHoxe.value,casosActivosHoxe.value)">Calcular</button></p>' +
		'</form>';
	solucion.textContent = '';
}

function resolver16(PCRDiarioOnte,PCR14DiasOnte,casosActivosOnte,PCRDiarioHoxe,PCR14DiasHoxe,casosActivosHoxe){
	const poboacionGaliza = 2700000;
	const por100000 = poboacionGaliza / 100000;
	var IA = PCR14DiasHoxe / por100000;
	var R0 = PCRDiarioHoxe / casosActivosOnte * por100000;
	solucion.innerHTML = '<p>IA = ' + IA.toFixed(0) + '</p><p>R<sub>0</sub> = ' + R0.toFixed(2);	
}




