import "./App.css";
import LuckyN from "./LuckyN";
import { sum } from "./utils";
// import Counter from "./Counter";
// import Dumbo from "./Dumbo";
// import ScoreKeeper from "./ScoreKeeper";
// import EmojiClicker from "./EmojiClicker";
// import Dice from "./Dice";
// import Die from "./Die";
//import LuckyN from "./LuckyN";

function lessThan4(dice){
  return sum(dice) < 4;
}

function allSameValue(dice){
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      {/* <Die val={2}/> */}

      {/* <Dice dice={[1,2,3,4]} color = "red"/>
      <Dice dice={[3,1,3,6]} />
      <Dice dice={[1,2,4,1]} /> */}
      {/* <ScoreKeeper numPlayers={3} target={3} /> */}

      <LuckyN numDice={2} winCheck={lessThan4} title="Roll less than 4"/>
      <LuckyN numDice={3} winCheck={allSameValue} title="Roll the same number"/>

    </div>
  );
}

export default App;
