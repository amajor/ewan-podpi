/*
 * Potentiometer
 * PodPi - Volume 1 - Challenge 5 (pg 25)
 */

// Set up the board and require the Johnny-Five code
var five = require("johnny-five");
var board = new five.Board();

// Execute this function when the board is ready
board.on("ready", function() {

  // Declare our servo which is plugged into pin 11
  var servo = new five.Servo({
    pin:11
  });

  /** 
   * Exercise 1: Tell our servo to SWEEP!
  */
  // servo.sweep();

  /** 
   * Exercise 2: Go to an angle!
   */
  // // Set an angle
  // var angle = 10;

  // var time_in_milliseconds = 100;

  // // Tell our servo to go to a certain angle!
  // servo.to(angle, time_in_milliseconds);

  /**
   * Exercise 3: Sweep between angles
   */
  var x = 0; // Minimum Angle
  var y = 180; // Maximum Angle
  var i = 100; // Time interval in milliseconds to reach the minimum and maximum angles
  var s = 5; // Specify the number of steps to take during a sweep

  servo.sweep({
    range:[x, y], 
    interval: i, 
    step: s
  });
});