import { useState } from "react";
import Counter from "./components/counter/Index";
import "./App.css";
import ToDoAPP from "./components/ToDoAPP/Index";
import Calculator from "./components/calculator/Index";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} setCount={setCount}/>
      <ToDoAPP/>
      <Calculator/>
    </>
  );
}

export default App;
