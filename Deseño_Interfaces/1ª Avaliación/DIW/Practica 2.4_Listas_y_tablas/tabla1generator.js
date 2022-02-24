function main() {
  const FILAS = 4;
  const COLUMNAS = 4;

  var texto = "<table>";
  for (let i = 0; i < FILAS; i++) {
    texto += "<tr>";
    for (let j = 0; j < COLUMNAS; j++) {
      if (i == 0 && j == 0) {
        texto += '<td class="cabeceira">...</td>';
      } else if (i == 0) {
        texto += '<td class="cabeceira">Columna ' + j + "</td>";
      } else if (j == 0) {
        texto += '<td class="cabeceira">Fila ' + i + "</td>";
      } else {
        texto += '<td class="taboa">celda ' + i + "" + j + "</td>";
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
