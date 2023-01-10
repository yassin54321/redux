import React, { useState } from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useDispatch } from 'react-redux';
import { handleAdd} from "./../redux/actions";
  const AddNewItem= ({list})=> {
    const [newAction, setNewAction] = useState("");
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
      const newTask={
        id:list.at(-1).id+1,
        action:newAction,
        isDone:false
      }
      e.preventDefault()
      dispatch(handleAdd(newTask))
      setNewAction("");
  }
    return (
      <div>
        <MDBCard className="rounded-3"style={{width:"1000px",backgroundColor: "#6495ED"}}>
              <MDBCardBody className="p-4">
                <h1 className="text-center my-3 pb-3">To Do App</h1>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol className='col' size="12">
                  <h2 style={{marginRight:"20px"}}>Enter a task here</h2>
                    <MDBInput value={newAction} onChange={e=>setNewAction(e.target.value)} id="form1" type="text"/>
                  </MDBCol>
                  <MDBCol className='col' size="12">
                    <MDBBtn id='Btn_submit' type="submit" onClick={handleSubmit}>Save</MDBBtn>
                  </MDBCol>
                </MDBRow>
                </MDBCardBody>
                </MDBCard>
                </div>
    )
  }
export default AddNewItem;