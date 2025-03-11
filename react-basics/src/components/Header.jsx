import React from 'react'
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsArrowDownLeftCircle, BsCart3, BsSearch } from "react-icons/bs";
import logo from '/src/assets/logo.png'
import { FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router';

const Header = () => {
  const navstyles = ({isActive})=>({
    backgroundColor: isActive ? "yellow" :"",
    color: isActive ? "red":"",
    fontSize:isActive ?"20px":""
  })
  return (
  <>
   <Navbar expand="lg" bg="dark" data-bs-theme="dark">
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
          <Nav.Link  as={NavLink} to="/cart" style={navstyles}>
            <div style={{position:'relative',marginRight:'20px'}}>
              <BsCart3 style={{fontSize:'30px'}}/>
              <span class="badge rounded-pill text-bg-danger" 
              style={{position:'absolute',top:'-10px',right:"-15px"}}> 0 </span >  
            </div>
                 
          </Nav.Link>
            <Nav.Link  as={NavLink} to="/register" style={navstyles}>Register</Nav.Link>
            <Nav.Link  as={NavLink} to="/login" style={navstyles}>Login</Nav.Link>

            <NavDropdown title="Welcome User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><FaUser/> Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2"> Your Cart  </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Your Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> 
              <BsArrowDownLeftCircle/>  Logout   </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
 <Container>
    <Outlet/>
 </Container>
 
  </>
  )
}

export default Header
