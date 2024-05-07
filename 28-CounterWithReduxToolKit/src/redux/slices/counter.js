import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  inputValue:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
    //   state.value += +action.payload
    state.value+= +state.inputValue
    },
    decrementByAmount: (state, action) => {
        state.value -= +state.inputValue
      },
      reset: (state) => {
        state.value = 0
      },
      getValues:(state, action)=>{
        state.inputValue=action.payload

      }
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, reset,getValues } = counterSlice.actions

export default counterSlice.reducer