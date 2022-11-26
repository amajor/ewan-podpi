var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Declare all three LED lights
  var led3 = new five.Led(3); // Arduino Pin 3
  var led4 = new five.Led(4); // Arduino Pin 4
  var led5 = new five.Led(5); // Arduino Pin 5

  // Set blinking interval for each light
  led3.blink(500); // Blinking Interval in Milliseconds
  led4.blink(250); // Blinking Interval in Milliseconds
  led5.blink(1500); // Blinking Interval in Milliseconds
});
