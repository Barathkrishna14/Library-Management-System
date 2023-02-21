import React from 'react';
import "./search.css";
import {Link} from "react-router-dom";
import NavabarComp from './NavabarComp';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import moment from 'moment'
import emailjs from '@emailjs/browser';


class Search extends React.Component {
    
    state = {
        header: <thead></thead>,
        books: [],
        name: '',
        
    };
    
    onBorrowBook=(el)=>{
        const title=el.title
        const quantity=el.quantity-1
        const author=el.author
        const publicationdate=el.publicationdate
        const subject=el.subject
        const{admin}=this.props
        console.log(localStorage.getItem("mail"),"Awwwwww")


        

const date=new Date().valueOf()
const form=localStorage.getItem("mail")
const fithday = moment().add(10, 'days').format('YYYY-MM-DD HH:mm:ss');
const newDate = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(fithday,newDate,"uufhiufhuauh")
        fetch("http://localhost:8080/Library/BorrowBook?title="+title+ "&quantity="+quantity+ "&author="+author+"&publicationdate="+publicationdate+"&subject="+subject+"&date"+date)
        var templateParams = {
            notes: 'barath',
            message: `You Are Successfully Borrowed a Book On :${newDate} Due Date :${fithday} `,
            name:form

        };
         
        emailjs.send('Gmail', 'Gmail', templateParams,'TjVlnuJ0WDUSWbMaU')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
   
   
    }
    onReserve=(el)=>{
        console.log(el,"elll")
        const title=el.title
        let reserve=''
        if(el.reserve=="reserve"){
         reserve="reserved"
    }
        else{
             reserve="reserve"
        }
        fetch("http://localhost:8080/Library/OnReserve?title="+title+ "&reserve="+reserve+"&mail="+localStorage.getItem("mail"))
    }
    fetchData = () => {
        var id = document.getElementById('id').value;
        this.setState({header: <thead id="header">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Subject</th>
                <th scope="col">Publication Date</th>
                <th scope="col">Quantity</th>
                <th scope="col">Borrow</th>
                <th scope="col>">Reserve</th>
            </tr>
            </thead>,
            books: []});

            fetch("http://localhost:8080/Library/Searchadmin?id="+id)
            .then(res => res.json())
            .then(student => {
                if(student.length > 0) {
        console.log(this.adminData,"adminae")

                    student[0].map(
                        el => this.setState({
                            books: [...this.state.books,
                                <tr key={el.title}>
                                    <td>{el.title}</td>
                                    <td>{el.author.toUpperCase()}</td>
                                    <td>{el.subject}</td>
                                    <td>{el.publicationdate}</td>
                                    <td>{el.quantity}</td>
                                    <td><button style={{color:'#4169e1'}}  onClick={()=>this.onBorrowBook(el)}>Borrow</button> </td>
                                     <td><button  style={{color:'#4169e1'}} onClick={()=>this.onReserve(el)}>{el.reserve}</button></td>
                                </tr>]
                        }))
                }
                else{
                    this.setState({header: []});
                    this.setState({...this.state, name: "No One Have Issued This Book"});
                }
            });
    }

    render() {
        return (
            <div>
                <NavabarComp />
                <Container className="mt-4">
                    <Row>
                        <Col md={2}>
                            <ListGroup className="mt-4">
                                <ListGroup.Item variant="info" >Account</ListGroup.Item>
                                <ListGroup.Item as = {Link} to='/user-books' variant="info">My Books</ListGroup.Item>
                                <ListGroup.Item as = {Link} to="/search-user" variant="info" active>Search</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>


                <div id='search' className="text-center">
                    <div>
                        <input className="form-control sel" type="text" placeholder="Search Book" id="id" min="1"></input>
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