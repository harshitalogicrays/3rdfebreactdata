import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'


const ProductCard = ({product}) => {
  return (
    <Col lg={3} sm={6} xs={12}  md={4}> 
        <Card>
        <Card.Img src={product.images[0]} fluid height={200}/>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.category}<br/>
           {product.brand}<br/>
           &#8377; {product.price}</Card.Text>
            <Button>Add to Cart</Button>
        </Card.Body>
        </Card>
  </Col>
  )
}

export default ProductCard
