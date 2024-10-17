//rafce

import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
    setTimeout(()=>{
       setCount(count+1) 
    },1000) },[count]  
    )
  return (
    <div style={{height:'200px'}} className='d-flex justify-content-center align-items-center my-5 bg-success'>
        <h1 style={{fontSize:'50px'}}>{count}</h1>
    </div>

  )
}

export default Counter