/*
 * Potentiometer
 * PodPi - Volume 2 - Fireworks Intensity
 * http://www.podpi.com/ch2-2
 * 
 * Step 1: 
 * Read pg. 18 - 29 in your PodPi Volume 2 zine.
 * Don't forget to pause and check out the map! 
 * 
 * Step 2: 
 * Follow directions on page 29 to build the 
 * hardware and write the code. 
 * 
 * Step 3: 
 * Refer to PodPi Volume 1 for code examples for the 
 * potentiometer. Write some code that captures the 
 * potentiometer value and changes the color and 
 * brightness of each color, depending on the value 
 * measured. 
 * 
 * Remember that the value measured goes 
 * from 0 to 1023.
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {

  // Set our color pins
  var red = new five.Led(9);
  var green = new five.Led(10);
  var blue = new five.Led(11);

  // Define the sensor (Potentiometer) on Analog Pin
  var potentiometer = new five.Sensor("A5");

  // Create a listener for the potentiometer
  potentiometer.on("change", function() {
    // Print a message of the value 
    // output by the potentiomter
    console.log('value = ' + this.value );

    // Adjust the values based on your tests
    if ( this.value > 500 ) {
      red.blink(this.value);
    } else if ( this.value > 300 ) {
      blue.blink(this.value);
    } else if ( this.value > 100) {
      green.blink(this.value);
    }
  });
});