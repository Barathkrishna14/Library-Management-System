import React from "react";
import { Link } from "react-router-dom";
import { Button,Container, Row, Col, ListGroup } from "react-bootstrap";
import UserList from "./UserList";
import NavabarComp from "./NavabarComp";
import { useEffect, useState } from 'react'

const UserSection = () => {
  const [users, setusers] = useState(null);
  useEffect(()=>{const val=fetch("http://localhost:8080/Library/userSection")
  .then((res)=>res.json())
  .then((data)=>{
        setusers(data)
    })
  },[])
  console.log(users,"useeejdj")
  return (
    <div>
      <NavabarComp />
      <Container className="mt-4">
        <Row>
          <Col md={2}>
            <ListGroup className="mt-4">
              <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">Account</ListGroup.Item>
              <ListGroup.Item as={Link} to="/user-section" variant="info" active>Users</ListGroup.Item>
              <ListGroup.Item as={Link} to="/book-section" variant="info" >Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info">Issued Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/search" variant="info">Search</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/history" variant="info">Book History</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={10}>
          <Row>
              <Col md={4} className="mt-1">
                <br>
                </br>
               
                <Button as={Link} to="/AddUser" variant="success" >
                  <i className="fas fa-plus-circle"></i> Add

                </Button>
              </Col>
            </Row>
              <div className="d-flex justify-content-center mt-5">
              
              </div>
            {users && <UserList users={users}  />}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserSection;
