const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Aquí puedes enviar los datos del formulario a tu servidor para registrar al usuario
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const usernameOrEmail = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  // Aquí puedes enviar los datos del formulario a tu servidor para autenticar al usuario
});
