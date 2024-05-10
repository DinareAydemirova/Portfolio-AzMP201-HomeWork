import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllData } from "../../services/index";

const initialState = {
  card: [],
  basket: [],
  wishlist: [],
};

export const updateLocalStorage = (basket, wishlist) => {
  localStorage.setItem("basket", JSON.stringify(basket));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const retrieveBasketFromLocalStorage = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

const retrieveWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

export const getCard = createAsyncThunk("card", async () => {
  const data = await getAllData("/products");
  return data;
});

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    ...initialState,
    basket: retrieveBasketFromLocalStorage(),
    wishlist: retrieveWishlistFromLocalStorage(),
    totalItems: retrieveBasketFromLocalStorage().reduce((acc, item) => acc + item.quantity, 0),
  },
  reducers: {
    addToBasket: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      const existingItemIndex = state.basket.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.basket[existingItemIndex].quantity += 1;
        
      } else {
        state.basket.push(newItem);
      }
      state.totalItems = state.basket.reduce((acc, item) => acc + item.quantity, 0);
      updateLocalStorage(state.basket, state.wishlist);
      updateLocalStorage(state.basket, state.wishlist);
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload.id);
      updateLocalStorage(state.basket, state.wishlist);
    },
    removeAll: (state, action) => {
      state.basket = [];
      updateLocalStorage(state.basket, state.wishlist);
    },
    decrementQuantity: (state, action) => {
      const item = state.basket.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
      }
      updateLocalStorage(state.basket, state.wishlist);
    },
    incrementQuantity: (state, action) => {
      const item = state.basket.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
      }
      updateLocalStorage(state.basket, state.wishlist);
    },
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existsInWishlist = state.wishlist.some(item => item.id === newItem.id);
      if (!existsInWishlist) {
        state.wishlist.push(newItem);
        updateLocalStorage(state.basket, state.wishlist);
      }
    },
    removeFromFavs: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
      updateLocalStorage(state.basket, state.wishlist);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCard.fulfilled, (state, action) => {
      state.card = action.payload;
    });
  },
});

export const { addToBasket,removeFromFavs, removeFromBasket, removeAll, decrementQuantity, incrementQuantity, addToWishlist } = cardSlice.actions;
export default cardSlice.reducer;
