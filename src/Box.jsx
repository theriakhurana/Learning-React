import "./box.css";

export default function Box({ isActive, toggle }) {
  return (
    <div
      onClick={toggle}
      className="Box"
      style={{ backgroundColor: isActive ? "red" : "blue" }}
    ></div>
  );
}
