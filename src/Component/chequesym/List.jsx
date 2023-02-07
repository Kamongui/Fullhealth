import React, { useReducer } from 'react';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { useState } from 'react';
import { useChequecontext } from '../../Context/ChequeContext';
import { updateCheque, deleteCheque } from '../../controller/DataController' 

const List = ({ id, Status, Date, Payee, Amount }) => {
  const [date, setDate] = useState(Date)
  const [to, setTo] = useState(Payee)
  const [amount, setAmount] = useState(Amount)
  const [edit, setEdit] = useState(false)
  const [activedel, setActivedel] = useState(false)
  const [status, setStatus] = useState(Status)
  const {data, setData, setPrint} = useChequecontext()

  const doneBtn = async () => {
    const newdata = {"id":id,"Status":"-","Date":date,"Payee":to,"Amount":amount}
    try{
      await updateCheque(id, newdata)
      const newChequearray = [...data.filter(data=>data.id !==id), newdata]
      //sort function not yet finish
      const finalarray = newChequearray.sort((a,b) => (a.id - b.id))
      setData(finalarray)
      setEdit(false)
    } catch (err) {
      console.log(err)
    }
  }
  const editBtn = () => {
    setEdit(true)
  }
  const cancelBtn = () => {
    setEdit(false)
  }

  // problems occurs
  const deleteBtn = async () =>{
    const newdata = {"id":id,"Status":"Paid","Date":date,"Payee":to,"Amount":amount}
    try{
      await updateCheque(id, newdata)
      const newChequearray = [...data.filter(data=>data.id !==id), newdata]
      //sort function not yet finish
      const finalarray = newChequearray.sort((a,b) => (a.id - b.id))
      setData(finalarray)
      setActivedel(false)
    } catch (err) {
      console.log(err)
    }
    // code below used for del data from server forever
    // try{
    //   await deleteCheque(id)
    //   const newChequearray = data.filter(data=>data.id !==id)
    //   setData(newChequearray)
    // } catch (err) {
    //   console.log(err)
    // }
  }
  const previewBtn = () => {
    setPrint(id)
  }

  return (
    //Edit = true, can edit info of the cheque
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">
        {status}
      </TableCell>
      <TableCell align="center">
        {(!edit)?
          date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        }
      </TableCell>
      <TableCell align="center">
      {(!edit)?
          to:
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        }
      </TableCell>
      <TableCell align="center">
      {(!edit)?
          amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        }
      </TableCell>
      <TableCell align="center">
        {(!edit)?
          <button onClick={editBtn}>Edit</button>:
          <div>
            <button onClick={doneBtn}>Done</button>
            <button onClick={cancelBtn}>Cancel</button>
          </div>}
      </TableCell>
      <TableCell align="center">
        {/* problem occour */}
      <input type="checkbox" onClick={() => setActivedel(!activedel)}/><button disabled={!activedel} onClick={deleteBtn}>Delete</button>
      </TableCell>
      <TableCell align="center">
        <button>Pre-view</button>
      </TableCell>
    </TableRow>
  );
}

export default List;
