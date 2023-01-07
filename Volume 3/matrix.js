/**
 * Step 1: Read p. 6-7 in your Volume 3 zine. 
 * Step 2: Follow the directions on p. 6 to plug in 
 * your Matrix Board to the Arduino breadboard
 * Plug in the 4 pins of the matrix to the Arduino, 
 * then connect the four wires. 
 * 
 * Step 3: Create your code. 
 * Follow the directions on p. 7 to write the code 
 * for your Matrix. Check out the PodPi website if 
 * you get stuck! 
 * 
 * http://www.podpi.com/matrix-dotLinks
 * 
 * Step 4: Run your code! 
 * Run your code with node matrix.js (or whatever 
 * name you used when you created your code). 
 */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33"
  });

  var device = 0;
  var on = 1;

  // Pattern for "Hi"
  matrix.led(device,2,1,on);
  matrix.led(device,2,4,on);
  matrix.led(device,2,6,on);
  matrix.led(device,3,1,on);
  matrix.led(device,3,4,on);
  matrix.led(device,4,1,on);
  matrix.led(device,4,2,on);
  matrix.led(device,4,3,on);
  matrix.led(device,4,4,on);
  matrix.led(device,4,6,on);
  matrix.led(device,5,1,on);
  matrix.led(device,5,4,on);
  matrix.led(device,5,6,on);
  matrix.led(device,6,1,on);
  matrix.led(device,6,4,on);
  matrix.led(device,6,6,on);
});