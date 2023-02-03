import { createSlice } from '@reduxjs/toolkit'
import { fetchFruits } from '../thunks'

const initialState = {
  items: [],
  error: null,
  loading: false,
}

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    banana(state, action) {
      state.items.push('La otra banana')
    }
  },
  extraReducers: {
    [fetchFruits.fulfilled]: function(state, action) {
      state.items.push(...action.payload.message)
      state.loading = false
      state.error = null
    },
    [fetchFruits.pending]: function(state) {
      state.loading = true
      state.error = null
    },
    [fetchFruits.rejected]: function(state, action) {
      state.error = action.error.message
      state.items = []
      state.loading = false
    }
  }
})

export const { banana } = listSlice.actions
export default listSlice.reducer
