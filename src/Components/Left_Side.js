import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";



const Left = () => {

    return (
        <ListGroup>
            <Link to="/home" tag="a" className="list-group-item list-group-item-action" action>Home</Link>
            <Link to="/productall" tag="a" className="list-group-item list-group-item-action" action>Product Operations</Link>

            <Link to="/productshow" tag="a" className="list-group-item list-group-item-action" action>Show All Products</Link>
            <Link to="/addproduct" tag="a" className="list-group-item list-group-item-action" action>Add Product</Link>
            <Link to="/ss" tag="a" className="list-group-item list-group-item-action" action>Category Operations</Link>
            <Link to="/ss2" tag="a" className="list-group-item list-group-item-action" action>Modifier2</Link>
            <Link to="/ss3" tag="a" className="list-group-item list-group-item-action" action>Display Category</Link>

        </ListGroup>
    );
};

export default Left;