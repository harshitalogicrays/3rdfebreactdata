import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

const ChangeOrderStatus = ({ order }) => {
    const redirect =  useNavigate()
    const ostatus = ['placed', 'shipped', 'processing', 'delivered', 'cancelled', 'return', 'out for delivery']
    const [status, setStatus] = useState(order.orderStatus)
    const handleUpdate = async()=>{
        try{
            let res  = await axios.put(`${import.meta.env.VITE_BASE_URL}/orders/${order.id}` , {...order ,  orderStatus:status , editedAt:new Date()})
           
            emailjs.send("service_i18a4kv", 'template_3hg0hvp', {
                status :res.data.orderStatus ,
                email:res.data.email , 
                payment :res.data.paymentMethod,
                order_id : res.data.id , 
                orders :res.data.cartItems ,
                total:res.data.total } , {
                publicKey: 'Ir17coOALHBiw7W2W',
              }).then(()=>{
                toast.success("order updated")
                redirect('/admin/orders')        
              }).catch((err)=>{toast.error(err.message)})   

  
        }
        catch(err){
            toast.error(err.message)
        }
    }
    return (
        <div className='col-6'>
            <label for="" class="form-label">Update Order Status</label>
            <div className="row">
                <div class="mb-3 col-10">
                    <select class="form-select" name="status" value={status} onChange={(e) => setStatus(e.target.value)} >
                        {ostatus.map((st, index) => <option key={index}>{st}</option>)}
                    </select>
                </div>
                <div className='col-2'>
                    <button type="button" class="btn btn-primary" onClick={handleUpdate}>Update  </button>

                </div>
            </div>


        </div>
    )
}

export default ChangeOrderStatus
