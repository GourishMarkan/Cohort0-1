// create http server
const express = require("express");
const port = 3001;
const app = express();
function calculateSum(n) {
  let ans = 0;
  for (let index = 0; index <= n; index++) {
    ans += index;
  }
  return ans;
}
app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(` ans is ${ans}`);
});
app.listen(port, () => {
  console.log("server app is listening on port ${port}");
});
// app.listen(port);
