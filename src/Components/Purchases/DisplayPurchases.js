import { Modal } from "reactstrap"


const [colDefs,setColDefs]=useState([
    {headerName:'Id',field:'purchaseId'},
    {headerName:'Purchase Date', field:'purchaseDate'},
    {headerName:'Bought From', field: 'merchantId'},
    {headerName:'purchased By',field:'employeeId'},
    {
        headerName:'Update', field:'update',cellRenderFramework: function {params}{
            return <button type="button" class="btn btn-primary" onClick={()=>updatePurchases(params.data)}> Update </button>
        }
    },
    {
        headerName:'Delete', field:'delete',cellRenderFramework: function {params}{
            return <button type="button" class="btn btn-primary" onClick={()=>deletePurchases(params.data.purchaseId)}> Delete </button>
        }
    }
]);
return(
    <>
<div className="ag-theme-alpine mt-5" style={{height:500,width:1000}}>
    <AgGridReact
    defaultColDef={{sortable:true, filter:true,resizable:true}}
    pagination={true}
    rowData={purchase}
    columnDefs={colDefs}
    rowSelection={'single'}
    onGridReady={onGridReady}
    >

    </AgGridReact>
    {/* <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body><UpdateOrderFrom item={toeditorder}/></Modal.Body>
    <Modal.Footer><Button variant="secondary" onClick={handleClose}>Close It</Button></Modal.Footer>
</Modal>*/}
</div>
    </>
);