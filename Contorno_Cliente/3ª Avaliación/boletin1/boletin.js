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