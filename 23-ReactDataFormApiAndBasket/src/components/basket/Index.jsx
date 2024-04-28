import React from "react";
import style from "./style.module.css";

const Basket = ({ basket }) => {
  return (
    <div className={style.box}>
      <h2>Basket</h2>
      <div>
        {basket.map((item) => (
          <div key={item.id} className={style.basketInfo}>
            <h6>Name: {item.name}</h6>
            <span>Unit Price: {item.unitPrice}</span>
            <div className={style.count}>
              <button className={style.countProd}>-</button>
              <p>0</p>
              <button className={style.countProd}>+</button>
            </div>
          </div>
        ))}
      </div>
      <h4>Total: </h4>
    </div>
  );
};

export default Basket;
