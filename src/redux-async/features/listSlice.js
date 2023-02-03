import { createSlice } from '@reduxjs/toolkit'

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
    'list/banana/subaction1': function(state, action) {
      state.items.push(action.payload.message)
    },
    'list/banana/subaction2': function(state, action) {
      state.items.push('message 2' + action.payload.message)
    }
  }
})

export default listSlice.reducer
