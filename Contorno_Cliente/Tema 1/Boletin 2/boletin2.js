////////////////////////////////////////////////////////////////
//Boletín 2 - Condicionais       Alberto José Méndez Taboada //    
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
