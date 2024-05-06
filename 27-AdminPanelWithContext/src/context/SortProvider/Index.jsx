import React, { createContext, useState } from "react";
export const SortContext = createContext();

const SortProvider = ({ state, dispatch, children }) => {
  const [sortType, setSortType] = useState("");

  const sortedData = () => {
    let filteredProducts = state.products;
    let filteredUsers =state.users;


    if (sortType === "a-z") {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "z-a") {
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "high-low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "low-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
       if (sortType === "a-z") {
      filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "z-a") {
      filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
    }
    return {filteredProducts,filteredUsers};
  };

  return (
    <SortContext.Provider value={{ sortType, setSortType, sortedData }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;
