import axios from "axios";
import { React, useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";
import "../table.css"
import { Button, Modal } from "react-bootstrap";
import UpdateProductForm from "./UpdateProductForm";
const DisplayProduct = () => {

    const [product, setProduct] = useState([]);
    const [gridApi,setGridApi]=useState();
    const [gridColumnApi,detGridColumnApi]=useState(null);
    const onGridReady=(params)=>{
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
    }

    const getAllProductsFromServer = () => {
        axios.get(`${base_url}/productshow`).then(
            (response) => {
                console.log(response);
                setProduct(response.data);
                // console.log("Done");
            },
            (error) => {
                console.log(error);

            }
        );
    };
    const [editedproduct, seteditedProduct] = useState([]);


    const [id, setId] = useState([]);
    useEffect(() => {
        getAllProductsFromServer();
    }, []);

    const updateProduct = (id) => {
        handleShow()
        setId(id);
        console.log(id);
    }
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true); console.log("called ") };
    const handleClose = () => setShow(false)
    return (
        <>
            {/* <Button onClick={handleShow} className="btn btn-success" >Add New Product</Button> */}
            <table>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Stock</th>
                    {/* <th>Category ID</th> */}
                    <th>Description</th>
                    <th>Id</th>
                    <th>Update</th>
                </tr>
                {
                    product && product.length > 0 ?
                        product.map(usr =>
                            <tr>
                                <td>{usr.productId}</td>
                                <td>{usr.productName}</td>
                                <td>{usr.brand}</td>
                                <td>{usr.price}</td>
                                <td>{usr.stock}</td>
                                <td>{usr.description}</td>
                                <td>{usr.category.categoryId}</td>
                                {/* <td><Button></Button></td> */}
                                <td><Button onClick={() => updateProduct(usr.productId)}>Update</Button></td>

                            </tr>
                        ) : "No Product for Display"
                }

            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body><UpdateProductForm props={id}/></Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={handleClose}>Close It</Button></Modal.Footer>
            </Modal>
        </>
    );

};

export default DisplayProduct;