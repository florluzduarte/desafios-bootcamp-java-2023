const leerCostosFijos = () => {
  let costosFijos;
  do {
    costosFijos = Number(prompt("Ingrese sus costos fijos:"));
  } while (!costosFijos || costosFijos < 0);
  return costosFijos;
};

const leerCostosVariables = () => {
  let costosVariables;
  do {
    costosVariables = Number(prompt("Ingrese sus costos variables:"));
  } while (!costosVariables || costosVariables < 0);
  return costosVariables;
};

const leerPrecioDeVenta = () => {
  let precioDeVenta;
  do {
    precioDeVenta = Number(prompt("Ingrese su precio de venta:"));
  } while (!precioDeVenta || precioDeVenta <= 0);
  return precioDeVenta;
};

const calcularPuntoEquilibrio = (
  costosFijos,
  costosVariables,
  precioDeVenta
) => {
  const resto = precioDeVenta - costosVariables;
  const puntoDeEquilibrio = costosFijos / resto;
  return puntoDeEquilibrio;
};

const mostrarResultado = (puntoDeEquilibrio) => {
  alert(`El punto de equilibrio es: ${Math.round(puntoDeEquilibrio)} ventas`);
};
