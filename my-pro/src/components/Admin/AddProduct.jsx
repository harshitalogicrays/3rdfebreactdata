import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategories, store_categories } from '../../redux/categorySlice'
import { toast } from 'react-toastify'
import { getData } from '../api'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { selectProducts } from '../../redux/productSlice'

const AddProduct = () => {
  const  navigate   = useNavigate()
  let initialData = {name:'',brand:'',category:'',price:'',stock:0,images:[],desc:''}
  const dispatch =  useDispatch()
  const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
      getData(`${import.meta.env.VITE_BASE_URL}/categories`).then((res)=>{  
        dispatch(store_categories(res))    })
      .catch((err)=>{ toast.error(err.message)})},[])

  const categories = useSelector(selectCategories)

  const [product,setProduct] = useState({...initialData})
  const [pics,setPics] = useState([])
  const handleImage =(e)=>{
    let images = e.target.files
    // console.log(images)
if(images.length > 5){toast.error("max 5 images only");return}
Array.from(images).forEach(async(img)=>{
    let ext = ["image/jpg","image/jpeg","image/png","image/gif","image/webp","image/jfif","image/avif",]
    if(img.size > 1048576) toast.error("file size exceeded")
    else if(!ext.includes(img.type))toast.error("invalid extension")
    else {
      setIsLoading(true)
      const data =  new FormData()
      data.append("file",img)
      data.append("cloud_name","harshita1")
      data.append("upload_preset","3rdfebreact")
      data.append("folder","3rdfebproducts") 
      try{
          const res = await axios.post("https://api.cloudinary.com/v1_1/harshita1/image/upload" , data)         
          setIsLoading(false)
          setPics((prevPics)=>[...prevPics,res.data.url])   }
      catch(err){toast.error(err.message);setIsLoading(false)}   
  }
})
}

//edit
  const {id} = useParams()
  const products = useSelector(selectProducts)
  const productEdit =  products.find(item=>item.id==id)
  useEffect(()=>{
    if(id) { setProduct({...productEdit}) ; setPics([...productEdit.images]) }
    else setProduct({...initialData})
  },[id])
//////

  const handleSubmit=async (e)=>{
    e.preventDefault()
    if(!id){
      try{
        await axios.post(`${import.meta.env.VITE_BASE_URL}/products` , {...product,
          stock:Number(product.stock), price:Number(product.price),  images:[...pics],  createdAt:new Date() })
         toast.success("product added")
         navigate('/admin/view')
       }
       catch(err){toast.error(err)}
    }
    else {
      try{
        await axios.put(`${import.meta.env.VITE_BASE_URL}/products/${id}` , {...product, 
          stock:Number(product.stock), price:Number(product.price), images:[...pics],  createdAt:productEdit.createdAt , editedAt:new Date() })
         toast.success("product updated")
         navigate('/admin/view')
       }
       catch(err){toast.error(err)}
    }
   
  }

  const removeImage =(index)=>{
    let images = [...pics]
    images.splice(index,1)
    setPics([...images])
  }
  return (
    <div className='container p-3 shadow'>
    <h1>{id ? "Edit " :"Add "} Product</h1><hr/>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="" class="form-label">Category</label>
          <select class="form-select" name="category" value={product.category}
          onChange={(e)=>setProduct({...product,category:e.target.value})}>
            <option value="" selected disabled>Select one</option>
              {categories.map((cat,index)=><option key={index}>{cat.name}</option>)}
            </select>
        </div>
        
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name"
            value={product.name}
            onChange={(e)=>setProduct({...product,name:e.target.value})}/>
          </div>
          <div className="col mb-3">
          <label htmlFor="brand" className="form-label">Brand</label>
          <input type="text" className="form-control" name="brand"
          value={product.brand}
          onChange={(e)=>setProduct({...product,brand:e.target.value})}/>
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" name="price" 
            value={product.price}
            onChange={(e)=>setProduct({...product,price:e.target.value})}/>
          </div>
          <div className="col mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock"
          value={product.stock}
          onChange={(e)=>setProduct({...product,stock:e.target.value})}/>
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Choose file</label>
          <input type="file" class="form-control mb-3"  name="pics" multiple onChange={handleImage}/>
          {pics.length != 0 &&
          <>
            {pics.map((img,index)=><div className="d-inline me-4" style={{position:'relative'}} 
            key={index}><img src={img} height={100} width={100} />
            <span className='text-danger fs-3' style={{position:'absolute' ,top:'-52px' ,right:'-10px' , cursor:'pointer'}} onClick={()=>removeImage(index)}>X</span>
            </div>)}
          </>}
        </div>
        <div class="mb-3">
          <label for="" class="form-label">desc</label>
          <textarea type="text"  name="desc"  class="form-control"
          value={product.desc}
          onChange={(e)=>setProduct({...product,desc:e.target.value})}></textarea>
       </div>
       <div className="d-grid gap-3">
       <button type="submit" class="btn btn-primary">   {isLoading ? <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status"> </div>
</div>  : <> {id? "Update" :"Submit"} </>}   </button>
       </div>
      </form>
  </div>
  )
}

export default AddProduct
