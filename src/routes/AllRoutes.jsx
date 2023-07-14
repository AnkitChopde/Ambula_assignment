import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ShoppingCart from '../components/Shopping_Cart/Products'
import Cart from '../components/Shopping_Cart/Cart'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/product" element={<ShoppingCart/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
