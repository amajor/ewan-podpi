var five = require("johnny-five");
var board = new five.Board();

const arduino_pin = 2;
const blinking_interval = 5006; // Milliseconds

board.on("ready", function() {
  var led = new five.Led(arduino_pin); // Arduino Pin
  led.blink(blinking_interval); // Blinking Interval in Milliseconds
});
