const form = document.getElementById("form");

const nombreUsuario = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validación de nombre de usuario
  if (nombreUsuario.value === "") {
    alert("Por favor, ingrese su nombre de usuario.");
    return;
  }

  // validación de correo electrónico
  if (!email.value.includes("@")) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  // validación de contraseña
  if (password.value === "") {
    alert("Por favor, ingrese una contraseña.");
    return;
  }

  // validación de confirmación de contraseña
  if (password2.value !== password.value) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // si todo es válido, envio el formulario
  form.submit();
});

window.onload = () => {
  document.getElementById("username").focus();
};