import { useState } from "react";

function generateGameBoard(){
  console.log("creating a initial game board");
  return Array(25);
}

export default function Dumbo(){
  const [board, setBoard] = useState(generateGameBoard);
  return <button onClick={()=> setBoard("chess")}>Click me to change state</button>
}