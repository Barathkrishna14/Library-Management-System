import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Button, Table, Container, Row, Col, ListGroup } from 'react-bootstrap'
import moment from 'moment'
import emailjs from '@emailjs/browser';
import NavabarComp from './NavabarComp'

const UserBooks = () => {
    const [books, setBooks] = useState([]);
    const history = useHistory()
    const [quantity, setquantity] = useState([]);
    const [email, setemail] = useState([]);

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

  const deleteIssueBook = async(title) => {
    try{
      const res = fetch('http://localhost:8080/Library/ReturnBook?title='+title,{ crossDomain: true })
              
      const data = res.json()
      setBooks(data);
    }
    catch(err){
      console.log(err);
    };
    const form=localStorage.getItem("mail")

    try{
      const res = fetch('http://localhost:8080/Library/reserve?title='+title,{ crossDomain: true })
              
      .then((res)=>res.json())
      .then((data)=>{     
      setemail(data.email)
      setquantity(data.quantity)
      console.log(email,"dataa1")
    })
    }
    catch(err){
      console.log(err);
    }
    console.log("start")
    var templateParams = {
      notes: 'barath',
      message: `Your Reserved Book Is Now Available`,
      name:form

  };
   if(quantity==0){
    console.log(quantity,"Quantity")
  emailjs.send('Gmail', 'Gmail', templateParams,'TjVlnuJ0WDUSWbMaU')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });}
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
                            <ListGroup.Item as = {Link} to='/user-dashboard' variant="info">Account</ListGroup.Item>
                            <ListGroup.Item as = {Link} to='/user-books' variant="info" active>My Books</ListGroup.Item>
                            <ListGroup.Item as = {Link} to="/UserSearch:admin" variant="info" style={{ color :'-moz-initial'}}>Search</ListGroup.Item>

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
              <th>Return</th>
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
                    <td><Button variant="danger" 
                    onClick={()=>{
                      deleteIssueBook(book.title);
                      }
                    }
                    ><i className="fas fa-undo-alt"></i></Button></td>
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
}

export default UserBooks
