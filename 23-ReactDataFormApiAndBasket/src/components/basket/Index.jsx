import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const Basket = ({ basket, localbasket, setlocalbasket }) => {
  const [itemCounts, setItemCounts] = useState({});

  useEffect(() => {
    const initialCounts = localbasket.reduce((counts, item) => {
      counts[item.id] = 1; 
      return counts;
    }, {});
    setItemCounts(initialCounts);
  }, [localbasket]);

  const Increment = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };

  const Decrement = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max(prevCounts[itemId] - 1, 1),
    }));
  };

  const Delete = (itemId) => {
    setlocalbasket(localbasket.filter(item => item.id !== itemId));
    setItemCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      delete updatedCounts[itemId];
      return updatedCounts;
    });
  };

  const DeleteAll = () => {
    setlocalbasket([]);
    setItemCounts({});
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    localbasket.forEach((item) => {
      totalPrice += item.unitPrice * (itemCounts[item.id] || 0);
    });
    return totalPrice;
  };

  const getUnitPrice = (item) => {
    return item.unitPrice * (itemCounts[item.id] || 0);
  };
  return (
    <div className={style.box}>
      <h2>Basket</h2>
      <div>
        {localbasket.map((item) => (
          <div key={item.id} className={style.basketInfo}>
            <h6>Name: {item.name}</h6>
            <span>Unit Price: {getUnitPrice(item)}</span>
            <div className={style.count}>
              <button
                className={style.countProd}
                onClick={() => Decrement(item.id)}
              >
                -
              </button>
              <p>{itemCounts[item.id] || 0}</p>
              <button
                className={style.countProd}
                onClick={() => Increment(item.id)}
              >
                +
              </button>
            </div>
            <button className={style.delete} onClick={() =>Delete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className={style.bottom}>
        <h4>Total: {getTotalPrice()}</h4>
        <button className={style.del} onClick={DeleteAll}>
          Delete 
        </button>
      </div>
    </div>
  );
};

export default Basket;
