import React, { useState } from 'react'

const StateDemo = () => {
    // let num1 =  10
    const [num1 , setNum1 ] = useState(10)   
    const [name] = React.useState("Ram")
    const [user,setUser] = useState({fname:"",lname:"", age:""})
    const [products,setProducts] = useState([])

    const handleNum1 = ()=>{
      // setNum1(num1+5) // num1 = num1+5  
        setNum1((prevNum1) => prevNum1+5)
        console.log(num1)
    }
  return (
    <div>
        <button type="button" className='btn btn-primary' 
        onClick={handleNum1}>Change Num</button>
      <h3>{num1}</h3>
    </div>
  )
}

export default StateDemo
