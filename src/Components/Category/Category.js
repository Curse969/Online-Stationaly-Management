import AddCategory from "./AddCategory";
import DeleteCategoryForm from "./DeleteCategoryForm";
import { React, useEffect, useState, useMemo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import DisplayCategory from "./DisplayCategory";

const Category = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => { setShow(true); console.log("called ") };
  const handleClose = () => setShow(false)
  return (
    <div>
      {/* <Router> */}
      <Container>
        <Row>
          <Col md={5}>
            <DeleteCategoryForm/>
            <Button onClick={handleShow} className="btn btn-success" >Add New Category</Button>
          </Col>

          <Col md={7}>
            {/* <AddCategory /> */}
            <DisplayCategory />
          </Col>
        </Row>
      </Container>
      {/* </Router> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><AddCategory /></Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={handleClose}>Close It</Button></Modal.Footer>
      </Modal>

    </div>
  );
};

export default Category;