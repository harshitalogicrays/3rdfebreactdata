
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaBox, FaShoppingCart, FaUser, FaDollarSign } from "react-icons/fa";
import SalesChart from "./SalesChart ";


const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Welcome to the Dashboard!!</h2>
      <Row>
        <Col md={3}>
          <Card className="p-3 text-center">
            <FaBox size={30} />
            <h5>Products</h5>
            <h3>120</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <FaShoppingCart size={30} />
            <h5>Orders</h5>
            <h3>75</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <FaUser size={30} />
            <h5>Customers</h5>
            <h3>200</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <FaDollarSign size={30} />
            <h5>Revenue</h5>
            <h3>$5,000</h3>
          </Card>
        </Col>
      </Row>


      <Row className="mt-4">
        <Col md={12}>
          <Card className="p-3">
            <h5>Monthly Sales Overview</h5>
            <SalesChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

