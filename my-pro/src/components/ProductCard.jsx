import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/cartSlice'
import { Link, useNavigate } from 'react-router'


const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const redirect = useNavigate()
  const handleCart = ()=>{
    dispatch(addtocart(product))
    window.scrollTo(0,0)
  }
  return (
    <Col lg={3} sm={6} xs={12}  md={4}> 
        <Card>
        <Card.Img src={product.images[0]} fluid height={200} 

        onClick={()=>redirect(`/product/details/${product.id}` , {state:product } )}/>

        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.category}<br/>
           {product.brand}<br/>
           &#8377; {product.price}</Card.Text>
            <Button onClick={handleCart}>Add to Cart</Button>
        </Card.Body>
        </Card>
  </Col>
  )
}

export default ProductCard
