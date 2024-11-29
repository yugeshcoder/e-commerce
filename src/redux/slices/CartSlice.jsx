import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name : 'cart',
  initialState : {
    cartQuantity : 0,
    cartTotal : 0,
    cartProduct : []
  },
  reducers : {
    addToCart : (state,action) => {
      const product = action.payload;
      const productInCart = state.cartProduct.find((item) => item.id === product.id);
     if(!productInCart){
      const newProduct = { ...product, individualQuantity: 1, subTotal : product.price };
      state.cartTotal += product.price;
      state.cartProduct.push(newProduct);
     }
     else{
      productInCart.individualQuantity++;
      state.cartTotal += (productInCart.price);
      console.log(typeof state.cartTotal);
      state.cartTotal = parseFloat(state.cartTotal.toFixed(2));
     }
     state.cartQuantity++;
      
    },
    deleteFromCart : (state,action) => {
      const product = action.payload;
      const cartProductIndex = state.cartProduct.findIndex((item) => item.id === product.id);

      if(cartProductIndex >= 0){
        state.cartQuantity--; 
        const productInCart = state.cartProduct[cartProductIndex];
        productInCart.individualQuantity--;
        state.cartTotal -= productInCart.price;
        state.cartTotal = parseFloat(state.cartTotal.toFixed(2));
        if(productInCart.individualQuantity === 0){
          state.cartProduct.splice(cartProductIndex,1);
        }
        
      }
    }
  }

})

export const actions = CartSlice.actions;

export default CartSlice;
