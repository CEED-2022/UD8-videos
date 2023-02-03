import { createAsyncThunk } from "@reduxjs/toolkit"
import { getData } from './get_data'

const fetchFruits = createAsyncThunk(
  'list/fruits',
  async (args, api) => {
    try {
      const ERROR_PROBABILITY = 0.4
      let error = Math.random() < ERROR_PROBABILITY;
      const fruits = await getData({error})
      return {message: [...args, ...fruits]}
    }catch(error) {
      // Process whatever here, or remove the catch block
      throw error
    }
  }
)

export {
  fetchFruits
}
