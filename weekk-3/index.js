const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.array(zod.number());
// function validateInput(obj) {
//   const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//   });
//   const res = schema.safeParse(obj);
//   console.log(res);
// }
app.get("/health-checkup", (req, res) => {
  // do health check here
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "harkirat" || password != "pass") {
    res.status(404).json({
      msg: "User Doesn't exist",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(503).json({
      msg: "invalid inputs",
    });
    return;
  }
  res.json({
    msg: "ur heart is healthy ",
  });
});
// app.get("/health-checkup", (req, res) => {
//   res.json({ msg: "hi this is working" });
// });
app.use(express.json());
// post req without authenzication-----
// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const kidneysLength = kidneys.length;
//   res.send("u have " + kidneysLength + "kidneys");
// });
// post request with authentication----
app.post("/health-checkup", (req, res) => {
  // kidney=[1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  !response.success
    ? res.status(411).json({ msg: "invalid input" })
    : res.send({
        response,
      });
});
app.post("/login", (req, res) => {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({ msg: "ur inputs are invalids" });
    return;
  }
});
// Global catches
app.use((error, req, res, next) => {
  // console.log(error);//Log the error for debugging
  res.status(500).send("As internal server error occurred");
});

app.listen(3001, () => {
  console.log("tell me i m listening to u ");
});
