const root = document.querySelector(":root"); 
const msgLabel = document.getElementById("info");

document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById("txtPass");

  passwordInput.addEventListener('input', function () {
    validatePassword(passwordInput.value);
  });
});

function validatePassword(password) {
  const rule1 = document.getElementById("rule-1");
  const rule2 = document.getElementById("rule-2");
  const rule3 = document.getElementById("rule-3");
  const rule4 = document.getElementById("rule-4");

  let rsRule1 = validateLengthPassword(password);
  let rsRule2 = validateExistNumber(password);
  let rsRule3 = validateExistUpperCase(password);
  let rsRule4 = validateExistCharacter(password);

  // ================================== RULE 1 =================================
  if (validateLengthPassword(password)) {
    root.style.setProperty("--text_rule1", '"✔ Debe contener exactamente 8 caracteres"');
    rule1.style.color = "#7afd80";
  }
  else {
    root.style.setProperty("--text_rule1", '"✘ Debe contener exactamente 8 caracteres"');
    rule1.style.color = "#c4c4c4bf";
  }
  // ================================== RULE 2 =================================
  if (validateExistNumber(password)) {
    root.style.setProperty("--text_rule2", '"✔ Debe contener al menos un número"');
    rule2.style.color = "#7afd80";
  }
  else {
    root.style.setProperty("--text_rule2", '"✘ Debe contener al menos un número"');
    rule2.style.color = "#c4c4c4bf";
  }
  // ================================== RULE 3 =================================
  if (validateExistUpperCase(password)) {
    root.style.setProperty("--text_rule3", '"✔ Debe contener al menos una letra mayusculas"');
    rule3.style.color = "#7afd80";
  }
  else {
    root.style.setProperty("--text_rule3", '"✘ Debe contener al menos una letra mayusculas"');
    rule3.style.color = "#c4c4c4bf";
  }
  // ================================== RULE 4 =================================
  if (validateExistCharacter(password)) {
    root.style.setProperty("--text_rule4", '"✔ Debe contener al menos un caracter especial"');
    rule4.style.color = "#7afd80";
  }
  else {
    root.style.setProperty("--text_rule4", '"✘ Debe contener al menos un caracter especial"');
    rule4.style.color = "#c4c4c4bf";
  }
  if (rsRule1 && rsRule2 && rsRule3 && rsRule4){
    msgLabel.textContent = "Contraseña válida"
    msgLabel.style.color = "greenyellow"
  } else{
    msgLabel.textContent = "Contraseña no válida"
    msgLabel.style.color = "lightcoral";
  }
}
function validateLengthPassword(password) {
  return password.length === 8 ? true : false;
}
function validateExistNumber(password) {
  var regex = /[0-9]/;
  return regex.test(password);
}
function validateExistUpperCase(password) {
  var regex = /[A-Z]/;
  return regex.test(password);
}
function validateExistCharacter(password) {
  var regex = /\W/;
  return regex.test(password);
}
