const leerUsuario = () => {
  let usuario;
  do {
    usuario = prompt("Ingresar su nombre de usuario:");
  } while (!usuario);
  return usuario;
};

const leerClave = () => {
  let clave;
  do {
    clave = Number(prompt("Ingrese su clave de 4 dígitos:"));
  } while (
    !clave ||
    clave.toString().length < 4 ||
    clave.toString().length >= 5
  );
  return clave;
};

const validarCredenciales = (usuario, clave) => {
  if (usuario === "admin" && clave === 1234) {
    alert("Bienvenid@, su login fue exitoso");
  } else {
    alert("Lo sentimos, usuario o contraseña incorrectos");
  }
};

const iniciarLogin = () => {
  const usuario = leerUsuario();
  const clave = leerClave();
  validarCredenciales(usuario, clave);
};
