$(document).ready(function () {
  $("table").DataTable();
});

// function agregarNombre() {
//   let nombreUsuario = document.getElementById("#nombreUsuario").value;
//   alert(nombreUsuario);
// }

function preguntarNombre() {
  var name = prompt("Dinos tu nombre: ");
  if (name == null || name == "") {
    txt = "No Name provided";
  } else {
    txt = `Bienvenido ${name}!`;
  }
  alert(txt);
  if (txt != "No Name provided") {
    // var name = document.getElementById("nombreUsuario");
    var paragraph = document.getElementById("nombreUsuario");
    var text = document.createTextNode(`Bienvenido ${name}`);
    paragraph.classList.add("nameStyle");
    paragraph.appendChild(text);
  }
}

function agregarNombre() {}

// // agregarNombre();

// function carritoPopUp() {
//   var popup = document.getElementById("myPopup");
//   if (popup.classList.contains("show")) {
//     popup.classList.remove("show");
//   } else {
//     popup.classList.add("show");
//   }
// }

// var paragraph = document.getElementById("p");
// var text = document.createTextNode("This just got added");

// paragraph.appendChild(text);

// FUNCION DE CONTADOR
let i = 0;
document.getElementById("contador").innerHTML = i
function contadorSuma() {
  i++;
  if (i === 20){
    $('#contador').removeClass('normal');
    $('#contador').addClass('verde');
  }
  if (i > 0 && i < 20){
    $('#contador').removeClass('rojo');
    $('#contador').removeClass('verde');
    $('#contador').addClass('normal');
  }
  else if (i < 0) {
    $('#contador').removeClass('normal');
    $('#contador').addClass('rojo');
  }
  document.getElementById("contador").innerHTML = i;
}

function contadorResta() {
  i--;
  if (i === 20){
    $('#contador').removeClass('normal');
    $('#contador').addClass('verde');
  }
  if (i >= 0 && i < 20){
    $('#contador').removeClass('rojo');
    $('#contador').removeClass('verde');
    $('#contador').addClass('normal');
  }
  else if (i < 0) {
    $('#contador').removeClass('normal');
    $('#contador').addClass('rojo');
  }
  document.getElementById("contador").innerHTML = i;
}