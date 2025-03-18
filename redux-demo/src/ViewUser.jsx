import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { remove_all_users, remove_user, selectUsers } from './redux/userSlice'

const ViewUser = () => {
    // const allusers =  useSelector((state)=>state.user.users)
    const allusers =  useSelector(selectUsers)
    const dispatch = useDispatch()
    return (
        <div className='shadow p-4 card'>
            <div className="card-header">
                <h1>All Users <Link className='btn btn-primary btn-lg float-end' to="/add">Add User</Link></h1>
            </div>
            <div className="card-body"> <div class="table-responsive"   >
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th><th>Password</th><th>Admin</th><th>Remove</th>
                            </tr>
                        </thead> <tbody>
                            {allusers.length==0 &&<tr><td colspan={6}>No User Found</td></tr>}
                            {allusers.map((user)=>
                            <tr key={user.id}>
                                <td>{user.id}</td>  <td>{user.username}</td>
                                <td>{user.email}</td>  <td>{user.password}</td>
                                <td>{user.isAdmin ? "Admin" :"User"}</td>
                                <td><button type="button" className='btn btn-danger' onClick={()=>dispatch(remove_user(user.id))}>Remove</button></td> </tr>)} </tbody>
                    </table>  </div> 
                {allusers.length > 1 && <button type="button" className='btn btn-danger btn-lg' onClick={()=>dispatch(remove_all_users())}>Remove All</button>}  </div>                              

        </div>
    )
}

export default ViewUser
