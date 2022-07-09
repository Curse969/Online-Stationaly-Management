import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Row, Container, Form } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify'
import Left from './Components/Left_Side';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DisplayProduct from './Components/Product/DisplayProduct';
import BasicTable from './Components/BasicTable';
import AddProduct from './Components/Product/AddProduct';
import DeleteProductForm from './Components/Product/DeleteProductForm';

import DisplayCategory from './Components/Category/DisplayCategory';
import Product from './Components/Product/Product';
import AddCategory from './Components/Category/AddCategory';
import DeleteCategoryForm from './Components/Category/DeleteCategoryForm';
import Category from './Components/Category/Category';
function App() {
  return (
    <div>
      <Router>
        <Container>
          <Row>
            <Col md={4}>
              <Left />
            </Col>

            <Col md={8}>
              <Route path="/productshow" component={DisplayProduct} exact />
              <Route path="/productall" component={Product} exact />

              <Route path="/home" component={BasicTable} exact />
              <Route path="/addproduct" component={AddProduct} exact />
              <Route path="/ss" component={Category} exact />
              {/* <Route path="/ss2" component={E} exact/> */}

              <Route path="/ss3" component={DisplayCategory} exact />

            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
};

export default App;
