

// var regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[\w\W]{8})(?=.*[!@#$%^&*]).*$/;
// function validatePassword(contrasena) {
//   var mensaje = regex.test(contrasena) ? "Contraseña aceptada" : "Contraseña no aceptada";
//   return mensaje;
// }
// console.log(validatePassword(otherPassword));

function validatePassword() {
  let contrasena = document.getElementById("txtPass").value;
  let lblMessage = document.getElementById("lblMessage");

  if (contrasena.length() == 8){
    lblMessage.textContent = "Si tiene 8 caracterres";
    if (/^(?=.*[0-9])(?=.*[A-Z])(?=.*[\w\W]{8})(?=.*[!@#$%^&*]).*$./test(contrasena)) {
      lblMessage.textContent = "Contraseña aceptada";
      lblMessage.style.color = "#7afd80";
    } else {
      lblMessage.textContent = "Contraseña no aceptada";
      lblMessage.style.color = "#fd837a";
    }
  }
  else {
    lblMessage.textContent = "NO 8 caracterres";
  }

}
