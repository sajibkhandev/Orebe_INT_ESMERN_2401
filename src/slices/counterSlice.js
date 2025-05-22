import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {
      
      state.value+=action.payload
      
      
    }
  },
})
export const { increment } = counterSlice.actions

export default counterSlice.reducer