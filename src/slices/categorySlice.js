import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: false,
  },
  reducers: {
    categoryFunciton: (state,action) => {
      state.value=action.payload
    },
  },
})
export const { categoryFunciton } = categorySlice.actions

export default categorySlice.reducer