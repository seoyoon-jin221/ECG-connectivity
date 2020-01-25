#include <SoftwareSerial.h>

SoftwareSerial mySerial(7, 8); // RX, TX  

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
  mySerial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  long randNumber;
  randNumber = random(0,100);
  byte buffer[3] = {
    0xAD, 
    (byte)(randNumber),
    (byte)(randNumber >> 8)
  };
  Serial.write(buffer, sizeof(buffer));
  mySerial.write(buffer, sizeof(buffer));

if (mySerial.available()){
  byte cmd = Serial.read();
}
}
}
