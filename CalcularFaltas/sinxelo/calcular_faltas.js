// //  var capital = parseFloat(entrada1.value
// var horas_totais = parseFloat(dwcc_horas_totais.value);
// var faltas = 0;

// dwcc_faltas.innerHTML = horas_totais;

function calcular() {
    
}






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

