import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavabarComp from "./NavabarComp";

const NotFound = () => {
  return (
    <div>
      <NavabarComp />
      <Container className="mt-5">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Back to the homepage...</Link>
      </Container>
    </div>
  );
};

export default NotFound;
