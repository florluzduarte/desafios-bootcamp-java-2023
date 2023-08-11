const iniciarCalculadora = () => {
  const costosFijos = leerCostosFijos();
  const costosVariables = leerCostosVariables();
  const precioDeVenta = leerPrecioDeVenta();
  const puntoDeEquilibrio = calcularPuntoEquilibrio(
    costosFijos,
    costosVariables,
    precioDeVenta
  );
  mostrarResultado(puntoDeEquilibrio);
};
