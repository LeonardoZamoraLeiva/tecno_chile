const url = "https://jsonplaceholder.typicode.com/posts";

const getDatos = () => {
  return new Promise((resolve, reject) => {
    resolve(fetch(url).then((response) => response.json()));
    reject(new Error("No existen datos"));
  });
};

async function fectchinData() {
  try {
    usuarios = [];
    const datosFetched = await getDatos();
    for (const dato of datosFetched) {
      usuarios.push(dato);
      if (dato === datosFetched[19]) {
        break;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
  usuarios.forEach((usuario) => {
    crearTarjetas(usuario);
  });
}

fectchinData();

let tarjeta = document.getElementById("tarjeta");
let modalTile = document.getElementById("exampleModalLabel");
let modalBody = document.getElementById("modalBody");

function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-39-46";

  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}

// crear tarjetas desde el array usuarios

// console.log(usuarios);
let tester = function () {
  for (let i = 0; i < 3; i++) {
    console.log(usuarios[i]);
  }
};

let crearTarjetas = function (usuario) {
  const miNodoColumna = document.createElement("div");
  miNodoColumna.classList.add("col-4");
  const miNodoTarjeta = document.createElement("div");
  miNodoTarjeta.classList.add("card");
  miNodoTarjeta.setAttribute("style", "width: 18rem");
  const miNodoBody = document.createElement("div");
  miNodoBody.classList.add("card-body");
  const miNodoHeader = document.createElement("h5");
  miNodoHeader.classList.add("card-title");
  miNodoHeader.textContent = usuario.title;
  const miNodoText = document.createElement("p");
  miNodoText.classList.add("card-text");
  miNodoText.textContent = usuario.title;
  const miNodoBotones = document.createElement("div");
  miNodoBotones.classList.add("row", "justify-content-evenly");
  const miNodoBotonUno = document.createElement("div");
  miNodoBotonUno.classList.add("col-4");
  const miNodoBotonDos = document.createElement("div");
  miNodoBotonDos.classList.add("col-4");
  //   miNodoBoton.classList.add("btn", "btn-primary");
  const miNodoBoton = document.createElement("button");
  miNodoBoton.classList.add("btn", "btn-primary", "col");
  miNodoBoton.textContent = "Display!";
  // asignamos al boton el valor del usuario.id para
  // que sea el argumento de la funcion que despliega el modal
  miNodoBoton.setAttribute("data-bs-toggle", "modal");
  miNodoBoton.setAttribute("data-bs-target", "#exampleModal");

  miNodoBoton.setAttribute("onclick", `desplegarModal(${usuario.id})`);
  const miNodoBotonFav = document.createElement("button");
  miNodoBotonFav.classList.add("btn", "btn-primary", "col");
  miNodoBotonFav.textContent = "Favoritos";
  // asignamos cada chlild a su paren correspondiente

  miNodoBotonUno.appendChild(miNodoBoton);
  miNodoBotonDos.appendChild(miNodoBotonFav);
  miNodoBotones.appendChild(miNodoBotonUno);
  miNodoBotones.appendChild(miNodoBotonDos);
  miNodoBody.appendChild(miNodoHeader);
  miNodoBody.appendChild(miNodoText);
  miNodoBody.appendChild(miNodoBotones);
  miNodoTarjeta.appendChild(miNodoBody);
  miNodoColumna.appendChild(miNodoTarjeta);

  tarjeta.appendChild(miNodoColumna);
};

console.log(usuarios);
// funcion para desplegar el modal dinamicamente
function desplegarModal(x) {
  usuarios.forEach(function (usuario) {
    if (x == usuario.id) {
      console.log(usuario.id);
      modalTile.textContent = usuario.title;
      modalBody.textContent = usuario.body;
    }
  });
}

// Funcion para el loader
var myVar;

function tiempo() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myCards").style.display = "block";
}
