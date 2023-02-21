import React from 'react';
import "./search.css";
import {Link} from "react-router-dom";
import NavabarComp from './NavabarComp';
import { Container, Row, Col, ListGroup} from 'react-bootstrap';

class Search extends React.Component {
    state = {
        header: <thead></thead>,
        books: [],
        name: ''
    };

    fetchData = (data) => {
        console.log(data.target,"dahjsuhskkh")
        var id = document.getElementById('id').value;
        console.log(id,"id")
        this.setState({header: <thead id="header">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Subject</th>
                <th scope="col">Publication Date</th>
                <th scope="col">Quantity</th>
            </tr>
            </thead>,
            books: []});
        fetch("http://localhost:8080/Library/Searchadmin?id="+id)
    .then(res => res.json())
            .then(student => {
                student[0].map(
                    el =>{console.log(el,"yugjhhb")})
                if(student.length > 0) {
                    student[0].map(
                        el =>
                         this.setState({
                            books: [...this.state.books,
                                <tr key={student.length }>
                                    <td>{el.title}</td>
                                    <td>{el.author}</td>
                                    <td>{el.subject}</td>
                                    <td>{el.publicationdate}</td>
                                    <td>{el.quantity}</td>
                                </tr>]
                        }))
                }
                else{
                    this.setState({header: []});
                    this.setState({...this.state, name: "There Is No Books"});
                }
            });
    }


    render() {
        return (
            <div>
                <NavabarComp></NavabarComp>
                <Container className="mt-4">
                    <Row>
                        <Col md={2}>
                            <ListGroup className="mt-4">
                                <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">Account</ListGroup.Item>
                                <ListGroup.Item as = {Link} to="/user-section" variant="info">Users</ListGroup.Item>
                                <ListGroup.Item as = {Link} to='/book-section' variant="info">Books</ListGroup.Item>
                                <ListGroup.Item as = {Link} to="/issued-books" variant="info">Issued Books</ListGroup.Item>
                                <ListGroup.Item as = {Link} to="/search" variant="info" active>Search</ListGroup.Item>
                                <ListGroup.Item as = {Link} to="/history" variant="info">Book History</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>


            <div id='search' className="text-center">
                <div>
                    <input className="form-control sel" type="text" placeholder="Enter Book ID" id="id" min="1"  ></input>
                    <button className="btn btn-success" onClick={this.fetchData}>Search</button>
                </div><br/>
                {this.state.name}
                <table id="sResults" className="table table-hover">
                    {this.state.header}
                    <tbody>
                    {this.state.books}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }

}

export default Search;