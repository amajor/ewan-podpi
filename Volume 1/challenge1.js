/*
 * LIGHT THE GALLEY
 * PodPi - Volume 1 - Challenge 1 (pg 5)
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

/*
// use a single array
board.on("ready", function() {

  // Create our array of lights on the board
  var array = new five.Leds([
    3, 4, 5, 6, 9, 10, 11, 12
  ]);
  
  // Turn on the array of lights after 1 second
  // array.on(1000); // 1000 ms = 1 second


  array.blink(1000);

});
*/

// Use two separate arrays
board.on("ready", function() {

  // Create our array of lights on the board
  var array1 = new five.Leds([3, 4, 5, 6]);
  var array2 = new five.Leds([9, 10, 11, 12]);

  array1.blink(500);
  array2.blink(100);

});