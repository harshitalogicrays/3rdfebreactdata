import React from 'react'

const ViewProducts = () => {
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
           <tr><td colspan={8}>No Product Found</td></tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
      </table>
    </div>
    
</div>
  )
}

export default ViewProducts
