import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import breadcrumb  from './slices/breadcrumb'
import categorySlice  from './slices/categorySlice'

export default configureStore({
  reducer: {
    name:counterSlice,
    breadcrumb:breadcrumb,
    category:categorySlice,
  },
})