import React from 'react';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { useState } from 'react';
import { useChequecontext } from '../../Context/ChequeContext';
import { updateCheque, deleteCheque } from '../../controller/DataController' 

 const List = ({ id, Date, Payee, Amount }) => {
  const {data, setData, date, setDate, to, setTo, amount, setAmount, setPrint} = useChequecontext()
  const [edit, setEdit] = useState(false)
  const [activedel, setActivedel] = useState(false)
  
  const doneBtn = async () => {
    const newdata = {"id":id,"Date":date,"To":(to === '')?To:to,"Amount":amount}
    try{
      await updateCheque(id, newdata)
      const newChequearray = [...data.filter(data=>data.id !==id), newdata]
      //sort function not yet finish
      const finalarray = newChequearray.sort((a,b) => (a.id > b.id)?1:0)
      setData(finalarray)
      setDate('')
      setTo('')
      setAmount('')
      setEdit(false)
    } catch (err) {
      console.log(err)
    }
  }
  const editBtn = () => {
    setEdit(true)
    setDate(Date)
    setTo(Payee)
    setAmount(Amount)
  }
  const cancelBtn = () => {
    setEdit(false)
  }
  const deleteBtn = async () =>{
    try{
      await deleteCheque(id)
      const newChequearray = data.filter(data=>data.id !==id)
      setData(newChequearray)
    } catch (err) {
      console.log(err)
    }
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
        Status
        {/* {(!edit)?
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        } */}
      </TableCell>
      <TableCell align="center">
        {(!edit)?
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        }
      </TableCell>
      <TableCell align="center">
      {(!edit)?
          Payee:
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        }
      </TableCell>
      <TableCell align="center">
      {(!edit)?
          Amount:
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
      <input type="checkbox" onClick={() => setActivedel(!activedel)}/><button disabled={!activedel} onClick={deleteBtn}>Delete</button>
      </TableCell>
      <TableCell align="center">
        <button>Pre-view</button>
      </TableCell>
    </TableRow>
  );
}

export default List;
