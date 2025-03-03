import "./App.css"
// import Counter from "./Counter";
// import Dumbo from "./Dumbo";
// import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
function App(){
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}

      <ScoreKeeper numPlayers {3} target={3} />
    </div>
  );
}

export default App