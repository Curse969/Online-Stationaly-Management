import axios from "axios";
import React, { Fragment, useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import base_url from "../../api/bootapi";
const AddProduct = () => {

    const [product, setProduct] = useState({});

    const handleForm = (e) => {
        postDataOnServer(product);
        // console.log(product);
        e.preventDefault();
    };
    const postDataOnServer = (data) => {
        axios.post(`${base_url}/productcreate`, data).then(
            (response) => { console.log(response) },
            (error) => { console.log(error) }
        );
    };
    return (
        <Fragment>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="productname">Product Name</label>
                    <Input
                        placeholder="Enter Product name"
                        id="productname"
                        name="productname"
                        type="text"
                        onChange={(e) => {
                            setProduct({ ...product, productName: e.target.value })
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
                            setProduct({ ...product, brand: e.target.value })
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
                            setProduct({ ...product, stock: e.target.value })
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
                            setProduct({ ...product, price: e.target.value })
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
                            setProduct({ ...product, description: e.target.value })
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
                            setProduct({ ...product, categoryId: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Product</Button>
                    <Button color="warning" type="reset" style={{ margin: 20 }}>Clear</Button>

                </Container>
            </Form>
        </Fragment>
    )
}
export default AddProduct;