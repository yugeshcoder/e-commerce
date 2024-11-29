import {configureStore} from '@reduxjs/toolkit' 
import CartSlice from './slices/CartSlice'
import { ProductSlice } from './slices/ProductsSlice'
import Categories from '../components/Categories'
import { CategoriesSlice } from './slices/CategoriesSlice'
import { SearchItemSlice } from './slices/SearchItemSlice'

const Store = configureStore({
  reducer :{
    cartState : CartSlice.reducer,
    productState : ProductSlice.reducer,
    categoriesState : CategoriesSlice.reducer,
    searchItemState : SearchItemSlice.reducer
  }
})

export default Store