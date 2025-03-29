import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { addtocart, decrease, increase, selectCart } from '../redux/cartSlice'

import ProductImages from './ProductImages'
import ReactStars from 'react-stars'
import { ListGroup } from 'react-bootstrap'

const ProductDetails = () => {
  const {id} = useParams()
  const location =  useLocation()
  const product = location.state
  const cartItems =  useSelector(selectCart)
  const itemIndex = cartItems.findIndex(item=>item.id==id) //return index or -1
  const item = cartItems.find(item=>item.id==id) //{}
  const dispatch =  useDispatch()

  //reviews 
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (product) {
      fetch(`${import.meta.env.VITE_BASE_URL}/reviews?productId=${product.id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.error("Error fetching reviews:", err));
    }
  }, [product]);
  const aggregateRating =
  reviews.length > 0
    ? (reviews.reduce((acc, cur) => acc + Number(cur.rating), 0) / reviews.length).toFixed(1)
    : 0;

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
        <br/>
        <hr/>
        <div className="mt-4">
      <h3 className="h4 mb-3">Reviews</h3>
      {reviews.length > 1 && (
        <div className="mb-3">
          <p className="h5">
            Rating: <span className="text-primary">{aggregateRating} / 5</span> from {reviews.length} reviews.
          </p>
          <ReactStars 
            value={Number(aggregateRating)}  count={5}    size={20}   edit={false}   />
        </div>
      )}
      {reviews.length === 0 ? (  <p className="text-muted">No reviews yet.</p>   ) : (
        <ListGroup>
          {reviews.map(review => (
            <ListGroup.Item key={review.id} className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <ReactStars  value={review.rating}    count={5}    size={16}   edit={false}  />
                <span className="ms-2 text-muted">{review.rating} / 5</span>     </div>
              <p className="mb-1"><strong>User:</strong> {review.username}</p>
              <p className="mb-1">{review.comment}</p>
              {review.date && (
                <p className="text-muted small mt-1">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
