import {MDBCard,MDBCardBody,MDBCol,MDBContainer,MDBRow,MDBTable,MDBTableBody,MDBTableHead,} from "mdb-react-ui-kit";
import AddNewItem from './AddNewItem';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
const ItemList = ()=> {
  const itemList = useSelector((state) => state.todos);
    return (
      <div>
        <section className="vh-100">
      <MDBContainer className="py-5 h-100" style={{width:"1000px",backgroundColor: "#6495ED" ,opacity: "0.6"}}>
        <MDBRow className="d-flex justify-content-center align-items-center" style={{width:"1000px",backgroundColor: "#6495ED"}}>
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
              <AddNewItem list={itemList}/>
                <MDBTable className="mb-4"style={{width:"1000px"}}>
                  <MDBTableHead style={{height:"30px"}} >
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                  {itemList.map((task,i)=><ItemCard item={task} key={i}/>)}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
      </div>
    )
  }

  export default ItemList;
