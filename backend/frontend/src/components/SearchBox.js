import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword}`);
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row className="align-items-center">
        <Col md={8} xs={8}>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5"
          />
        </Col>
        <Col md={4} xs={4} className="text-center">
          <Button type="submit" variant="outline-success" className="p-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;