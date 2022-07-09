import axios from "axios";
import React, { Fragment, useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import base_url from "../../api/bootapi";
const AddCategory = () => {

    const [category, setCategory] = useState({});

    const handleForm = (e) => {
        postDataOnServer(category);
        console.log(category);
        e.preventDefault();
    };
    const postDataOnServer = (data) => {
        axios.post(`${base_url}/categorycreate`, data).then(
            (response) => { console.log(response) },
            (error) => { console.log(error) }
        );
    };
    return (
        <Fragment>
            <Form onSubmit={handleForm}>
          
                <FormGroup>
                    <label for="categoryname">Category Name</label>
                    <Input
                        placeholder="Enter category name"
                        id="categoryname"
                        name="categoryname"
                        type="text"
                        onChange={(e) => {
                            setCategory({ ...category, categoryName: e.target.value })
                        }}
                    />
                </FormGroup>
               
             
                <Container className="text-center">
                    <Button type="submit" color="success">Add category</Button>
                    <Button color="warning" type="reset" style={{ margin: 20 }}>Clear</Button>

                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCategory;