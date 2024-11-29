import { applyMiddleware, createSlice } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

export const ProductSlice = createSlice({
  name : 'Product',
  initialState : {
    product : null
  },
  reducers : {
    setProduct : (state,action) => {
      state.product = action.payload;
    }
  }
},applyMiddleware(thunk))

export const actions = ProductSlice.actions;

