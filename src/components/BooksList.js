import React from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory,Link } from "react-router-dom";
import moment from "moment";

const BooksList = ({ book, loading }) => {
  const books=book[0]
  const history = useHistory();
  console.log(books,"books")
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const deleteBook = (title) => {
console.log(title,"title")
    fetch("http://localhost:8080/Library/DeleteBook?title=" +title,{ crossDomain: true } 
    )

  };
  const editBook = (title) => {
    console.log(title,"title")
        fetch("http://localhost:8080/Library/DeleteBook?title=" +title,{ crossDomain: true } 
        )
    
      };

  return (
    <div>
      <Table className="mt-4" striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Subject</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.subject}</td>
              <td>{book.author}</td>
              <td>{book.publicationdate}</td>
              <td>
                <Button
                  onClick={() => {
                    deleteBook(book.title);
                  }}
                  variant="danger"
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
              <td>
                <Button  as={Link} to={{pathname:"/EditBook", state: {fromDashboard: book.title }}} 
                  
                  variant="danger"
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksList;
