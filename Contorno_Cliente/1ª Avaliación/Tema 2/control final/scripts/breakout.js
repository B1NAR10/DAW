function breakout() { 

    var bola;
    var paleta;
    var ladrillo;

    var liñas = 3;
    var puntos = 0;


        function letras(){
            letras.load.image('letras', 'imaxes/alfabeto/letras.png');
        }

        function cargar() {
            xogo.load.image('bola', 'imaxes/bola.png');
            xogo.load.image('paleta', 'imaxe/ladrillos/barra.png');
            
            xogo.load.image('ladrillo_amarelo', 'imaxe/amarelo.png');
            xogo.load.image('ladrillo_azul', 'imaxe/azul.png');
            xogo.load.image('ladrillo_verde', 'imaxe/verde.png');
            xogo.load.image('ladrillo_vermello', 'imaxe/vermello.png');

        }


    regras.innerHTML = "Aqui irían as regras <br> Preme a barra espazadora para volver ao Xogo";
    puntuacion.innerHTML = letras();
    pano.innerHTML = cargar();

 
}
