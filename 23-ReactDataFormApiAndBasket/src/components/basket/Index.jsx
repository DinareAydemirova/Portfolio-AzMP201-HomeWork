import { useState } from "react";
import React  from "react";
import style from "./style.module.css";

const Basket = ({ basket }) => {
  let [count, setcount] = useState(1);

  return (
    <div className={style.box}>
      <h2>Basket</h2>
      <div>
        {basket.map((item) => (
          <div key={item.id} className={style.basketInfo}>
            <h6>Name: {item.name}</h6>
            <span>Unit Price: {item.unitPrice}</span>
            <div className={style.count}>
              <button className={style.countProd} onClick={()=>{
                if(count>0){
                  setcount(--count)
                }
                if(count==0){
                 
                }
              }}>-</button>
              <p>{count}</p>
              <button className={style.countProd} onClick={()=>{
                setcount(++count)
              }}>+</button>
            </div>
          </div>
        ))}
      </div>
      <h4>Total: </h4>
    </div>
  );
};

export default Basket;
