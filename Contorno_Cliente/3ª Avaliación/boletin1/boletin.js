/////////////////////////////////////////////////////////////
//       Boletín 1 - Contorno de Cliente                   //
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//       Exercicio 1 - Sumar 2 Numeros                     //
/////////////////////////////////////////////////////////////

function exercicio1(){
    
    enunciado.innerHTML = "Suma de dous Numeros e Impresión do Resultado:";
    datos.innerHTML = 
    "<form id='form1'>" +
        "<label>Numero 1:</label></br>" +
        "<input id='num1'/> </br></br>" +

        "<label>Numero 2:</label></br>" +
        "<input id='num2'/> </br></br>" +

        "<button type='button' onclick='suma(num1.value,num2.value)'>Sumar</button>" +
    "</form>";
    resultado.textContent = '';
}

function suma(num1,num2){
    let suma = parseFloat(num1) + parseFloat(num2);
    resultado.textContent ="A Suma de: " + num1 + " + " + num2 + " = " + suma;
}


///////////////////////////////////////////////////////////////
//                                                           //
//       Exercicio 2: Un individuo quere investir o seu      //
//       capital nun banco e desexa saber cantos cartos      //
//       aforrará depois de tres meses, se o banco paga a    //
//       razón do 2% mesual.                                 //
//                                                           //
///////////////////////////////////////////////////////////////

function exercicio2(){
    enunciado.innerHTML = "Un individuo quere investir o seu capital nun banco e desexa saber cantos cartos aforrará depois de tres meses, se o banco paga a razón do 2% mesual: ";
    datos.innerHTML =
    '<form>' +
        '<p> <label>Introduza o montante inicial: </label></br>' +
        '<input id="capital"></input> </p></br>' +
        
        '<button type ="button" onclick = "CalcularIntereses(capital.value)">Calcular</button>' +
    '</form>'

}

function CalcularIntereses(capital){
    let capital = parseFloat(capital);
    const xuro = 0.02;

    let xuros = capital * xuro;
    xuros += (capital + xuros) * xuro;
    xuros += (capital + xuros) * xuro;
    resultado.textContent = "O total a pagar é de: " + xuros.toFixed(2) + ' €';
}