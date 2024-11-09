const express = require("express");

const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/todo", async (req, res) => {
  //   const title = req.body.title;
  //   const description = req.body.description;
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  //   zod.parseInt({});
  if (!parsePayload.success) {
    res.status(411).json({ msg: "u sent the wrong inputs" });
    return;
  }
  //   put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created successfully wow!",
  });
});
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
  // res.json({ todos: [] });
});
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: " wrong inputs" });
    return;
  }
  //   update
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({ msg: "completed todo good" });
});
app.listen(3000, () => {
  console.log("hi its working ");
});
