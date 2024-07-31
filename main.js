"use strict";
let arrProductos = ["Tallarin Lucchetti", "Aceite de Girasol Cañuelas", "Yerba Mañanita", "Arroz Parboil Dos Hermanos", "Tomate Molto Pelado", "Harina 000 Morixe", "Leche La Serenísima", "Azucar Check Comun ", "Jabón líquido para ropa Ala ", "Detergente Cif Bioactive", "Shampoo Dove", "Jabones De Tocador Rexona", "Cerveza Rubia Lata Heineken", "Vino Malbec Alma Mora", "Gaseosa Schweppes Zero"]
let arrPrecio = [980.00, 1750.00, 3280.00, 2600.00, 1250.00, 790.00, 980.00, 1360.00, 1610.00, 1550.00, 2900.00, 2400.00, 2450.00, 4600.00, 2900.00]
let arrCant = [10, 15, 30, 20, 15, 5, 10, 8, 5, 10, 6, 5, 3, 5, 6]
let arrImagen = ["./1.webp", "./2.webp", "./2.webp", "./3.webp", "./4.webp", "./5.webp", "./6.webp", "./7.webp", "./8.webp", "./9.webp", "./10.webp", "./11.webp", "./12.webp", "./13.webp", "./14.webp", "./15.webp"]

function cargarProductos(arrayProdutos, arrayPrecios, ArrayCantidad, arrayimagenes) {
  for (let i = 0;i<arrProductos.length;i++){
const div =document.querySelector(".card")
div.innerHTML +=

    


  }

}

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


let nombre = document.getElementById("nombre");
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
)