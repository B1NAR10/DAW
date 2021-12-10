s////////////////////////////////////////////////////////////////
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
            '<option value = "triángulo">Triángulo</option>' +
            '<option value = "cadrado">Cadrado</option>' +
            '<option value = "rectangulo">Rectangulo</option>' +
            '<option value = "circulo">Círculo</option>' +
        '</select>'    
    '</form>'

}

function CalcularSuperficieFigura(figura){
    var texto = '';
    switch(figura){
        case 'triángulo':
            datos.innerHTML = "<label for = 'base'>Base: </label><input 
        case 'cadrado':

        case 'rectangulo':

        case 'circulo':


    }
}