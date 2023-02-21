import React from "react";
import { useEffect, useState } from "react";
import { Link , useHistory} from "react-router-dom";
import moment from 'moment'
import { Container, Row, Col, ListGroup, Table,Button} from "react-bootstrap";
import NavabarComp from "./NavabarComp";



const IssuedBooks = () => {
  
  const [books, setBooks] = useState([]);
    const history = useHistory()

  const getIssuedBooks = async()=>{
    try{
      const res = await fetch('http://localhost:8080/Library/UserBooks',{ crossDomain: true })
              
      const data = await res.json()
      setBooks(data);
     console.log(data,"dataa")
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getIssuedBooks();

  }, []);
    return (
        <div>
            <NavabarComp />
            <Container className="mt-4">
                <Row>
                    <Col md={2}>
                    <ListGroup className="mt-4">
             <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">Account</ListGroup.Item>
             <ListGroup.Item as={Link} to="/user-section"  variant="info">Users</ListGroup.Item>
              <ListGroup.Item as = {Link} to='/book-section' variant="info">Books</ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info" active>Issued Books</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/search" variant="info">Search</ListGroup.Item>
              <ListGroup.Item as = {Link} to="/history" variant="info">Book History</ListGroup.Item>
            </ListGroup>
                    </Col>
                    <Col md={10}>
                    <Table className="mt-4" striped bordered hover responsive>
            <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subject</th>
              <th>Author</th>
              <th>Publication Date</th>
              <th>Issued Date</th>
              <th>Due Date</th>
              
            </tr>
            </thead>
            <tbody>
              {
               books[0]&& books[0].map((book, i) =>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{book.title}</td>
                    <td>{book.subject}</td>
                    <td>{book.author}</td>
                    <td>{book.publicationdate}</td>
                    <td>{moment(book.issueDate).format('DD-MM-YYYY')}</td>
                    <td>{moment(book.issueDate).add(10,'days').format('DD-MM-YYYY')}</td>
                  
                </tr>
               ))
              }
            </tbody>
          </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default IssuedBooks;
