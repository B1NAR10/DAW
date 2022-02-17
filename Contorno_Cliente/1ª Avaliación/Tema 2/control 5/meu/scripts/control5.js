peliculas = new Array( ["Al filo","jpg","Drama","RU","Eduard Bordukov","Svetlana Khodchenkova","Stasya Miloslavskaya","Sergey Puskepalis"],
					["El refugio","jpg","Comedia","ES","Macarena Astorga","Loles León","Leo Harlem","María Barranco"], 
					["Encanto","jpg","Animación","US","Jared Bush","Stephanie Beatriz","María Cecilia Botero","John Leguizamo"], 
					["Espíritu sagrado","jpg","Comedia","ES","Chema García Ibarra","Nacho Fernández","Llum Arques","Joanna Valverde","Rocío Ibáñez"], 
					["Fantasía","jpg","Documental","ES","Aitor Merino"], 
					["Imperdonable","jpg","Drama","GB","Nora Fingscheidt","Sandra Bullock","Viola Davis","Rob Morgan"], 
					["La Casa Gucci","jpg","Drama","US","Ridley Scott","Lady Gaga","Adam Driver","Al Pacino"], 
					["La hija","jpg","Thriller","ES","Manuel Martín Cuenca","Javier Gutiérrez","Patricia López Arnaiz","Irene Virgüez"], 
					["Lamb","jpg","Fantástico","IS","Valdimar Jóhannsson","Noomi Rapace","Hilmir Snær Guðnason", "Björn Hlynur Haraldsson"], 
					["Magaluf Ghost Town","jpg","Documental","ES","Miguel Ángel Blanca"], 
					["María Solinha","jpg","Drama","ES","Ignacio Villar","Laura Míguez","Grial Montes","Santi Prego"], 
					["Museo Hermitage. El poder del arte","jpg","Documental","IT","Michele Mally","Toni Servillo"], 
					["Ratones y zorros. Una amistad de otro mundo","jpg","Animación","CZ","Jan Bubenicek"], 
					["Resident Evil Bienvenidos a Raccoon City","jpg","Terror","US","Johannes Roberts","Kaya Scodelario","Hannah John-Kamen","Robbie Amell"] );

// Cambiamos na liña 23,68 ')' por '}'xa que e incorrecto.
// Correximos a chamada a funcion 'date' nas liñas 20, 21 e 22.
// Eliminamos o '0' nas liñas 24,26 e 25,33 
function estreas() {	 
	let date = new Date();
	let dia = date.getDate();
	let mes = date.getMonth() + 1;
	let ano = date.getFullYear();
	data = (dia < 10) ? `${dia}/${mes}/${ano}` : `${dia}/${mes}/${ano}`; 
	data = (mes < 10) ? `${dia}/${mes}/${ano}` : `${dia}/${mes}/${ano}`;


	let codigo =  
		'<fieldset>' +
			'<legend>ESTREAS ' + data + '</legend>' +
			'<img class="cartel" src="./imaxes/carteis/Al filo.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/El refugio.jpg" onclick="verTrailer(\'AL FILO\');"/>' + 
			'<img class="cartel" src="./imaxes/carteis/Encanto.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Espíritu sagrado.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Fantasía.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Imperdonable.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/La Casa Gucci.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/La hija.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Lamb.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Magaluf Ghost Town.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/María Solinha.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Museo Hermitage. El poder del arte.jpg" onclick="verTrailer(\'AL FILO\');"/>' +
			'<img class="cartel" src="./imaxes/carteis/Ratones y zorros. Una amistad de otro mundo.jpg" onclick="verTrailer(\'AL FILO\');"/>'  
			'<img class="cartel" src="./imaxes/carteis/Resident Evil Bienvenidos a Raccoon City.jpg" onclick="verTrailer(\'AL FILO\');"/>' + 
		'</fieldset>';
	carteleira.innerHTML = codigo; 
}

//Eliminamos o '+' nas liñas 50,15 e 55,26 xa que era incorrecto.
//Correximos nome da función a 'verTrailer'
function verTrailer(pelicula) { 
	let codigo =  
		'<video width="800" controls>' +
			'<source src="trailers/' + pelicula + '.mkv" type="video/mp4">' +
			'Your browser does not support HTML video.' +
		'</video>';
	carteleira.innerHTML = codigo;	
}			