// import myJson from "assets/json/usuarios.json" assert { type: "json" };

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

usuarios.forEach(function (usuario) {
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
  const miNodoBoton = document.createElement("button");
  miNodoBoton.classList.add("btn", "btn-primary");

  miNodoBody.appendChild(miNodoHeader);
  miNodoBody.appendChild(miNodoText);
  miNodoBody.appendChild(miNodoBoton);
  miNodoTarjeta.appendChild(miNodoBody);
  miNodoColumna.appendChild(miNodoTarjeta);

  tarjeta.appendChild(miNodoColumna);
});
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

// const myModal = document.getElementById("myModal");
// const myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", () => {
//   myInput.focus();
// });
