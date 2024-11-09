/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  console.log(start);
  while (Date.now() - start < seconds) {
    let i = 0;
    if (i != 10) {
      let c = i * 10;
      i++;
    }
  }
}
console.log("Start");
sleep(3000); // Busy-wait for 3000 milliseconds (3 seconds)
console.log("End");
