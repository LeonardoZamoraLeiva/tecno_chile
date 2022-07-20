let productos = [
  {
    imagen:
      "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw9d638f5d/images/imagenes-productos/800/MKX5/MKX53ATHYZ-001.jpg?sw=513&sh=654&sm=fit",
    nombre: "Nintendo Switch V2",
    categoria: "Consola",
    precio: 319.99,
    Codigo: "CS-8456",
    stock: true,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw37c35450/images/large/24206726.jpg?sw=1200&sh=1200&sm=fit",
    nombre: "Samsung Galaxy AE32 128GB",
    categoria: "Telefonía",
    precio: 159.99,
    Codigo: "SP-9889",
    stock: true,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://media.ldlc.com/r1600/ld/products/00/05/94/60/LD0005946049.jpg",
    nombre: "Xiamoi Redmi 10C 64GB",
    categoria: "Telefonía",
    precio: 139.99,
    Codigo: "SP-5468",
    stock: true,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://sipoonline.cl/wp-content/uploads/2022/01/Consola-Sony-PlayStation-5-Blu-Ray-Glacier-White.png",
    nombre: "PlayStation 5 Glacier White",
    categoria: "Consolas",
    precio: 679.99,
    Codigo: "CS-4568",
    stock: false,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
  {
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_628105-MLA49423179604_032022-O.jpg",
    nombre: "Xiaomi Poco X4 Pro 128GB",
    categoria: "Telefonia",
    precio: 309.99,
    Codigo: "SP-45231",
    stock: false,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt.",
  },
];

const divisa = "$";
let productosCarrito = document.querySelector("#carritoElements");

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
    miNodoTitle.textContent = info.nombre;
    // Imagen
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);
    // Precio
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `${info.precio}${divisa}`;
    // Boton
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "+";
    miNodoBoton.setAttribute("marcador", info.Codigo);
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
