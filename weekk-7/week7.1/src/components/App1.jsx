import { useContext, useState } from "react";
import { CountContext } from "../Context";
function App1() {
  const [count, setCount] = useState(0);
  // to use content api wrap  anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  console.log("hi there");
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountRenderer);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountRenderer);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App1;
// import { useState } from "react";

// function App1() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   );
// }
// function Count({ count }) {
//   return <div>{count}</div>;
// }
// function Buttons({ count, setCount }) {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         decrease
//       </button>
//     </div>
//   );
// }
// export default App1;
