let usuarios = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et um reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
  },
];

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
usuarios.forEach(function (usuario) {
  // creamos los divs necesarios para crear c/tarjeta
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
  miNodoText.textContent = usuario.body;
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
  //   miNodoBody.appendChild(miNodoBotonDos);
  //   miNodoBody.appendChild(miNodoBotones);

  miNodoTarjeta.appendChild(miNodoBody);
  miNodoColumna.appendChild(miNodoTarjeta);

  tarjeta.appendChild(miNodoColumna);
});

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
