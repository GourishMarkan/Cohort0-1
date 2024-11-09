import { memo, useCallback, useState } from "react";

function CallBack() {
  const [count, setCount] = useState(0);
  // function logSomething() {
  //   console.log("child clicked");
  // }
  const logSomething = useCallback(() => {
    console.log("child clicked");
  }, []);
  return (
    <div>
      <ButtonComponet inputFunction={logSomething} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
const ButtonComponet = memo(({ inputFunction }) => {
  console.log("child render");
  return (
    <div>
      <button onClick={inputFunction}>Button Clicked</button>
    </div>
  );
});
export default CallBack;
