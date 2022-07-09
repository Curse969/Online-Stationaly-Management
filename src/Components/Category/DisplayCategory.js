import axios from "axios";
import { React, useEffect, useState, useMemo } from "react";
// import { useTable } from "react-table";
import base_url from "../../api/bootapi";
// import { toast } from "react-toastify";
import "../table.css"
import { Button, Modal } from "react-bootstrap";
import UpdateCategoryForm from "./UpdateCategoryForm";
const DisplayCategory = () => {

    const [category, setCategory] = useState([]);
    // const [editedcategory, seteditedcategory] = useState([]);

    const getAllCategoryFromServer = () => {
        axios.get(`${base_url}/categoryshow`).then(
            (response) => {
                console.log(response);
                setCategory(response.data);
                console.log("Done123");
            },
            (error) => {
                console.log(error);

            }
        );
    };

    const [id, setId] = useState([]);
    useEffect(() => {
        getAllCategoryFromServer();
    }, []);

    const updateCategory = (id) => {
        handleShow()
        setId(id);
        console.log(id);
    }
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true); console.log("called category wala") };
    const handleClose = () => setShow(false)
    return (
        <>
            {/* <Button onClick={handleShow} className="btn btn-success" >Add New Category</Button> */}
            <table>
                <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                    <th>Update</th>
                </tr>
                {
                    category && category.length > 0 ?
                        category.map(usr =>
                            <tr>
                                <td>{usr.categoryId}</td>
                                <td>{usr.categoryName}</td>
                                <td><Button onClick={() => updateCategory(usr.categoryId)}>Update</Button></td>

                            </tr>
                        ) : "No Category for Display"
                }

            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body><UpdateCategoryForm props={id}/></Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={handleClose}>Close It</Button></Modal.Footer>
            </Modal>
        </>
    );

};

export default DisplayCategory;