import { useState } from "react";
export default function Counter(){
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count+1);
  const add3 = () =>{
    setCount((currCount) => currCount+1);
    console.log(count); //0
    setCount((currCount) => currCount+1);
    setCount((currCount) => currCount+1);
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={incrementCount}>+1</button>
      <button onClick={add3}>+3</button>
    </div>
  )
}