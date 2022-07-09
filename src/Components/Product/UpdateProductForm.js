import React, { Fragment, useState } from "react";
import { FormGroup, Input, Container } from "reactstrap";
import { Form, Button } from "react-bootstrap"
import axios from "axios";
import base_url from "../../api/bootapi";

const UpdateProductForm = ({ props }) => {
    const [editedproduct, seteditedProduct] = useState([]);

    const handleForm = (e) => {
        updateProduct(editedproduct);
        console.log(editedproduct);
        e.preventDefault();
    };
    const updateProduct = (data) => {
        axios.post(`${base_url}/productupdate/${props}`, data).then(
            (response) => { console.log(response) },
            (error) => { console.log(error) }
        );
    };

    return (
        <div>
            <Fragment>
                <Form id="form3">
                    <FormGroup>
                        <label for="productname">Product Name</label>
                        <Input
                            placeholder="Enter Product name"
                            id="productname"
                            name="productname"
                            type="text"
                            onChange={(e) => {
                                seteditedProduct({ ...editedproduct, productName: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="brand">Brand</label>
                        <Input
                            placeholder="Enter Brand"
                            id="brand"
                            name="brand"
                            type="text"
                            onChange={(e) => {
                                seteditedProduct({ ...editedproduct, brand: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="stock">Stock</label>
                        <Input
                            placeholder="Enter Stock"
                            id="stock"
                            name="stock"
                            type="text"
                            onChange={(e) => {
                                seteditedProduct({ ...editedproduct, stock: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="Description">Price</label>
                        <Input
                            placeholder="Enter Price"
                            id="price"
                            name="price"
                            type="text"
                            onChange={(e) => {
                                seteditedProduct({ ...editedproduct, price: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="description">Description</label>
                        <Input
                            placeholder="Enter Description"
                            id="description"
                            name="Description"
                            type="textarea"
                            onChange={(e) => {
                                seteditedProduct({ ...editedproduct, description: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label for="category_id">category_id</label>
                        <Input
                            placeholder="Enter category id"
                            id="category_id"
                            name="category_id"
                            type="textarea"
                            onChange={(e) => {
                                seteditedProduct({ ...editedproduct, categoryId: e.target.value })
                            }}
                        />
                    </FormGroup>
                    <Container className="text-center">
                        <Button type="button" color="success" form="form3" onClick={handleForm}>Update Product</Button>
                        <Button color="warning" type="reset" style={{ margin: 20 }}>Clear</Button>

                    </Container>
                </Form>
            </Fragment>

        </div>
    );
}

export default UpdateProductForm;