"use strict";
let boton = document.querySelector("#${boton[i]}");
boton.addEventListener("click", () => {
  let cantidad = document.querySelector("#inpCantidad").value;
  cantidad = Number(cantidad);

  if (cantidad > 0 && (arrCant[i] - cantidad) > 0) {
    comprar(cantidad);
  } else if 
   (cantidad < 0){
    alert("La cantidad ingresada tiene que ser mayor a 0")
  } else 
  (cantidad < arrCant[i]){
    alert("Cantidad no disponible")

  }
})



function comprar(cantidad) {
  let total = 0
  total += cantidad * arrPrecio[i];
  document.getElementById("total").innerText = total
  arrCant [i] = arrCant [i] - cantidad;
}
