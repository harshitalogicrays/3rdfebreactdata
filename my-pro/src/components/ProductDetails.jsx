import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { addtocart, decrease, increase, selectCart } from '../redux/cartSlice'

import ProductImages from './ProductImages'

const ProductDetails = () => {
  const {id} = useParams()
  const location =  useLocation()
  const product = location.state
  const cartItems =  useSelector(selectCart)
  const itemIndex = cartItems.findIndex(item=>item.id==id) //return index or -1
  const item = cartItems.find(item=>item.id==id) //{}
  const dispatch =  useDispatch()
  return (
    <div className='container mt-5  p-4'>
      <div className="row shadow p-3">
        <div className="col">
          {/* <img src={product.images[0]} className='img-fluid mb-3'/> */}
          <ProductImages images={product.images}/>
        </div>
        <div className="col">
        <h2>{product.name}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <h4 className="text-danger">${Number(product.price).toFixed(2)}</h4>
          <p>{product.desc}</p>
          {itemIndex == -1 ?  
            <button type="button" className='btn btn-primary'
            onClick={()=>dispatch(addtocart(product))}>Add to Cart</button>
          :
               <div className="input-group">
                 <button type="button" className='btn btn-primary'
                    onClick={()=>dispatch(decrease(item))}>-</button>
                    <input type="text" style={{width:'40px',textAlign:'center',border:"1px solid gray"}}
                     value={item.qty} readOnly/>
                  <button type="button"  className='btn btn-primary'
               onClick={()=>dispatch(increase(item))} >+</button>
                                    </div>            
          }
        
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
