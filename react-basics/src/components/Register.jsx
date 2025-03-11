import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import RegisterImg from '/src/assets/images/a.jpg'
import { Link } from 'react-router'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { toast } from 'react-toastify'

const Register = () => {
  const [user,setUser] = useState({username:"ram",email:'',password:'',cpassword:'',isAdmin:false})
  const [show,setShow] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    let {username,email,password,cpassword} = user
    let pattern = /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/ 
    if(!username || !email || !password ) {
      toast.error("please fill all the fields")
    }
    else if(!pattern.test(email)){
      toast.error("invalid email")
    }
    else if(password != cpassword){
      toast.error("password not match")
    }
    else {
      alert(JSON.stringify(user))
    }
   
  }
  return (
    <Container className='mt-5 shadow p-4'>
      <h1>Create an Account</h1><hr />
      <Row> <Col xs={4}>  <Image src={RegisterImg} fluid /> </Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" 
                  value={user.username} 
                  onChange={(e)=>setUser({...user, username:e.target.value})}></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email"
                   value={user.email} 
                   onChange={(e)=>setUser({...user, email:e.target.value})}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control type={`${show ? "text" : "password" }`} name="password"
                 value={user.password} 
                 onChange={(e)=>setUser({...user, password:e.target.value})}></Form.Control>
                <Button variant='light' className='border' onClick={()=>setShow(!show)}> 
                  {show ? <BsEye/> :  <BsEyeSlash/>}
                  </Button>
              </InputGroup>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label type="password" name="cpassword">Confirm Password</Form.Label>
              <Form.Control type="password" name="cpassword"
               value={user.cpassword} 
               onChange={(e)=>setUser({...user, cpassword:e.target.value})}></Form.Control>
            </Form.Group>
            <div className="d-grid gap-3">
             <Button type="submit">SignUp</Button>
            </div>
          </Form>
          <p className='mt-3'>Already an Account?? &emsp; <Link to="/login">SignIn</Link></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
