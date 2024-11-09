const demo = function () {
  if (i == 60) {
    clearInterval(t);
    clear();
  } else {
    console.log(`${i} is the counter`);
    i++;
  }
};