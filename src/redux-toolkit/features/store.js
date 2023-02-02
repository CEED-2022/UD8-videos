import { configureStore } from '@reduxjs/toolkit'
import listReducer from './listSlice'
import colorReducer from './colorSlice'

export const store = configureStore({
  reducer: {
    list: listReducer,
    color: colorReducer
  },
})

export default store
