import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card,  Button, Table , Form} from "react-bootstrap";
import { getData } from './api';
const Profile = () => {
  const [user,setUser] = useState({username:'' , email:'' , mobile:'' , address1:'' , avatar :'' ,city:''})
  const [isEdited,setIsEdited] = useState(false)

  const {email} = JSON.parse(sessionStorage.getItem("3rdfeb"))
  useEffect(()=>{
        getData(`${import.meta.env.VITE_BASE_URL}/users?email=${email}`)
        .then((data)=>{ 
          // console.log(data[0])
          setUser(data[0])
        })
        .catch(err=>console.log(err))
  },[])
  return (
    <Container style={{marginTop:"100px"}}>
    <Row>

      <Col md={4}>
      {isEdited==false ? 
        <Card>
          <Card.Body>
            <Card.Title>User Profile</Card.Title>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Phone:</strong> {user.mobile ? user.mobile : "NA"}</p>
            <p><strong>Address:</strong>{user.address1 ? user.address1 : "NA"}</p>
            <p><strong>City:</strong>{user.city ? user.city  : "NA"}</p>
            <Button variant="primary" onClick={()=>setIsEdited(true)}>Edit</Button>
          </Card.Body>
        </Card>
        :
        <>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="name" value={user.username} onChange={(e)=>setUser({...user , username:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" value={user.email} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="text" name="phone" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" name="address" />
                    </Form.Group>
                    <Button variant="success">Save</Button>
                    <Button variant="secondary" className="ms-2"  onClick={()=>setIsEdited(false)}>Cancel</Button>
                  </Form>
                </> }
      </Col>


      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title>Order History</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>#12345</td>
                  <td>2025-03-20</td>
                  <td>Delivered</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>#67890</td>
                  <td>2025-03-18</td>
                  <td>Processing</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Profile
