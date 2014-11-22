// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function () {
    // Toggle the led states
    led2.toggle();
}, 200);
setInterval(function () {
    // Toggle the led states
    led1.toggle();
}, 220);
