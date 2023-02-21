import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import BooksList from "./BooksList";
import NavabarComp from "./NavabarComp";

const BookSection = () => {
  const [users, setusers] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20);
  
  useEffect(() => {
     setLoading(false);
     fetch('http://localhost:8080/Library/DisplayBooks')
     .then((res)=>res.json())
     .then((data)=>{
    setBooks(data);})
    
  }, []);
  const currentBooks = books
  return (
    <div>
      <NavabarComp />
      <Container>
        <Row>
          <Col md={2}>
            <ListGroup className="mt-4">
              <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">Account</ListGroup.Item>
              <ListGroup.Item as={Link} to="/user-section" variant="info">Users</ListGroup.Item>
              <ListGroup.Item as={Link} to="/book-section" variant="info" active>Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info">Issued Books</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/search" variant="info">Search</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/history" variant="info">Book History</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={10}>
            <Row>
              <Col md={4} className="mt-1">
                <br>
                </br>
                <br>
                </br>
                <Button as={Link} to="/add-books" variant="success" >
                  <i className="fas fa-plus-circle"></i> Add

                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {books && <BooksList book={currentBooks}  />}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default BookSection;
