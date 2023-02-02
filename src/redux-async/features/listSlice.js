import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  error: null,
  loading: false,
}

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {}
})

export default listSlice.reducer
