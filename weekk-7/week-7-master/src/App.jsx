// import { useContext, useMemo, useState } from "react";
// import { CountContext } from "./context";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

// import { useMemo } from "react";

import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  // const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  // const count = useRecoilValue(countAtom);
  // const isEven = useMemo(() => {
  //   count % 2 == 0;
  // }, [count]);
  return <div>{isEven ? "It is even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
