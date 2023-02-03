import { createSlice, createAction } from '@reduxjs/toolkit'

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
    'list/fruits/fullfilled': function(state, action) {
      state.items.push(...action.payload.message)
      state.loading = false
      state.error = null
    },
    'list/fruits/pending': function(state) {
      state.loading = true
      state.error = null
    },
    'list/fruits/rejected': function(state, action) {
      state.error = action.payload.error
      state.items = []
      state.loading = false
    }
  }
})

const fruitsFullfilled = createAction('list/fruits/fullfilled', message => {
  return {
    payload: {
      message
    }
  }
})
const fruitsPending = createAction('list/fruits/pending')
const fruitsRejected = createAction('list/fruits/rejected', error => {
  return {
    payload: {
      error
    }
  }
})

export const { banana } = listSlice.actions
export { fruitsFullfilled, fruitsPending, fruitsRejected }
export default listSlice.reducer
