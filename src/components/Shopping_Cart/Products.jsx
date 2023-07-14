import React, { Fragment, useEffect, useState } from 'react'
import styles from "./products.module.css"
import { useNavigate } from 'react-router-dom';
const ShoppingCart = () => {

    const [data,setData] =useState([]);
    const [loading,setLoading] =useState(false);
    const [error,setError] =useState(false);
const navigate = useNavigate()
    useEffect(()=>{
        fetchAndUpdate();
    },[]);

    const fetchAndUpdate =async ()=>{
        setLoading(true);
        try{
           const res = await fetch('https://fakestoreapi.com/products')
           .then(res=>res.json())
           setData(res);
           setLoading(false);
           console.log(res)
        }
        catch(err){
            console.log(err);
            setLoading(false);
            setError(true);
        }
    }

    const addToCart=(id)=>{
       const cartData = JSON.parse(localStorage.getItem("cart"))||[];
       const product = data.filter(prod=>prod.id===id)
       if(cartData.length>0){
        const check=cartData.filter(prod=>prod.id===product[0].id)
        if(check.length>0){
            alert("Item already added to the cart!");
        }else{
            const data = [...cartData,product[0]]
            localStorage.setItem("cart",JSON.stringify(data))
            alert("Item added to cart successfully!");
            navigate("/cart")
        }
       }else{
        const data = [...cartData,product[0]]
            localStorage.setItem("cart",JSON.stringify(data))
            alert("Item added to cart successfully!");
            navigate("/cart")
        }
    }

    if(loading){
        return <div>...Loading</div>
    }
    if(error){
        return <div style={{color:"orange",fontSize:"4rem",fontWeight:"bold",marginTop:"5rem"}}>Something Went Wrong</div>
    }
  return (
    <div>
        <h1 style={{color:"#8a2be2"}}>Products Listing</h1>

        <div className={styles.grid}>
        {
            data.map((product)=>(
                <Fragment key={product.id}>
                   <div className={styles.card} >
                      <img width={"100%"} height={"70%"} src={product.image} alt={product.name} />
                      <p className={styles.truncated}>{product.description}</p>
                      <p className={styles.category}>{product.category}</p>
                      <p>Rs.{product.price}</p>
                      <button onClick={()=>addToCart(product.id)} className={styles.cartButton}>Add To Cart</button>
                   </div>
                </Fragment>
            ))
        }
        </div>
      
    </div>
  )
}

export default ShoppingCart
