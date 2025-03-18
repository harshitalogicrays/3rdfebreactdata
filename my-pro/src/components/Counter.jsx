import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
    const handleIncrese=()=>{
        setCount(count+1) //count = count+1
    }
  return (
    <>
    <button type="button" class="btn btn-primary  me-2" onClick={handleIncrese}>Increase </button>
    <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(count-1)}>Decrease </button>
    <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(0)}>Reset </button>
    <button type="button" class="btn btn-primary me-2" onClick={()=>setCount(-count)}>Change Sign </button>
    
    <h1>Count: {count} </h1>

    </>
  )
}

export default Counter
