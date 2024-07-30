"use strict";
/*let arrProductos = ["Tallarin Lucchetti", "Aceite de Girasol Cañuelas", "Yerba Mañanita", "Arroz Parboil Dos Hermanos", "Tomate Molto Pelado", "Harina 000 Morixe", "Jabón líquido para ropa Ala ", "Cerveza Rubia Lata Heineken"]
let arrPrecio = [980.00, 1750.00, 3280.00, 2600.00, 1250.00, 790.00, 1610.00, 2450.00]
let arrCant = [100, 50]

document.querySelector("div button").addEventListener("click", () => {
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


btnEnviar.addEventListener("click", function(e){


  
 // e.preventDefault()

 if ( nombre.value=="" || apellido.value ==""  || email.value == "" || telefono.value == "" || comentario.value == "" ) {
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