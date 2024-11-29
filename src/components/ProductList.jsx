import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { actions } from '../redux/slices/CartSlice';
import {useSelector,useDispatch} from 'react-redux'

function ProductList(props) {
  const {productsData} = props;
  const cartProduct = useSelector((state) => {
    return state.cartState.cartProduct;
  })

  const dispatch = useDispatch();
  
  return (
    <>
      {(productsData === null) ? <h2>...loading wait for the moment</h2>:
        <>
          {productsData.map((product,index) => {
            return(
              <div className='product'  key={index}>
                <img src={product.image} alt='' className='product_image'></img>
                <div className='product_meta'>
                  <div className='product_title'>{product.title}</div>
                  <div className='product_price'>Price $ : {product.price}</div>
                  <div className='cart_button'>
                    <button onClick={() => dispatch(actions.deleteFromCart(product))}><RemoveIcon fontSize='small'/></button>
                    <div className='individualQuantity'>{<IndividualQuantity cartProduct={cartProduct} id={product.id}/>}</div>
                    <button onClick={() => dispatch(actions.addToCart(product))}><AddIcon fontSize='small'/></button>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      }    
    </>
  )

  function IndividualQuantity(props){
    const {cartProduct,id} = props;
    let quantity = 0;
    const cartProductIndex = cartProduct.findIndex((item) => item.id === id);
    if(cartProductIndex >= 0){
      quantity = cartProduct[cartProductIndex].individualQuantity;
    }
    return quantity;
  }
}

export default ProductList
