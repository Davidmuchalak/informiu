<head>
  <script src="main.js">
    //window.onload = function(){
  //textarea.focus();
//};
var comentarios = document.getElementById("comentarios");
var boton = document.getElementById("boton");
var textarea = document.getElementById("textarea");
var nome = document.getElementById("nome");
var name;
var edicion = false;
function anadir() {
  if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {
    textarea.value = "";
    textarea.focus();
  } else if (edicion === false) {
    if (
      nome === null ||
      nome.value.length === 0 ||
      /^\s+$/.test(nome.value)
    ) {
      name = "Anónimo";
    } else {
      name = nome.value;
    }
    var div = document.createElement("div");
    comentarios.appendChild(div);
    var pnom = document.createElement("p");
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var eliminar = document.createElement("input");
    var editar = document.createElement("input");
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes;
    switch (fecha.getMonth()) {
      case 0:
        mes = "Janeiro";
        break;
      case 1:
        mes = "Fevereiro";
        break;
      case 2:
        mes = "Março";
        break;
      case 3:
        mes = "Abril";
        break;
      case 4:
        mes = "Mayo";
        break;
      case 5:
        mes = "Junho";
        break;
      case 6:
        mes = "Julio";
        break;
      case 7:
        mes = "Agosto";
        break;
      case 8:
        mes = "Setembro";
        break;
      case 9:
        mes = "Outubro";
        break;
      case 10:
        mes = "Novembro";
        break;
      case 11:
        mes = "Dezembro";
        break;
      default:
        break;
    }
    var year = fecha.getFullYear();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML =
      "Escrito por " +
      name +
      " em " +
      dia +
      " de " +
      mes +
      " de " +
      year +
      " as " +
      hora +
      ":" +
      minutos +
      ".";
    p.innerHTML = textarea.value;
    pnom.setAttribute("class", "pnom");
    p.setAttribute("class", "p");
    hr.setAttribute("class", "hr");
    eliminar.setAttribute("class", "eliminar");
    editar.setAttribute("class", "editar");
    div.appendChild(pnom);
    div.appendChild(p);
    div.appendChild(eliminar);
    div.appendChild(editar);
    div.appendChild(hr);
    textarea.value = "";
    nome.value = "";
    
    </script>
   </head>
