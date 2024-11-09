const mongoose = require("mongoose");
// mongodb server url---
// mongodb+srv://markangourish10:fsnHBCllrOzkIbEI@cluster0.5fubg21.mongodb.net/
mongoose.connect(
  "mongodb+srv://markangourish10:fsnHBCllrOzkIbEI@cluster0.5fubg21.mongodb.net/todo-app1"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todo", todoSchema);
module.exports = {
  todo,
};
