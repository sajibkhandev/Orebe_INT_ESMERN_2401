import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import breadcrumb  from './slices/breadcrumb'

export default configureStore({
  reducer: {
    name:counterSlice,
    breadcrumb:breadcrumb
  },
})