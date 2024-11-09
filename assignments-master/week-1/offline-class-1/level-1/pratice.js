// async function
console.log("hi");
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function findSumTill100() {
  console.log(findSum(100));
}
// busy waiting
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 100000000000; i++) {
    a++;
  }
}
setTimeout(findSumTill100, 1000);
console.log("hi js");
// reading file
const fs = require("fs"); //file system module
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("hi there");
let a = 0;
// takes very long to return ,depends upon the length of file
for (let i = 0; i < 10000000000000000; i++) {
  a++;
}
console.log("oh hi !");

// -------------------------------
//
function kiratsAsyncFunction(callback) {
  setTimeout(() => {
    callback("hi there");
  }, 3000);
}
async function main2() {
  kiratsAsyncFunction((value) => {
    console.log(value);
  });
}
function sqr(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function callSomething(a, b, callbackFn) {
  let a1 = callbackFn(a);
  let b2 = callbackFn(b);
  return a1 + b2;
}
let ans = callSomething(3, 4, sqr);

console.log(ans);
