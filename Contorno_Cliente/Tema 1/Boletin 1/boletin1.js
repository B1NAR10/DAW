////////////////////////////////////////////////////////////////
//Boletín 1-Operacións Básicas - Alberto José Méndez Taboada //    
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Exercicio 1: Suma de dous Numeros e Impresión do Resultado.
function exercicio1(){
    enunciado.innerHTML = "Suma de dous Numeros e Impresión do Resultado:"
    var num1 = 5, num2 = 8;
    var suma = num1 + num2;
        
    resultado.innerHTML = num1 + "+" + num2 + "=" + suma;  
}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 2: Un individuo quere investir o seu capital nun 
// banco e desexa saber cantos cartos aforrará depois de tres 
// meses, se o banco paga a razón do 2% mesual.
function exercicio2(){

    enunciado.innerHTML = "Un individuo quere investir o seu capital nun banco e desexa saber cantos cartos aforrará depois de tres meses, se o banco paga a razón do 2% mesual: ";
    datos.innerHTML =
    '<form>' +
        '<p><label>Introduza o montante inicial: </label><input id="entrada1"></input></p>' +
        '<button type ="button" onclick = "operacion()">Calcular</button>' +
    '</form>'

}

function operacion(){
    
    var capital = parseFloat(entrada1.value);
    const tempo = 3;
    const interes = 0.02;

    montante_total = capital + (tempo*interes);
    resultado.innerHTML = "O Investir " + capital + " cun interes do 2%, durante " +  tempo + " meses, temos un aforro de " +  montante_total;

}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 3: Unha tenda ofrece un desconto do 15% sobre o 
// total da compra, e un cliente desexa saber canto deberá 
// pagar finalmente pola súa compra.
function exercicio3(){
    
    enunciado.innerHTML = "Unha tenda ofrece un desconto do 15% sobre o total da compra, e un cliente desexa saber canto deberá pagar finalmente pola súa compra";
    datos.innerHTML = 
    '<form>' +
        '<p><label>Inserte O Prezo da Compra: <input id="entrada1"></input></label></p>' +
        '<button type ="button" onclick = "SumaExer()">Calcular</button>' +
    '</form>'
    resultado.innerHTML = '';

}

function SumaExer() {

    var prezo = parseFloat(entrada1.value);
    const desconto = 0.15;
    prezo_final = prezo-(prezo*desconto);

    resultado.innerHTML = "O 15% de " + prezo + " é: " + prezo_final;
}
///////////////////////////////////////////////////////////////