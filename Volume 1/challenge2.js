/*
 * Potentiometer
 * PodPi - Volume 1 - Challenge 2 (pg 11)
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {
  var pot = new five.Sensor('A0');  // new sensor on Analog Pin A0
  var led = new five.Led(11);       // new LED on Digital Pin 11
  var value = 0;                    // record a value

  // Execute this function each time the pot variable changes
  pot.on('change', function() {
    value = this.value;  // record the current value
    console.log('Potentiometer value is: ' + value);  // send message

    // set the brightness to 1/4 of the value
    // led.brightness(Math.abs((value/4)));

    // set the blinking rate to the value
    led.blink(value);
  });

});