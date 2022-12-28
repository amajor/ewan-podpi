/*
 * Potentiometer
 * PodPi - Volume 1 - Challenge 4 (pg 21)
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {

  // Declare our sensor and LED light
  var celsius = new five.Sensor('A0');
  var led = new five.Led(3);
  var value = 0;

  // Add a listener for when the sensor changes
  celsius.on('change', function() {

    // Capture the temperature value
    temp_value = this.value;

    // Print out the current temperature value
    console.log('Temperature analog value is: ' + temp_value);

    // Blink at a rate equal to the temperature
    led.blink(temp_value);
  });
});