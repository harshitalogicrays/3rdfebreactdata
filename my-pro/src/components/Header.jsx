import React, { useEffect, useState } from 'react'
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsArrowDownLeftCircle, BsCart3, BsSearch } from "react-icons/bs";
import logo from '/src/assets/logo.png'
import { FaUser } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cartSlice';

const Header = () => {
  const navstyles = ({isActive})=>({
    backgroundColor: isActive ? "yellow" :"",
    color: isActive ? "red":"",
    fontSize:isActive ?"20px":""
  })
  const redirect =  useNavigate()
  const handleLogout = ()=>{
    if(sessionStorage.getItem("3rdfeb") != null){
      sessionStorage.removeItem("3rdfeb")
      toast.success("loggedout successfully")
      redirect('/') } }
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("3rdfeb") != null){
      let obj = JSON.parse(sessionStorage.getItem("3rdfeb"))
      setUsername(obj.username)
    }
  },[sessionStorage.getItem("3rdfeb")])

  //cartitems fetch 
  const cartItems = useSelector(selectCart)
  return (
  <>
   <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#"><Image src={logo}/>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={navstyles}>Home</Nav.Link>
            <Nav.Link  as={NavLink} to="/about" style={navstyles}>about</Nav.Link>
            <Nav.Link  as={NavLink} to="/products" style={navstyles}>Shop</Nav.Link>
            
            <Nav.Link  as={NavLink} to="/contact" style={navstyles}>Contact Us</Nav.Link>
          </Nav>

            <Form inline>
              <InputGroup>
              <Form.Control placeholder='enter product name' type="search" 
              style={{backgroundColor:'gray'}}/>
              <Button variant='danger'><BsSearch/></Button>
              </InputGroup>
             
            </Form>

          <Nav className='ms-auto'>
          <Nav.Link  as={NavLink} to="/cart" >
            <div style={{position:'relative',marginRight:'20px'}}>
              <BsCart3 style={{fontSize:'30px'}}/>
              <span class="badge rounded-pill text-bg-danger" 
              style={{position:'absolute',top:'-10px',right:"-15px"}}> {cartItems.length} </span >  
            </div>
                 
          </Nav.Link>
          <ShowOnLogout>
              <Nav.Link  as={NavLink} to="/register" style={navstyles}>Register</Nav.Link>
              <Nav.Link  as={NavLink} to="/login" style={navstyles}>Login</Nav.Link>
            </ShowOnLogout>

            <ShowOnLogin>
              <NavDropdown title={`Welcome ${username}`} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><FaUser/> Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2"> Your Cart  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Your Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}> 
                <BsArrowDownLeftCircle/>  Logout   </NavDropdown.Item>
              </NavDropdown>
            </ShowOnLogin>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    <Outlet/>
 
  </>
  )
}

export default Header
