const flujoDeCaja = [
  {
    mes: "enero",
    ingresos: 1500,
    egresos: 1500,
  },
  {
    mes: "febrero",
    ingresos: 2500,
    egresos: 2500,
  },
  {
    mes: "marzo",
    ingresos: 84683,
    egresos: 1155,
  },
  {
    mes: "abril",
    ingresos: 135353,
    egresos: 1533,
  },
  {
    mes: "mayo",
    ingresos: 1535,
    egresos: 5434,
  },
  {
    mes: "junio",
    ingresos: 4343354,
    egresos: 5434543,
  },
  {
    mes: "julio",
    ingresos: 435453,
    egresos: 4543,
  },
  {
    mes: "agosto",
    ingresos: 78351,
    egresos: 7816,
  },
  {
    mes: "septiembre",
    ingresos: 1878,
    egresos: 95634,
  },
  {
    mes: "octubre",
    ingresos: 48483,
    egresos: 9433,
  },
  {
    mes: "noviembre",
    ingresos: 35483,
    egresos: 53133,
  },
  {
    mes: "diciembre",
    ingresos: 3843,
    egresos: 348133,
  },
];

const dibujarTabla = (data) => {
  const elementoPadre = document.getElementById("table-body");

  data.forEach((item) => {
    const row = document.createElement("tr");

    const mes = document.createElement("th");
    mes.innerHTML = item.mes.charAt(0).toUpperCase() + item.mes.slice(1);
    const ingresos = document.createElement("td");
    ingresos.innerHTML = item.ingresos;
    const egresos = document.createElement("td");
    egresos.innerHTML = item.egresos;

    row.appendChild(mes);
    row.appendChild(ingresos);
    row.appendChild(egresos);
    elementoPadre.append(row);
  });
};

const calcularIngresos = (data) => {
  const arrayIngresos = [];
  data.forEach((mes) => {
    const ingresoMensual = mes.ingresos;
    arrayIngresos.push(ingresoMensual);
  });

  const totalIngresos = arrayIngresos.reduce((a, b) => a + b, 0);

  return totalIngresos;
};

const calcularEgresos = (data) => {
  const arrayEgresos = [];
  data.forEach((mes) => {
    const engresoMensual = mes.egresos;
    arrayEgresos.push(engresoMensual);
  });

  const totalEgresos = arrayEgresos.reduce((a, b) => a + b, 0);

  return totalEgresos;
};

//Las mejoras pedidas en el ejercicio las apliqué en la siguiente función
// No entendí del todo bien el ejercicio, espero que cumpla con lo solicitado

const calcularFlujoDeCaja = (ingresos, egresos) => {
  const resultadoDelFlujo = ingresos - egresos;
  const mensaje = document.getElementById("message");
  if (Math.sign(resultadoDelFlujo) === -1) {
    mensaje.innerHTML = `El flujo de caja es negativo. Las pérdidas son: ${resultadoDelFlujo}`;
    mensaje.classList.add("text-danger", "h3");
  }

  if (Math.sign(resultadoDelFlujo) === 1) {
    mensaje.innerHTML = `El flujo de caja es positivo. Las ganancias son: ${resultadoDelFlujo}`;
    mensaje.classList.add("text-success", "h3");
  }

  if (resultadoDelFlujo === 0) {
    mensaje.innerHTML = `Los ingresos y egresos son iguales`;
    mensaje.classList.add("text-info", "h3");
  }
};

const mostrarResultado = () => {
  const ingresos = calcularIngresos(flujoDeCaja);
  const egresos = calcularEgresos(flujoDeCaja);
  calcularFlujoDeCaja(ingresos, egresos);
};

dibujarTabla(flujoDeCaja);
