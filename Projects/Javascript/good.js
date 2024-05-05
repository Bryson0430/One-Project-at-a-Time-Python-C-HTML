import { Robot } from 'robot.js';

// Create a new instance of the Robot class
const robotInstance = new Robot("opera");

// Log the initial value of the x property
console.log(robotInstance.x);

// Call the turn method with appropriate arguments
robotInstance.turn(1000, 10000000);

// Log the updated value of the x property
console.log(robotInstance.x);

// Call the turn method again
robotInstance.turn(1000, 10000000);

// Log the final value of the x property
console.log(robotInstance.x);

// Error handling example
try {
  // Call a method that might throw an error
  robotInstance.someMethod();
} catch (error) {
  // Log the error message
  console.error('An error occurred:', error.message);
}