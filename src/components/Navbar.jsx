import React from 'react'
import{Link} from 'react-router-dom'
import '../css/navbar/navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import {useSelector, useDispatch} from 'react-redux'


function Navbar() {

  const cartQuantity = useSelector((state) => {
    return state.cartState.cartQuantity;
  }) 
  return (
    <div className='navbar'>
      <div><Link to='/e-commerce/'><HomeIcon style={{color:'tomato'}}/></Link></div>
      <div><Link to='/e-commerce/user'><PersonIcon style={{color:'tomato'}}/> </Link></div>
      <div className='cart_bar'>
        <Link to='/e-commerce/cart'>
          <ShoppingCartIcon style={{color:'tomato'}}></ShoppingCartIcon>
          <div>{cartQuantity}</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
