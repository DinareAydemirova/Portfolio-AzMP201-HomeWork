import React, { useState, useEffect, useReducer } from "react";
import style from "./style.module.css";
import reducer from "../reducer";


const Basket = ({ basket, localbasket, setlocalbasket }) => {
  // const [itemCounts, setItemCounts] = useState({});

  const [state, dispatch]=useReducer(reducer,{
    itemCounts:{}
  })

  const {itemCounts}=state

  useEffect(() => {
    const initialCounts = localbasket.reduce((counts, item) => {
      counts[item.id] = 1; 
      return counts;
    }, {});
    // setItemCounts(initialCounts);
    dispatch({
      type:"ItemCount",
      itemCounts:initialCounts
    })
  }, [localbasket]);

  const Increment = (itemId) => {
    // setItemCounts((prevCounts) => ({...prevCounts,[itemId]: prevCounts[itemId] + 1,}));

    dispatch({
      type:"ItemCount",
      itemCounts:(prevCounts) => ({...prevCounts,[itemId]: prevCounts[itemId] + 1,})
    })
  };

  const Decrement = (itemId) => {
    // setItemCounts((prevCounts) => ({ ...prevCounts,[itemId]: Math.max(prevCounts[itemId] - 1, 1),}));
    dispatch({
      type:"ItemCount",
      itemCounts:(prevCounts) => ({ ...prevCounts,[itemId]: Math.max(prevCounts[itemId] - 1, 1),})
    })
  };

  const Delete = (itemId) => {
    // setlocalbasket(localbasket.filter(item => item.id !== itemId));
    dispatch({
      type:"SetLocalBasket",
      localbasket:localbasket.filter(item => item.id !== itemId)
    })
    // setItemCounts((prevCounts) => {const updatedCounts = { ...prevCounts };delete updatedCounts[itemId];return updatedCounts});
    dispatch({
      type:"ItemCount",
      itemCounts:(prevCounts) => {const updatedCounts = { ...prevCounts };delete updatedCounts[itemId];return updatedCounts}
    })
  };

  const DeleteAll = () => {
    // setlocalbasket([]);
    dispatch({
      type:"SetLocalBasket",
      localbasket:[]
    })
    // setItemCounts({});
    dispatch({
      type:"ItemCount",
      itemCounts:{}
    })
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    localbasket.forEach((item) => {
      totalPrice += item.unitPrice * (state.itemCounts[item.id] || 0);
    });
    return totalPrice;
  };

  const getUnitPrice = (item) => {
    return item.unitPrice * (state.itemCounts[item.id] || 0);
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
              <p>{state.itemCounts[item.id] || 0}</p>
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
