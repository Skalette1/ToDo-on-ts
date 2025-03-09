import { useDispatch } from "react-redux";
import trash from "../public/bin (1).png";

import { useState } from "react";
import { useSelector } from "react-redux";
import { add, remove } from "./actions";
interface ToDo {
  readonly id: number;
  name: string;
}
export const ToDO = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.items);
  const [name, setName] = useState<string>("");

  const list: ToDo = {
    name: name,
    id: Date.now(),
  };
  const addToDo = () => {
    dispatch(add(list));
    setName("");
  };
  const removeToDo = (id: number) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <div className="add">
        <input
          type="text"
          placeholder="Your todo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={addToDo}>add</button>
      </div>
      {items.map((item: ToDo) => (
        <ul key={item.id} className="todo-container">
          <li>{item.name}</li>
          <button onClick={() => removeToDo(item.id)}>
            <img src={trash} alt="delete" id="delete" />
          </button>
        </ul>
      ))}
    </div>
  );
};
