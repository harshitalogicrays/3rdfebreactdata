import React from 'react'
import { useLocation, useParams } from 'react-router'

const ProductDetails = () => {
  const {id} = useParams()
  const location = useLocation()
  let product = location.state
  return (
    <div className='container mt-5 shadow p-4'>
      <div className="row">
        <div className="col">
          <img src={product.images[0]} className='img-fluid'/>
        </div>
        <div className="col">
          <p>{product.title}</p>
          <h6>{product.category}</h6>
          <button type="button" className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
