import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

const Products = () => {
  //API calling 
  return (
    <div>
        <h1>Products Page</h1>
        <hr/>
    <Row>
          <ProductCard/>
    </Row>
    </div>
  )
}

export default Products
