console.log("working");
// const fs = require("fs");
// // my own aynchronous function
// function KiratReadFile() {
//   console.log("inside kiratsReadFile");
//   return new Promise(function (resolve) {
//     console.log("inside promise");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("before resolve");
//       resolve(data);
//     });
//   });
// }
// // callback function to call
// function onDone(data) {
//   console.log(data);
// }
// async function main() {
//   // no call back no .then syntax
//   let value = await KiratReadFile();
//   console.log(value);
// }
// main();
// let a = KiratReadFile();
// console.log(a);
// a.then((data) => {
//   onDone(data);
// });
// console.log(a);
// let p = new Promise(function (res) {
//   res("hello");
// });
// p.then(() => {
//   console.log(p);
// });