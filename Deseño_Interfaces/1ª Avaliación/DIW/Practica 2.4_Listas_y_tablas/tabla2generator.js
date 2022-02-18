function main() {
  const FILAS = 13;
  const COLUMNAS = 7;
  let servicios = [
    "General",
    "Alimentos y bebidas",
    "Vestido y calzado",
    "Vivencia",
    "Menaje",
    "Medicina",
    "Transporte",
    "Comunicaciones",
    "Ocio y cultura",
    "Enseñanza",
    "Hoteles",
    "Otros servicios",
  ];
  let header = [
    "2012M03",
    "2012M02",
    "2012M01",
    "2012M03",
    "2012M02",
    "2012M01",
  ];
  var texto = "<table>";
  for (let i = 0; i < FILAS; i++) {
    texto += "<tr>";
    for (let j = 0; j < COLUMNAS; j++) {
      if (i == 0 && j == 0) {
        texto += '<td class="cabeceira"></td>';
      } else if (i == 0) {
        texto += '<td class="cabeceira">' + header[j - 1] + "</td>";
      } else if (j == 0) {
        texto += '<td class="cabeceira">' + servicios[i - 1] + "</td>";
      } else if (j == 1 || j == 2 || j == 3) {
        texto +=
          '<td class="taboa">' +
          numeroAleatorio(97150, 102658) / 1000 +
          "</td>";
      } else if (j == 4 || j == 5 || j == 6) {
        texto +=
          '<td class="taboa">' + numeroAleatorio(-144, 39) / 10 + "</td>";
      }
    }
    texto += "</tr>";
  }
  texto += "</table>";
  tablebody.innerHTML = texto;
}
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
