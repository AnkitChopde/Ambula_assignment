import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.module.css"
const Navbar = () => {
const [data,setData] = useState([]);

useEffect(()=>{
  const cartData = JSON.parse(localStorage.getItem("cart"))
  setData(cartData)
},[])

  return (
    <div style={{padding:"4%",display:"flex",justifyContent:"space-around",backgroundColor:"teal",position:"sticky"}}>
        <Link to="/">
        <button>Home</button></Link>
        <Link to="/about">
        <button>About</button></Link>
        <Link to="/contact">
        <button>Contact</button></Link>
        <Link to="/product">
        <button>All Products</button></Link>
       
       <div>
       <Link to="/cart">
       <h1 style={{borderRadius:"50%",backgroundColor:"blue",color:"#ffffff",margin:"-1rem",marginLeft:"2.2rem"}}>{data.length}</h1>
       <button >Cart</button></Link>
       
       </div>
       
    </div>
  )
}

export default Navbar
