import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Profile = ({ user, barath}) => {
    return (
        !barath &&
        <div>
            <Container>
                <div className="main">
                    <Row>
                        <Col md={12} className="mt-1">
                            <Card className="mb-3 content">
                                <h1 className="m-3 pt-3">About</h1>
                                <Card.Body>
                            
                                    <Row>
                                        <Col md={3}>
                                            <h5>Name:</h5>
                                        </Col>
                                        <Col md={9} className="text-secondary text-capitalize">
                                            {user.sql}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={3}>
                                            <h5>User Id:</h5>
                                        </Col>
                                        <Col md={9} className="text-secondary">
                                            {user._id}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={3}>
                                            <h5>Email Id:</h5>
                                        </Col>
                                        <Col md={9} className="text-secondary">
                                            {user.email}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={3}>
                                            <h5>Mobile Number:</h5>
                                        </Col>
                                        <Col md={9} className="text-secondary">
                                            {user.phone}
                                        </Col>
                                    </Row>
                                    <hr />
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Profile
