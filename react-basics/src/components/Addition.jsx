import React, { useState } from 'react'

const Addition = (props) => {
    const [num1,setNum1] = useState(props.a) //2
    const [num2,setNum2] = useState('')
    const [result, setResult] = useState('')
    const handleCalculate =()=>{
        setResult(parseInt(num1) + parseInt(num2))
    }
  return (
    <div className='container col-6 mt-5 shadow p-4'>
      <div className="mb-3">
        <label htmlFor="num1" className="form-label">Number1</label>
        <input type="text" className="form-control"  name="num1" 
        value={num1} onChange={(e)=>{ 
            setNum1(e.target.value)
            console.log(e)
        }}/>
      </div>
      <div className="mb-3">
        <label htmlFor="num2" className="form-label">Number2</label>
        <input type="text" className="form-control"  name="num2" 
        value={num2} onChange={(e)=> setNum2(e.target.value) }/>
      </div>
    <button type="button" class="btn btn-primary  me-2" onClick={handleCalculate}> + </button>

    {result.length !=0 &&  <h1>Result : {result}</h1>}
   
    </div>
  )
}

export default Addition
