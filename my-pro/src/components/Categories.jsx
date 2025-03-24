import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './api'
import { selectCategories, store_categories } from '../redux/categorySlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const Categories = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        getData(`${import.meta.env.VITE_BASE_URL}/categories`).then((res)=>{  
          dispatch(store_categories(res))    })
        .catch((err)=>{ toast.error(err.message)})},[])
    const categories = useSelector(selectCategories)
  return (
    <Container>
        <h1 className='text-center my-5'>Categories</h1>
        <hr/>
        <Row>
            {categories.map((cat,index)=>
        <Col lg={3} sm={6} xs={12}  md={4} key={index}> 
        <Card onClick={()=>navigate(`/products` , {state : cat.name})}>
        <Card.Body> <Card.Title>{cat.name}</Card.Title> </Card.Body>
        <Card.Img src={cat.image} fluid height={300} />
        </Card>
        </Col>)}
        </Row>
    </Container>
  )
}

export default Categories
