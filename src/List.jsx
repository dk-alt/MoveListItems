import "./styles.css";

export default function List({ data, setItems }) {
  return (
    <div className="list">
      {data.map((item) => {
        return (
          <div className="list-item" key={item.id}>
            <input
              type="checkbox"
              value={item.id}
              onClick={() => {
                setItems(item);
              }}
            />
            <label>{item.text}</label>
          </div>
        );
      })}
    </div>
  );
}
