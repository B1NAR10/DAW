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
// Exercicio 2: Dados dous números, indica cal é o maior.

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