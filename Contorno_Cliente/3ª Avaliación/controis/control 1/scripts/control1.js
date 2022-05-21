function control1(){
	enunciado.innerHTML = 
		'<p>Amosar o tempo en formato DD:HH:MM:SS que tardaría a segunda colada de lava que está a asolar a illa de La Palma en chegar ao mar se a distancia que existe dende a súa cabeceira é de 2.653 quilómetros e a velocidade constante esperada é 4 m/h';
	const DISTANCIA = 2650;
	const VELOCIDADE = 7;
	var tempo = DISTANCIA / VELOCIDADE;
	var dias = Math.floor(tempo / 24);
	tempo = tempo - (dias * 24);
	var horas = Math.floor(tempo);
	tempo = tempo - horas;
	var minutos = Math.floor(tempo * 60);
	tempo = tempo * 60 - minutos;
	var segundos = Math.floor(tempo * 60);
	solucion.innerHTML = dias + ':' + horas + ':' + minutos + ':' + segundos;
}

