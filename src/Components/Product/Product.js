import AddProduct from "./AddProduct";
import DeleteProductForm from "./DeleteProductForm";
import { React, useEffect, useState, useMemo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import DisplayProduct from "./DisplayProduct";

const Product = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => { setShow(true); console.log("called ") };
  const handleClose = () => setShow(false)
  return (
    <div>
      {/* <Router> */}
      <Container>
        <Row>
          {/* <Col md={5}>
            <DeleteProductForm/>
            <Button onClick={handleShow} className="btn btn-success" >Add New Product</Button>
          </Col> */}

          <Col md={7}>
            <DisplayProduct />
            <div className='mt-5 d-flex justify-content-end' style={{width:550}}>
            <Button onClick={handleShow} className="btn btn-success" >Add New Product</Button>
            </div>
          </Col>

        </Row>
      </Container>
      {/* </Router> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><AddProduct /></Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={handleClose}>Close It</Button></Modal.Footer>
      </Modal>

    </div>
  );
};

export default Product;