const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.array(zod.number());
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}
const isOldEnoughMiddleware = function (req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    msg: "sorry u r not eligable";
  }
};
app.use(isOldEnoughMiddleware);
app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "u have sucessfully riden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "u r not eligable",
    });
  }
});
app.get("/ride2", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "u have sucessfully riden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "u r not eligable",
    });
  }
});
app.listen(3000, () => {
  console.log("it's working");
});
