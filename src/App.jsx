import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './components/Product'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'
import { Routes, Route, Navigate } from 'react-router-dom'
import Cart from './pages/Cart'
import User from './pages/User'
import PaginationProvider from './context/PaginationContext'

function App() {
  return (
    <>
    <PaginationProvider>
      <Navbar/>
      <Routes>
        <Route path='/e-commerce/' element={<Home/>}></Route>
        <Route path='/e-commerce/home' element={<Navigate to='/'/>}></Route>
        <Route path='/e-commerce/cart' element={<Cart/>}></Route>
        <Route path='/e-commerce/user' element={<User/>}></Route>
        <Route path='/e-commerce/product' element={<Product/>}></Route>
        <Route path='/e-commerce/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/e-commerce/*' element={<PageNotFound/>}></Route>
      </Routes>
    </PaginationProvider>
    </>
  )
}

export default App
