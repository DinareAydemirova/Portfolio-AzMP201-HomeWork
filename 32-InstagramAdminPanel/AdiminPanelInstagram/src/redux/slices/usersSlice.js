import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers:(state, action)=>{
        state.users=action.payload
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      },
  },
})

export const {setUsers ,deleteUser, addUser } = usersSlice.actions

export default usersSlice.reducer