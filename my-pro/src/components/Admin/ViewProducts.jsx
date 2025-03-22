import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getData } from '../api'
import { selectProducts, store_products } from '../../redux/productSlice'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaPenAlt, FaTrash } from 'react-icons/fa'

const ViewProducts = () => {
  const navigate =  useNavigate()
  const dispatch = useDispatch()
  const [isDeleted,setIsDeleted] = useState(false)
  useEffect(()=>{
      getData(`${import.meta.env.VITE_BASE_URL}/products`).then((res)=>{  
        dispatch(store_products(res))    })
      .catch((err)=>{ toast.error(err.message)})},[isDeleted])

  const products = useSelector(selectProducts)
  const handleDelete = async(id)=>{
    if(window.confirm("are you sure to delete this??")){
      try{
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
        toast.success("product deleted successfully")
        setIsDeleted(!isDeleted)
      }
      catch(err){toast.error(err)}
  }
  }

  return (
    <div> <h1 className='text-center'>View Products</h1><hr/>
    <div  class="table-responsive" >
      <table class="table table-bordered table-striped table-hover"   >
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Category</th>
            <th>brand</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
          {products.length==0 && <tr><td colspan={8} className='text-center'>No Product Found</td></tr> }
      {products.map((product,index)=>
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.name}</td>
              <td><img src={product.images[0]} height={50} width={50}/></td>
              <td>&#8377;{product.price}</td>
              <td>{product.stock}</td>
              <td> <button type="button" className='btn btn-success me-2' 
                            onClick={()=>navigate(`/admin/product/edit/${product.id}`)}><FaPenAlt/></button>
                            <button type="button" className='btn btn-danger' 
                            onClick={()=>handleDelete(product.id)}><FaTrash/></button> </td>
            </tr>)}
          </tbody>
      </table>
    </div>
    
</div>
  )
}

export default ViewProducts
