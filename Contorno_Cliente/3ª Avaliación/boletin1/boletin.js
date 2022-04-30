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
         "<input id='numero1'/>" +
         "</br>"
         "<input id='numero2'/>" +
          "<button type='button' onclick='resolver1(numero1.value,numero2.value)'>Sumar</button>" +
      "</form>";
    solucion.textContent = '';
}

function resolver1(num1,num2){
    var resultado = parseInt(num1) + parseInt(num2);
    solucion.textContent = resultado
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
        '<p><label>Introduza o montante inicial: </label>' +
        '<input id="entrada1"></input></p>' +
        '<button type ="button" onclick = "CalcularIntereses()">Calcular</button>' +
    '</form>'

}