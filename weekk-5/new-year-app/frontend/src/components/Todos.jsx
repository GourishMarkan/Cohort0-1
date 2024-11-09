// import React from "react";

/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
// export function Todos({ todos }) {
//   return (
//     <div>
//       {todos.map((todo) => {
//         return (
//           <div>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//             <button>
//               {todos.completed == true ? "completed" : "mark as complete"}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
