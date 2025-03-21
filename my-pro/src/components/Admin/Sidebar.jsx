import React from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'
import { FaHome, FaList, FaPenFancy, FaShoppingBag, FaThList, FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router'
const Sidebar = ({show,setShow}) => {
  const links =  [
    {url:'/admin' ,text:'Dashboard' , icon:<FaHome/>},
    {url:'/admin/categories' ,text:'Manage Categories' , icon:<FaList/>},
    {url:'/admin/view' ,text:'View Products' , icon:<FaShoppingBag/>},
    {url:'/admin/add' ,text:'Add Product' , icon:<FaPenFancy/>},
    {url:'/admin/users' ,text:'Manage Orders' , icon:<FaThList/>},
    {url:'/admin/orders' ,text:'Manage Users' , icon:<FaUser/>},
  ]
  return (
    <>  <div className="d-none d-md-flex flex-column text-white p-3" 
       style={{ width: "250px" , backgroundColor:'gray' }}>
        <h4 className="text-center">Admin</h4>
        <Nav className="flex-column">
          {links.map((link,index)=>
             <Nav.Link as={NavLink} key={index} to={link.url} className="text-white mb-4">
             <span className='me-2'> {link.icon}</span> {link.text}
           </Nav.Link>
          )}
       

         </Nav>
      </div>

      <Offcanvas show={show} onHide={()=>setShow(false)} className="bg-dark text-white">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
          {links.map((link,index)=>
             <Nav.Link as={NavLink} key={index} to={link.url} className="text-white mb-4">
             <span className='me-2'> {link.icon}</span> {link.text}
           </Nav.Link>
          )} </Nav>
        </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Sidebar
