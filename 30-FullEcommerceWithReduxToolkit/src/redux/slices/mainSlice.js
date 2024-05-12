import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  users: [],
  filteredProd: [],
};

export const getDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts:(state, action)=>{
        state.products=[...action.payload]
    },
    setUsers:(state, action)=>{
        state.users=action.payload
    },
    setFilteredProducts:(state, action)=>{
        state.filteredProd=action.payload
    },
    setDashboard:(state, action)=>{
        state.products=action.payload
        state.users=action.payload

    }
  },
});

export const {setProducts,setUsers,setFilteredProducts} = getDataSlice.actions;

export default getDataSlice.reducer;
