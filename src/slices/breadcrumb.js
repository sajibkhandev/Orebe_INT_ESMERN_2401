import { createSlice } from '@reduxjs/toolkit'

export const breadcrumb = createSlice({
  name: 'bread',
  initialState: {
    daybeforeyesertday:null,
    preavalue:null,
    currentvalue:null

  },
  reducers: {
    activeButton: (state,action) => {
        state.daybeforeyesertday=state.preavalue
        state.preavalue=state.currentvalue
        state.currentvalue=action.payload
    }
  },
})
export const { activeButton } = breadcrumb.actions

export default breadcrumb.reducer