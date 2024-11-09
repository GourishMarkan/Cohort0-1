import { useState } from "react";

export default function Background() {
  const [defaultColor, setColor] = useState("white");
  return (
    <div style={{ backgroundColor: defaultColor }}>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => setColor("red")}
      >
        red
      </button>
      <button style={{ backgroundColor: "yellow" }}>Yellow</button>
      <button style={{ backgroundColor: "black" }}>Black</button>
      <button style={{ backgroundColor: "purple" }}>Purple</button>
      <button style={{ backgroundColor: "green" }}>Green</button>
      <button style={{ backgroundColor: "Blue" }}>Blue</button>
      <button style={{ backgroundColor: defaultColor, color: "black" }}>
        Default
      </button>
    </div>
  );
}
