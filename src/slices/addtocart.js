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
    increment: (state,action) => {
      state.value.map(item=>{
        if(item.title==action.payload.title){
          item.quantity+=1

        }
        

        
      })
      
      
      
      
    },
    decrement: (state,action) => {
      state.value.map(item=>{
        if(item.title==action.payload.title){
          if(item.quantity>1){
            item.quantity-=1
          }
        }
      })
      
      
      
      
    },
  },
})
export const { cartitem,increment,decrement } = addtocart.actions

export default addtocart.reducer