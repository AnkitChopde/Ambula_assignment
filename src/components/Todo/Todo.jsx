import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styles from "./Todo.module.css"
const Todo = () => {
    const [text,setText] = useState("");
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState(false);
    const [data,setData] = useState([])
    useEffect(()=>{
        fetchAndUpdate()
    },[])

    const fetchAndUpdate=async()=>{
        setLoading(false);
        
    }
    
    const handleAdd = (data)=>{
        const newItem = {
            title:text,
            status:false
        }
    
        
   
    }
    if(loading){
        return <div>...Loading</div>
    }
    if(err){
        return <div>Something Went Wrong</div>
    }
    
  return (
    <div style={{}}>
          <div>
          <input type="text" placeholder="Add Todo..." value={text} onChange={(e)=>setText(e.target.value)} />
          <button className={styles.add} disabled={text===""} onClick={()=>handleAdd(data)}>+</button>
          </div>
        
          <div>
            {data.map((todo)=>(
                <h1 key={todo.id}>{todo.title} --- {todo.status?"Completed":"Not Completed"}</h1>
            ))}
          </div>
    </div>
  )
}

export default Todo