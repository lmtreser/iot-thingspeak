/*
  Escribe valores en los campos 1 y 2 de un canal de ThingSpeak cada 20 segundos.
  Utiliza una placa basada en el ESP8266, un sensor DS18B20 y una LDR.

*/

#include <ESP8266WiFi.h>
#include "secrets.h"
#include "ThingSpeak.h"
#include <DallasTemperature.h>
#include <OneWire.h>

#define ONE_WIRE_BUS 4

char ssid[] = SECRET_SSID;   // WiFi SSID
char pass[] = SECRET_PASS;   // WiFi password

WiFiClient  client;
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

unsigned long myChannelNumber = SECRET_CH_ID;
const char * myWriteAPIKey = SECRET_WRITE_APIKEY;
const byte ANALOG_PIN = A0;

void setup() {

  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);
  sensors.begin();  // Inicializa el sensor de temperatura
  WiFi.mode(WIFI_STA);
  ThingSpeak.begin(client);  // Inicializa ThingSpeak
}

void loop() {

  // Blink, futuro LED de estado
  digitalWrite(LED_BUILTIN, LOW);
  delay(200);
  digitalWrite(LED_BUILTIN, HIGH);

  // Conectar o reconectar a WiFi
  if (WiFi.status() != WL_CONNECTED) {
    Serial.print("Intentando conectar a la red: ");
    Serial.println(SECRET_SSID);
    while (WiFi.status() != WL_CONNECTED) {
      WiFi.begin(ssid, pass);  // Conectar a una red WPA/WPA2
      Serial.print(".");
      delay(5000);
    }
    Serial.println("\nConectado!");
  }

  // Leer el sensor LDR
  int luz = analogRead(ANALOG_PIN);
  Serial.print("El sensor LDR registra un valor de: ");
  Serial.println(luz);
  
  // Lectura de temperatura ambiente, DS18B20
  Serial.print("Solicitando temperaturas...");
  sensors.requestTemperatures();
  Serial.println("LISTO");
  float tempC = sensors.getTempCByIndex(0);
  // Chequear si la lectura fue exitosa
  if (tempC != DEVICE_DISCONNECTED_C) {
    Serial.print("Temperatura del dispositivo es: ");
    Serial.println(tempC);
  }
  else {
    Serial.println("Error: No se pudo leer la temperatura");
  }

  // Colocar valores en los campos
  ThingSpeak.setField(1, tempC);
  ThingSpeak.setField(2, luz);

  // Escribir en el canal de ThingSpeak
  int httpStatus = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
  if (httpStatus == 200) {
    Serial.println("Canal actualizado exitosamente");
  }
  else {
    Serial.println("Problemas al actualizar el canal. Código de error HTTP " + String(httpStatus));
  }

  delay(20000); // Actualizar cada 20 segundos, ojo, bloqueante!
}
