var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var red = new five.Led(5);
  var blue = new five.Led(3);
  var green = new five.Led(4);

  // Blinking all colors
  // red.blink(1000);
  // green.blink(3000);
  // blue.blink(2000);

  // Make Purple
  // red.on();
  // blue.on();
  // green.off();

  // Make ???
  // red.on();
  // blue.on();
  // green.on();

  // Blinking purple
  red.blink(500);
  blue.blink(500);
});
