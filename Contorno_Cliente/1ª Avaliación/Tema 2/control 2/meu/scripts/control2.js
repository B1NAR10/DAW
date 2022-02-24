function control2(){

    enunciado.innerHTML = "Xerar tres botóns nos que aparezan 3 números aleatorios entre 1 e 10; ao premer en calquera deles debe aparecer, dependendo de se é par ou impar, o nome dunha froita ou a súa imaxe."
    datos.innerHTML =
        '<button id = "boton1" type ="button" onclick = "CargarFoita(button1.value)">' + Math.round(Math.random()*10); + '</button>' + '</br>'
        '<button id = "boton2" type ="button" onclick = "CargarFoita(button2.value)">' + Math.round(Math.random()*10); + '</button>' + '</br>'
        '<button id = "boton3" type ="button" onclick = "CargarFoita(button3.value)">' + Math.round(Math.random()*10); + '</button>'  
}


function CargarFoita(){
    solucion.innerHTML = "proba"
}