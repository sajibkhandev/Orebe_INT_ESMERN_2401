import { createSlice } from '@reduxjs/toolkit'

export const addtocart = createSlice({
  name: 'cart',
  initialState: {
    value:[],
  },
  reducers: {
    cartitem: (state,action) => {
      
      let alldata=state.value.find(item=>item.title===action.payload.title);

      if(alldata){
        alldata.quantity+=1
      }else{
        state.value.push({...action.payload,quantity:1})

      }
      
    },
  },
})
export const { cartitem } = addtocart.actions

export default addtocart.reducer