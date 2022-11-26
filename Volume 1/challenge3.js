/*
 * Potentiometer
 * PodPi - Volume 1 - Challenge 3 (pg 17)
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {
  
  // Declare our sensor and LED light
  var lumina = new five.Sensor('A0');
  var led = new five.Led(3);

  // Add a listener for when the sensor changes
  lumina.on('change', function() { 
    console.log('light sensed = ' + this.value); 
    if ( this.value < 200) {
      led.on();
    } else {
      led.off ();
    }
  });
});