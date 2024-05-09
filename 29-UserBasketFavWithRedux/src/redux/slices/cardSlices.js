import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  card: [],
  status: 'idle',
  error: null,
};

export const getCard = createAsyncThunk('card/getCard', async () => {
 
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
 
  
});

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCard.fulfilled, (state, action) => {
        state.card = action.payload;
      })
     
  },
});

export default cardSlice.reducer;
