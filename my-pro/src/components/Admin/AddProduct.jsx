import React from 'react'

const AddProduct = () => {
  let initialData = {name:'',brand:'',category:'',price:'',stock:'',images:[],desc:''}

  return (
    <div className='container p-3 shadow'>
    <h1>Add Product</h1><hr/>
      <form>
        <div class="mb-3">
          <label for="" class="form-label">Category</label>
          <select class="form-select" name="category">
            <option value="" selected disabled>Select one</option>
            </select>
        </div>
        
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name"/>
          </div>
          <div className="col mb-3">
          <label htmlFor="brand" className="form-label">Brand</label>
          <input type="text" className="form-control" name="brand"/>
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="numbet" className="form-control" name="price" />
          </div>
          <div className="col mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock"/>
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Choose file</label>
          <input type="file" class="form-control"  name="pics" multiple />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">desc</label>
          <textarea type="text"  name="desc"  class="form-control"></textarea>
       </div>
       <div className="d-grid gap-3">
       <button type="submit" class="btn btn-primary"> Submit </button>
       </div>
      </form>
  </div>
  )
}

export default AddProduct
