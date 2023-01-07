/*
 * Potentiometer
 * PodPi - Volume 2 - Fireworks Rate
 * http://www.podpi.com/ch2-3
 * 
 * Step 1: Read pg. 30 - 33 in your PodPi Volume 2 
 * zine. 
 * 
 * Step 2: Follow directions on page 33 to build the 
 * hardware and write the code. 
 * 
 * Step 3: In the code, capture the temperature value 
 * from the analog pin. Evaluate the value captured 
 * and write some conditions that relate to the blink 
 * rate of the LED. Each color can blink at different 
 * rates that relate to the range of values measured. 
 * (See PodPi Volume 1 for more information.) Feeling 
 * stuck? Check out the code solution at PodPi.com/
 * ch2-3 Links to an external site.!
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {

  // ===== Define the RGB LED
  var red = new five.Led(9);
  var blue = new five.Led(7);
  var green = new five.Led(8);

  // ===== Define the sensor
  // Thermistor on Analog Pin A4
  var thermistor = new five.Sensor("A1");

  // ===== Execute this function when 
  // ===== the sensor value changes
  thermistor.on("change", function() {

    // Post the message to the console
    console.log('value=' + this.value );

    // Adjust the values based on your tests
    if ( this.value > 740) {
      red.blink(this.value);
      blue.blink(this.value);

    } else if ( this.value > 730 ) {
      red.blink(this.value);
    } else if ( this.value > 720 ) {
      blue.blink(this.value);
    } else if ( this.value > 700) {
      green.blink(this.value);
    }
  });

});