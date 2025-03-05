import "./Button.css";

export default function Button({ text, click }) {
  return (
    <button className="Button" onClick={click}>{text}</button>
  );
};