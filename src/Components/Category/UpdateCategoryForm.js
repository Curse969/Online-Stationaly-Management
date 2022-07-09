import React, { Fragment, useState } from "react";
import { FormGroup, Input, Container } from "reactstrap";
import { Form, Button } from "react-bootstrap"
import axios from "axios";
import base_url from "../../api/bootapi";

const UpdateCategoryForm = ({ props }) => {
    const [editedcategory, seteditedCategory] = useState([]);

    const handleForm = (e) => {
        updateCategory(editedcategory);
        console.log(editedcategory);
        e.preventDefault();
    };
    const updateCategory = (data) => {
        axios.post(`${base_url}/categoryupdate/${props}`, data).then(
            (response) => { console.log(response) },
            (error) => { console.log(error) }
        );
    };

    return (
        <div>
            <Fragment>
                <Form id="form3">
                    <FormGroup>
                        <label for="categoryname">Category Name</label>
                        <Input
                            placeholder="Enter Category name"
                            id="categoryname"
                            name="categoryname"
                            type="text"
                            onChange={(e) => {
                                seteditedCategory({ ...editedcategory, categoryName: e.target.value })
                            }}
                        />
                    </FormGroup>
                    
                  
                    <Container className="text-center">
                        <Button type="button" color="success" form="form3" onClick={handleForm}>Update Category</Button>
                        <Button color="warning" type="reset" style={{ margin: 20 }}>Clear</Button>

                    </Container>
                </Form>
            </Fragment>

        </div>
    );
}

export default UpdateCategoryForm;