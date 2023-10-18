import "./styles.css";

export default function MoveItem({ items, setLeftItems, setRightItems }) {
  return (
    <div className="move-item">
      <button onClick={setLeftItems}>{">"}</button>
      <button onClick={setRightItems}>{"<"}</button>
    </div>
  );
}
