let productos = [
  {
    imagen:
      "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw9d638f5d/images/imagenes-productos/800/MKX5/MKX53ATHYZ-001.jpg?sw=513&sh=654&sm=fit",
    Nombre: "Nintendo Switch V2",
    Categoria: "Consolas",
    Precio: 319990,
    Codigo: "CS-8456",
    Stock: "Si",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw37c35450/images/large/24206726.jpg?sw=1200&sh=1200&sm=fit",
    Nombre: "Samsung Galaxy AE32 128GB",
    Categoria: "Telefonía",
    Precio: 159990,
    Codigo: "SP-9889",
    Stock: "Si",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://media.ldlc.com/r1600/ld/products/00/05/94/60/LD0005946049.jpg",
    Nombre: "Xiamoi Redmi 10C 64GB",
    Categoria: "Telefonía",
    Precio: 139990,
    Codigo: "SP-5468",
    Stock: "Si",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://sipoonline.cl/wp-content/uploads/2022/01/Consola-Sony-PlayStation-5-Blu-Ray-Glacier-White.png",
    Nombre: "PlayStation 5 Glacier White",
    Categoria: "Consolas",
    Precio: 679990,
    Codigo: "CS-4568",
    Stock: "No",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_628105-MLA49423179604_032022-O.jpg",
    Nombre: "Xiaomi Poco X4 Pro 128GB",
    Categoria: "Telefonia",
    Precio: 309990,
    Codigo: "SP-45231",
    Stock: "No",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_954129-MLA48035379675_102021-O.jpg",
    Nombre: "Iphone 14",
    Categoria: "Telefonia",
    Precio: 1400000,
    Codigo: "IP-2354",
    Stock: "No",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen: "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
    Nombre: "Reloj",
    Codigo: 1,
    Categoria: "Reloj",
    Precio: 300,
    Stock: "Si",
  },
  {
    imagen:
      "https://home.ripley.cl/store/Attachment/WOP/D347/2000378718727/2000378718727_2.jpg",
    Nombre: "Audifonos pro",
    Codigo: 2,
    Categoria: "Audifono",
    Precio: 200,
    Stock: "Si",
  },
  {
    imagen:
      "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2019/06/17172919/I88STWS-T-ripley.jpg",
    Nombre: "Audifonos noob",
    Codigo: 3,
    Categoria: "Audifono",
    Precio: 100,
    Stock: "Si",
  },
  {
    imagen:
      "https://home.ripley.cl/store/Attachment/WOP/D408/2000386234523/2000386234523_2.jpg",
    Nombre: "Silla",
    Codigo: 4,
    Categoria: "Silla",
    Precio: 400,
    Stock: "No",
  },
];

const divisa = "$";
let productosCarrito = document.getElementById("carritoElements");
let elementosCarrito = document.getElementById("elementosCarrito");
let precioTotal = document.getElementById("precioTotal");
let totalProductos = document.getElementById("totalProductos");
// Lista de carrito
let nombresItems = [];
var preciosItems = {};

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function crearElementosCarrito(object) {
  Object.entries(object).forEach((entry) => {
    const miNodoCarrito = document.createElement("div");
    const miNodoFullItem = document.createElement("div");
    miNodoFullItem.classList.add("col-6");
    const [key, value] = entry;
    miNodoFullItem.textContent = `${key}  x   ${value}`;
    const miNodoCarritoFoto = document.createElement("img");
    productos.forEach((info) => {
      if (key == info.Nombre) {
        miNodoCarritoFoto.setAttribute("src", info.imagen);
        miNodoCarritoFoto.classList.add("fotosCarro");
      }
    });

    miNodoCarrito.classList.add(
      "row",
      "justify-content-around",
      "align-items-center",
      "carritoDiv"
    );
    miNodoCarrito.classList.add("elementoCarrito", "my-2");
    miNodoCarrito.setAttribute("id", key);
    miNodoCarrito.appendChild(miNodoCarritoFoto);
    miNodoCarrito.appendChild(miNodoFullItem);

    if (elementosCarrito.hasChildNodes()) {
      if (document.getElementById(key)) {
        var nuevoDiv = document.getElementById(key);
        elementosCarrito.removeChild(nuevoDiv);
        elementosCarrito.appendChild(miNodoCarrito);
      } else if (document.getElementById("sinElementos")) {
        var nuevoDiv = document.getElementById("sinElementos");
        elementosCarrito.removeChild(nuevoDiv);
        elementosCarrito.appendChild(miNodoCarrito);
      } else {
        elementosCarrito.appendChild(miNodoCarrito);
      }
    } else {
      elementosCarrito.appendChild(miNodoCarrito);
    }
  });
}

function precioTotalFunc(preciosItems, database) {
  var precioCompra = 0;
  var productosTotal = 0;
  Object.entries(preciosItems).forEach((entry) => {
    const [key, value] = entry;
    database.forEach((info) => {
      if (key == info.Nombre) {
        console.log(info.Precio);
        precioCompra = precioCompra + info.Precio * value;
        productosTotal = productosTotal + value;
      }
      console.log(productosTotal);
    });
  });

  let miNodoPrecioTotal = document.createElement("col-6");
  miNodoPrecioTotal.setAttribute("id", "totalCarrito");
  miNodoPrecioTotal.textContent = `Total = $ ${precioCompra}`;
  if (precioTotal.hasChildNodes()) {
    var totalDiv = document.getElementById("totalCarrito");
    precioTotal.removeChild(totalDiv);
    precioTotal.appendChild(miNodoPrecioTotal);
  } else {
    precioTotal.appendChild(miNodoPrecioTotal);
  }

  let miNodoTotalProductos = document.createElement("p");
  miNodoTotalProductos.setAttribute("id", "totalProductosActual");
  miNodoTotalProductos.textContent = `${productosTotal} productos`;
  if (document.getElementById("0Elementos")) {
    var nuevoDiv = document.getElementById("0Elementos");
    totalProductos.removeChild(nuevoDiv);
    totalProductos.appendChild(miNodoTotalProductos);
  } else if (document.getElementById("totalProductosActual")) {
    var totalDiv = document.getElementById("totalProductosActual");
    totalProductos.removeChild(totalDiv);
    totalProductos.appendChild(miNodoTotalProductos);
  }
}

function agregarCarrito(info) {
  console.log(info);
  if (info.Stock === "Si") {
    nombresItems.push(info.Nombre);
    var preciosItems = removeDuplicates(nombresItems);
    nombresItems.forEach((x) => {
      preciosItems[x] = (preciosItems[x] || 0) + 1;
      preciosItems.shift();
    });
  } else alert("Este elemento no está disponible");

  crearElementosCarrito(preciosItems);
  precioTotalFunc(preciosItems, productos);
}

function crearProductos() {
  productos.forEach((info) => {
    // Estructura
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-lg-2", "col-md-4", "col-sm-6");
    // Body
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");
    // Titulo
    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.Nombre;
    // Imagen
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);
    // Precio
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `${divisa}${info.Precio}`;
    // Boton
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "+";
    miNodoBoton.setAttribute("marcador", info.Codigo);
    // al hacer click comienza la funcion
    miNodoBoton.onclick = function () {
      agregarCarrito(info);
    };

    // Insertamos
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    productosCarrito.appendChild(miNodo);
  });
}

crearProductos();

let tablaProductos = document.getElementById("tituloProductos");
// let footerProductos = document.getElementById("footerProductos");

$(document).ready(function () {
  Object.keys(productos[0]).forEach((key) => {
    // console.log(key, value);
    if (key != "imagen" && key != "descripcion") {
      const tableHeader = document.createElement("th");
      tableHeader.textContent = key;
      tablaProductos.appendChild(tableHeader);
    }
  });

  $("#tablaProductos").DataTable({
    data: productos,
    columns: [
      { data: "Nombre" },
      { data: "Categoria" },
      { data: "Precio" },
      { data: "Codigo" },
      { data: "Stock" },
    ],
  });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  if (modal.style.display == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
