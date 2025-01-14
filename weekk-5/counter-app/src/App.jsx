import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true,
    },
    {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true,
    },
    {
      title: "study hard to be 100x developer",
      description: "study hard everyday",
      completed: true,
    },
  ]);
  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([
      ...todos,
      {
        title: "new Todo",
        description: "desc of new todo",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}
// state ,components
// let state = {
//   count: 0,
// };
// function App() {
//   const [count, setCount] = useState(0);
//   function CustomButton(props) {
//     function onClickHandler() {
//       props.setCount(props.count + 1);
//     }
//     return <button onClick={onClickHandler}>Counter{props.count}</button>;
//   }

//   // function onClickHandler() {
//   //   // state.count = state.count + 1;
//   //   // console.log(state.count);
//   //   setCount(count + 1);
//   // }
//   return (
//     <>
//       <div className="div">
//         {/* <button onClick={onClickHandler}>Counter {count}</button> */}
//         <CustomButton count={count} setCount={setCount}></CustomButton>
//       </div>
//     </>
//   );
// }
// component
export default App;
