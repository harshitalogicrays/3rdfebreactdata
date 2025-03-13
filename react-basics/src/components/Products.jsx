import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios'

const Products = () => {
  //API calling 
  let [products,setProducts] = useState([])
  // let getData = ()=>{
  //     fetch("https://dummyjson.com/products")
  //     .then((res)=>{
  //       // console.log(res)
  //       return res.json()
  //     })
  //     .then((data)=>{
  //       console.log(data)
  //       setProducts(data.products)
  //     })
  //     .catch((err)=>{console.log(err)})
  // }

  // let getData = async()=>{
  //   try{
  //     const res = await fetch("https://dummyjson.com/products")
  //     const data =  await res.json()
  //     setProducts(data.products)
  //   }
  //   catch(err){console.log(err)}
  // }

  // let getData = ()=>{
  //   axios.get("https://dummyjson.com/products").then((res)=>{
  //     // console.log(res.data.products)
  //     setProducts(res.data.products)
  //   }).catch(err=>console.log(err))
  // }


    let getData = async()=>{
    try{
      const res = await axios.get("https://dummyjson.com/products")
      setProducts(res.data.products)
    }
    catch(err){console.log(err)}
  }
  useEffect( ()=>{ getData() } , [] ) // []=> dependency array (comp load )

  return (
    <div> <h1>Products Page</h1><hr/>
        {/* {JSON.stringify(products)}  */}
    <Row>
      {products.length==0 && <h1> <div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div> No Product Found</h1>}
        {products.map((product,index)=>
          <ProductCard product = {product} key={index}/>
        )}
    </Row>
    </div>
  )
}

export default Products
