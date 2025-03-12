import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Image1 from '/src/assets/images/b.jpg'

const ProductCard = () => {
  return (
    <Col lg={3} sm={6} xs={12}  md={4}> 
        <Card>
        <Card.Img src={Image1} fluid/>
        <Card.Body>
            <Card.Title>Product1</Card.Title>
            <Card.Text>Grocery</Card.Text>
            <Card.Text>$10</Card.Text>
            <Button>Add to Cart</Button>
        </Card.Body>
        </Card>
  </Col>
  )
}

export default ProductCard
