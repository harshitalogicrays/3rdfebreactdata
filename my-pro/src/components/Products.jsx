import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './api'
import { selectProducts, store_products } from '../redux/productSlice'
import { toast } from 'react-toastify'

const Products = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      getData(`${import.meta.env.VITE_BASE_URL}/products`).then((res)=>{  
        dispatch(store_products(res))    })
      .catch((err)=>{ toast.error(err.message)})},[])

  const products = useSelector(selectProducts)
  //pagination 
  const itemsPerPage =  4 //0 to 29 
  const [itemOffset,setItemOffset] =  useState(0)
  const [pageCount,setPageCount] = useState(0) //30/4 => 8
  const [currentItems, setCurrentItems] = useState([]) //[0,1,2,3]=> [4,5,6,7]

useEffect(()=>{
  const endOffset =  itemOffset+itemsPerPage // 0+4=> 4 // 4+4 => 8 ,20+4=24
  setPageCount(Math.ceil(products.length/itemsPerPage)) //30/4 => 8
  setCurrentItems(products.slice(itemOffset , endOffset)) // 0,4 4- exclude => 0 to 3 , 4,8=> 4 to 7
                // 20,24 => 20 to 23 
},[itemOffset , products])
  
const handlePageClick = (event) => { //index 1 , index 5
  const newOffset = (event.selected * itemsPerPage) % products.length; //4%30 = 4 //20%30=20
  setItemOffset(newOffset); //itemOffset =  4 , 20
};

////////////////////////////////////////////////
const categories = Array.from(new Set(products.map((item)=>item.category)))
const brands = Array.from(new Set(products.map((item)=>item.brand)))

console.log(categories)
  return (
    <div> 
    <Row>
    <Col xs={3} className='mt-5'>
      <Card className='mb-3'>
        <Card.Header>Categories</Card.Header>
        <Card.Body>
          {categories.map((cat,index)=><p key={index}>{cat}</p>)}
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Header>Brand</Card.Header>
        <Card.Body>
        {brands.map((brand,index)=><p key={index}>{brand}</p>)}
        </Card.Body>
      </Card>
      <Card className='mb-3'>
        <Card.Header>Price</Card.Header>
        <Card.Body>
            <p><input type="radio" name="price" value="htol" className='me-3'/>High to Low</p>
            <p><input type="radio" name="price" value="ltoh" className='me-3'/>Low to High</p>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <h1>Products Page</h1><hr/>{/* {JSON.stringify(products)}  */}
      <Container fluid>
      <Row>
        {products.length==0 && <h1> <div class="spinner-border text-danger" role="status"></div> No Product Found</h1>}
          {currentItems.map((product,index)=>
            <ProductCard product = {product} key={index}/>    )}
      </Row>
      </Container>
      <ReactPaginate breakLabel="..."  nextLabel="next >" onPageChange={handlePageClick}
          pageRangeDisplayed={5}  pageCount={pageCount} previousLabel="< previous"  renderOnZeroPageCount={null}
          containerClassName="pagination mt-5 d-flex justify-content-center" pageClassName="page-item" pageLinkClassName="page-link"
          previousClassName="page-item" nextClassName='page-item' activeClassName='page-item active'
          previousLinkClassName='page-link' nextLinkClassName='page-link'
        />
    </Col>
    </Row>
 
    </div>
  )
}

export default Products
