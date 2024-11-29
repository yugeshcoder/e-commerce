import { createSlice } from "@reduxjs/toolkit";

export const SearchItemSlice = createSlice({
  name : 'serach_item',
  initialState : {
    searchItem : ''
  },
  reducers : {
    setSearchItem : (state,action) => {
      state.searchItem = action.payload;
    }
  }
})

export const searchActions = SearchItemSlice.actions;