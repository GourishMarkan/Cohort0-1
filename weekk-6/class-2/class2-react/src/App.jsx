import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Counter from "./Counter";
import CallBack from "./CallBack";

function App() {
  // const [todos, setTodos] = useState([]);
  // // axios way

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos/id").then((res) => {
  //     setTodos(res.data.todos.id);
  //   });
  // }, []);

  // fetch way
  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos").then(async (data) => {
  //     const res = await data.json();
  //     setTodos(res.todos);
  //   });
  // });
  const [button, setButton] = useState(1);

  return (
    <div>
      {/* {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))} */}
      <CallBack />
      <br />
      <br />
      <Counter />
      <br />
      <button
        onClick={() => {
          setButton(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setButton(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setButton(3);
        }}
      >
        3
      </button>
      {/* {<Todo id={1} key={Todo.id} />} */}
      {<Todo id={button} key={Todo.id} />}
    </div>
  );
}
function Todo({ id }) {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async (res) => {
      const data = await res.json();
      setTodo(data.todo);
    });
  }, [id]);

  return (
    <div>
      id:{id}
      <h1>{todo.title}</h1>
      <h6>{todo.description}</h6>
    </div>
  );
}
export default App;
