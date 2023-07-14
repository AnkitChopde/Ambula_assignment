import React, { Fragment, useEffect, useState } from 'react'
import styles from "./products.module.css"
const Cart = () => {
    const [data,setData]  =useState([]);

    useEffect(()=>{
        const cartData = JSON.parse(localStorage.getItem("cart"))
        setData(cartData)
    },[]);

    const RemoveFromCart=(id)=>{
       const product = data.filter(prod=>prod.id!==id)
       localStorage.setItem("cart",JSON.stringify(product))
       setData(product)
    }
    console.log(data)
  return (
    <div>
         <h1 style={{color:"#8a2be2"}}>Your Cart</h1>
        <div className={styles.grid}>
        {
            data.map((product)=>(
                <Fragment key={product.id}>
                   <div className={styles.card} >
                      <img width={"100%"} height={"70%"} src={product.image} alt={product.name} />
                      <p className={styles.truncated}>{product.description}</p>
                      <p className={styles.category}>{product.category}</p>
                      <p>Rs.{product.price}</p>
                      <button onClick={()=>RemoveFromCart(product.id)} className={styles.cartButton}>Remove</button>
                   </div>
                </Fragment>
            ))
        }
        </div>
      
    </div>
  )
}

export default Cart
