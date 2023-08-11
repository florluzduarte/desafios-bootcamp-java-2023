const leerEdad = () => {
  let edad;
  do {
    edad = Number(prompt("Ingrese su edad para continuar:"));
  } while (!edad || edad <= 0);
  return edad;
};

const validarEdad = (edad) => {
  if (edad >= 18 && edad <= 120) {
    alert("Bienvenid@, su login fue exitoso");
  }
  if (edad < 18) {
    alert("Lo sentimos, solo pueden ingresar mayores de 18 años");
  }
  if (edad > 120) {
    alert("Parece que su edad es incorrecta, vuelva a intentar");
  }
};

const iniciarLogin = () => {
  const edad = leerEdad();
  validarEdad(edad);
};
