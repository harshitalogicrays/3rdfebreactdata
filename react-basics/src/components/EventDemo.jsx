import React from 'react'
import { toast } from 'react-toastify'

const EventDemo = () => {
    const handleClick = ()=>{
        // toast("handleClick called")
        // toast.info("handleClick called")
        // toast.success("handleClick called")
        // toast.warning("handleClick called")
        toast.error("handleClick called")

    }
    const handleAdd = (a,b)=>{
        alert(a+b)
    }
  return (
  <>
    <button type="button" class="btn btn-primary me-2" 
    onClick={()=>alert("button clicked")}>Button </button>

    <button type="button" class="btn btn-primary me-2" 
    onClick={handleClick}>Button </button>

     <button type="button" class="btn btn-primary me-2" 
    onClick={()=>handleClick()}>Button </button>

<button type="button" class="btn btn-primary me-2" 
    onClick={()=>handleAdd(2,3)}>Button </button>
  </>
  )
}

export default EventDemo
