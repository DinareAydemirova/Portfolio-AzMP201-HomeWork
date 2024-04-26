import React from "react";
import Increment from "../increment/Index";
import Decrement from "../decrement/Index";
import Count from "../count";
import "../counter/style.css";
import InpDecBtn from "../inpDecBtn/Index";
import Input from "../input/Index";
import InpIncBtn from "../inpIncBtn/Index";

const Counter = ({ count, setCount }) => {
  return (
    <div className="container counter">
      <div className="incDec">
        <Decrement count={count} setCount={setCount} />
        <Count count={count} />
        <Increment count={count} setCount={setCount} />
      </div>
      <div className="CounterInput">
        <InpDecBtn />
        <Input/>
        <InpIncBtn/>
      </div>
    </div>
  );
};

export default Counter;
