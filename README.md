# INTRODUCCIÓN AL IOT

[Internet de las Cosas](https://es.wikipedia.org/wiki/Internet_de_las_cosas) (en inglés, Internet of Things, abreviado IoT) es un concepto que se refiere a una interconexión digital de objetos cotidianos con Internet. Es, en definitiva, la conexión de Internet más con objetos que con personas. Si los objetos de la vida cotidiana tuvieran incorporadas etiquetas de radio, podrían ser identificados y gestionados por otros equipos de la misma manera que si lo fuesen por seres humanos.​
Constituye un cambio radical en la calidad de vida de las personas en la sociedad, ofrece una gran cantidad de nuevas oportunidades de acceso a datos, servicios específicos en la educación, seguridad, asistencia sanitaria y en el transporte, entre otros campos.

## IoT con ThingSpeak

[ThingSpeak](https://thingspeak.com/) es un servicio de plataforma de análisis de Internet de las Cosas que permite agregar, visualizar y analizar flujos de datos en vivo en la nube. Puede enviar datos a ThingSpeak desde sus dispositivos, crear una visualización instantánea de datos en vivo y enviar alertas.
El canal público que recibe los datos desde el hardware utilizado en este ejemplo se puede acceder desde [thingspeak.com/channels/1328155](https://thingspeak.com/channels/1328155), el código fuente del proyecto está disponible en [GitHub](https://github.com/lmtreser/iot-thingspeak) y una versión online se ejecuta desde mi [blog](https://www.automatismos-mdq.com.ar/blog/tools/iot/).

## Tecnologías utilizadas

Para el desarrollo del cliente web se utilizó JavaScript junto a algunas bibliotecas:

* **[Chart.js](https://www.chartjs.org/)**. Simple y flexible biblioteca para crear gráficos.

* **[Axios](https://axios-http.com/)**. Es un Cliente HTTP basado en promesas para [node.js](https://nodejs.org/) y el navegador. Es isomorfico (= puede ejecutarse en el navegador y nodejs con el mismo código base). En el lado del servidor usa el modulo nativo http de node.js, mientras que en el lado del cliente (navegador) usa XMLHttpRequests. 

* **[Chota](https://jenil.github.io/chota/)**. Un micro (~3kb) framework de CSS ("chota" significa "pequeño" en idioma hindi.
