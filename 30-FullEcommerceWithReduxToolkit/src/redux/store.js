import { configureStore } from '@reduxjs/toolkit'
import cardSlices from '../redux/slices/cardSlices'
import mainSlice from './slices/mainSlice'



export const store = configureStore({
  reducer: {
    card:cardSlices,
    products: mainSlice,
    users:mainSlice,
    filteredProd:mainSlice

  },
})