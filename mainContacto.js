"use strict";



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
