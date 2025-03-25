import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'

const StripePayment = ({clientSecret , stripe}) => {
  return (
    <>
    <CardElement className='mb-3'/>
    <div class="d-grid gap-2">
      <button  type="button"  class="btn btn-primary"   >
      <div class="spinner-border text-light" role="status"></div>
        (Pay Now)
      </button>
    </div>
    
    </>
  )
}

export default StripePayment
