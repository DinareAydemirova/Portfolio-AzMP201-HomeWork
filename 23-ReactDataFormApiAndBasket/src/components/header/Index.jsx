import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Header = ({ datas, setDatas }) => {
  let [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let obj = {
            id: uuidv4(),
            data: inputValue,
          };
          setDatas([...datas, obj]);
          console.log(datas);
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
