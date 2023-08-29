const datosCreditos = [
  {
    nombre: "Plan 001",
    capital: 150000,
    plazo: 30,
    tasa: "0.15",
  },
  {
    nombre: "Plan 002",
    capital: 300000,
    plazo: 180,
    tasa: "0.10",
  },
  {
    nombre: "Plan 003",
    capital: 485000,
    plazo: 60,
    tasa: "0.23",
  },
];

const dibujarTablaInicial = (data) => {
  const elementoPadre = document.getElementById("table-body");
  data.forEach((item) => {
    const row = document.createElement("tr");

    const nombre = document.createElement("th");
    nombre.innerHTML = item.nombre;
    const capital = document.createElement("td");
    capital.innerHTML = item.capital;
    const plazo = document.createElement("td");
    plazo.innerHTML = item.plazo + " días";
    const tasa = document.createElement("td");
    tasa.innerHTML = item.tasa.slice(2) + "%";
    const interes = document.createElement("td");
    interes.classList.add("interes");

    row.appendChild(nombre);
    row.appendChild(capital);
    row.appendChild(plazo);
    row.appendChild(tasa);
    row.appendChild(interes);
    elementoPadre.append(row);
  });
};

const calcularIntereses = (data) => {
  const arrayIntereses = [];
  data.map((item) => {
    const intereses = (item.capital * item.plazo * Number(item.tasa)) / 100;
    arrayIntereses.push(intereses);
  });
  return arrayIntereses;
};

const mostrarResultados = () => {
  const resultados = calcularIntereses(datosCreditos);
  const elementoContenedor = document.getElementsByClassName("interes");

  resultados.map((dato, index) => {
    elementoContenedor[index].innerHTML = dato;
    elementoContenedor[index].classList.add("text-info", "fw-bold");
  });
};

dibujarTablaInicial(datosCreditos);

const button = document.getElementById("btn");
button.addEventListener("click", mostrarResultados);
