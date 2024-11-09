/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("one second"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("two second"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("three second"), 3000);
  });
}

function calculateTime() {
  const startTime = Date.now();
  return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((data) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log("All promises resolved in", duration, "milliseconds");
      console.log(data);
    })
    .catch((error) => console.error(error));
}
calculateTime();
