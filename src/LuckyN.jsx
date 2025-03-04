import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import "./die.css";

//props: num, goal
//state: dice array
// event: roll button

export default function LuckyN({ title= "Dice Game", numDice = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>{title} {isWinner && "You Win!"}</h1>
      <Dice dice={dice} />
      {/* state flows down as props */}
      <button onClick={roll}>Roll</button>
    </main>
  );
}
