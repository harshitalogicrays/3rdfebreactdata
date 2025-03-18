import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { ADD_USER } from './redux/userSlice'

const AddUSer = () => {
    const [user,setUser] = useState({username:"",email:"",password:"",isAdmin:false})
    const dispatch =  useDispatch()
    const redirect =  useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();   dispatch(ADD_USER(user)); 
        redirect('/') }
  return (
    <div className='shadow p-4 card container mt-5 col-6'>
    <div className="card-header">
        <h1>Add User <Link className='btn btn-primary btn-lg float-end' to="/">View User</Link></h1>
    </div>
    <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" 
                value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" name="email"
                 value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name="password"
                 value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <button  type="submit"  class="btn btn-primary" > Submit </button>
            
        </form>
    </div>


</div>
  )
}

export default AddUSer
