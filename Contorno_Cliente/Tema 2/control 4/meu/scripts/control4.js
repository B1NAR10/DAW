function control4() {
    
    cargarEnunciado();
    iniciarVariables();
    pintarButacas();
    solucion.innerHTML = '<button type = "button" onclick = "pintarButacas()"></button>';

    //generate function 10 x 10 
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let num = Math.floor(Math.random() * 10);   





    function pintarButacas() {
        texto = '<div id = "patio">';
        for (let i = 0; i < butacas.length; i++) {  
            for (let j = 0; j < butacas[i].length; j++) {
                if (butacas[i][j] == $) {
                    texto += '<button type = "button" onclick = "marcarButaca(' + i + ',' + j + ')" class = "butacaLibre"></button>';
                } else {
                    texto += '<button type = "button" onclick = "marcarButaca(' + i + ',' + j + ')" class = "butacaOcupada"></button>';
                }
            }

        }       
        texto += '</table>';    
        butacas.innerHTML = texto;

 
    } 

}
    }
}
