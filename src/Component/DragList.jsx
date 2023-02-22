import React from 'react'
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';

const DragList = ({ id, DragName, Price }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">
        {DragName}
      </TableCell>
      <TableCell align="center">
        {Price}
      </TableCell>
      <TableCell align="center">
        XXX
      </TableCell>
    </TableRow>
  )
}

export default DragList