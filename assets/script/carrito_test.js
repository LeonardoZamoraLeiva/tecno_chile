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
    miNodoBoton.onclick = function agregarCarrito() {
      if (info.Stock === "Si") {
        nuevoItem = listaCarrito.push(info);
        console.log(listaCarrito);
      } else alert("Este elemento no está disponible");
    };
    // EVENTUALMENTE AGREGAR STOCK POR CANTIDAD

    //agregarCarrito(info);
    // miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);
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
// Lista de carrito
let listaCarrito = [];
let precioCarrito = [];
