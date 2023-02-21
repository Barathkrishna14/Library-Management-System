import React, { useState } from 'react';
import { Link, useHistory,useLocation  } from 'react-router-dom';
import NavabarComp from './NavabarComp';
import { Button,Container, Row, Col, ListGroup } from "react-bootstrap";

const EditUser = (e) => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const location = useLocation()
    console.log(location.state.fromDashboard,"qwer")
    async function handleSubmit(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const login=true;
        alert("User Edited SuccessFully")
        history.push("/user-section")

        await fetch("http://localhost:8080/Library/EditUser?name=" +name+ "&email=" + email + "&phone=" + phone +"&password="+ password + "&cpassword=" +cpassword+"&sectionEmail="+location.state.fromDashboard,{crossDomain:true})
    }
        
    return (
        <div>
            <NavabarComp />
            <Container className="mt-4">
        <Row>
          <Col md={2}>
            <ListGroup className="mt-4">
              <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">Account</ListGroup.Item>
              <ListGroup.Item as={Link} to="/user-section" variant="info">Users</ListGroup.Item>
              <ListGroup.Item as={Link} to="/book-section" variant="info" active>Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info">Issued Books</ListGroup.Item>
              
              <ListGroup.Item as={Link} to="/search" variant="info">Search</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/history" variant="info">Book History</ListGroup.Item>
            </ListGroup>

            </Col>
            <Col md={10}>
            <div className="container-signup">
                <div className="signup-more">
                </div>
                <div className="wrap-signup">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        

                        <div className="wrap-input">
                            <span className="label-input">Email</span>
                            <input className="input" type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Username" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Confirm Email</span>
                            <input className="input" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Phone</span>
                            <input className="input" type="Number" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="Phone Number" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Password</span>
                            <input className="input" type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Confirm Password</span>
                            <input className="input" type="password" name="cpassword" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="container-signup-form-btn">
                            <div className="wrap-signup-form-btn"> 
                                <button className="signup-form-btn" >Edit User</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </Col>
            </Row>
            </Container>
        </div>
       
       
     
    )


}

export default EditUser
