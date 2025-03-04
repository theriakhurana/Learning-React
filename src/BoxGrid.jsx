import Box from "./Box";
import "./box.css";
import { useState } from "react";

export default function BoxGrid() {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const reset = () => setBoxes([false, false, false, false, false, false]);

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((b, i) => {
        if (i === idx) return !b;
        else return b;
      });
    });
  };

  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => (
        <Box key = {idx} isActive={b} toggle={() => toggleBox(idx)} />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
