import { createSlice } from '@reduxjs/toolkit'

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: 'red'
  },
  reducers: {
    red(state) {
      state.color = 'red'
    }, 
    blue(state) {
      state.color = 'blue'
    }
  }

})

export const { red, blue } = colorSlice.actions
export default colorSlice.reducer
