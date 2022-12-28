/*
 * Potentiometer
 * PodPi - Volume 2 - Resistors (pg 9)
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {

  // Declare our LED light
  var my_led = new five.Led(3)

  // Make the LED blink
  my_led.blink(500);
  
});