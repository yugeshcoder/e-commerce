import { applyMiddleware, createSlice } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

export const CategoriesSlice = createSlice({
  name : 'Categories',
  initialState : {
    categories : []
  },
  reducers : {
    setCategories : (state,action) => {
      state.categories = action.payload;
    }
  }
},applyMiddleware(thunk))

export const actions = CategoriesSlice.actions;