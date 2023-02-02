import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: ['banana', 'apple', 'orange'],
  error: null
}

function error(state, error) {
  state.error = error
  return state
}

function removeItemAction(state, action) {
  state.items = state.items.filter((_, index) => index !== action.payload)
  return state
}

function addItemAction(state, action) {
  const { payload } = action

  if(!payload) return error(state, 'Item cannot be empty')
  if(state.items.includes(payload)) return error(state, 'Item already exists')

  state.items = [...state.items, payload]
  state.error = null
  return state
}

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    addItem: addItemAction,
    removeItem: removeItemAction
  }
})

export default listSlice.reducer
export const { addItem, removeItem } = listSlice.actions
