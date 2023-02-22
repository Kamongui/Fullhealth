import { configureStore } from "@reduxjs/toolkit"
import counterS from '.././slice/chequeSlice'

export const store = configureStore({
  reducer: {
    counter: counterS
  }
})