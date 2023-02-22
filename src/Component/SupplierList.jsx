import React from 'react'
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';

const SupplierList = ({ id, SupplierName }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">
        {SupplierName}
      </TableCell>
      <TableCell align="center">
      Ac No
      </TableCell>
      <TableCell align="center">
        Product
      </TableCell>
    </TableRow>
  )
}

export default SupplierList
