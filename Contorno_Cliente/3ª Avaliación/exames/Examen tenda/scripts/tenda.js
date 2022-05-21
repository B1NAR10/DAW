$(document).ready(function () {
    // Crear dúas zonas, unha para os artigos e outra para o carriño que pode ter xa artigos dunha sesión anterior. 
    //[1 punto] Creamos dúas zonas, unha para os artigos e outra para o carriño.   
    let zonas = "<div id='contido'></div>";

    $("header").after(zonas);

    let esquerda = "<section id='esquerda'><nav id='menu'></nav><nav id='submenu'></nav><nav id='artigos'></nav></section>";
    let dereita = "<section id='dereita'><div><img id='carro' class='icona' src='imaxes/carrito.png'/><div id='compra'></div><div id='total'></div></section>";

    $("#contido").append(esquerda + dereita);

    //[2 puntos] Traer os artigos dunha posible sesión anterior.
    traerCarro();

    // O sistema de menús está baseado en iconas e énchense collendo os datos da base de datos.
    //[4 puntos] Crear o sistema visual de menús.
    $.getJSON("servidor/cargarCategorias.php")
        .done(function (datosCategoria) {
            let categorias = "";
            $.each(datosCategoria, function () {
                categorias += "<img class='icona categoria activa' id='" + this.idCategoria + "' data-idCategoria='" + this.idCategoria + "' src='imaxes/categorias/" + this.nome + ".png' data-nome='" + this.nome + "'/>";
            });
            $("#menu").html(categorias);
        })

        // Hai que controlar posibles erros da BD.
        // [1 punto] Os posibles erros de base de datos están controlados sacando unha mensaxe relativa ao erro.
        .fail(function (error) {
            alert("Error en la lectura de la base de datos cargarCategorias.php. " + error)
        });

    ////////////////////////////// MENÚ CATEGORÍAS ///////////////////////////////
    // [1 punto] Permitir escoller unha categoría ou unha subcategoría.
    // Débese permitir escoller unha categoría e unha subcategoría dentro desta.
    $(document).on("click", ".categoria", function () {

        // [1 punto] Cambiar o elemento activo do menú.
        // Añado la clase activa a todos los elementos y luego se la quito al elemento pulsado.
        $(".categoria").addClass("activa"); 
        $(this).removeClass("activa");
        $(".categoria").each(function () {
            $(this).attr("src", "imaxes/categorias/" + $(this).data("nome") + ".png");
        });
        $(this).attr("src", "imaxes/categorias/inactivo/" + $(this).data("nome") + ".png");

        subcategorias = $(this).attr("id");

        let tipo = "";
        $.getJSON("servidor/cargarSubcategorias.php", { categoria: subcategorias })
            .done(function (datosSubcategoria) {
                $.each(datosSubcategoria, function () {
                    
                    tipo += "<img class='icona subcategoria activa' id='" + subcategorias + "' src='imaxes/tipos/" + this.tipo + ".png' data-subcategoria='" + this.tipo + "'/>";
                });
                // [1 punto] Limpar a pantalla ao cambiar de categoría.
                $("#artigos").html("");
                $("#submenu").html(tipo);
            })

            // Hai que controlar posibles erros da BD.
            .fail(function (error) {
                alert("Error en la lectura de la base de datos cargarSubcategorias.php. " + error)
            });
    });

    ////////////////////////////// MENÚ SUBCATEGORÍAS ///////////////////////////////
    // [1 punto] Permitir escoller unha categoría ou unha subcategoría.
    // Débese permitir escoller unha categoría e unha subcategoría dentro desta.
    // [1 punto] Amosar os elementos da subcategoría ao premer nunha categoría.
    $(document).on("click", ".subcategoria", function () {

        // [1 punto] Cambiar o elemento activo do menú.
        $(".subcategoria").addClass("activa");
        $(this).removeClass("activa");
        $(".subcategoria").each(function () {
            $(this).attr("src", "imaxes/tipos/" + $(this).data("subcategoria") + ".png");
        });
        $(this).attr("src", "imaxes/tipos/inactivo/" + $(this).data("subcategoria") + ".png");

        ////////////////////////////// MENÚ ARTIGOS ///////////////////////////////
        // Hai que amosar os artigos en venda da subcategoría elixida.
        // [3 puntos] Amosar os artigos en venda.
        idSubcategoria = $(this).attr("id");
        let dataSubcategoria = $(this).data("subcategoria");
        tipoArtigo = "";
        $.post("servidor/cargarArtigos.php", { categoria: idSubcategoria, tipo: dataSubcategoria }, function () { }, "json")
            .done(function (datosArtigo) {
                $.each(datosArtigo, function () {
                    /**
                     * Se produce un error si se usa el mismo id en el div que en la imagen. Se debe usar otro nombre de id.
                     */
                    tipoArtigo += "<div><img class='icona artigo activa' id='" + this.idArtigo + "' src='imaxes/artigos/" + this.idArtigo + ".png' data-prezo='" + this.prezo + "'/><div></div></div>";
                });
                $("#artigos").html(tipoArtigo);
                // Hacer los elementos correspondientes dragables.
                // [2 puntos] Debes permitir arrastrar as imaxes dos artigos á zona de recepción sen que despracen a pantalla.
                $("img.artigo").draggable({ revert: true, containment: "document", scroll: false });
            })
            // Hai que controlar posibles erros da BD.
            .fail(function (error) {
                alert("Error en la lectura de la base de datos cargarArtigos.php. " + error)
            });
    });

    // Premendo nos artigos débense amosar as súas características.
    // [4 puntos] Amosar as características de cada artigo ao premer nel.
    $(document).on("click", ".artigo", function () {
        idArtigo = $(this).attr("id");

        //[1 punto] Limpar a pantalla ao cambiar de categoría.
        $("#artigos p").html("");
        $.post("servidor/datosArtigo.php", { artigo: idArtigo }, function () { }, "json")
            .done(function (datosProducto) {
                let tipoProducto = "<p class='prezo'>" + parseFloat(datosProducto.prezo).toFixed(2) + " €</p><p class='stock'>" + datosProducto.stock + "</p>";
                $("img[id=" + idArtigo + "] + div").html(tipoProducto);
                //console.log(tipoProducto);
            })
            // Hai que controlar posibles erros da BD.
            .fail(function (error) {
                alert("Error en la lectura de la base de datos datosArtigo.php. " + error)
            });
    });

    // Débese permitir arrastrar os artigos ao carriño.
    // [2 puntos] Debes crear unha zona de recepción que acepte as miniaturas.
    $("#carro").droppable({
        accept: "img.artigo",
        drop: function (event, ui) {
            var artigoEscollido = ui.draggable.attr("id");
            // Débese actualizar o carriño cando se introduce unha nova prenda deportiva.
            // [1 punto] Actualizar o carriño.
            // [1 punto] Amosar o carro actualizado.
            $.post("servidor/gardarArtigo.php", { artigo: artigoEscollido, prezo: ui.draggable.data("prezo") }, function () { }, "json")
                .done(function (datosCarro) {
                    console.log(datosCarro);
                    if (datosCarro == "OK") {
                        traerCarro();
                    } else if (datosCarro == "ERRO: UPDATE") {
                        alert("Error en la actualización de la base de datos.");
                    }
                })

                // Hai que controlar posibles erros da BD.
                .fail(function (error) {
                    alert("Error en la lectura de la base de datos gardarArtigo.php. " + error)
                });
        }
    });
    
    function traerCarro() {
        $.getJSON("servidor/traerCarro.php")
            .done(function (datosCarro) {
                let artigos = "";
                let total = 0;
                $.each(datosCarro, function () {
                    artigos += "<div>";
                    artigos += "<img class='prenda' src='imaxes/artigos/" + this.idArtigo + ".png'/>";
                    artigos += "<div>" + this.cantidade + "</div>";
                    artigos += "<div>" + this.prezo + "</div>";
                    artigos += "</div>";
                    total += parseFloat(this.prezo);
                });
                $("#compra").html(artigos);
                //[1 punto] Actualizar visualmente o total.
                $("#total").html(total);

            })
            .fail(function (error) {
                alert("Error en la lectura de la base de datos traerCarro.php. " + error)
            });
    }
});