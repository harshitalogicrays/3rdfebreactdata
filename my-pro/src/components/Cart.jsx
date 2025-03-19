import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatetotal, decrease, emptycart, increase, removefromcart, selectCart, selectTotal } from '../redux/cartSlice'
import { BsTrash } from 'react-icons/bs'

const Cart = () => {
    const cartItems = useSelector(selectCart)
    const total =  useSelector(selectTotal)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(calculatetotal())
    },[cartItems])
  return (
    <div className='container-fluid mt-5 shadow p-4'>
        <h1>Shopping Cart</h1><hr/>
        <div className="row">
            <div className="col-8">
                <div  class="table-responsive card p-2"  >
                    <table class="table table-bordered table-striped table-hover" >
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Product</th>
                                <th>Price</th><th>Quantity</th>
                                <th>Total Price</th><th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length==0 && <tr><td colSpan={6}>No Item in Cart</td></tr>}
                            {cartItems.map((item,index)=>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><img src={item.images[0]} height='50px' width={50} /> {item.title}</td>
                                <td>&#8377;{item.price}</td>
                                <td>
                                    <div className="input-group">
                                        <button type="button" className='btn btn-primary'
                                        onClick={()=>dispatch(decrease(item))}>-</button>
                                        <input type="text" style={{width:'40px',textAlign:'center',border:0}}
                                        value={item.qty} readOnly/>
                                        <button type="button"  className='btn btn-primary'
                                         onClick={()=>dispatch(increase(item))}>+</button>
                                    </div>
                                </td>
                                <td>&#8377;{(item.price*item.qty).toFixed(2)}</td>
                                <td><button type="button" className='btn btn-danger'
                                 onClick={()=>dispatch(removefromcart(item.id))}><BsTrash/></button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                
            </div>
            <div className="col">
                <div className='card p-2'>
                <h4>Order Summary</h4> <hr/>
                <h5>Sub Total : <span className='float-end'>&#8377; {total.toFixed(2)}</span></h5><br/>
                <h6>Shipping : <span className='float-end'>&#8377;{total>0 && total<200 ? "5.00" :"0.00"} </span></h6><hr/>
                <h5>Total : <span className='float-end'>&#8377; {total>0 && total<200 ? <>{(total+5.00).toFixed(2)}</> :<>{(total+0.00).toFixed(2)}</>}</span></h5><br/>
                <div className="d-flex justify-content-between">
                <button type="button" className='btn btn-danger btn-lg' onClick={()=>dispatch(emptycart())}><BsTrash/> Empty Cart</button>
                <button type="button" className='btn btn-info btn-lg'>Proceed to checkout</button>
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Cart
