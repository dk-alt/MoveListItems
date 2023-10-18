import { useState } from "react";
import "./styles.css";
import List from "./List";
import MoveItem from "./MoveItem";

const LIST_ITEMS = [
  {
    id: 5,
    position: 0,
    text: "Apple"
  },
  {
    id: 6,
    position: 0,
    text: "Banana"
  },
  {
    id: 7,
    position: 0,
    text: "Guava"
  },
  {
    id: 8,
    position: 0,
    text: "Grapes"
  },
  {
    id: 9,
    position: 0,
    text: "Orange"
  }
];

export default function App() {
  const [leftList, setLeftList] = useState(LIST_ITEMS);
  const [rightList, setRightList] = useState([]);
  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
  const [selectedRightItems, setSelectedRightItems] = useState([]);

  const setLeftItems = () => {
    const updatedLeftItems = leftList.filter(
      (item) => !selectedLeftItems.find((x) => x.id === item.id)
    );
    setLeftList(updatedLeftItems);
    setRightList((prev) => {
      return [...prev, ...selectedLeftItems];
    });
    setSelectedLeftItems([]);
  };
  const setRightItems = () => {
    const updatedRightItems = rightList.filter(
      (item) => !selectedRightItems.find((x) => x.id === item.id)
    );
    console.log("selectedRightItems", selectedRightItems);
    console.log("updatedRightItems", updatedRightItems);

    setRightList(updatedRightItems);
    setLeftList((prev) => {
      return [...prev, ...selectedRightItems];
    });
    setSelectedRightItems([]);
  };
  return (
    <div className="App">
      <h1>MOVE ITEMS</h1>
      <h2>{"Between 2 lists"}</h2>

      <div className="move-items-container">
        <List
          data={leftList}
          setItems={(item) =>
            setSelectedLeftItems([...selectedLeftItems, item])
          }
        />
        <MoveItem setLeftItems={setLeftItems} setRightItems={setRightItems} />
        <List
          data={rightList}
          setItems={(item) =>
            setSelectedRightItems([...selectedRightItems, item])
          }
        />
      </div>
    </div>
  );
}
