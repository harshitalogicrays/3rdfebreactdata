import React from 'react'
import CheckoutSummary from './CheckoutSummary'

const CheckoutPayment = () => {
  return (
    <div className='container mt-5 shadow p-4'>
        <div className="row">
            <div className="col card">
                <h1>Checkout Payment</h1><hr/>
                <div className='list-group mb-4 p-4'>
                <div className="mb-3 form-check">
                    <input type="radio" name="payment" value="cod" className='form-check-input'/>
                    <label htmlFor="" className='form-check-label'>Cash On Delivery</label>
                </div>
                <div>
                    <button type="button" className='btn btn-primary me-3'>Place Order</button>
                    <button type="button" className='btn btn-danger me-3'>Cancel</button>

                </div>
                </div>
                <div className='list-group mb-4 p-4'>
                <div className="mb-3 form-check">
                    <input type="radio" name="payment" value="online" className='form-check-input'/>
                    <label htmlFor="" className='form-check-label'>Pay Online</label>
                </div>
                <div className='card p-2'>
                    <h3>Enter Payment Details</h3>
                </div>
                </div>  
            </div>
            <div className="col"><CheckoutSummary/></div>
        </div>
    </div>
  )
}

export default CheckoutPayment
