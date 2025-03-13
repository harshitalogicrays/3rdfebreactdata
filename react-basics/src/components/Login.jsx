import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import RegisterImg from '/src/assets/images/a.jpg'
import { Link } from 'react-router'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'


const Login = () => {
  const [show,setShow] = useState(false)
  const {register , handleSubmit , formState: { errors } ,trigger ,getValues,setFocus} = useForm()
  const loginUser = (user)=>{ alert(JSON.stringify(getValues())) }
  useEffect(()=>{ setFocus('email')},[])
  return (
    <Container className='mt-5 shadow p-4 col-6'>
      <h1>SignIn to your Account</h1><hr />
          <Form onSubmit={handleSubmit(loginUser)}>           
              <Col> <Form.Group className='mb-3'> <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" 
                  {...register('email' , {required : "Email is required" ,
                    pattern :{value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/ , message:"Invalid Email"}
                  } )}  onBlur={()=>trigger('email')}></Form.Control>
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </Form.Group> </Col>
            <Form.Group className='mb-3'><Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control type={`${show ? "text" : "password" }`} name="password"
                 {...register('password' , {required : "passsword is required" ,
                  minLength :{value:5,message:"min 5 char"} ,  maxLength :{value:20,message:"max 20 char"}
                 } )} onBlur={()=>trigger('password')}></Form.Control>
                <Button variant='light' className='border' onClick={()=>setShow(!show)}> 
                  {show ? <BsEye/> :  <BsEyeSlash/>}
                  </Button> </InputGroup>
                  {errors.password && <span className="text-danger">{errors.password.message}</span>}
            </Form.Group>
            <div className="d-grid gap-3"> <Button type="submit">SignIn</Button> </div>
          </Form>
          <p className='mt-3'>Create an Account?? &emsp; <Link to="/regitser">SignUp</Link></p>
        

    </Container>
  )
}

export default Login
