const solicitarValorIngresos = () => {
  let ingresos;
  do {
    ingresos = Number(prompt("Total de ingresos mensuales:"));
  } while (!ingresos || ingresos <= 0);
  return ingresos;
};

const calcularPresupuesto = (ingresos) => {
  const gastosNecesarios = (ingresos * 0.5).toFixed(2);
  const gastosOpcionales = (ingresos * 0.3).toFixed(2);
  const ahorros = (ingresos * 0.2).toFixed(2);

  alert(
    `Tus gastos necesarios son: $ ${gastosNecesarios}, tus gastos opcionales: $ ${gastosOpcionales} y los ahorros: $ ${ahorros}`
  );
};
