import React from 'react'
import { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import NavabarComp from './NavabarComp'
import Profile from './Profile'
import UserSearch from './UserSearch'

const UserDashboard = (user) => {
    const [adminData, setAdminData] = useState([]);
const paramName=user.user.sql
useEffect(()=>{ fetch('http://localhost:8080/Library/admin_dashboard?paramName='+paramName)
        .then((res)=>res.json())
        .then((data)=>{
            setAdminData(data)
        })},[])
        console.log(adminData,"asdf")
        const admin=adminData
        return (
            <div>
                <Container className="mt-4">
                    <Row>
                        <Col md={2}>
                        <ListGroup className="mt-4">
                             <ListGroup.Item variant="info" active>Account</ListGroup.Item>
                             <ListGroup.Item as = {Link} to='/user-books' variant="info">My Books</ListGroup.Item>
                             <ListGroup.Item as = {Link} to={{pathname: "/UserSearch:admin", state: {fromDashboard:adminData }}} variant="info">Search</ListGroup.Item>

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

export default UserDashboard
