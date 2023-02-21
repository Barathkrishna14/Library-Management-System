import React from "react";
import { useState } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import { Button, Form, Container, Row, Col, ListGroup } from "react-bootstrap";
import NavabarComp from "./NavabarComp";


const EditBook = (books) => {
  const [title, setTitle] = useState("");
  const [subject, setsubject] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationdate, setpublicationdate] = useState("");
  const [status,setStatus] = useState("");

const location = useLocation()
const title1=location.state.fromDashboard
console.log("location",title1)

  const history = useHistory();

  const postBook = (e) => {
    e.preventDefault();
    const book = {
      title,
      subject,
      author,
      publicationdate
    };
    console.log(book,"book",e)
    alert("SuccessFully Edited")
    history.push("/book-section")
    fetch("http://localhost:8080/Library/EditBook?title=" +book.title+ "&subject=" + book.subject + "&author=" + book.author +"&publicationdate="+ book.publicationdate+"&title1="+title1,{ crossDomain: true }) 
    
  };
  return (
    <div>
      <NavabarComp />
      <Container>
        <Row>
          <Col md={2}>
            <ListGroup className="mt-4">
              <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">Account</ListGroup.Item>
              <ListGroup.Item variant="info">Users</ListGroup.Item>
              <ListGroup.Item as={Link} to="/book-section" variant="info" active>Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info">Issued Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin-books" variant="info">My Books</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/search" variant="info">Search</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={10}>
            <Container className="mt-3">
              <Form onSubmit={postBook}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" value={subject} onChange={(e) => setsubject(e.target.value)} name="subject" required />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Author</Form.Label>
                      <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Publication Date</Form.Label>
                      <Form.Control type="text" value={publicationdate} onChange={(e) => setpublicationdate(e.target.value)} name="publicationdate" required/>
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit" >EditBook</Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditBook;
