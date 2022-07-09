import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, FormGroup, Input, Form } from "reactstrap";
import base_url from "../../api/bootapi";
import { Modal } from "reactstrap";
// import Example from "./Test";

const DeleteCategoryForm = (e) => {
    const [x, setX] = useState({});
    const [modalIsOpen, setModal] = useState(false)

    const handleForm = (e) => {
        deleteCategory();
        console.log("Hello world");
        e.preventDefault();
    };
    const deleteCategory = () => {
        console.log("going");
        axios.delete(`${base_url}/categorydelete/${x}`).then(
            (response) => { console.log(response) },
            (error) => { console.log(error) }
        );

    };
    // const f1 = () => {
    //     categoryUpdateModal("");
    // }
    const [y, setY] = useState({});
    const f2 = () => {

        console.log(y);
        console.log("bdi");
        
           
      
    }

    return (
        <div>
            {/* <div>
            <Modal isOpen={modalIsOpen} onRequestClose={setModal(false)}>
                <h2>effe</h2>
            </Modal>
        </div> */}
            <Fragment>
                <Form id="form2">
                    {/* <FormGroup>
                        <label>Update by Id</label>
                        <Input
                            placeholder="Enter id to update"
                            id="update"
                            name="update"
                            type="text"
                            onChange={(e) => { setY(e.target.value); }} />

                    </FormGroup> */}
                    {/* <Container>
                        <Button color="success" form="form2" onClick={() => f2()}>Update</Button>
                    </Container> */}
                </Form>
                <Form onSubmit={handleForm} id="form1">
                    <FormGroup>
                        <label for="delete">Delete by Id</label>
                        <Input
                            placeholder="Delete id to delete"
                            id="delete"
                            name="delete"
                            type="text"
                            onChange={(e) => {
                                setX(e.target.value)

                            }}
                        />

                    </FormGroup>
                    <Container>
                        <Button type="submit" form="form1" color="warning" >Delete</Button>
                    </Container>
                </Form>

            </Fragment>
        </div>
    );
};

export default DeleteCategoryForm;