import React from 'react'
import { useLocation, useParams } from 'react-router'

const ProductDetails = () => {
  const {id} = useParams()
  const location = useLocation()
  let product = location.state
  return (
    <div className='container mt-5  p-4'>
      <div className="row shadow p-3">
        <div className="col">
          <img src={product.images[0]} className='img-fluid'/>
        </div>
        <div className="col">
        <h2>{product.name}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <h4 className="text-danger">${Number(product.price).toFixed(2)}</h4>
          <p>{product.desc}</p>
          <button type="button" className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
