/*
 * Potentiometer
 * PodPi - Volume 2 - Fireworks Grand Finale
 * http://www.podpi.com/ch2-4
 * 
 * Put on a fireworks show! Combine everything you've 
 * learned so far into one circuit.
 * 
 * Step 1: Read pg. 34 - 37 in your PodPi Volume 2 
 * zine.
 * 
 * Step 2: Follow directions on pages 34-35 to build
 * the hardware and write the code. 
 * 
 * Step 3: This challenge is a tough one! Don't be 
 * discouraged if you struggle at first. Check out 
 * pages 36-37 for some hints. :) You can also follow 
 * the step-by-step instructions at PodPi.com/ch2-4 !
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {

  // Define all 3 RGB LEDs (each color)
  var red1 = new five.Led(9);
  var blue1 = new five.Led(10);
  var green1 = new five.Led(11);

  var red2 = new five.Led(8);
  var blue2 = new five.Led(6);
  var green2 = new five.Led(7);

  var red3 = new five.Led(4);
  var blue3 = new five.Led(3);
  var green3 = new five.Led(5);

  // Define all three buttons
  var button1 = new five.Button("A2");
  var button2 = new five.Button("A3");
  var button3 = new five.Button("A4");

  // Define the sensors
  var potentiometer = new five.Sensor("A1");
  var thermistor = new five.Sensor("A0");

  // When button 1 is pressed
  button1.on('press', function() {
    red3.toggle();
  });

  // When button 2 is pressed
  button2.on('press', function() {
    blue3.toggle();
  });
 
  // When button 3 is pressed
  button3.on('press', function() {
    green3.toggle();
  });

  // When temperature sensor value changes
  thermistor.on("change", function() {
    console.log('thermistor value=' + this.value );

    // Adjust the values based on your tests
    if ( this.value > 760 ) {
      red2.blink(this.value);
    } else if ( this.value > 430 ) {
      blue2.blink(this.value);
    } else if ( this.value > 0) {
      green2.blink(this.value);
    }
  });

  // When the potentiometer value changes
  potentiometer.on("change", function() {
    console.log('potentiometer value=' + this.value );
    
    // Adjust the values based on your tests
    if ( this.value > 160 ) {
      red1.blink(this.value);
    } else if ( this.value > 130 ) {
      blue1.blink(this.value);
    } else if ( this.value > 110) {
      green1.blink(this.value);
    }
  });

});