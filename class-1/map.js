// map
const input = [1, 2, 3, 4, 5];
const ans = input.map((i) => {
  return i * 2;
});
console.log(ans); //[2, 4, 6, 8, 10]
// filter
const input2 = [2, 3, 4, 5, 6];
const ans1 = input2.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans1);
