#include <SoftwareSerial.h>

#define INPUT_PIN A0

int data = 0;

SoftwareSerial mySerial(7, 8); // RX, TX  

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
  mySerial.begin(9600);

  digitalWrite(INPUT_PIN, HIGH);
}
void loop() {
  // put your main code here, to run repeatedly:

  //data = random(0,100);
  data = analogRead(INPUT_PIN);
  byte buffer[3] = {
    0xAD, 
    (byte)(data),
    (byte)(data >> 8)
  };
  Serial.print(data);
  mySerial.write(buffer, sizeof(buffer));
}
