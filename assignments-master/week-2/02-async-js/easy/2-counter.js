// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// const i = 1;
// function demo1() {
//   if (i == 10) {
//     clearTimeout();
//   } else {
//     console.log("I am number: " + i);
//     i + 1;
//   }
// }
// for (let index = i; index < 12; index++) {
//   setTimeout(demo1, 1000);
//   setTimeout(demo1, 1000);
//   setTimeout(demo1, 1000);
// }
// Define a counter object
const counter = {
  value: 0,
  timeoutId: null,

  // Function to increment the counter and schedule the next call
  incrementAndSchedule: function () {
    this.value++;
    console.log(this.value);

    // Schedule the next call after 1000 milliseconds (1 second)
    this.timeoutId = setTimeout(this.incrementAndSchedule.bind(this), 1000);
  },

  // Function to start the counter
  start: function () {
    if (this.timeoutId === null) {
      // Start the counter if it's not already running
      this.incrementAndSchedule();
    } else {
      console.error("Counter is already running.");
    }
  },

  // Function to stop the counter
  stop: function () {
    if (this.timeoutId !== null) {
      // Clear the timeout to stop the counter
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    } else {
      console.error("Counter is not running.");
    }
  },

  // Function to reset the counter
  reset: function () {
    this.value = 0;
    console.log("Counter reset.");
  },
};

// Example usage
counter.start(); // Start the counter
// Output: 1, 2, 3, ...

// To stop the counter after a specific time (e.g., 5 seconds), you can use setTimeout
setTimeout(() => {
  counter.stop(); // Stop the counter after 5 seconds
}, 5000);

// (Hint: setTimeout);
