$(document).ready(function(){

// Os parágrafos pares do documento deben aparecer centrados.
    let parrafos=$("p:even");
    console.log(parrafos);

    $.each(parrafos,function(){
        $(this).addClass("centrado");
    });

// O primeiro parágrafo do documento debe ter borde e o seu contido será de cor azul escuro.
    let primeiro_paragrafo=$("p:first");
    console.log(primeiro_paragrafo);

    $.each(parrafos,function(){
        $(this).addClass("fondoAzul");
        $(this).addClass("borde");
    });

// Todas as ligazóns que estean dentro dunha lista aparecerán con cor de fondo verde.
    let listas=$("ul");
    console.log(listas);
    listas.each(function(){
        $(this).addClass("fondoVerde");
    });

// A táboa con identificador linguaxes terá que estar centrada, a súa primeira fila deberá ter unha cor de fondo amarela e a derradeira fila da táboa unha cor de fondo azul.
    let taboa=$("#linguaxes");
    console.log(taboa);
    taboa.addClass("taboaCentrada");
    taboa.find("tr:first").addClass("fondoAmarelo");
    taboa.find("tr:last").addClass("fondoAzul");

// A segunda columna da táboa con identificador linguaxes terá o texto centrado.
    let segunda_columna=$("#linguaxes td:nth-child(1)");
    console.log(segunda_columna);
    segunda_columna.addClass("centrado");

// Engadir ao derradeiro parágrafo do documento o seguinte texto: "Este é o derradeiro parágrafo".
    let derradeiro_paragrafo=$("p:last-child");
    console.log(derradeiro_paragrafo);
    derradeiro_paragrafo.before("Este é o derradeiro parágrafo");

// Inserir antes do terceiro parágrafo do documento: "<p>....Texto xerado dende jQuery....</p>"
    let terceiro_paragrafo=$("p:nth-child(3)");
    console.log(terceiro_paragrafo);
    terceiro_paragrafo.before("<p>....Texto xerado dende jQuery....</p>");

});