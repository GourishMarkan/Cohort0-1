/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("after one second");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("after two second");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("after three second");
    }, 3000);
  });
}

async function calculateTime() {
  const startTime = Date.now();
  const result1 = await waitOneSecond();
  const result2 = await waitTwoSecond();
  const result3 = await waitThreeSecond();

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log("Sequential execution completed in", duration, "milliseconds");
  console.log("Results:", result1, result2, result3);
}
calculateTime();
