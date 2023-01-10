import { MDBBtn} from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux';
import { handleDelete, handleFinish } from "./../redux/actions";
const ItemCard =({ item })=>{
    
  const dispatch = useDispatch();
    return (  
     <tr style={{height:"40px"}} >
      <th scope="row"> {item.id}</th>
      <td>{item.action}</td>
      <td>{item.stat?"Completed":"Uncompleted"}</td>
      <td className='buttons'>
        <MDBBtn type="submit" color="danger" className="ms-1" onClick={()=>dispatch(handleDelete(item.id))}>
          Delete
        </MDBBtn>
        <MDBBtn type="submit" color="success" className="ms-2" style={item.stat?{backgroundColor:"#CDC034 "}:{backgroundColor:"#B7509F"}} onClick={()=>dispatch(handleFinish(item.id))} >
        {item.stat?"Finished":"Finish"}
        </MDBBtn>
      </td>
    </tr>

    )
  }
  export default ItemCard;
