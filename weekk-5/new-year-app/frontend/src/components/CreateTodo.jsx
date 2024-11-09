import { useState } from "react";

export function CreateTodo() {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          // const value = e.target.value;
          setTitle(e.target.value);
        }}
      ></input>{" "}
      <br />
      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          // const value = e.target.value;
          setDescription(e.target.value);
        }}
      ></input>{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          // axios
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
// // import React from "react";
// import { useState } from "react";
// const CreateTodo = (props) => {
//   // react-query
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   return (
//     <div>
//       <input
//         style={{ padding: 10, margin: 10 }}
//         type="text"
//         placeholder="title"
//         onChange={(e) => {
//           setTitle(e.target.value);
//         }}
//       ></input>{" "}
//       <br />
//       <input
//         style={{ padding: 10, margin: 10 }}
//         type="text"
//         placeholder="description"
//         onChange={(e) => {
//           setDescription(e.target.value);
//         }}
//       ></input>{" "}
//       <br />
//       <button
//         style={{
//           backgroundColor: "black",
//           color: "whitesmoke",
//           margin: 10,

//           borderRadius: 50,
//         }}
//         onClick={() => {
//           fetch("http://localhost:3000/todo", {
//             method: "POST",
//             body: JSON.stringify({
//               title: title,
//               description: description,
//             }),
//             headers: {
//               contentType: "application/json",
//             },
//           }).then(async (res) => {
//             const json = await res.json();
//             alert("Todo added");
//           });
//         }}
//       >
//         Add a todo
//       </button>
//     </div>
//   );
// };

// export default CreateTodo;
