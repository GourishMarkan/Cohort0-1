// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
let i = 0;
const demo = function () {
  if (i == 60) {
    clearInterval(t);
    clear();
  } else {
    console.log(`${i} is the counter`);
    i++;
  }
};
const t = setInterval(demo, 1000);
function clear() {
  console.log("counter is closeed");
}
