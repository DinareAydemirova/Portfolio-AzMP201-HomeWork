import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
  getValues
} from "./redux/slices/counter";

import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const inputValue = useSelector((state) => state.counter.inputValue);

  const dispatch = useDispatch();

  //  const [inpValue, setinpValue] = useState("")

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => {
              dispatch(decrementByAmount());
            }}
          >
            Dec amount
          </button>

          <input
            type="text"
            name=""
            id=""
            placeholder="enter a number"
            onChange={(e) => {
              dispatch(getValues(e.target.value));
            }}
          />
          <button
            onClick={() => {
              dispatch(incrementByAmount());
            }}
          >
            inc amount
          </button>
        </div>

        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(reset(inputValue));
          }}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default App;
