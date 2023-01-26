import React from 'react';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { useState } from 'react';
import { useChequecontext } from '../../Context/ChequeContext';
import { updateCheque, deleteCheque } from '../../controller/ChequeController' 

 const List = ({ id, Date, To, Amount }) => {
  const {data, setData, date, setDate, to, setTo, amount, setAmount, setPrint} = useChequecontext()
  const [edit, setEdit] = useState(false)
  const [dis, setDis] = useState(true)
  
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
      <TableCell align="right">
        {(!edit)?
          Date:
          <input type="date" value={(date === '')?data[data.findIndex(item=>item.id === id)].Date:date} onChange={(e) => setDate(e.target.value)} />
        }
      </TableCell>
      <TableCell align="right">
      {(!edit)?
          To:
          <input type="text" value={(to === '')?data[data.findIndex(item=>item.id === id)].To:to} onChange={(e) => setTo(e.target.value)} />
        }
      </TableCell>
      <TableCell align="right">
      {(!edit)?
          Amount:
          <input type="text" value={(amount === '')?data[data.findIndex(item=>item.id === id)].Amount:amount} onChange={(e) => setAmount(e.target.value)} />
        }
      </TableCell>
      <TableCell align="right">
        {(!edit)?
          <button onClick={()=>setEdit(true)}>Edit</button>:
          <button onClick={doneBtn}>Done</button>}
      </TableCell>
      <TableCell align="right">
        <input type="checkbox"/>
      </TableCell>
      <TableCell align="right">
        <button>Delete</button>
      </TableCell>
      <TableCell align="right">
        <button>Pre-view</button>
      </TableCell>
    </TableRow>
  );
}

export default List;
