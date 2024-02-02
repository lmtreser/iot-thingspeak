/*  
    CONSULTAR LA API DE THINGSPEAK 
    Viernes 21 de enero de 2022 
*/

// Proceso asíncrono que consulta una API para obtener datos
const main = () => {
  axios // Hago una petición a la API mediante la biblioteca Axios
    .get("https://api.thingspeak.com/channels/1328155/feeds.json?results=20")
    // manejar respuesta exitosa
    .then((response) => {
      let {
        // Variable que almacena los datos crudos que me interesan, desestructurando
        data: { feeds },
      } = response;

      // Limpio los datos y los envío a los gráficos
      let datos = feeds.map((datosAux) => {
        // Enviar datos al primer gráfico
        graf.data.labels.push(datosAux.created_at); // Tiempo en eje X
        graf.data.datasets.forEach((dataset) => {
          dataset.data.push(datosAux.field1); // Temperatura en eje Y
        });
        // Enviar datos al segundo gráfico
        graf2.data.labels.push(datosAux.created_at); // Tiempo en eje X
        graf2.data.datasets.forEach((dataset) => {
          dataset.data.push(datosAux.field2); // Nivel de luz en eje Y
        });
      });
      console.log(datos);
      // Actualiza estado de los gráficos
      graf.update();
      graf2.update();
    })
    // manejar error
    .catch((error) => {
      console.log(error);
    });
};

main();