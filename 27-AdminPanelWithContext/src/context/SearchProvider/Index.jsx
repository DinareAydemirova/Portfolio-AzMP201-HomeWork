import React, { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

const SearchProvider = ({ state, dispatch, children  }) => {
  const [search, setSearch] = useState("");
  const searchedData = () => {
    let filteredProducts = state.products;
    let filteredUsers =state.users;

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }
   

    return {filteredProducts, filteredUsers};
  };


 return(
    <SearchContext.Provider value={{search, setSearch, searchedData}}>{children}</SearchContext.Provider>
 )
};

export default SearchProvider;
