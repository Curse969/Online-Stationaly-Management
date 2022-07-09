import DisplayOrder from "./DisplayPurchases";
import AddPurchases from "./AddPurchases";
import "../../xyz.css";
import { Button, Container, Modal } from "reactstrap";
import DisplayPurchases from "./DisplayPurchases";

const Purchases=({item})=>{
    const [show,setShow]=useState(false);
    const handleShow=()=>{setShow(true);console.log("called")};
    const handleClose=()=> setShow(false)
    return(
        <div>
            <Container className="container-fluid">
                <Row>
                    <Col md={5}>
                        <DisplayPurchases/>
                        <div className ='mt-5 d-flex justify-content-end' style={{width:550}}>
                            <Button onClick={handleShow} className="btn btn-success">Add New Purchase</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*</Router> */}
            {/* <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body><AddPurchases/></Modal.Body>
            <Modal.Footer>Button variant="secondary" onClick={handleClose}>Close It</Button></Modal.Footer>
    </Modal>*/}

        </div>
    );
};
export default Purchases;