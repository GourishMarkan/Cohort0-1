import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (data) => {
        const jsonData = await data.json();
        setTodos(jsonData.todos);
      });
    }, 10000);
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h5>{description}</h5>
      </div>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div>
//       <CardWrapper>hi there</CardWrapper>
//       <CardWrapper>
//         <TextComponent />
//       </CardWrapper>
//     </div>
//   );
// }
// function CardWrapper({ children }) {
//   return <div style={{ border: "2px solid black" }}>{children}</div>;
// }

// function TextComponent() {
//   return <div>hi there this is text component</div>;
// }

// export default { CardWrapper, TextComponent };

// import { CardWrapper, TextComponent } from "./CardWrapper";
// let GLOBAL_ID = 4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Go to gym",
//       description: "Need to hit the gym from 7-9PM",
//     },
//     {
//       id: 2,
//       title: "Go to Clas",
//       description: "Need to go to the class from 4-7 PM",
//     },
//     {
//       id: 3,
//       title: "Eat foor",
//       description: "Need to eat food from 2-4 PM",
//     },
//   ]);
//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: GLOBAL_ID++,
//         title: "new todo",
//         description: "new todo desc",
//       },
//     ]);
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add todo</button>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }
// export default App;
