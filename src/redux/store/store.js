import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feature/feature'


export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})