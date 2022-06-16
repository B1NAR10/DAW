
function alinear(tipoalineacion, elemento) {
    let alinear = $("p[align = '" + tipoalineacion + "']");
    console.log(alinear);
    alinear.removeAttr("align");
    alinear.addClass(elemento);
}


$(document).ready(function(){

    // Eliminar as aliñacións contidas no código HTML creando as necesarias nunha folla CSS mediante código jQuery.
    alinear("center", "centrar");
    alinear("right", "alinearDereita");  
    
    // Os parágrafos que conteñan a palabra EUREKA deberán ter cor de texto verde.
    $("p:contains('EUREKA')").addClass("verde");

    // Inserir despois de cada imaxe un parágrafo centrado coas medidas da imaxe.
    // Largura: xxx pixels, Altura: xxx pixels
    $("img").after("<p align='center'> Largura: " + $(this).width() + " x Altura: " + $(this).height() + "</p>");

    // Todos os encabezados que conteñan a palabra LUTHIERS terán que ter como cor de texto o vermello.
    $("h1:contains('LUTHIERS')").addClass("vermello");

    // ?Os tres derradeiros parágrafos do documento deberán aparecer coa cor de fondo verde e aliñados á dereita.
    $('p').slice(-3).addClass("fondoVerde").addClass("alinearDereita");
    
    // A segunda imaxe do documento terá que aparecer centrada.
    $("img:eq(1)").addClass("centrar");

    // Agregar un atributo ALT a todas as imaxes que indique o seguinte "Imaxes propiedade das webs orixinais. Data actual: dd/mm/aaaa" cubrindo a data actual coa sacada do noso ordenador.
    $("img").attr("alt", "Imaxes propiedade das webs orixinais. Data actual: " + new Date().toLocaleDateString());

    // Eliminar todos os parágrafos que conteñan un espazo en branco (&nbsp;). 
    $('p:contains("\u00a0")').remove(); // \u00a0 = &nbsp;

    // Modifica o contido do noveno parágrafo do documento por TEXTO MODIFICADO DENDE JQUERY.
    $("p:eq(8)").html("TEXTO MODIFICADO DENDE JQUERY");

    // Crear unha nova liña separadora HR con id="separador" despois do parágrafo con id="final" e a continuación un novo parágrafo co seguinte texto resumo:
    // Neste documento hai xxx parágrafos, dos cales xxx están centrados e xxx están aliñados á dereita.
    // Temos xxx imaxes e temos xxx ligazóns.
    // (substituir os xxx polos número de imaxes e de ligazóns calculados con jQuery)
    $("p#final").after("<hr id='separador'/>");
    $("#separador").after("<p>Neste documento hai " + $("p").length + " parágrafos, dos cales " + $("p[align]").length + " están centrados e " + $("p[align='right']").length + " están aliñados á dereita.</p>");
    $("#separador").after("<p>Temos " + $("img").length + " imaxes e temos " + $("a").length + " ligazóns.</p>");

    // Programar o botón de tal xeito que ao premer inserirá debaixo do obxecto con id="separador" unha copia da primeira imaxe.
    $("#copiar").click(function(){
        console.log($("img:first"));
        // $("#origen").clone().appendTo("#destino");
        //$("img:first()").clone().appendTo("#separador");
        $("#separador").after($("img:first()").clone());
    });
});