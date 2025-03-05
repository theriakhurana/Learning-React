import Die from "./Die";
import "./die.css";

export default function Dice({ dice, color}) {
  return (
    <section className="Dice">
      {dice.map((val, i) =>{
        return <Die key ={i} val={val} color={color}/>
      })}
    </section>
  )
};