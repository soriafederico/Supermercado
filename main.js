"use strict";
let arrProductos = [
  "Tallarin Lucchetti",
  "Aceite de Girasol Cañuelas",
  "Yerba Mañanita",
  "Arroz Parboil Dos Hermanos",
  "Tomate Molto Pelado",
  "Harina 000 Morixe",
  "Leche La Serenísima",
  "Azucar Check Comun ",
  "Jabón líquido para ropa Ala ",
  "Detergente Cif Bioactive",
  "Shampoo Dove",
  "Jabones De Tocador Rexona",
  "Cerveza Rubia Lata Heineken",
  "Vino Malbec Alma Mora",
  "Gaseosa Schweppes Zero",
];
let arrPrecio = [
  980.0, 1750.0, 3280.0, 2600.0, 1250.0, 790.0, 980.0, 1360.0, 1610.0, 1550.0,
  2900.0, 2400.0, 2450.0, 4600.0, 2900.0,
];
let arrCant = [10, 15, 30, 20, 15, 5, 10, 8, 5, 10, 6, 5, 3, 5, 6];
let arrImagen = [
  "./Imagenes/1.webp",
  "./Imagenes/2.webp",
  "./Imagenes/2.webp",
  "./Imagenes/3.webp",
  "./Imagenes/4.webp",
  "./Imagenes/5.webp",
  "./Imagenes/6.webp",
  "./Imagenes/7.webp",
  "./Imagenes/8.webp",
  "./Imagenes/9.webp",
  "./Imagenes/10.webp",
  "./Imagenes/11.webp",
  "./Imagenes/12.webp",
  "./Imagenes/13.webp",
  "./Imagenes/14.webp",
  "./Imagenes/15.webp",
];
let contenedor = document.querySelector(".contendorBody");

function cargarProductos(
  arrayProdutos,
  arrayPrecios,
  arrayCantidad,
  arrayimagenes
) {
  for (let i = 0; i < arrProductos.length; i++) {
    contenedor.innerHTML += 
    `<div class="card">
      <img src="${arrayimagenes[i]}" alt="${arrayProdutos[i]}">
      <p>${arrayProdutos[i]}</p>
      <p>${arrayPrecios[i]}</p>
      <p>Stock: ${arrayCantidad[i]}</p>
      <input type="number" name="inpCantidad" id="inpCantidad" min="0">
      <button> Comprar</button>
    </div>`;
  }
}

cargarProductos(arrProductos, arrPrecio, arrCant, arrImagen);

/*<form action="" name="form">
<div class="card">
    <img id="imagen" alt="">
    <p name="nombre">Nombre</p>
    <p name="precio">Precio</p>
    <p name="stock">Stock</p>
    <input type="number" name="inpCantidad" id="inpCantidad" min="0">
    <button> Comprar</button>
    </div>




/*document.querySelector("div button").addEventListener("click", () => {
  let cantidad = document.querySelector("div input").value;
  cantidad = Number(cantidad);
  if (cantidad > 0 && (arrCant[0] - cantidad) > 0) {
    comprar(cantidad);
  } else {
    alert("ingrese una cantidad mayor a cero o no hay stock")
  }
})

function comprar(cantidad) {
  document.getElementById("total").innerText = cantidad * arrPrecio[0];
}*/

/*let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let comentario = document.getElementById("comentario");
let btnEnviar = document.getElementById("enviar");
let datos = [];


btnEnviar.addEventListener("click", function (e) {



  // e.preventDefault()

  if (nombre.value == "" || apellido.value == "" || email.value == "" || telefono.value == "" || comentario.value == "") {
    alert("No se han cargado todos los datos solicitados")
    return false
  } else {


    datos[0] = nombre.value;
    datos[1] = apellido.value;
    datos[2] = email.value;
    datos[3] = telefono.value;
    console.log("Su comentario ha sido enviado de forma exitosa")

    let blob = new Blob([datos], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "contact.txt")
    alert("Su comentario ha sido enviado de forma exitosa")
  }
}
)*/
