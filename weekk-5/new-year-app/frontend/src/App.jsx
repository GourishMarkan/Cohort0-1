import { useState, useEffect } from "react";

import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // incorrect order
  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });
  // correct order
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos").then(async (data) => {
        const jsonData = await data.json();
        setTodos(jsonData.todos);
      });
    }, 10000);
  }, []);
  return (
    <>
      <CreateTodo />
      <Todos
        todos={todos}
        // todos={[
        //   {
        //     title: "go to gym",
        //     descripton: "6 to 8 now bro",
        //     completed: true,
        //   },
        //   {
        //     title: "buy groceries",
        //     description: "milk, eggs and bread",
        //     completed: false,
        //   },
        // ]}
      />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
