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
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 5: Dada unha cantidade en euros, obter a 
// equivalencia en pesetas e en dólares.
function exercicio5(){
    enunciado.innerHTML = "Dada unha cantidade en euros, obter a equivalencia en pesetas e en dólares.";
    datos.innerHTML =  
    "<form>" +
        "<label>Introduzca o Número de Euros:</label> </br>" +
        "<input id='euro'></input> </br></br>" +
        "<button type='button' onclick='EurosPesetasDolares()'>Calcular</button></br>" +
    "</form>";
    resultado.innerHTML = '';
}

function EurosPesetasDolares(){
    var euros = parseFloat(euro.value);
    var pesetas = euros * 166.386;
    var dolares = euros * 1.13;
    resultado.innerHTML = euros + "€ son: <br>" + pesetas + " pesetas <br>" + dolares + " dolares";
}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Exercicio 6: Calcular o numero de pulsacións que ten unha 
// persoa por cada dez segundos de exercicio se a fórmula é 
// numeroDePulsacions = (220-idade)/6.
function exercicio6(){
    enunciado.innerHTML = "Calcular o numero de pulsacións que ten unha persoa por cada dez segundos de exercicio se a fórmula é numeroDePulsacions = (220-idade)/6.";
    datos.innerHTML =
    "<form>" +
        "<label>Introduzca a idade:</label> </br>" +
        "<input id='idade'></input> </br></br>" +
        "<button type='button' onclick='Pulsacions()'>Calcular</button></br>" +
    "</form>";
    resultado.innerHTML = '';
}

function Pulsacions(){
    var idadePersoa = parseInt(idade.value);
    var pulsacions = (220-idadePersoa)/6;
    resultado.innerHTML = "A persoa ten " + pulsacions + " pulsacions por cada dez segundos de exercicio";
}
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Exercicio 7: Dados dous números, calcula a división 
// do primeiro entre o segundo e imprímea por pantalla

function exercicio7(){
    enunciado.innerHTML = "Dados dous números, calcula a división do primeiro entre o segundo e imprímea por pantalla";
    datos.innerHTML =
    "<form>" +
        "<label>Introduzca o Primeiro Número:</label> </br>" +
        "<input id='num1'></input> </br></br>" +
        "<label>Introduzca o Segundo Número:</label> </br>" +
        "<input id='num2'></input> </br></br>" +
        "<button type='button' onclick='Division()'>Calcular</button></br>" +
    "</form>";
    resultado.innerHTML = '';
}

function Division(){
    var numero1 = parseFloat(num1.value);
    var numero2 = parseFloat(num2.value);
    var division = numero1/numero2;
    resultado.innerHTML = "A división de " + numero1 + " entre " + numero2 + " é: " + division;
}