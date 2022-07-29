$(document).ready(function () {
  $("table").DataTable();
});

// var nombreCurrent = ''
function preguntarNombre() {
  var name = prompt("Dinos tu nombre: ");
  if (name == null || name == "") {
    txt = "No Name provided";
  } else {
    txt = `Bienvenido ${name}!`;
    localStorage.setItem("usuario", name);
    var miStorage = localStorage.getItem("usuario");
    console.log(miStorage);
  }
  alert(txt);
  if (txt != "No Name provided") {
    // var name = document.getElementById("nombreUsuario");
    var paragraph = document.getElementById("nombreUsuario");
    var txt = document.createTextNode(`Bienvenido ${name}`);
    paragraph.classList.add("nameStyle");
    paragraph.appendChild(txt);
  }
}

let i = 0;
document.getElementById("contador").innerHTML = i;
function contadorSuma() {
  i++;
  if (i === 20) {
    $("#contador").removeClass("normal");
    $("#contador").addClass("verde");
  }
  if (i >= 0 && i < 20) {
    $("#contador").removeClass("rojo");
    $("#contador").removeClass("verde");
    $("#contador").addClass("normal");
  } else if (i < 0) {
    $("#contador").removeClass("normal");
    $("#contador").addClass("rojo");
  }
  document.getElementById("contador").innerHTML = i;
}

function contadorResta() {
  i--;
  if (i === 20) {
    $("#contador").removeClass("normal");
    $("#contador").addClass("verde");
  }
  if (i >= 0 && i < 20) {
    $("#contador").removeClass("rojo");
    $("#contador").removeClass("verde");
    $("#contador").addClass("normal");
  } else if (i < 0) {
    $("#contador").removeClass("normal");
    $("#contador").addClass("rojo");
  }
  document.getElementById("contador").innerHTML = i;
}
