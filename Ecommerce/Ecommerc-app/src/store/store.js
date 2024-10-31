import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './createSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})

export default store;