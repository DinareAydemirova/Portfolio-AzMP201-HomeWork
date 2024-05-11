import { configureStore } from '@reduxjs/toolkit'
import cardSlices from '../redux/slices/cardSlices'


export const store = configureStore({
  reducer: {
    card:cardSlices,

  },
})