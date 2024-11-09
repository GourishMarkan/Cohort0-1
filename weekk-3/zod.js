const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassowrd = "123456";

const zod = require("zod");
mongoose.connect(
  "mongodb+srv://markangourish10:fsnHBCllrOzkIbEI@cluster0.5fubg21.mongodb.net/userappnew?"
);
const app = express();
app.use(express.json());
const Users = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const existtingUsers = await Users.findOne({ email: username });
  if (existtingUsers) {
    res.status(404).send("Username Already Exits");
  }

  const user = new Users({
    name: "Harkirat Singh",
    email: "tzir@example.com",
    password: "123456",
  });
  user.save().then(() => console.log("meow"));
  res.json({
    msg: "user created successfully",
  });
});
app.listen(3001);
// this is for understanding zod library
// if this is an array of number
// function validate(obj) {
//   const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//   });
//   const res = schema.safeParse(obj);
//   console.log(res);
// }
// validate({
//   email: "test@gamil.com",
//   password: "tester12",
// });
// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   //   KINDLY USE FIND FUNCTION

//   //   for (let i = 0; i < ALL_USERS.length; i++) {
//   //     if (
//   //       ALL_USERS[i].username == username &&
//   //       ALL_USERS[i].password == password
//   //     ) {
//   //       userExists = true;
//   //     }
//   //   }
//   //   return userExists;
//   if (
//     !ALL_USERS.find((users) => {
//       return users.username == username && users.password == password;
//     })
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(userExists("harkirat@gmail.com", 123));
