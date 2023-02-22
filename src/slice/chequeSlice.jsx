import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
  totalPrice: [],
  quantity: 0
}

export const chequeSlice = createSlice({
  name: 'drag_counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export const { increment, decrement } = chequeSlice.actions;

export default chequeSlice.reducer;