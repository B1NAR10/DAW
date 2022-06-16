function breakout() {
 
    let liñas = 0;
    let puntos = 0;
    const NUM_LADRILLOS = 18;
    let texto = "";

    let pausa = true;
    sentido_Y = true;
    sentido_X = true;

    function crearMarcadores(){
        let puntuacion = document.getElementById("puntuacion");
        //puntuacion.innerHTML = '<div class = "esquerda"> ' +  FraseAImaxe("LIÑAS", "puntos") + ' ' + FraseAImaxe(liñas.toString(),"puntos") + '</div>'; 
        puntuacion.innerHTML =  `<div class = "esquerda"> ${FraseAImaxe("LIÑAS", "puntos")} ${FraseAImaxe(liñas.toString(),"puntos")}</div>`; 
        puntuacion.innerHTML += '<div class = "dereita"> ' +  FraseAImaxe("PUNTOS", "puntos") + ' ' + FraseAImaxe(puntos.toString(),"puntos") + '</div>'; 
      
    }

    function FraseAImaxe(frase, clase) {
        let fraseImaxe = "";
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] == ' ') {
                caracterImaxe = `imaxes/alfabeto/ESPAZO.png`
            } else {
                 caracterImaxe = `imaxes/alfabeto/${frase[i].toUpperCase()}.png`
            }
            fraseImaxe += `<img class = "${clase}" src = "${caracterImaxe}"/>`

        }
        return fraseImaxe;
    }

    function CrearRegras(visualizar, fin, ganado){

        let estilo = "";
        if (visualizar == true) {
            estilo = "style = 'display:block'";
        } else {
            estilo = "style = 'display:none'";
        }
        if (fin == true) {
            let mensaxe = "";
            if (ganado == true) {
                mensaxe = "YOU WIN";
            } else {
                mensaxe = "GAME OVER";
            }

            regras.innerHTML = '<div class = "panel"' + estilo + '> <div class = "xanela" id = "xanela"> <div class = "regras">' + FraseAImaxe(mensaxe, "puntos") +'</div></div></div>'; 
        
        }else{
            regras.innerHTML = '<div class = "panel"' + estilo + '> <div class = "xanela" id = "xanela"> <div class = "regras">' + FraseAImaxe("AQUI IRIAN AS REGRAS DO XOGO", "regras") + '</br>' + FraseAImaxe("PREME A BARRA ESPAZADORA PARA VOLVER AO XOGO", "regras") +'</div></div></div>';  
        }  
       
    
    }

    function PuntuacionLadrillo(){
        return Math.ceil(Math.random() * 5);
    }

    crearMarcadores();
    CrearRegras(pausa, false, false)

    let filaladrillos = ['amarelo', 'azul', 'verde', 'vermello'];
   

    let pano = document.getElementById("pano");
    for (let f = 0; f < filaladrillos.length; f++) {
        let filaLadrillo = '';
        for(let c = 0; c < NUM_LADRILLOS; c++){
           filaLadrillo += '<img id="ladrillo_' + f + '_' + c + '" class = "ladrillo ' + filaladrillos[f] + '" src = "imaxes/ladrillos/' + filaladrillos[f] + '.png " data-puntuacion = "' + PuntuacionLadrillo() + '"/>';
        }
        pano.innerHTML += filaLadrillo;
        
    }


    for (let f = 0; f < filaladrillos.length; f++) {
        for(let c = 0; c < NUM_LADRILLOS; c++){
            let ladrillo = document.getElementById("ladrillo_" + f + "_" + c);
            ladrillo.style.left = pano.offsetLeft + ladrillo.width * c + "px";
            ladrillo.style.top = pano.offsetTop + ladrillo.height * f + "px";
        }
    }
    
   pano.innerHTML += '<img id = "barra" class = "barra" src = "imaxes/ladrillos/barra.png" />';
   
   pano.innerHTML += '<img id = "bola" class = "bola" src = "imaxes/bola.png" />';
 

  

   function teclado(tecla) {
       console.log(tecla.keyCode);
       switch (tecla.keyCode) {
              case 32:
                  pausa = !pausa;
                    if (pausa == true) {
                        CrearRegras(true, false, false);
                    } else {
                        CrearRegras(false, false, false);
                    }
                    break;        
              case 37: //izquierda
                    //osetleft = px de desplazamiento desde la izquierda
                    //.left = en posicionamiento fixed se refiere a la izquierda de la ventana del navagador.
                    // abosolute = puede referirse a un contenedor padre si este tiene un posicionamiento distinto de static.
                    desprazamentoBarra = barra.offsetLeft - barra.width/2;
                    if(desprazamentoBarra < 0){
                        desprazamentoBarra = 0;
                    }

                    barra.style.left = desprazamentoBarra + "px";
                                     
                   
                    break;

              case 39: //dereita 
                    desprazamentoBarra = barra.offsetLeft + barra.width/2;   
                    if(desprazamentoBarra >= pano.clientWidth - barra.width){
                        desprazamentoBarra = pano.clientWidth - barra.width;
                    }
                    
                    barra.style.left = desprazamentoBarra + "px";
                    
                    break;
        }
    }    
   window.addEventListener("keydown", teclado);

   function golpearBola(){
        function moverBola(){
            if (pausa == true) 
                return;

            let salto = 10
            if (sentido_Y ){ // Subir
                bola.style.top = bola.offsetTop - salto + "px";
                ordenada = bola.offsetTop - bola.clientHeight;
            }else{ // Baixar
                bola.style.top = bola.offsetTop + salto + "px";
                ordenada = bola.offsetTop + bola.clientHeight;
            }

            if (sentido_X ){ // Esquerda
                bola.style.left = bola.offsetLeft - salto + "px"; 
                       
            }else{ // Dereita
                bola.style.left = bola.offsetLeft + salto + "px";                 
            } 

            abscisa = bola.offsetLeft + bola.clientWidth / 2;   
            controlarChoqueBarra()  
            controlarChoqueLateral()
            controlarChoqueLadrillos()
        }  
        movemento = setInterval(moverBola, 50);       
   }
     
    golpearBola();

    function finPartida(ganado){
            clearInterval(movemento);
            pausa = true;
            CrearRegras(true, true, ganado);
            chicharra()
    }

    function controlarChoqueLateral(){
            if (abscisa <= 0){ sentido_X = !sentido_X; lateral() }
            
            if (abscisa >= pano.clientWidth){ sentido_X = !sentido_X; lateral() }

            if (ordenada <= 0){ sentido_Y = !sentido_Y;  lateral()}

            if (ordenada >= pano.clientHeight){
                finPartida(false)
                
             
            }
    }

    function controlarChoqueLadrillos(){
        for (let f = 0; f < filaladrillos.length; f++) {
            for(let c = 0; c < NUM_LADRILLOS; c++){
                let ladrillo = document.getElementById("ladrillo_" + f + "_" + c);
                // Ao offsetTop de Ladrillo restámoslle o ofsetTop de Pano para poder  comparar valores, dado que ladrillo e fixed e ordenada asoluto. 
                if (ladrillo != null){
                    if( ordenada <= ladrillo.offsetTop + ladrillo.clientHeight - pano.offsetTop  && 
                        abscisa >= ladrillo.offsetLeft - pano.offsetLeft &&
                        abscisa <= ladrillo.offsetLeft + ladrillo.clientWidth - pano.offsetLeft){
                            sentido_Y = !sentido_Y
                            if( document.getElementsByClassName("amarelo").length == 1 && ladrillo.classList.contains("amarelo") ||
                                document.getElementsByClassName("verde").length == 1 && ladrillo.classList.contains("verde") ||
                                document.getElementsByClassName("azul").length == 1 && ladrillo.classList.contains("azul") ||
                                document.getElementsByClassName("vermello").length == 1 && ladrillo.classList.contains("vermello") 
                            ){
                                liñas += 1;
                            }
                           
                            ladrillo.remove()
                            golpearLadrillo()
                            puntos_ladrillo = ladrillo.getAttribute("data-puntuacion");
                            puntos_ladrillo = parseInt(puntos_ladrillo) + 100;
                            puntos += puntos_ladrillo;
                            crearMarcadores();


                    }
                }
                
            }
        } 
        
        if( document.getElementsByClassName("amarelo").length == 0  && document.getElementsByClassName("verde").length == 0  && document.getElementsByClassName("azul").length == 0  && document.getElementsByClassName("vermello").length == 0){
            finPartida(true)
        } 
        
        
    }

}
