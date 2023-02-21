import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import NavabarComp from './NavabarComp'
import Profile from './Profile'
import context from 'react-bootstrap/esm/AccordionContext'


const AdminDashboard = React.memo((user) => {
const [adminData, setAdminData] = useState([]);
const paramName=user.user.sql
useEffect(()=>{ fetch('http://localhost:8080/Library/admin_dashboard?paramName='+paramName)
    .then((res)=>res.json())
    .then((data)=>{
        setAdminData(data)
    })},[])
    
    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col md={2}>
                        <ListGroup className="mt-4">
                            <ListGroup.Item as = {Link} to='/admin-dashboard' variant="info" active>Account</ListGroup.Item>
                            <ListGroup.Item as = {Link} to="/user-section"  variant="info">Users</ListGroup.Item>
                            <ListGroup.Item as = {Link} to='/book-section' variant="info">Books</ListGroup.Item>
                            <ListGroup.Item as = {Link} to='/issued-books' variant="info">Issued Books</ListGroup.Item>
                            <ListGroup.Item as = {Link} to="/search" variant="info">Search</ListGroup.Item>
                            <ListGroup.Item as = {Link} to="/history" variant="info">Book History</ListGroup.Item>
                            
                        </ListGroup>
                    </Col>
                    <Col md={10}>
                        <Profile user={adminData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
)
export default AdminDashboard
