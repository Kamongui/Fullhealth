import React, { useEffect } from 'react'
import { useChequecontext } from '../Context/ChequeContext'
import {Table} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableContainer} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';
import {Paper} from '@mui/material';

const Supplier = () => {
  const { supplierdata, setSupplierdata } = useChequecontext()

  return (
    <div>
      Testing
      {/* Supplier List

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Payee</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Pre-view</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((info) => (
              <List key={info.id} {...info}  />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {supplierdata.map(data => 
        <div key={data.supplierId}>
          {data.SupplierName}
        </div>
      )} */}
    </div>
  )
}

export default Supplier
