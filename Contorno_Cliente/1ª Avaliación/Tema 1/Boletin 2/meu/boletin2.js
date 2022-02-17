////////////////////////////////////////////////////////////////
//  Boletín 2 - Condicionais    Alberto José Méndez Taboada  //    
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Exercicio 1: Imprimir o valor absoluto dun número dado.
function exercicio1(){
   
    enunciado.innerHTML = "Imprimir o valor absoluto dun número dado.";
    datos.innerHTML =
    '<form>' +
        '<p><label>Introduza un Valor: </label><input id="val"></input></p>' +
        '<button type ="button" onclick = "CalcularAbsoluto()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';

}

function CalcularAbsoluto(){
    var valor = parseFloat(val.value);
    var valor_absoluto = Math.abs(valor)

    resultado.innerHTML = "O Valor Absoluto de " + valor + " é: " + valor_absoluto;

}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 2: Calcular a superficie dunha figura xeométrica. 
// A figura só pode ser TRIÁNGULO, CADRADO, RECTÁNGULO ou CÍRCULO.
function exercicio2(){

    enunciado.innerHTML = "Exercicio 2: Calcular a superficie dunha figura xeométrica.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<select id = "figura" onChange = CalcularSuperficieFigura(figura.value)">' +
            '<option selected disabled>Escolle unha Figura</option>' +
            '<option value = "Triángulo">Triángulo</option>' +
            '<option value = "Cadrado">Cadrado</option>' +
            '<option value = "Rectángulo">Rectangulo</option>' +
            '<option value = "Círculo">Círculo</option>' +
        '</select>'    
    '</form>'

    resultado.innerHTML = '';
}
    switch(figura.value){
        case "triángulo":
            var base = parseFloat(prompt("Introduza a Base do Triángulo: "));
            var altura = parseFloat(prompt("Introduza a Altura do Triángulo: "));
            var superficie = (base * altura) / 2;
            resultado.innerHTML = "A superficie do Triángulo é: " + superficie;
            break;
        case "cadrado":
            var lado = parseFloat(prompt("Introduza o Lado do Cadrado: "));
            var superficie = lado * lado;
            resultado.innerHTML = "A superficie do cadrado é: " + superficie;
            break;
        case "rectangulo":
            var base = parseFloat(prompt("Introduza a Base do Rectángulo: "));
            var altura = parseFloat(prompt("Introduza a altura do rectangulo: "));
            var superficie = base * altura;
            resultado.innerHTML = "A superficie do rectangulo é: " + superficie;
            break;
        case "circulo":
            var radio = parseFloat(prompt("Introduza o Radio do Circulo: "));
            var superficie = Math.PI * (radio * radio);
            resultado.innerHTML = "A superficie do circulo é: " + superficie;
            break;
        default:
            resultado.innerHTML = "Non seleccionou ningunha figura";
    }   
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 5: Dados dous números, indica cal é o maior.

function exercicio5(){

    enunciado.innerHTML = "Dados dous números, indica cal é o maior.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza o Primeiro Número: </label><br><input id="num1"></input></p>' +
        '<p><label>Introduza o Segundo Número: </label><br><input id="num2"></input></p>' +
        '<button type ="button" onclick = "CalcularMaior()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}

function CalcularMaior(){
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    
    if(numero1 > numero2){
        resultado.innerHTML = "O Número " + numero1 + " é Maior que: " + numero2;
    }else if(numero1 < numero2){
        resultado.innerHTML = "O Número " + numero2 + " é Maior que: " + numero1;
    }else{
        resultado.innerHTML = "Os números " + numero1 + " e " + numero2 + " son Iguais!";
    }
}

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 6: Determinar se dous números son iguais ou 
// diferentes, e se son diferentes indicar cal deles é maior.


///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 7: Dados tres números, indica cal é o maior.
function exercicio7(){

    enunciado.innerHTML = "Dados tres números, indica cal é o maior.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza o Primeiro Número: </label><br><input id="num1"></input></p>' +
        '<p><label>Introduza o Segundo Número: </label><br><input id="num2"></input></p>' +
        '<p><label>Introduza o Terceiro Número: </label><br><input id="num3"></input></p>' +
        '<button type ="button" onclick = "CalcularMaior()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}

function CalcularMaior(){
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    var numero3 = parseFloat(num3.value);
    
    if(numero1 > numero2 && numero1 > numero3){
        resultado.innerHTML = "O Número " + numero1 + " é Maior que: " + numero2 + " e " + numero3;
    }else if(numero2 > numero1 && numero2 > numero3){
        resultado.innerHTML = "O Número " + numero2 + " é Maior que: " + numero1 + " e " + numero3;
    }else if(numero3 > numero1 && numero3 > numero2){
        resultado.innerHTML = "O Número " + numero3 + " é Maior que: " + numero1 + " e " + numero2;
    }else{
        resultado.innerHTML = "Os números " + numero1 + ", " + numero2 + " e " + numero3 + " son Iguais!";
    }
}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 8: Pedir un ano e indicar se é ou non bisesto, 
// tendo en conta que son bisestos todos os múltiplos de 4 
// agás os múltiplos de 100 (por exemplo o 1900 non foi bisesto), 
// aínda que os múltiplos de 400 si son bisestos 
// (por iso o foi o ano 2000).

function exercicio8(){
    
    enunciado.innerHTML = "Pedir un ano e indicar se é ou non bisesto, tendo en conta que son bisestos todos os múltiplos de 4 agás os múltiplos de 100 (por exemplo o 1900 non foi bisesto), aínda que os múltiplos de 400 si son bisestos (por iso o foi o ano 2000).";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza o Ano: </label><br><input id="num1"></input></p>' +
        '<button type ="button" onclick = "CalcularBisesto()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}

function CalcularBisesto(){
    var ano = parseFloat(num1.value);
    if(ano % 400 == 0 ){
        resultado.innerHTML = "O Ano " + ano + " é Bisesto!";
    }else if(ano % 100 == 0){
        resultado.innerHTML = "O Ano " + ano + " non é Bisesto!";
    }else if(ano % 4 == 0){
        resultado.innerHTML = "O Ano " + ano + " é Bisesto!";
    }else{
        resultado.innerHTML = "O Ano " + ano + " non é Bisesto!";
    }
}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 9: Pedir un ano e indicar que competición de 
// seleccións masculinas de balonmán se disputa ese ano, tendo 
// en conta que os anos múltiplos de 4 celébranse Xogos Olímpicos, 
// os impares hai Mundiais e os pares Campionatos de Europa.

function exercicio9(){
        
    enunciado.innerHTML = "Pedir un ano e indicar que competición de seleccións masculinas de balonmán se disputa ese ano, tendo en conta que os anos múltiplos de 4 celébranse Xogos Olímpicos, os impares hai Mundiais e os pares Campionatos de Europa.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza o Ano: </label><br><input id="num1"></input></p>' +
        '<button type ="button" onclick = "CalcularCompeticion()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}
function CalcularCompeticion(){
    var ano = parseFloat(num1.value);
    if(ano % 4 == 0){
        resultado.innerHTML = "O Ano " + ano + " hai Xogos Olímpicos!";
    }else if(ano % 2 == 0){
        resultado.innerHTML = "O Ano " + ano + " hai Campionato de Europa!";
    }else{
        resultado.innerHTML = "O Ano " + ano + " hai Mundiais!";
    }
}
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Exercicio 10: Pedir un número do 1 ao 5 e indicar se 
// é primo ou non.

function exercicio10(){
    enunciado.innerHTML = "Pedir un número do 1 ao 5 e indicar se é primo ou non.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza un Número: </label><br><input id="num1"></input></p>' +
        '<button type ="button" onclick = "CalcularPrimo()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}

function CalcularPrimo(){
    
    var numero = parseFloat(num1.value);
    var contador = 0;

    if (numero >= 1 && numero <= 5){
        
        for(var i = 1; i <= numero; i++){
            if(numero % i == 0){
                contador++;
            }
        }
        if(contador == 2){
            resultado.innerHTML = "O Número " + numero + " é Primo!";
        }else{
            resultado.innerHTML = "O Número " + numero + " non é Primo!";
        }

    }else{
        resultado.innerHTML = "O Número " + numero + " non está entre 1 e 5!";
    }   
}
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Exercicio 11: Pedir un número do 1 ao 7 e amosar 
// que día da semana é.

function exercicio11(){
    enunciado.innerHTML = "Pedir un número do 1 ao 7 e amosar que día da semana é.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza un Número: </label><br><input id="num1"></input></p>' +
        '<button type ="button" onclick = "CalcularDiaSemana()">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}

function CalcularDiaSemana(){
    var numero = parseInt(num1.value);
    var dia = "";
    switch(numero){
        case 1: 
            dia = "Luns"; 
            break;
        case 2: 
            dia = "Martes"; 
            break;
        case 3: 
            dia = "Mércores";
            break;
        case 4: 
            dia = "Xoves"; 
            break;
        case 5: 
            dia = "Venres"; 
            break;
        case 6: 
            dia = "Sábado"; 
            break;
        case 7: 
            dia = "Domingo"; 
            break;
        default: 
            dia = "Non existe ese día!";
    }    
}
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Exercicio 12: Pedir unha letra e detectar se é ou non vogal.

function exercicio12(){
    enunciado.innerHTML = "Pedir unha letra e detectar se é ou non vogal.";
    datos.innerHTML = 
    '<form id = "form1">' +
        '<p><label>Introduza unha Letra: </label><br><input id="letra"></input></p>' +
        '<button type ="button" onclick = "CalcularVogal(letra.value)">Calcular</button>' +
    '</form>'

    resultado.innerHTML = '';
}

function CalcularVogal(letra){
    var letra = letra.toLowerCase();
    
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        resultado.innerHTML = "A Letra " + letra + " é unha Vogal!";
    }else{
        resultado.innerHTML = "A Letra " + letra + " non é unha Vogal!";
    }
}
