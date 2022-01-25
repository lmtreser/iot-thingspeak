/*
    Gráficando datos con Chart.js
    Viernes 21 de enero de 2022
*/

// Gráfico de temperatura
let chart1 = document.getElementById("cder").getContext("2d");
let graf = new Chart(chart1, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Sensor DS18B20",
        data: [],
        borderWidth: 2,
        borderColor: "rgb(0,100,0)",
        backgroundColor: "rgb(0,100,0)",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "TEMPERATURA (°C)",
        font: {
          weight: "bold",
          size: 16,
        },
      },
      subtitle: {
        display: false,
        text: "Mar del Plata - 2022",
        font: {
          weight: "italic",
          size: 14,
        },
      },
      legend: {
        position: "bottom",
        align: "center",
      },
      responsive: true,
    },
  },
});

// Gráfico de nivel de luz
let chart2 = document.getElementById("cizq").getContext("2d");
let graf2 = new Chart(chart2, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Sensor LDR",
        data: [],
        borderWidth: 2,
        borderColor: "rgb(0,0,100)",
        backgroundColor: "rgb(0,0,100)",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "NIVEL DE LUZ",
        font: {
          weight: "bold",
          size: 16,
        },
      },
      subtitle: {
        display: false,
        text: "Mar del Plata - 2022",
        font: {
          weight: "italic",
          size: 14,
        },
      },
      legend: {
        position: "bottom",
        align: "center",
      },
      responsive: true,
    },
  },
});
