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

* **[Chota](https://jenil.github.io/chota/)**. Un micro (~3kb) framework de CSS ("chota" significa "pequeño" en idioma hindi).

* **[Bulma](https://bulma.io/)**. Otro framework CSS utilizado para crear una variante del cliente. 

## Hardware

El hardware que se encarga de recoger los datos y enviarlos a la nube está basado en una placa de bajo costo que incorpora un chip ESP8266 (NodeMCU v3) junto a dos sensores: DS18B20 para medir la temperatura ambiente y una LDR para obtener valores de tensión relacionados con el nivel de la luz ambiente. El sistema se alimenta con un cargador de celular (5V) reciclado.
El circuito esquemático es el siguiente:

![Esquemático](/img/esquematico.png)

## Licencia

Este trabajo está protegido por la **Licencia MIT**. Puedes acceder a la versión original de la licencia (en inglés) a través del archivo [LICENSE](./LICENSE) o en línea en [The MIT License (MIT)](https://mit-license.org/). También proporcionamos una traducción no oficial desde [Wikipedia](https://es.m.wikipedia.org/wiki/Licencia_MIT#La_licencia):

Copyright (c) 2024 Lucas Martín Treser

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
