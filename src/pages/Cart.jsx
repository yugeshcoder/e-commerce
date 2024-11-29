import React from 'react'
import{useSelector} from 'react-redux'
import CartProductList from '../components/CartProductList'
import '../css/cart/cart.css'


function Cart() {
  const cartProduct = useSelector((state) => {
    return state.cartState.cartProduct;
  })
  console.log(cartProduct);
  return (
    <div>
      <h2 style={{textAlign:'center',padding:'20px',color:'red'}}>Cart</h2>
      <main className='cart_main'>
        <CartProductList productsData = {cartProduct}/>
      </main>
      
    </div>
  )
}

export default Cart
