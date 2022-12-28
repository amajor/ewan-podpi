/*
 * Potentiometer
 * PodPi - Volume 2 - The Color Selector
 * http://www.podpi.com/ch2-1
 * 
 * Step 1: 
 * Read pg. 10 - 17 in your PodPi Volume 2 zine. 
 * 
 * Step 2: 
 * Wire up three tactile switches, each controlling 
 * one color of an RGB LED. Remember to use a 100k 
 * resistor for each switch and a 330 Ohms resistor 
 * for each color. (See pg. 9  for resistor colors.)
 * 
 * Step 3: For this challenge, you will need to write 
 * your own code! Refer to PodPi Volume 0 for a code 
 * sample. (For hints about the code, 
 * head to http://www.podpi.com/ch2-1)
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

  // Set our buttons on the analog pins
  var push_red = new five.Button("A3");
  var push_green = new five.Button("A2");
  var push_blue = new five.Button("A1");

  // When button Red is pushed, toggle the red LED
  push_red.on('press', function() {
    red.toggle();
  });

  // When button Green is pushed, toggle the green LED
  push_green.on('press', function() {
    green.toggle();
  });

  // When button Blue is pushed, toggle the blue LED
  push_blue.on('press', function() {
    blue.toggle();
  }); 
});