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
        '<button type ="button" onclick = "CalcularIntereses()">Calcular</button>' +
    '</form>'

}

function CalcularIntereses(){
    
    var capital = parseFloat(entrada1.value);
    const tempo = 3;
    const xuro = 0.02;
    var total = capital * (1 + xuro);
    total *= (1 + xuro);

    aforro = total - capital;
    resultado.innerHTML = "O Investir " + capital + " cun interes do 2%, durante " +  tempo + " meses, temos un aforro de " +  + Math.round(aforro * 100) / 100;

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
        '<button type ="button" onclick = "Desconto()">Calcular</button>' +
    '</form>'
    resultado.innerHTML = '';

}

function Desconto() {

    var prezo = parseFloat(entrada1.value);
    const desconto = 0.15;
    prezo_final = prezo-(prezo*desconto);

    resultado.innerHTML = "O Prezo da compra son " + prezo + " que ao aplicar desconto dun 15% queda en: " + prezo_final;
}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 4: Porcentaxe de homes e porcentaxe de mulleres 
// que hai en clase nun momento determinado.
function exercicio4(){
    enunciado.innerHTML = "Porcentaxe de homes e porcentaxe de mulleres que hai en clase nun momento determinado."

    datos.innerHTML =
    "<form>" +
        "<label>Introduzca o número de Homes:</label> </br>" +
        "<input id='homes'></input> </br></br></br>" +  

        "Introduzca o número de Mulleres: </br>" +
        "<input id='mulleres'></input> </br></br>" +
        
        "<button type='button' onclick='PorcentaxeHomesMulleres()'>Calcular</button></br>" +
    "</form>";
    resultado.innerHTML = '';

}

function PorcentaxeHomesMulleres(){
    var homes = parseInt(homes.value);
    var mulleres = parseInt(mulleres.value);
    var total = homes + mulleres;

    var porcentaxeMulleres = Math.round((mulleres / total)*100);
    var porcentaxeHomes = Math.round((homes / total)*100);

    resultado.innerHTML = "Mulleres(%): " + porcentaxeMulleres + "</br> Homes(%): " + porcentaxeHomes;
 
}