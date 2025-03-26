import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getData } from './api'
import { selectorders, store_orders } from '../redux/orderSlice'
import { toast } from 'react-toastify'

const MyOrders = () => {
  const navigate =  useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
      getData(`${import.meta.env.VITE_BASE_URL}/orders`).then((res)=>{  
        dispatch(store_orders(res))    })
      .catch((err)=>{ toast.error(err.message)})},[])

  const allorders = useSelector(selectorders)
  const {username } = JSON.parse(sessionStorage.getItem("3rdfeb"))
  const orders =  allorders.filter(item=>item.username == username)
  return (
     <div className='container shadow' style={{marginTop:'80px'}}>
         <h1>My Orders</h1> <hr/>
         <div class="table-responsive mt-3"  >
           <table class="table table-bordered table-striped" >
             <thead>
               <tr>
                 <th scope="col">OrderId</th>
                 <th scope="col">Total Amount</th>
                 <th scope="col">Payment Method</th>
                 <th>Order Date and Time</th>
                 <th>Status</th>
                 <th>View</th>
               </tr>
             </thead>
             <tbody>
              {orders.length==0  &&
               <tr><td colSpan={6}>No order found</td></tr> }
               {orders.map((order,index)=>
               <tr key={index}>
               <td>{order.id} </td>
               <td>{order.total} </td>
               <td>{order.paymentMethod} </td>
               <td> {order.orderDate.split('/')[1].padStart(2,0)}-{order.orderDate.split('/')[0].padStart(2,0)}-{order.orderDate.split('/')[2]} at {order.orderTime} </td>
               <td> {order.orderStatus != 'delivered' ? <span className='text-danger'>{order.orderStatus}</span> :  <span className='text-success'>{order.orderStatus}</span>} </td>
                 <td>
                   <button type="button"  class="btn btn-primary" onClick={()=>navigate(`/myorders/details/${order.id}`)}> View </button>
                 </td>
               </tr>)}
             </tbody>
           </table>
         </div>
         
       </div>
  )
}

export default MyOrders
