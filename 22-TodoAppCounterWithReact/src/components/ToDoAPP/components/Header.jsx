import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../components/style.css'

const Header = ({ todos, setTodos }) => {
  let [inputValue, setinputValue] = useState("");
  return (
    <div className="AddToDo">
      <input className="todoInp"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
      />
      <button className="addBtn"
        onClick={() => {
          let obj = {
            id: uuidv4(),
            todo: inputValue,
          };

          setTodos([...todos, obj]);

          setinputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
